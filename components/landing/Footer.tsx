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
  { label: "X (Twitter)", href: "https://x.com/" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--mq-border)]">
      <div className="container mx-auto max-w-[1200px] px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Maverick Intelligence"
                width={36}
                height={36}
                className="object-contain"
              />
              <span className="text-sm font-semibold tracking-wide text-[var(--mq-text)]">
                Maverick Intelligence
              </span>
            </div>
            <p className="text-sm text-[var(--mq-text-muted)]">
              We design intelligent systems that simplify operations and amplify
              performance.
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-[var(--mq-text-secondary)]">
              Social
            </h4>
            <ul className="space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--mq-text-muted)] transition-colors hover:text-[var(--mq-text)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-[var(--mq-text-secondary)]">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--mq-text-muted)] transition-colors hover:text-[var(--mq-text)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-[var(--mq-text-secondary)]">
              Support
            </h4>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--mq-text-muted)] transition-colors hover:text-[var(--mq-text)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-[var(--mq-border)] pt-8 text-center">
          <p className="text-xs text-[var(--mq-text-muted)]">
            &copy; 2026 Maverick Intelligence. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
