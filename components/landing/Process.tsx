import { Search, PenTool, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Analyze Operations",
    desc: "We identify inefficiencies and uncover automation opportunities instantly.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design Frameworks",
    desc: "We create intelligent structures precisely tailored for operational excellence.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Optimize Performance",
    desc: "We launch, monitor, and continuously optimize for measurable growth.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 md:py-32">
      <div className="container mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--aic-accent)]">
            Process
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            The blueprint. Behind every system.
          </h2>
          <p className="mx-auto max-w-[640px] text-[var(--aic-text-muted)]">
            A clear three-step process that moves every project from discovery to
            seamless automation and measurable business growth.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-[24px] bg-[var(--aic-card)] p-8 transition-colors hover:bg-[var(--aic-elevated)]"
            >
              <span className="mb-4 block text-4xl font-bold text-[var(--aic-accent)]/20">
                {step.number}
              </span>
              <step.icon className="mb-4 size-6 text-[var(--aic-accent)]" />
              <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-[var(--aic-text-muted)]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
