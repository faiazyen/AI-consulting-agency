import { Zap, Brain, Link2, MessageCircle, TrendingUp, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Increased Efficiency",
    desc: "Automate repetitive tasks to save hours and streamline daily operations effortlessly.",
  },
  {
    icon: Brain,
    title: "Smarter Decisions",
    desc: "Gain real-time insights and make data-backed choices with confidence.",
  },
  {
    icon: Link2,
    title: "Seamless Integration",
    desc: "Connect every system you use from CRM to communication in one automated flow.",
  },
  {
    icon: MessageCircle,
    title: "Consistent Communication",
    desc: "Ensure every message, response, and client interaction stays fast and accurate.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    desc: "Systems that evolve with your business, no limits, just continuous improvements.",
  },
  {
    icon: DollarSign,
    title: "Cost Reduction",
    desc: "Reduce manual labor and eliminate inefficiencies that drain time and budget.",
  },
];

export function Benefits() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Every benefit. Backed by design.
          </h2>
          <p className="mx-auto max-w-[720px] text-[var(--aic-text-muted)]">
            We align strategy, automation, and measurable outcomes, ensuring every
            build drives long-term business performance and scalability.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="glass-card rounded-[24px] p-6 transition-colors hover:bg-[var(--aic-glass-medium)]"
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
