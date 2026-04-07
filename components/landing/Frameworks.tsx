"use client";

import { useState } from "react";
import { Phone, MessageSquare, Workflow, Mic, Clock, BarChart3, Users, Brain, Zap, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "./RevealOnScroll";

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

const headlineMap: Record<TabId, string> = {
  voice: "Intelligent voice agents that engage, qualify, and convert in real time.",
  chat: "Conversational AI built to automate support and boost conversions.",
  workflow: "Connected systems that eliminate manual work and drive efficiency.",
};

function VoiceDemo() {
  return (
    <div className="flex flex-col gap-3 rounded-[24px] bg-[var(--mq-surface)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="mb-1 text-sm font-medium text-[var(--mq-text-secondary)]">Verdana Wellness Spa</div>
      <div className="flex flex-col gap-3">
        <div className="self-start max-w-[80%] rounded-2xl rounded-bl-md bg-[var(--mq-elevated)] px-4 py-3 text-sm text-[var(--mq-text-secondary)] shadow-sm">
          Hi there! This is Violet from Verdana Wellness Spa. How can I help you today?
        </div>
        <div className="self-end max-w-[80%] rounded-2xl rounded-br-md bg-[var(--mq-accent)] px-4 py-3 text-sm text-white shadow-sm">
          Hey, I&apos;d like to confirm my appointment for tomorrow.
        </div>
        <div className="self-start max-w-[80%] rounded-2xl rounded-bl-md bg-[var(--mq-elevated)] px-4 py-3 text-sm text-[var(--mq-text-secondary)] shadow-sm">
          Of course, Jason! You&apos;re confirmed for tomorrow at 10 AM. See you then!
        </div>
      </div>
      <div className="mt-1 flex items-center gap-3 rounded-full bg-[var(--mq-elevated)] px-4 py-2.5">
        <Mic className="size-4 text-[var(--mq-accent)]" />
        <span className="text-xs text-[var(--mq-text-muted)]">MQ Voice 00:47</span>
        <div className="ml-auto flex gap-0.5">
          {[3,5,4,6,3,5,2,4].map((h, i) => (
            <div key={i} className="w-0.5 rounded-full bg-[var(--mq-accent)]/60" style={{ height: `${h * 3}px` }} />
          ))}
        </div>
      </div>
      <div className="rounded-xl bg-[var(--mq-accent)]/10 px-4 py-2.5 text-center text-sm font-medium text-[var(--mq-accent)]">
        Appointment confirmed — Tomorrow, 10 AM
      </div>
    </div>
  );
}

function ChatDemo() {
  return (
    <div className="flex flex-col gap-3 rounded-[24px] bg-[var(--mq-surface)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="mb-1 text-sm font-medium text-[var(--mq-text-secondary)]">Ironclad Constructions</div>
      <div className="flex flex-col gap-3">
        <div className="self-start max-w-[80%] rounded-2xl rounded-bl-md bg-[var(--mq-elevated)] px-4 py-3 text-sm text-[var(--mq-text-secondary)]">
          Hey there 👋 I&apos;m Aria from Ironclad Constructions. How can I help you today?
        </div>
        <div className="self-start max-w-[80%] rounded-2xl rounded-bl-md bg-[var(--mq-elevated)] px-4 py-3 text-sm text-[var(--mq-text-secondary)]">
          Yes, we have an opening at 12 noon tomorrow. Can I get your address?
        </div>
        <div className="self-start max-w-[80%] rounded-2xl rounded-bl-md bg-[var(--mq-elevated)] px-4 py-3 text-sm text-[var(--mq-text-secondary)]">
          Great, you&apos;re all set. Our team will be there at noon tomorrow.
        </div>
      </div>
      <div className="mt-1 rounded-xl bg-[var(--mq-accent)]/10 px-4 py-2.5 text-center text-sm font-medium text-[var(--mq-accent)]">
        Appointment booked — Tomorrow, 12 PM
      </div>
    </div>
  );
}

function WorkflowDemo() {
  return (
    <div className="flex flex-col gap-4 rounded-[24px] bg-[var(--mq-surface)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="flex items-center gap-3">
        <Phone className="size-5 text-[var(--mq-accent)]" />
        <span className="text-sm font-medium text-[var(--mq-text-secondary)]">Voice Agent</span>
      </div>
      <div className="rounded-xl bg-[var(--mq-accent)]/10 px-4 py-2.5 text-center text-sm font-medium text-[var(--mq-accent)]">
        Call completed
      </div>
      <div className="flex flex-col gap-3 rounded-xl bg-[var(--mq-elevated)] p-4">
        {[
          { icon: Workflow, text: "Trigger: Call ended → Update CRM" },
          { icon: Zap, text: "Action: Send confirmation SMS" },
          { icon: BarChart3, text: "Log: Dashboard updated in real-time" },
        ].map(({ icon: Icon, text }, i) => (
          <div key={i} className="flex items-center gap-3 text-xs text-[var(--mq-text-muted)]">
            <div className="flex size-6 items-center justify-center rounded-md bg-[var(--mq-accent)]/10">
              <Icon className="size-3 text-[var(--mq-accent)]" />
            </div>
            {text}
          </div>
        ))}
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

  return (
    <section id="frameworks" className="py-20 md:py-32">
      <div className="section-divider mb-20 md:mb-32" />
      <div className="container mx-auto max-w-[1200px] px-6">
        <RevealOnScroll className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--mq-accent)]">
            Frameworks
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Built to automate. Designed to perform.
          </h2>
          <p className="mx-auto max-w-[620px] text-[var(--mq-text-muted)]">
            Each framework is a building block of your AI infrastructure, designed
            to automate, connect, and scale your operations with precision.
          </p>
        </RevealOnScroll>

        {/* Tabs */}
        <RevealOnScroll delay={0.1} className="mb-12 flex justify-center">
          <div className="inline-flex gap-1.5 rounded-full bg-[var(--mq-surface)] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200",
                  activeTab === tab.id
                    ? "bg-[var(--mq-accent)] text-white shadow-[0_0_16px_var(--mq-accent-glow)]"
                    : "text-[var(--mq-text-muted)] hover:text-[var(--mq-text)]"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-2">
          <RevealOnScroll direction="left">
            <Demo />
          </RevealOnScroll>
          <RevealOnScroll direction="right" className="flex flex-col justify-center gap-6">
            <h3 className="text-xl font-semibold md:text-2xl">{headlineMap[activeTab]}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, i) => (
                <RevealOnScroll key={feature.title} delay={i * 0.05}>
                  <div className="glass-card rounded-[20px] p-5 transition-colors duration-200 hover:bg-[var(--mq-glass-medium)]">
                    <feature.icon className="mb-3 size-5 text-[var(--mq-accent)]" />
                    <h4 className="mb-1 text-sm font-semibold">{feature.title}</h4>
                    <p className="text-xs text-[var(--mq-text-muted)]">{feature.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
