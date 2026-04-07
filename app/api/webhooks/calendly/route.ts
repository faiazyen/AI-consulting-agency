/**
 * Calendly Webhook Handler
 *
 * Flow:
 *  1. Calendly fires POST to this route when an event is scheduled
 *  2. We verify the signature (HMAC-SHA256)
 *  3. Create a HubSpot CRM contact with the invitee's details
 *  4. Create a Stripe Customer (no charge yet — payment happens during/after call)
 *  5. The Maverick team then sends a Stripe payment link post-call via the admin dashboard
 *
 * Required env vars:
 *   CALENDLY_WEBHOOK_SIGNING_KEY   — from Calendly Developer settings
 *   HUBSPOT_ACCESS_TOKEN           — Private App token (CRM scopes)
 *   STRIPE_SECRET_KEY              — Stripe secret key
 *   STRIPE_INSTALLATION_PRICE_ID   — Stripe Price ID for one-time setup fee
 *   STRIPE_MONTHLY_PRICE_ID        — Stripe Price ID for recurring subscription
 */

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createHmac } from "crypto";

// ── Stripe client (lazy init so build doesn't fail without key) ──────────────
function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not configured");
  return new Stripe(key, { apiVersion: "2025-03-31.basil" });
}

// ── Signature verification ────────────────────────────────────────────────────
async function verifyCalendlySignature(
  req: NextRequest,
  body: string
): Promise<boolean> {
  const signingKey = process.env.CALENDLY_WEBHOOK_SIGNING_KEY;
  if (!signingKey) {
    console.warn("CALENDLY_WEBHOOK_SIGNING_KEY not set — skipping verification");
    return true; // allow in dev; enforce in prod
  }

  const signature = req.headers.get("Calendly-Webhook-Signature");
  if (!signature) return false;

  // Calendly sends: "t=<timestamp>,v1=<hex-signature>"
  const parts = Object.fromEntries(
    signature.split(",").map((part) => part.split("=") as [string, string])
  );
  const timestamp = parts["t"];
  const receivedSig = parts["v1"];

  const expectedSig = createHmac("sha256", signingKey)
    .update(`${timestamp}.${body}`)
    .digest("hex");

  return expectedSig === receivedSig;
}

// ── HubSpot: create or update contact ────────────────────────────────────────
async function upsertHubSpotContact(data: {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  scheduledTime: string;
  eventName: string;
}) {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!token) {
    console.warn("HUBSPOT_ACCESS_TOKEN not set — skipping CRM sync");
    return null;
  }

  const payload = {
    properties: {
      email: data.email,
      firstname: data.firstName,
      lastname: data.lastName,
      phone: data.phone ?? "",
      // Custom properties you should create in HubSpot:
      consultation_booked: "true",
      consultation_date: data.scheduledTime,
      lead_source: "Website — Calendly",
      lifecycle_stage: "lead",
    },
  };

  // Search first to avoid duplicates
  const searchRes = await fetch(
    "https://api.hubapi.com/crm/v3/objects/contacts/search",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filterGroups: [
          {
            filters: [{ propertyName: "email", operator: "EQ", value: data.email }],
          },
        ],
      }),
    }
  );

  const searchData = await searchRes.json();
  const existing = searchData.results?.[0];

  if (existing) {
    // Update existing contact
    const res = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/${existing.id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    return res.json();
  }

  // Create new contact
  const res = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return res.json();
}

// ── Stripe: create customer record (no charge at booking time) ────────────────
async function createStripeCustomer(data: {
  email: string;
  name: string;
  phone?: string;
  scheduledTime: string;
}) {
  const stripe = getStripe();

  // Check if customer already exists
  const existing = await stripe.customers.list({ email: data.email, limit: 1 });
  if (existing.data.length > 0) {
    // Update metadata on existing customer
    const updated = await stripe.customers.update(existing.data[0].id, {
      metadata: {
        consultation_date: data.scheduledTime,
        source: "calendly_booking",
      },
    });
    return updated;
  }

  // Create new Stripe customer — no payment yet
  const customer = await stripe.customers.create({
    email: data.email,
    name: data.name,
    phone: data.phone,
    metadata: {
      consultation_date: data.scheduledTime,
      source: "calendly_booking",
    },
  });

  return customer;
}

// ── Route handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  let body: string;
  try {
    body = await req.text();
  } catch {
    return NextResponse.json({ error: "Cannot read body" }, { status: 400 });
  }

  // Verify signature
  const valid = await verifyCalendlySignature(req, body);
  if (!valid) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Only handle event.invitee.created (booking confirmed)
  const event = payload["event"] as string | undefined;
  if (event !== "invitee.created") {
    return NextResponse.json({ received: true, skipped: true });
  }

  try {
    const payloadData = payload["payload"] as Record<string, unknown>;
    const invitee = payloadData["invitee"] as Record<string, unknown>;
    const scheduledEvent = payloadData["scheduled_event"] as Record<string, unknown>;

    const email = invitee["email"] as string;
    const name = (invitee["name"] as string) ?? "Unknown";
    const phone = (invitee["text_reminder_number"] as string | undefined);
    const scheduledTime = (scheduledEvent["start_time"] as string) ?? "";
    const eventName = (scheduledEvent["name"] as string) ?? "Consultation";

    const [firstName, ...rest] = name.split(" ");
    const lastName = rest.join(" ") || "";

    // Run CRM and Stripe in parallel
    const [crmResult, stripeCustomer] = await Promise.allSettled([
      upsertHubSpotContact({ email, firstName, lastName, phone, scheduledTime, eventName }),
      createStripeCustomer({ email, name, phone, scheduledTime }),
    ]);

    console.log("Calendly webhook processed:", {
      email,
      scheduledTime,
      crm: crmResult.status,
      stripe: stripeCustomer.status,
    });

    return NextResponse.json({
      received: true,
      crm: crmResult.status,
      stripe: stripeCustomer.status,
    });
  } catch (err) {
    console.error("Webhook processing error:", err);
    return NextResponse.json(
      { error: "Processing failed" },
      { status: 500 }
    );
  }
}
