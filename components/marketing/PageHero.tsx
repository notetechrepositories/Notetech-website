import Breadcrumbs, {
  type BreadcrumbItem,
} from "@/components/ui/Breadcrumbs";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import type { ReactNode } from "react";

function HeroPatternBackground({ beige = false }: { beige?: boolean }) {
  const panelStrong = beige ? "rgba(15,23,42,0.12)" : "rgba(255,255,255,0.095)";
  const panelMid = beige ? "rgba(15,23,42,0.08)" : "rgba(255,255,255,0.055)";
  const panelLight = beige ? "rgba(15,23,42,0.06)" : "rgba(255,255,255,0.045)";
  const lineStrong = beige ? "rgba(15,23,42,0.16)" : "rgba(255,255,255,0.072)";
  const lineMid = beige ? "rgba(15,23,42,0.11)" : "rgba(255,255,255,0.055)";
  const lineLight = beige ? "rgba(15,23,42,0.08)" : "rgba(255,255,255,0.048)";

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
            <polygon points="0,0 118,0 204,44 86,44" fill={panelStrong} />
            <polygon points="86,44 204,44 204,128 86,128" fill={panelMid} />
            <polygon points="204,44 324,44 420,92 300,92" fill={panelStrong} />
            <polygon points="300,92 420,92 420,176 300,176" fill={panelMid} />
            <polygon points="0,128 86,128 204,176 118,176" fill={panelMid} />
            <polygon points="118,176 300,176 420,226 238,226" fill={panelLight} />
            <path d="M0 192 L120 144 L120 240 L0 240 Z" fill={panelLight} />
            <path d="M220 116 L300 84 L300 174 L220 206 Z" fill={panelLight} />
          </pattern>
          <pattern id="hero-geo-lines" width="420" height="240" patternUnits="userSpaceOnUse">
            <path d="M0 182 L126 132" stroke={lineStrong} strokeWidth="1" />
            <path d="M0 194 L126 144" stroke={lineMid} strokeWidth="1" />
            <path d="M0 206 L126 156" stroke={lineLight} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="1600" height="600" fill="url(#hero-geo-panels)" />
        <rect width="1600" height="600" fill="url(#hero-geo-lines)" opacity="0.5" />
      </svg>
      <div
        className={`absolute inset-0 ${
          beige
            ? "bg-[radial-gradient(circle_at_18%_20%,rgba(15,23,42,0.08),transparent_44%),radial-gradient(circle_at_82%_14%,rgba(15,23,42,0.05),transparent_40%)]"
            : "bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.095),transparent_44%),radial-gradient(circle_at_82%_14%,rgba(255,255,255,0.06),transparent_40%)]"
        }`}
      />
    </div>
  );
}

type PageHeroProps = {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  /** Optional custom title node (overrides `title` text rendering) */
  titleSlot?: ReactNode;
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
  tone?: "navy" | "warm" | "beigePattern";
};

/**
 * Inner-page hero: breadcrumbs, title, optional subtitle, optional badge, optional CTAs.
 */
export default function PageHero({
  breadcrumbs,
  title,
  titleSlot,
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
  const isBeigePattern = tone === "beigePattern";
  const isLightTone = isWarm || isBeigePattern;

  return (
    <div
      className={
        isLightTone
          ? "relative border-b border-t border-stone-300/70 bg-[#f7f4ee] text-slate-900"
          : "relative isolate overflow-hidden border-b border-t border-white/10 bg-[#081a35] text-white"
      }
    >
      {isWarm ? null : <HeroPatternBackground beige={isBeigePattern} />}
      {backgroundDecor ? (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          {backgroundDecor}
        </div>
      ) : null}
      <Container className="relative z-10 py-10 sm:py-14 lg:py-16">
        <Breadcrumbs
          items={breadcrumbs}
          className={
            isLightTone
              ? "[&_a]:text-slate-600 [&_a:hover]:text-slate-900 [&_li>span]:text-slate-900 [&_ol]:text-slate-600"
              : "[&_a]:text-white/72 [&_a:hover]:text-white [&_li>span]:text-white [&_ol]:text-white/72"
          }
        />
        <div
          className={`mt-7 ${aside ? "grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-12" : ""} ${contentMinHeightClassName}`}
        >
          <div
            className={`min-w-0 ${
              contentMinHeightClassName ? "flex h-full flex-col justify-center" : ""
            }`}
          >
            <div className="flex flex-wrap items-start gap-4">
              {titleSlot ?? (
                <h1 className={`text-display-sm max-w-4xl ${isLightTone ? "text-slate-900" : "text-white"}`}>
                  {title}
                </h1>
              )}
              {badge ? (
                <Badge
                  className={`mt-1 shrink-0 normal-case ${
                    isLightTone
                      ? "border-stone-300 bg-stone-100 text-slate-700"
                      : "border-white/20 bg-white/10 text-white"
                  }`}
                >
                  {badge}
                </Badge>
              ) : null}
            </div>
            {subtitle ? (
              <p className={`text-lead mt-5 max-w-2xl ${isLightTone ? "text-slate-800" : "text-white/92"}`}>
                {subtitle}
              </p>
            ) : null}
            {description ? (
              <p
                className={`mt-5 max-w-2xl text-[1.0625rem] leading-relaxed sm:text-lg ${
                  isLightTone ? "text-slate-600" : "text-white/76"
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
                    isLightTone
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
