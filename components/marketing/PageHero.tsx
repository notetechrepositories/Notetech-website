import Breadcrumbs, {
  type BreadcrumbItem,
} from "@/components/ui/Breadcrumbs";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import type { ReactNode } from "react";

function HeroPatternBackground() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <svg
        viewBox="0 0 1600 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-68"
      >
        <defs>
          <pattern id="hero-geo-panels" width="420" height="240" patternUnits="userSpaceOnUse">
            <rect width="420" height="240" fill="transparent" />
            <polygon points="0,0 118,0 204,44 86,44" fill="rgba(255,255,255,0.095)" />
            <polygon points="86,44 204,44 204,128 86,128" fill="rgba(255,255,255,0.055)" />
            <polygon points="204,44 324,44 420,92 300,92" fill="rgba(255,255,255,0.072)" />
            <polygon points="300,92 420,92 420,176 300,176" fill="rgba(255,255,255,0.05)" />
            <polygon points="0,128 86,128 204,176 118,176" fill="rgba(255,255,255,0.06)" />
            <polygon points="118,176 300,176 420,226 238,226" fill="rgba(255,255,255,0.045)" />
            <path d="M0 192 L120 144 L120 240 L0 240 Z" fill="rgba(255,255,255,0.04)" />
            <path d="M220 116 L300 84 L300 174 L220 206 Z" fill="rgba(255,255,255,0.04)" />
          </pattern>
          <pattern id="hero-geo-lines" width="420" height="240" patternUnits="userSpaceOnUse">
            <path d="M0 182 L126 132" stroke="rgba(255,255,255,0.072)" strokeWidth="1" />
            <path d="M0 194 L126 144" stroke="rgba(255,255,255,0.055)" strokeWidth="1" />
            <path d="M0 206 L126 156" stroke="rgba(255,255,255,0.048)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="1600" height="600" fill="url(#hero-geo-panels)" />
        <rect width="1600" height="600" fill="url(#hero-geo-lines)" opacity="0.5" />
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.095),transparent_44%),radial-gradient(circle_at_82%_14%,rgba(255,255,255,0.06),transparent_40%)]" />
    </div>
  );
}

type PageHeroProps = {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  /** Prominent line under the title (e.g. service “headline”) */
  subtitle?: string;
  description?: string;
  badge?: string;
  children?: ReactNode;
  /** Optional right-column visual (desktop); stacks below copy on small screens */
  aside?: ReactNode;
  /** Render aside without framed container */
  asideUnframed?: boolean;
  /** Optional background decor rendered behind hero content */
  backgroundDecor?: ReactNode;
  /** Optional min-height classes for hero content region */
  contentMinHeightClassName?: string;
  /** Visual theme; default keeps existing navy treatment */
  tone?: "navy" | "warm";
};

/**
 * Inner-page hero: breadcrumbs, title, optional subtitle, optional badge, optional CTAs.
 */
export default function PageHero({
  breadcrumbs,
  title,
  subtitle,
  description,
  badge,
  children,
  aside,
  asideUnframed = false,
  backgroundDecor,
  contentMinHeightClassName = "",
  tone = "navy",
}: PageHeroProps) {
  const isWarm = tone === "warm";

  return (
    <div
      className={
        isWarm
          ? "relative border-b border-t border-stone-300/70 bg-[#f7f4ee] text-slate-900"
          : "relative isolate overflow-hidden border-b border-t border-white/10 bg-[#081a35] text-white"
      }
    >
      {!isWarm ? <HeroPatternBackground /> : null}
      {backgroundDecor ? (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          {backgroundDecor}
        </div>
      ) : null}
      <Container className="relative z-10 py-10 sm:py-14 lg:py-16">
        <Breadcrumbs
          items={breadcrumbs}
          className={
            isWarm
              ? "[&_a]:text-slate-600 [&_a:hover]:text-slate-900 [&_li>span]:text-slate-900 [&_ol]:text-slate-600"
              : "[&_a]:text-white/72 [&_a:hover]:text-white [&_li>span]:text-white [&_ol]:text-white/72"
          }
        />
        <div
          className={`mt-7 ${aside ? "grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12" : ""} ${contentMinHeightClassName}`}
        >
          <div className="min-w-0">
            <div className="flex flex-wrap items-start gap-4">
              <h1 className={`text-display-sm max-w-4xl ${isWarm ? "text-slate-900" : "text-white"}`}>
                {title}
              </h1>
              {badge ? (
                <Badge
                  className={`mt-1 shrink-0 normal-case ${
                    isWarm
                      ? "border-stone-300 bg-stone-100 text-slate-700"
                      : "border-white/20 bg-white/10 text-white"
                  }`}
                >
                  {badge}
                </Badge>
              ) : null}
            </div>
            {subtitle ? (
              <p className={`text-lead mt-5 max-w-2xl ${isWarm ? "text-slate-800" : "text-white/92"}`}>
                {subtitle}
              </p>
            ) : null}
            {description ? (
              <p
                className={`mt-5 max-w-2xl text-[1.0625rem] leading-relaxed sm:text-lg ${
                  isWarm ? "text-slate-600" : "text-white/76"
                }`}
              >
                {description}
              </p>
            ) : null}
            {children ? (
              <div className="mt-10 flex flex-wrap gap-3">{children}</div>
            ) : null}
          </div>
          {aside ? (
            <div className="min-w-0 lg:pt-1">
              {asideUnframed ? (
                aside
              ) : (
                <div
                  className={`overflow-hidden rounded-[var(--radius-hero)] ${
                    isWarm
                      ? "border border-stone-300/70 bg-stone-100/60 shadow-[var(--shadow-card-value)]"
                      : "border border-white/10 bg-white/5 shadow-[0_1px_0_0_rgb(255_255_255/0.06)_inset,var(--shadow-card-value)] ring-1 ring-inset ring-aqua/15"
                  }`}
                >
                  {aside}
                </div>
              )}
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
