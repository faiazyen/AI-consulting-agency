import { Zap, Brain, Link2, MessageCircle, TrendingUp, DollarSign } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

const benefits = [
  { icon: Zap, title: "Increased Efficiency", desc: "Automate repetitive tasks to save hours and streamline daily operations effortlessly." },
  { icon: Brain, title: "Smarter Decisions", desc: "Gain real-time insights and make data-backed choices with confidence." },
  { icon: Link2, title: "Seamless Integration", desc: "Connect every system you use from CRM to communication in one automated flow." },
  { icon: MessageCircle, title: "Consistent Communication", desc: "Ensure every message, response, and client interaction stays fast and accurate." },
  { icon: TrendingUp, title: "Scalable Growth", desc: "Systems that evolve with your business, no limits, just continuous improvements." },
  { icon: DollarSign, title: "Cost Reduction", desc: "Reduce manual labor and eliminate inefficiencies that drain time and budget." },
];

export function Benefits() {
  return (
    <section className="py-20 md:py-32">
      <div className="section-divider mb-20 md:mb-32" />
      <div className="container mx-auto max-w-[1200px] px-6">
        <RevealOnScroll className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Every benefit. Backed by design.
          </h2>
          <p className="mx-auto max-w-[680px] text-[var(--mq-text-muted)]">
            We align strategy, automation, and measurable outcomes, ensuring every
            build drives long-term business performance and scalability.
          </p>
        </RevealOnScroll>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <RevealOnScroll key={b.title} delay={i * 0.08}>
              <div className="glass-card rounded-[24px] p-6 transition-all duration-300 hover:bg-[var(--mq-glass-medium)] hover:shadow-[0_0_30px_rgba(59,91,219,0.06)]">
                <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-[var(--mq-accent)]/10">
                  <b.icon className="size-5 text-[var(--mq-accent)]" />
                </div>
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
