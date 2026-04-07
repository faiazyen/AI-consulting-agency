import Image from "next/image";
import { Eye, BarChart3, Settings } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

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
      <div className="section-divider mb-20 md:mb-32" />
      <div className="container mx-auto max-w-[1200px] px-6">
        <RevealOnScroll className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            The command center. Your business, made visible.
          </h2>
          <p className="mx-auto max-w-[620px] text-[var(--mq-text-muted)]">
            A unified dashboard that gives you real-time visibility into calls,
            messages, automations, and performance, so every decision is data-driven.
          </p>
        </RevealOnScroll>

        {/* Dashboard screenshot */}
        <RevealOnScroll delay={0.1}>
          <div className="relative mb-12 aspect-[16/10] overflow-hidden rounded-[30px] border border-[var(--mq-border)] shadow-[0_0_80px_rgba(59,91,219,0.08)]">
            <Image
              src="/images/dashboard.png"
              alt="Maverick Intelligence Dashboard"
              fill
              className="object-cover"
            />
          </div>
        </RevealOnScroll>

        {/* Benefits */}
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((b, i) => (
            <RevealOnScroll key={b.title} delay={i * 0.1}>
              <div className="glass-card rounded-[24px] p-6 transition-colors duration-200 hover:bg-[var(--mq-glass-medium)]">
                <b.icon className="mb-4 size-6 text-[var(--mq-accent)]" />
                <h3 className="mb-2 text-lg font-semibold">{b.title}</h3>
                <p className="text-sm text-[var(--mq-text-muted)]">{b.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
