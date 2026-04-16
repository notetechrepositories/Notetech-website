import Breadcrumbs, {
  type BreadcrumbItem,
} from "@/components/ui/Breadcrumbs";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import type { ReactNode } from "react";

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
  tone = "navy",
}: PageHeroProps) {
  const isWarm = tone === "warm";

  return (
    <div
      className={
        isWarm
          ? "border-b border-t border-stone-300/70 bg-[#f7f4ee] text-slate-900"
          : "border-b border-t border-white/10 bg-navy text-white"
      }
    >
      <Container className="py-10 sm:py-14 lg:py-16">
        <Breadcrumbs
          items={breadcrumbs}
          className={
            isWarm
              ? "[&_a]:text-slate-600 [&_a:hover]:text-slate-900 [&_li>span]:text-slate-900 [&_ol]:text-slate-600"
              : "[&_a]:text-white/72 [&_a:hover]:text-white [&_li>span]:text-white [&_ol]:text-white/72"
          }
        />
        <div
          className={`mt-7 ${aside ? "grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12" : ""}`}
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
              <div
                className={`overflow-hidden rounded-[var(--radius-hero)] ${
                  isWarm
                    ? "border border-stone-300/70 bg-stone-100/60 shadow-[var(--shadow-card-value)]"
                    : "border border-white/10 bg-white/5 shadow-[0_1px_0_0_rgb(255_255_255/0.06)_inset,var(--shadow-card-value)] ring-1 ring-inset ring-aqua/15"
                }`}
              >
                {aside}
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
