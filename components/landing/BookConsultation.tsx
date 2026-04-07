"use client";

import { useState, useMemo, useCallback } from "react";
import { format, isBefore, startOfDay, isWeekend } from "date-fns";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import {
  CalendarDays,
  Phone,
  Bot,
  CreditCard,
  Rocket,
  CircleCheck,
  Clock,
  CheckCircle2,
} from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RevealOnScroll } from "./RevealOnScroll";
import { cn } from "@/lib/utils";

// ── Constants ───────────────────────────────────────────────────────────────

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/maverickintelligence";

const PROCESS_STEPS = [
  {
    icon: CalendarDays,
    step: "01",
    title: "Book a Call",
    desc: "Pick a 30-minute discovery slot using the calendar.",
  },
  {
    icon: Phone,
    step: "02",
    title: "Discovery Call",
    desc: "We learn your business goals, workflows, and pain points.",
  },
  {
    icon: Bot,
    step: "03",
    title: "Custom AI Build",
    desc: "We design and implement your personalised AI agent stack.",
  },
  {
    icon: CreditCard,
    step: "04",
    title: "Setup & Payment",
    desc: "One-time installation fee, then choose your monthly plan.",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Go Live",
    desc: "Your AI agents start automating calls, leads, and workflows.",
  },
];

const PACKAGES = [
  {
    name: "Starter",
    price: "$997",
    setup: "$497 setup",
    features: ["1 AI agent", "Call automation", "Basic CRM sync"],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$1,997",
    setup: "$997 setup",
    features: ["3 AI agents", "Full workflow automation", "CRM + payments"],
    highlight: true,
  },
  {
    name: "Scale",
    price: "Custom",
    setup: "Custom setup",
    features: ["Unlimited agents", "Dedicated support", "White-glove onboarding"],
    highlight: false,
  },
];

// Generate time slots 9 AM – 5:30 PM in 30-min increments
const TIME_SLOTS = Array.from({ length: 18 }, (_, i) => {
  const hour = Math.floor(i / 2) + 9;
  const minute = i % 2 === 0 ? "00" : "30";
  return `${hour.toString().padStart(2, "0")}:${minute}`;
});

// ── Subcomponents ───────────────────────────────────────────────────────────

