import { AnomalousMatterHero } from "@/components/ui/anomalous-matter-hero";

const CALENDLY_URL = "https://calendly.com/maverickintelligence";

export function Hero() {
  return (
    <AnomalousMatterHero
      title="Maverick Intelligence — MQ"
      subtitle="AI Consulting Designed for Performance and Profit."
      description="We build and implement custom AI agents that automate calls, messages, and workflows powered by your own dashboard for full visibility and control."
      ctaPrimary={{ label: "Book a Consultation", href: CALENDLY_URL }}
      ctaSecondary={{ label: "See Our Results", href: "#results" }}
      tagline="AI Built for the Bold."
    />
  );
}
