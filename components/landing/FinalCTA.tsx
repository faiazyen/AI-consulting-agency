import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "./RevealOnScroll";

const CALENDLY_URL = "https://calendly.com/maverickintelligence";

export function FinalCTA() {
  return (
    <section id="book" className="py-20 md:py-32">
      <div className="section-divider mb-20 md:mb-32" />
      <div className="container mx-auto max-w-[1200px] px-6 text-center">
        {/* Ambient glow behind CTA */}
        <div className="relative">
          <div
            className="ambient-blob pointer-events-none absolute left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2"
            style={{ background: "var(--mq-accent)", opacity: 0.04 }}
          />
          <RevealOnScroll>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              Simple systems. Powerful outcomes.
            </h2>
            <p className="mx-auto mb-10 max-w-[500px] text-[var(--mq-text-muted)]">
              Designed to run quietly, scale effortlessly, and deliver results that
              speak for themselves.
            </p>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              <Button className="btn-glow rounded-full bg-[var(--mq-accent)] px-10 py-4 text-base font-semibold text-white hover:bg-[var(--mq-accent)]/90">
                Book a Consultation
              </Button>
            </a>
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-[var(--mq-text-muted)]">
              Maverick Intelligence — AI Built for the Bold.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
