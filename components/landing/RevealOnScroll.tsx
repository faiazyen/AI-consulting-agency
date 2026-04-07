"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealOnScrollProps) {
  const prefersReduced = useReducedMotion();

  const initial = prefersReduced
    ? { opacity: 0 }
    : {
        opacity: 0,
        y: direction === "up" ? 28 : 0,
        x: direction === "left" ? -28 : direction === "right" ? 28 : 0,
        filter: prefersReduced ? "none" : "blur(6px)",
      };

  const animate = {
    opacity: 1,
    y: 0,
    x: 0,
    filter: "blur(0px)",
  };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1], // expo-out — UI/UX Pro Max recommendation
      }}
    >
      {children}
    </motion.div>
  );
}
