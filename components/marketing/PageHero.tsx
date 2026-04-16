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
}: PageHeroProps) {
  return (
    <div className="border-border-subtle border-b border-t border-t-primary/12 bg-surface-muted">
      <Container className="py-10 sm:py-14 lg:py-16">
        <Breadcrumbs items={breadcrumbs} />
        <div
          className={`mt-7 ${aside ? "grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12" : ""}`}
        >
          <div className="min-w-0">
            <div className="flex flex-wrap items-start gap-4">
              <h1 className="text-display-sm max-w-4xl">{title}</h1>
              {badge ? (
                <Badge className="mt-1 shrink-0 normal-case">{badge}</Badge>
              ) : null}
            </div>
            {subtitle ? (
              <p className="text-lead mt-5 max-w-2xl text-ink">{subtitle}</p>
            ) : null}
            {description ? (
              <p className="text-body-muted mt-5 max-w-2xl text-[1.0625rem] leading-relaxed sm:text-lg">
                {description}
              </p>
            ) : null}
            {children ? (
              <div className="mt-10 flex flex-wrap gap-3">{children}</div>
            ) : null}
          </div>
          {aside ? (
            <div className="min-w-0 lg:pt-1">
              <div className="surface-card overflow-hidden border-primary/12">
                {aside}
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
