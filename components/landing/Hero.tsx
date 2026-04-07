"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, useReducedMotion } from "framer-motion";

const CALENDLY_URL = "https://calendly.com/maverickintelligence";

const trustLogos = [
  { src: "/images/trust-logo-1.png", alt: "Partner 1" },
  { src: "/images/trust-logo-2.png", alt: "Partner 2" },
  { src: "/images/trust-logo-3.png", alt: "Partner 3" },
  { src: "/images/trust-logo-4.png", alt: "Partner 4" },
  { src: "/images/trust-logo-5.png", alt: "Partner 5" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReduced = useReducedMotion();

  /* Particle canvas background */
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

    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.2 + 0.4,
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
        ctx.fillStyle = "rgba(59, 91, 219, 0.3)";
        ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59, 91, 219, ${0.08 * (1 - dist / 130)})`;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(draw);
    };

    if (!prefersReduced) draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [prefersReduced]);

  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      {/* Ambient glow blobs */}
      <div
        className="ambient-blob size-[600px]"
        style={{
          background: "var(--mq-accent)",
          top: "-200px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 size-full"
      />

      <div className="container relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease }}
        >
          <a href="#frameworks">
            <Badge
              variant="outline"
              className="glass-button cursor-pointer rounded-full border-[var(--mq-border)] px-4 py-2 text-sm text-[var(--mq-text-secondary)] transition-colors hover:text-[var(--mq-text)]"
            >
              Intelligent Agents × Dashboard
              <ArrowRight className="ml-2 size-3" />
            </Badge>
          </a>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="max-w-[820px] text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-[64px]"
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          AI Consulting Designed for Performance and Profit
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="max-w-[620px] text-base text-[var(--mq-text-muted)] md:text-lg"
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          We build and implement custom AI agents that automate calls, messages,
          and workflows powered by your own dashboard for full visibility and
          control.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col gap-4 sm:flex-row"
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
        >
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            <Button className="btn-glow rounded-full bg-[var(--mq-accent)] px-8 py-3 text-sm font-semibold text-white hover:bg-[var(--mq-accent)]/90">
              Book a Consultation
            </Button>
          </a>
          <a href="#results">
            <Button
              variant="outline"
              className="rounded-full border-[var(--mq-border)] px-8 py-3 text-sm font-medium text-[var(--mq-text)] hover:bg-[var(--mq-glass-light)]"
            >
              See Our Results
            </Button>
          </a>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          className="mt-8 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="mb-6 text-sm text-[var(--mq-text-muted)]">
            Trusted by leading service brands, startups, and automation-driven companies.
          </p>
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#020203] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#020203] to-transparent" />
            <div className="animate-marquee flex items-center gap-16">
              {[...trustLogos, ...trustLogos].map((logo, i) => (
                <Image
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="h-8 w-auto shrink-0 opacity-40 grayscale transition-all duration-300 hover:opacity-70 hover:grayscale-0"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--mq-text-muted)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          AI Built for the Bold.
        </motion.p>
      </div>
    </section>
  );
}
