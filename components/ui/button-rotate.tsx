"use client";

import React from "react";
import { cn } from "@/lib/utils";

// Shared spinner — the conic gradient that rotates
function Spinner() {
  return (
    <span
      className={cn(
        "absolute inset-[-300%] animate-[spin_3s_linear_infinite]",
        "bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary)_0%,#fff_50%,var(--primary)_100%)]",
        "dark:bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary)_0%,#000_50%,var(--primary)_100%)]"
      )}
    />
  );
}

// ── Filled: solid primary-coloured interior (default CTA style) ──────────────
interface RotateCTAProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
}

export function RotateCTA({ children, className, ...props }: RotateCTAProps) {
  return (
    <a
      {...props}
      className={cn(
        "relative inline-flex h-11 overflow-hidden rounded-full p-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
    >
      <Spinner />
      <span className="inline-flex size-full items-center justify-center rounded-full px-8 text-sm font-semibold text-primary-foreground backdrop-blur-3xl">
        {children}
      </span>
    </a>
  );
}

// ── Outline: transparent interior, shows background through glass ─────────────
interface RotateOutlineProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
}

export function RotateOutline({ children, className, ...props }: RotateOutlineProps) {
  return (
    <a
      {...props}
      className={cn(
        "relative inline-flex h-11 overflow-hidden rounded-full p-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
    >
      <Spinner />
      <span className="inline-flex size-full items-center justify-center rounded-full bg-background px-8 text-sm font-medium text-foreground backdrop-blur-3xl">
        {children}
      </span>
    </a>
  );
}

// ── Icon button (for ThemeToggle) ─────────────────────────────────────────────
interface RotateIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "filled" | "outline";
  className?: string;
}

export function RotateIconButton({
  children,
  variant = "outline",
  className,
  ...props
}: RotateIconButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "relative size-10 overflow-hidden rounded-md p-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
    >
      <Spinner />
      <span
        className={cn(
          "inline-flex size-full items-center justify-center rounded-sm backdrop-blur-3xl",
          variant === "filled"
            ? "text-primary-foreground"
            : "bg-background text-foreground"
        )}
      >
        {children}
      </span>
    </button>
  );
}
