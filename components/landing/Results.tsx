import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Results() {
  return (
    <section id="results" className="relative py-20 md:py-32">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/testimonial-bg.png"
          alt=""
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="container relative z-10 mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--aic-accent)]">
            Results
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Proof in motion. Clarity in numbers.
          </h2>
          <p className="mx-auto max-w-[640px] text-[var(--aic-text-muted)]">
            We measure success through real performance data, showing tangible
            results that validate every system we design.
          </p>
        </div>

        {/* Testimonial */}
        <div className="mx-auto max-w-[720px] rounded-[30px] bg-[var(--aic-card)] p-8 md:p-12">
          <blockquote className="mb-8 text-lg font-medium leading-relaxed text-[var(--aic-text-secondary)] md:text-xl">
            &ldquo;Our AI receptionist never misses a client, bookings doubled,
            response times vanished, and our front desk finally runs itself.&rdquo;
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="relative size-12 overflow-hidden rounded-full">
              <Image
                src="/images/avatar-jason.jpg"
                alt="Ava Martinez"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold">Ava Martinez</p>
              <p className="text-xs text-[var(--aic-text-muted)]">
                Operations Director
              </p>
            </div>
          </div>
          <Link href="#" className="mt-6 inline-block">
            <Button
              variant="outline"
              className="rounded-full border-[var(--aic-elevated)] text-sm text-white hover:bg-[var(--aic-glass-light)]"
            >
              View Case Study
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
