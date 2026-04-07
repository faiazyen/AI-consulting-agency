import { Search, PenTool, Rocket } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

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
      <div className="section-divider mb-20 md:mb-32" />
      <div className="container mx-auto max-w-[1200px] px-6">
        <RevealOnScroll className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--mq-accent)]">
            Process
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            The blueprint. Behind every system.
          </h2>
          <p className="mx-auto max-w-[620px] text-[var(--mq-text-muted)]">
            A clear three-step process that moves every project from discovery to
            seamless automation and measurable business growth.
          </p>
        </RevealOnScroll>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <RevealOnScroll key={step.number} delay={i * 0.12}>
              <div className="group relative rounded-[24px] bg-[var(--mq-surface)] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:bg-[var(--mq-elevated)] hover:shadow-[0_0_30px_rgba(59,91,219,0.08)]">
                <span className="mb-4 block text-5xl font-bold text-[var(--mq-accent)]/15">
                  {step.number}
                </span>
                <step.icon className="mb-4 size-6 text-[var(--mq-accent)]" />
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-[var(--mq-text-muted)]">{step.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
