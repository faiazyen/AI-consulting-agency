"use client";

import { useState } from "react";
import { Phone, MessageSquare, Workflow, Mic, Clock, BarChart3, Users, Brain, Zap, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "voice", label: "AI Receptionist" },
  { id: "chat", label: "AI Chat Assistant" },
  { id: "workflow", label: "Workflow Automations" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const voiceFeatures = [
  { icon: MessageSquare, title: "Natural Conversations", desc: "Understands context and tone, providing human-like voice responses instantly." },
  { icon: Users, title: "Smart Lead Routing", desc: "Identifies caller needs and directs them to the right team automatically." },
  { icon: BarChart3, title: "Real-Time Insights", desc: "Logs every call, sentiment, and action directly into your dashboard for review." },
  { icon: Clock, title: "Always Available", desc: "Handles inbound inquiries 24/7 with consistent quality and zero downtime." },
];

const chatFeatures = [
  { icon: MessageSquare, title: "Human-Like Replies", desc: "Responds naturally across channels while maintaining your brand's tone." },
  { icon: Brain, title: "Smart Knowledge Base", desc: "Uses trained data to answer questions instantly and reduce support workload." },
  { icon: Zap, title: "Context Retention", desc: "Remembers interactions to create smooth, continuous customer experiences." },
  { icon: BarChart3, title: "Performance Tracking", desc: "Measures chat volume, response rate, and satisfaction inside one unified dashboard." },
];

const workflowFeatures = [
  { icon: Zap, title: "Seamless Integrations", desc: "Connects CRMs, forms, and apps to automate repetitive business operations." },
  { icon: Workflow, title: "Custom Triggers", desc: "Executes precise actions automatically based on data changes or user activity." },
  { icon: Clock, title: "Time Optimization", desc: "Replaces hours of manual tasks with intelligent end-to-end workflow logic." },
  { icon: LayoutDashboard, title: "Unified Dashboard", desc: "Monitors automation status, success rates, and ROI metrics in one place." },
];

const featureMap: Record<TabId, typeof voiceFeatures> = {
  voice: voiceFeatures,
  chat: chatFeatures,
  workflow: workflowFeatures,
};

function VoiceDemo() {
  return (
    <div className="flex flex-col gap-3 rounded-[24px] bg-[var(--aic-card)] p-6">
      <div className="mb-2 text-sm font-medium text-[var(--aic-text-secondary)]">
        Verdana Wellness Spa
      </div>
      <div className="flex flex-col gap-3">
        {/* Agent message */}
        <div className="self-start rounded-2xl rounded-bl-md bg-[var(--aic-elevated)] px-4 py-3 text-sm text-[var(--aic-text-secondary)]">
          Hi there! This is Violet from Verdana Wellness Spa. How can I help you today?
        </div>
        {/* User message */}
        <div className="self-end rounded-2xl rounded-br-md bg-[var(--aic-accent)] px-4 py-3 text-sm text-white">
          Hey, I&apos;d like to confirm my appointment for tomorrow.
        </div>
        {/* Agent message */}
        <div className="self-start rounded-2xl rounded-bl-md bg-[var(--aic-elevated)] px-4 py-3 text-sm text-[var(--aic-text-secondary)]">
          Of course, Jason! You&apos;re confirmed for tomorrow at 10 AM. See you then!
        </div>
      </div>
      {/* Audio indicator */}
      <div className="mt-2 flex items-center gap-3 rounded-full bg-[var(--aic-elevated)] px-4 py-2">
        <Mic className="size-4 text-[var(--aic-accent)]" />
        <span className="text-xs text-[var(--aic-text-muted)]">AIC Voice 00:47</span>
      </div>
      {/* Confirmation badge */}
      <div className="rounded-xl bg-[var(--aic-accent)]/10 px-4 py-2 text-center text-sm font-medium text-[var(--aic-accent)]">
        Appointment confirmed — Tomorrow, 10 AM
      </div>
    </div>
  );
}

function ChatDemo() {
  return (
    <div className="flex flex-col gap-3 rounded-[24px] bg-[var(--aic-card)] p-6">
      <div className="mb-2 text-sm font-medium text-[var(--aic-text-secondary)]">
        Ironclad Constructions
      </div>
      <div className="flex flex-col gap-3">
        <div className="self-start rounded-2xl rounded-bl-md bg-[var(--aic-elevated)] px-4 py-3 text-sm text-[var(--aic-text-secondary)]">
          Hey there 👋 I&apos;m Aria from Ironclad Constructions. How can I help you today?
        </div>
        <div className="self-start rounded-2xl rounded-bl-md bg-[var(--aic-elevated)] px-4 py-3 text-sm text-[var(--aic-text-secondary)]">
          Yes, we have an opening at 12 noon tomorrow, that works perfectly. Can I get your address?
        </div>
        <div className="self-start rounded-2xl rounded-bl-md bg-[var(--aic-elevated)] px-4 py-3 text-sm text-[var(--aic-text-secondary)]">
          Great, you&apos;re all set. Our team will be there at noon tomorrow.
        </div>
      </div>
      <div className="mt-2 rounded-xl bg-[var(--aic-accent)]/10 px-4 py-2 text-center text-sm font-medium text-[var(--aic-accent)]">
        Appointment booked — Tomorrow, 12 PM
      </div>
    </div>
  );
}

function WorkflowDemo() {
  return (
    <div className="flex flex-col gap-3 rounded-[24px] bg-[var(--aic-card)] p-6">
      <div className="flex items-center gap-3">
        <Phone className="size-5 text-[var(--aic-accent)]" />
        <span className="text-sm font-medium text-[var(--aic-text-secondary)]">Voice Agent</span>
      </div>
      <div className="rounded-xl bg-[var(--aic-accent)]/10 px-4 py-2 text-center text-sm font-medium text-[var(--aic-accent)]">
        Call completed
      </div>
      <div className="flex flex-col gap-2 rounded-xl bg-[var(--aic-elevated)] p-4">
        <div className="flex items-center gap-2 text-xs text-[var(--aic-text-muted)]">
          <Workflow className="size-3" />
          Trigger: Call ended → Update CRM
        </div>
        <div className="flex items-center gap-2 text-xs text-[var(--aic-text-muted)]">
          <Zap className="size-3" />
          Action: Send confirmation SMS
        </div>
        <div className="flex items-center gap-2 text-xs text-[var(--aic-text-muted)]">
          <BarChart3 className="size-3" />
          Log: Dashboard updated
        </div>
      </div>
    </div>
  );
}

const demoMap: Record<TabId, () => React.JSX.Element> = {
  voice: VoiceDemo,
  chat: ChatDemo,
  workflow: WorkflowDemo,
};

export function Frameworks() {
  const [activeTab, setActiveTab] = useState<TabId>("voice");
  const features = featureMap[activeTab];
  const Demo = demoMap[activeTab];

  const headlineMap: Record<TabId, string> = {
    voice: "Intelligent voice agents that engage, qualify, and convert in real time.",
    chat: "Conversational AI built to automate support and boost conversions.",
    workflow: "Connected systems that eliminate manual work and drive efficiency.",
  };

  return (
    <section id="frameworks" className="py-20 md:py-32">
      <div className="container mx-auto max-w-[1200px] px-6">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--aic-accent)]">
            Frameworks
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Built to automate. Designed to perform.
          </h2>
          <p className="mx-auto max-w-[640px] text-[var(--aic-text-muted)]">
            Each framework is a building block of your AI infrastructure, designed
            to automate, connect, and scale your operations with precision.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex gap-2 rounded-full bg-[var(--aic-card)] p-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                  activeTab === tab.id
                    ? "bg-[var(--aic-accent)] text-white"
                    : "text-[var(--aic-text-muted)] hover:text-white"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Demo */}
          <Demo />

          {/* Features */}
          <div className="flex flex-col justify-center gap-6">
            <h3 className="text-xl font-semibold text-white md:text-2xl">
              {headlineMap[activeTab]}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="glass-card rounded-[20px] p-5"
                >
                  <feature.icon className="mb-3 size-5 text-[var(--aic-accent)]" />
                  <h4 className="mb-1 text-sm font-semibold text-white">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-[var(--aic-text-muted)]">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
