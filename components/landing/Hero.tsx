"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const trustLogos = [
  { src: "/images/trust-logo-1.png", alt: "Partner 1", width: 120 },
  { src: "/images/trust-logo-2.png", alt: "Partner 2", width: 120 },
  { src: "/images/trust-logo-3.png", alt: "Partner 3", width: 120 },
  { src: "/images/trust-logo-4.png", alt: "Partner 4", width: 120 },
  { src: "/images/trust-logo-5.png", alt: "Partner 5", width: 120 },
];

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.15)";
        ctx.fill();
      }
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${0.06 * (1 - dist / 120)})`;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Particle canvas background */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 size-full"
      />

      <div className="container relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-6 text-center">
        {/* Badge */}
        <Link href="#frameworks">
          <Badge
            variant="outline"
            className="glass-button rounded-full border-[var(--aic-elevated)] px-4 py-2 text-sm text-[var(--aic-text-secondary)] transition-colors hover:text-white"
          >
            Intelligent Agents × Dashboard
            <ArrowRight className="ml-2 size-3" />
          </Badge>
        </Link>

        {/* Heading */}
        <h1 className="max-w-[800px] text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          AI Consulting Designed for Performance and Profit
        </h1>

        {/* Subtitle */}
        <p className="max-w-[640px] text-base text-[var(--aic-text-muted)] md:text-lg">
          We build and implement custom AI agents that automate calls, messages,
          and workflows powered by your own dashboard for full visibility and
          control.
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="#book">
            <Button className="rounded-full bg-[var(--aic-accent)] px-8 py-3 text-sm font-medium text-white hover:bg-[var(--aic-accent)]/90">
              Book a Consultation
            </Button>
          </Link>
          <Link href="#results">
            <Button
              variant="outline"
              className="rounded-full border-[var(--aic-elevated)] px-8 py-3 text-sm font-medium text-white hover:bg-[var(--aic-glass-light)]"
            >
              See Our Results
            </Button>
          </Link>
        </div>

        {/* Trust bar */}
        <div className="mt-8 w-full">
          <p className="mb-6 text-sm text-[var(--aic-text-muted)]">
            Trusted by leading service brands, startups, and automation-driven
            companies.
          </p>
          <div className="relative overflow-hidden">
            <div className="animate-marquee flex items-center gap-16">
              {[...trustLogos, ...trustLogos].map((logo, i) => (
                <Image
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={40}
                  className="h-8 w-auto shrink-0 opacity-50 grayscale"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
