import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section id="book" className="py-20 md:py-32">
      <div className="container mx-auto max-w-[1200px] px-6 text-center">
        <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
          Simple systems. Powerful outcomes.
        </h2>
        <p className="mx-auto mb-8 max-w-[540px] text-[var(--aic-text-muted)]">
          Designed to run quietly, scale effortlessly, and deliver results that
          speak for themselves.
        </p>
        <Link href="#book">
          <Button className="rounded-full bg-[var(--aic-accent)] px-8 py-3 text-sm font-medium text-white hover:bg-[var(--aic-accent)]/90">
            Book a Consultation
          </Button>
        </Link>
      </div>
    </section>
  );
}
