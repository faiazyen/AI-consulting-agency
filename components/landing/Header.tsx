"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Frameworks", href: "#frameworks" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Contact Us", href: "#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6"
        style={{ background: "var(--aic-nav-bg)", backdropFilter: "blur(16px)" }}
      >
        {/* Logo */}
        <Link href="/" className="relative size-10">
          <Image
            src="/images/logo.png"
            alt="AI Consultin"
            width={40}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-[var(--aic-text-secondary)] transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link href="#book" className="hidden md:block">
          <Button className="rounded-full bg-[var(--aic-accent)] px-6 text-sm font-medium text-white hover:bg-[var(--aic-accent)]/90">
            Book a Consultation
          </Button>
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-[400px]" : "max-h-0"
        )}
        style={{ background: "var(--aic-nav-bg)", backdropFilter: "blur(16px)" }}
      >
        <nav className="flex flex-col gap-2 px-6 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-full px-4 py-3 text-sm text-[var(--aic-text-secondary)] transition-colors hover:bg-[var(--aic-glass-light)] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link href="#book" onClick={() => setMobileOpen(false)}>
            <Button className="mt-2 w-full rounded-full bg-[var(--aic-accent)] text-sm font-medium text-white hover:bg-[var(--aic-accent)]/90">
              Book a Consultation
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