function StepList() {
  return (
    <div className="space-y-5">
      {PROCESS_STEPS.map(({ icon: Icon, step, title, desc }) => (
        <div key={step} className="flex items-start gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[var(--mq-border)] bg-[var(--mq-glass-light)]">
            <Icon className="size-4 text-[var(--mq-accent)]" />
          </div>
          <div>
            <p className="text-xs font-mono tracking-widest text-[var(--mq-accent)]/70 mb-0.5">
              STEP {step}
            </p>
            <p className="text-sm font-semibold text-[var(--mq-text)]">{title}</p>
            <p className="text-xs text-[var(--mq-text-muted)] leading-relaxed">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function PackageCard({
  pkg,
}: {
  pkg: (typeof PACKAGES)[number];
}) {
  return (
    <div
      className={cn(
        "rounded-xl border p-4 transition-all duration-200",
        pkg.highlight
          ? "border-[var(--mq-accent)]/40 bg-[var(--mq-accent)]/5 ring-1 ring-[var(--mq-accent)]/20"
          : "border-[var(--mq-border)] bg-[var(--mq-glass-light)]"
      )}
    >
      {pkg.highlight && (
        <span className="inline-block rounded-full bg-[var(--mq-accent)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white mb-2">
          Most Popular
        </span>
      )}
      <div className="flex items-baseline justify-between mb-1">
        <p className="text-sm font-bold text-[var(--mq-text)]">{pkg.name}</p>
        <p className="text-lg font-bold text-[var(--mq-accent)]">{pkg.price}<span className="text-xs font-normal text-[var(--mq-text-muted)]">/mo</span></p>
      </div>
      <p className="text-xs text-[var(--mq-text-muted)] mb-3">+ {pkg.setup}</p>
      <ul className="space-y-1.5">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs text-[var(--mq-text-secondary)]">
            <CheckCircle2 className="size-3.5 text-[var(--mq-accent)] shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────

export function BookConsultation() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);

  // Listen for Calendly booking confirmation (fires when someone completes booking in the iframe)
  useCalendlyEventListener({
    onEventScheduled: () => setBooked(true),
  });

  // Build Calendly URL — pre-selects the chosen date when user picks one
  const calendlyUrl = useMemo(() => {
    if (!selectedDate) return CALENDLY_URL;
    const month = format(selectedDate, "yyyy-MM");
    const date = format(selectedDate, "yyyy-MM-dd");
    return `${CALENDLY_URL}?month=${month}&date=${date}`;
  }, [selectedDate]);

  // Disable past dates and weekends
  const isDisabled = useCallback(
    (date: Date) =>
      isBefore(date, startOfDay(new Date())) || isWeekend(date),
    []
  );

  return (
    <section id="book" className="relative py-20 md:py-32 overflow-hidden">
      {/* Ambient blob */}
      <div
        className="ambient-blob pointer-events-none absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2"
        style={{ background: "var(--mq-accent)", opacity: 0.04 }}
      />

      <div className="container relative z-10 mx-auto max-w-[1200px] px-6">
        {/* Section header */}
        <RevealOnScroll>
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-mono tracking-[0.2em] uppercase text-[var(--mq-accent)]/80">
              Get Started
            </p>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Book a Consultation
            </h2>
            <p className="mx-auto max-w-md text-[var(--mq-text-muted)]">
              One 30-minute call is all it takes. We&apos;ll map your business to
              an AI solution, agree on a plan, and get to work.
            </p>
          </div>
        </RevealOnScroll>

        {/* Success state */}
        {booked && (
          <RevealOnScroll>
            <div className="mb-10 mx-auto max-w-lg rounded-2xl border border-green-500/30 bg-green-500/5 p-8 text-center">
              <CircleCheck className="mx-auto mb-4 size-12 text-green-500" />
              <h3 className="mb-2 text-xl font-bold">You&apos;re booked!</h3>
              <p className="text-sm text-[var(--mq-text-muted)]">
                Check your email for the calendar invite. We&apos;ll be in touch
                before the call with a brief questionnaire to make the most of
                our time together.
              </p>
            </div>
          </RevealOnScroll>
        )}

        {/* Main grid */}
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          {/* ── Left panel: steps + packages ── */}
          <RevealOnScroll className="space-y-8">
            {/* Process steps */}
            <div className="rounded-2xl border border-[var(--mq-border)] bg-[var(--mq-glass-light)] p-6 backdrop-blur-md">
              <p className="mb-6 text-xs font-mono tracking-[0.15em] uppercase text-[var(--mq-text-muted)]">
                How It Works
              </p>
              <StepList />
            </div>

            {/* Packages */}
            <div className="rounded-2xl border border-[var(--mq-border)] bg-[var(--mq-glass-light)] p-6 backdrop-blur-md">
              <p className="mb-4 text-xs font-mono tracking-[0.15em] uppercase text-[var(--mq-text-muted)]">
                Plans (discussed on call)
              </p>
              <div className="space-y-3">
                {PACKAGES.map((pkg) => (
                  <PackageCard key={pkg.name} pkg={pkg} />
                ))}
              </div>
              <p className="mt-4 text-center text-xs text-[var(--mq-text-muted)]">
                Exact pricing confirmed on the call based on your needs.
              </p>
            </div>
          </RevealOnScroll>

          {/* ── Right panel: calendar picker + Calendly embed ── */}
          <RevealOnScroll className="space-y-6">
            {/* Date + time picker */}
            <div className="rounded-2xl border border-[var(--mq-border)] bg-[var(--mq-glass-light)] backdrop-blur-md overflow-hidden">
              <div className="border-b border-[var(--mq-border)] px-6 py-4">
                <p className="text-sm font-semibold text-[var(--mq-text)]">
                  Select a date &amp; time
                </p>
                <p className="text-xs text-[var(--mq-text-muted)] mt-0.5">
                  Your selection updates the booking calendar below automatically
                </p>
              </div>

              <div className="flex flex-col md:flex-row">
                {/* Calendar */}
                <div className="p-6">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(d) => {
                      setSelectedDate(d);
                      setSelectedTime(null);
                    }}
                    defaultMonth={selectedDate}
                    disabled={isDisabled}
                    showOutsideDays={false}
                    className="bg-transparent p-0 [--cell-size:--spacing(10)]"
                    formatters={{
                      formatWeekdayName: (d) =>
                        d.toLocaleString("en-US", { weekday: "short" }),
                    }}
                  />
                </div>

                {/* Time slots */}
                <div className="flex flex-col border-t md:border-t-0 md:border-l border-[var(--mq-border)] w-full md:w-44 max-md:h-56">
                  <div className="flex items-center gap-2 px-4 pt-4 pb-2">
                    <Clock className="size-3.5 text-[var(--mq-accent)]" />
                    <span className="text-xs font-medium text-[var(--mq-text-muted)]">
                      Available times
                    </span>
                  </div>
                  <ScrollArea className="flex-1">
                    <div className="flex flex-col gap-1.5 p-3">
                      {TIME_SLOTS.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={cn(
                            "w-full rounded-lg border px-3 py-2 text-xs font-medium transition-all duration-150",
                            selectedTime === time
                              ? "border-[var(--mq-accent)] bg-[var(--mq-accent)] text-white shadow-[0_0_12px_rgba(59,91,219,0.4)]"
                              : "border-[var(--mq-border)] bg-transparent text-[var(--mq-text-muted)] hover:border-[var(--mq-accent)]/40 hover:text-[var(--mq-text)]"
                          )}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </div>

              {/* Selection summary */}
              <div className="flex flex-col gap-4 border-t border-[var(--mq-border)] px-6 py-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-2 text-sm">
                  {selectedDate && selectedTime ? (
                    <>
                      <CircleCheck className="size-4 text-green-500 shrink-0" />
                      <span className="text-[var(--mq-text-muted)]">
                        Selected:{" "}
                        <span className="font-semibold text-[var(--mq-text)]">
                          {format(selectedDate, "EEEE, MMMM d")}
                        </span>{" "}
                        at{" "}
                        <span className="font-semibold text-[var(--mq-text)]">
                          {selectedTime}
                        </span>
                      </span>
                    </>
                  ) : (
                    <span className="text-[var(--mq-text-muted)]">
                      Pick a date and time to continue
                    </span>
                  )}
                </div>
                <p className="text-xs text-[var(--mq-text-muted)] sm:ml-auto">
                  ↓ Confirm below in the Calendly widget
                </p>
              </div>
            </div>

            {/* Calendly inline embed — URL updates when date is selected */}
            <div className="rounded-2xl border border-[var(--mq-border)] overflow-hidden">
              <div className="border-b border-[var(--mq-border)] px-6 py-4 bg-[var(--mq-glass-light)]">
                <p className="text-sm font-semibold text-[var(--mq-text)]">
                  Confirm your booking
                </p>
                <p className="text-xs text-[var(--mq-text-muted)] mt-0.5">
                  Your selected date is pre-loaded — pick a confirmed slot and fill in your details
                </p>
              </div>
              <InlineWidget
                key={calendlyUrl}
                url={calendlyUrl}
                styles={{ height: "660px", width: "100%" }}
                pageSettings={{
                  backgroundColor: "020203",
                  primaryColor: "3B5BDB",
                  textColor: "EDEDEF",
                  hideEventTypeDetails: false,
                  hideGdprBanner: true,
                }}
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
