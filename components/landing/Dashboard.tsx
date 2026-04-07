import Image from "next/image";
import { Eye, BarChart3, Settings } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    title: "Unified Intelligence",
    desc: "See every AI agent, workflow, and data source in one seamless interface.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Insights",
    desc: "Get instant performance metrics, response rates, and automation impact updated live.",
  },
  {
    icon: Settings,
    title: "Total Control",
    desc: "Adjust, pause, or optimize automations instantly, all from your central dashboard.",
  },
];

export function Dashboard() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            The command center. Your business, made visible.
          </h2>
          <p className="mx-auto max-w-[640px] text-[var(--aic-text-muted)]">
            A unified dashboard that gives you real-time visibility into calls,
            messages, automations, and performance, so every decision is
            data-driven.
          </p>
        </div>

        {/* Dashboard screenshot */}
        <div className="relative mb-12 aspect-[16/10] overflow-hidden rounded-[30px] border border-[var(--aic-elevated)]">
          <Image
            src="/images/dashboard.png"
            alt="AI Consultin Dashboard"
            fill
            className="object-cover"
          />
        </div>

        {/* Benefits */}
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="glass-card rounded-[24px] p-6"
            >
              <b.icon className="mb-4 size-6 text-[var(--aic-accent)]" />
              <h3 className="mb-2 text-lg font-semibold">{b.title}</h3>
              <p className="text-sm text-[var(--aic-text-muted)]">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
