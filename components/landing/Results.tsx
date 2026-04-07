import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "./RevealOnScroll";

const CALENDLY_URL = "https://calendly.com/maverickintelligence";

export function Results() {
  return (
    <section id="results" className="relative py-20 md:py-32">
      <div className="section-divider mb-20 md:mb-32" />
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/testimonial-bg.png"
          alt=""
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020203] via-[#020203]/80 to-[#020203]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-[1200px] px-6">
        <RevealOnScroll className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--mq-accent)]">
            Results
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Proof in motion. Clarity in numbers.
          </h2>
          <p className="mx-auto max-w-[620px] text-[var(--mq-text-muted)]">
            We measure success through real performance data, showing tangible
            results that validate every system we design.
          </p>
        </RevealOnScroll>

        {/* Testimonial */}
        <RevealOnScroll delay={0.15}>
          <div className="mx-auto max-w-[720px] rounded-[30px] bg-[var(--mq-surface)] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_60px_rgba(59,91,219,0.06)] md:p-12">
            <blockquote className="mb-8 text-lg font-medium leading-relaxed text-[var(--mq-text-secondary)] md:text-xl">
              &ldquo;Our AI receptionist never misses a client, bookings doubled,
              response times vanished, and our front desk finally runs itself.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="relative size-12 overflow-hidden rounded-full ring-2 ring-[var(--mq-accent)]/30">
                <Image
                  src="/images/avatar-jason.jpg"
                  alt="Ava Martinez"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold">Ava Martinez</p>
                <p className="text-xs text-[var(--mq-text-muted)]">Operations Director</p>
              </div>
            </div>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block">
              <Button
                variant="outline"
                className="rounded-full border-[var(--mq-border)] text-sm text-[var(--mq-text)] hover:bg-[var(--mq-glass-light)]"
              >
                View Case Study
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
