"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { RotateCTA, RotateIconButton } from "@/components/ui/button-rotate";
import { cn } from "@/lib/utils";

const CALENDLY_URL = "https://calendly.com/maverickintelligence";

const navLinks = [
  { label: "Frameworks", href: "#frameworks" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Contact Us", href: "#contact" },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch — only render after mount
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="size-10" />;
  }

  return (
    <RotateIconButton
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}
    </RotateIconButton>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6"
        style={{
          background: "var(--mq-nav-bg)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--mq-border)",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Maverick Intelligence"
            width={36}
            height={36}
            className="object-contain"
          />
          <span className="hidden text-sm font-semibold tracking-wide text-[var(--mq-text)] sm:block">
            Maverick Intelligence
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-[var(--mq-text-muted)] transition-colors duration-200 hover:text-[var(--mq-text)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <RotateCTA
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow"
          >
            Book a Consultation
          </RotateCTA>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-[var(--mq-text)]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-[400px]" : "max-h-0"
        )}
        style={{
          background: "var(--mq-nav-bg)",
          backdropFilter: "blur(20px)",
          borderBottom: mobileOpen ? "1px solid var(--mq-border)" : "none",
        }}
      >
        <nav className="flex flex-col gap-2 px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-full px-4 py-3 text-sm text-[var(--mq-text-muted)] transition-colors hover:bg-[var(--mq-glass-light)] hover:text-[var(--mq-text)]"
            >
              {link.label}
            </Link>
          ))}
          <RotateCTA
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="btn-glow mt-2 w-full justify-center"
          >
            Book a Consultation
          </RotateCTA>
        </nav>
      </div>
    </header>
  );
}
