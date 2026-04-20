import Logo from "@/components/brand/Logo";
import Container from "@/components/ui/Container";
import NavLink from "@/components/ui/NavLink";
import { footerNote } from "@/data/footer";
import { siteName, voiceFirstUrl, scheduleCallHref } from "@/data/site";

const essentialLinks = [
  { label: "Services", href: "/services" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "About", href: "/company/about" },
  { label: "Careers", href: "/company/careers" },
  { label: "Contact", href: "/contact" },
  { label: "VoiceFirst", href: voiceFirstUrl, external: true },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms of Use", href: "/legal/terms-of-use" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/notetech",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://twitter.com/notetech",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto w-full overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,#081a35_0%,#071830_100%)] text-navy-foreground">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <svg viewBox="0 0 1600 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full opacity-50">
          <defs>
            <pattern id="footer-grid" width="520" height="320" patternUnits="userSpaceOnUse">
              <path d="M72 24 L306 24 L306 264 L72 264 Z" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
              <path d="M-120 136 L184 26 M-120 216 L184 106 M136 296 L440 186" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="1600" height="400" fill="url(#footer-grid)" />
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(255,255,255,0.07),transparent_50%)]" />
      </div>

      <Container className="relative z-10 py-10 sm:py-12">

        {/* Top row: logo + tagline */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Logo variant="footer" className="drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)]" />
          <p className="text-sm text-navy-foreground/55 sm:text-right">
            Engineering delivery for software products, with client-owned IP.
          </p>
        </div>

        <div className="my-7 h-px bg-gradient-to-r from-white/0 via-white/14 to-white/0" />

        {/* Middle row: links + social */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {essentialLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    external={link.external}
                    className="inline-flex items-center gap-1 text-sm text-navy-foreground/72 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                    {link.external ? <span className="text-navy-foreground/40" aria-hidden>↗</span> : null}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2.5 shrink-0">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-navy-foreground/50 transition-colors duration-200 hover:border-white/35 hover:text-white"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-7 flex flex-wrap items-center gap-y-1 border-t border-white/10 pt-6 text-xs text-navy-foreground/45">
          <span>© {year} {siteName}. All rights reserved.</span>
          {legalLinks.map((link) => (
            <span key={link.href} className="flex items-center">
              <span className="mx-3 text-white/20" aria-hidden>·</span>
              <NavLink href={link.href} className="transition-colors duration-200 hover:text-white/80">
                {link.label}
              </NavLink>
            </span>
          ))}
          <span className="flex items-center">
            <span className="mx-3 text-white/20" aria-hidden>·</span>
            <span className="text-navy-foreground/35">{footerNote}</span>
          </span>
        </div>

      </Container>
    </footer>
  );
}
