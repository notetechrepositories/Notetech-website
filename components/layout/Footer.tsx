import Logo from "@/components/brand/Logo";
import Container from "@/components/ui/Container";
import NavLink from "@/components/ui/NavLink";
import { footerColumns, footerNote } from "@/data/footer";
import { siteName } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto w-full overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,#081a35_0%,#071830_100%)] text-navy-foreground">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <svg
          viewBox="0 0 1600 560"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full opacity-70"
        >
          <defs>
            <pattern id="footer-panel-outline" width="520" height="320" patternUnits="userSpaceOnUse">
              <rect width="520" height="320" fill="transparent" />
              <path d="M72 24 L306 24 L306 264 L72 264 Z" fill="none" stroke="rgba(255,255,255,0.17)" strokeWidth="1.2" />
              <path d="M72 84 L306 84 M72 124 L306 124 M72 164 L306 164 M72 204 L306 204 M72 244 L306 244" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.05" />
              <path d="M-120 136 L184 26 M-120 216 L184 106 M-120 296 L184 186 M136 296 L440 186 M256 336 L560 226" fill="none" stroke="rgba(255,255,255,0.135)" strokeWidth="1.05" />
            </pattern>
            <pattern id="footer-panel-outline-offset" width="520" height="320" patternUnits="userSpaceOnUse">
              <rect width="520" height="320" fill="transparent" />
              <path d="M292 152 L474 152 L474 320 L292 320 Z" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.05" />
              <path d="M292 192 L474 192 M292 230 L474 230 M292 268 L474 268" fill="none" stroke="rgba(255,255,255,0.105)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="1600" height="560" fill="url(#footer-panel-outline)" />
          <rect width="1600" height="560" fill="url(#footer-panel-outline-offset)" />
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_6%,rgba(255,255,255,0.1),transparent_40%),radial-gradient(circle_at_85%_2%,rgba(255,255,255,0.085),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,16,32,0.25)_0%,rgba(5,16,32,0.6)_100%)]" />
      </div>

      <Container className="relative z-10 py-14 sm:py-16 lg:py-20">
        <div className="flex flex-col gap-6 pb-10 sm:gap-7 lg:flex-row lg:items-end lg:justify-between lg:pb-12">
          <Logo variant="footer" className="drop-shadow-[0_12px_24px_rgba(0,0,0,0.28)]" />
          <p className="max-w-xl text-sm leading-relaxed text-navy-foreground/72 sm:text-[0.95rem]">
            Engineering delivery for software products and enterprise platforms, with client-owned IP and
            disciplined long-term support.
          </p>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-white/0 via-white/16 to-white/0" />

        <div className="grid gap-x-10 gap-y-12 pt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-14 xl:grid-cols-6 xl:gap-y-16">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-label tracking-[0.11em] text-navy-foreground/62">{column.title}</h3>
              <ul className="mt-5 space-y-3.5">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <NavLink
                      href={link.href}
                      external={link.external}
                      className="inline-flex items-center gap-1 text-sm font-medium text-navy-foreground/82 decoration-transparent underline-offset-4 transition-[color,text-decoration-color] duration-200 hover:text-white hover:decoration-white/35"
                    >
                      {link.label}
                      {link.external ? (
                        <span className="ml-0.5 text-navy-foreground/50 transition-colors duration-200" aria-hidden>
                          ↗
                        </span>
                      ) : null}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[var(--radius-card)] border border-white/12 bg-white/[0.035] px-4 py-3.5 sm:px-5">
          <p className="max-w-3xl text-xs leading-relaxed tracking-[0.01em] text-navy-foreground/62">{footerNote}</p>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/12 pt-8 sm:pt-9 lg:mt-14">
          <p className="text-sm text-navy-foreground/60">
            © {year} {siteName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
