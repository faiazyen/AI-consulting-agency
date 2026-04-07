import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Frameworks", href: "#frameworks" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
];

const supportLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms Of Use", href: "#" },
  { label: "Contact Us", href: "#contact" },
];

const socialLinks = [
  { label: "YouTube", href: "https://youtube.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "X", href: "https://x.com/" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--aic-elevated)] py-12">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/images/logo.png"
              alt="AI Consultin"
              width={40}
              height={40}
              className="mb-4"
            />
            <p className="text-sm text-[var(--aic-text-muted)]">
              We design intelligent systems that simplify operations and amplify
              performance.
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-[var(--aic-text-secondary)]">
              Social
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--aic-text-muted)] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-[var(--aic-text-secondary)]">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--aic-text-muted)] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-[var(--aic-text-secondary)]">
              Support
            </h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--aic-text-muted)] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--aic-elevated)] pt-8 md:flex-row">
          <p className="text-xs text-[var(--aic-text-muted)]">
            &copy; 2025 AIC. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-[var(--aic-text-muted)]">
            <span>WEB DESIGN BY</span>
            <Image
              src="/images/agencyflux.png"
              alt="AgencyFlux"
              width={80}
              height={20}
              className="h-4 w-auto opacity-50"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
