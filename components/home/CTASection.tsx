import Button from "@/components/ui/Button";
import { visualSlots } from "@/data/visualSlots";
import Image from "next/image";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  footnote?: string;
  /** Band = full-bleed dark bar; inline = simple row of buttons */
  variant?: "band" | "inline";
  bandTone?: "dark" | "beige";
  bandImageSrc?: string;
  forcePrimaryButtons?: boolean;
};

export default function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  footnote,
  variant = "inline",
  bandTone = "dark",
  bandImageSrc,
  forcePrimaryButtons = false,
}: CTASectionProps) {
  const actions = (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      <Button
        href={primaryHref}
        variant={forcePrimaryButtons ? "primary" : "inverse"}
        className="min-h-11 px-6 sm:min-w-[12rem]"
      >
        {primaryLabel}
      </Button>
      {secondaryLabel && secondaryHref ? (
        <Button
          href={secondaryHref}
          variant={forcePrimaryButtons ? "primary" : "ghostOnDark"}
          className="min-h-11 px-6 sm:min-w-[12rem]"
        >
          {secondaryLabel}
        </Button>
      ) : null}
    </div>
  );

  if (variant === "band") {
    const isBeigeBand = bandTone === "beige";

    return (
      <div
        className={`relative overflow-hidden rounded-[var(--radius-hero)] px-6 py-14 text-center sm:px-12 sm:py-16 ${
          isBeigeBand
            ? "border border-[#d3caba] bg-[#e5dfd3] shadow-[var(--shadow-card-value)]"
            : "border border-white/10 bg-navy shadow-[0_1px_0_0_rgb(255_255_255/0.06)_inset,var(--shadow-card-value)] ring-1 ring-inset ring-aqua/15"
        }`}
      >
        <div
          className={`pointer-events-none absolute -right-14 -top-14 h-56 w-56 rounded-full ${
            isBeigeBand
              ? "border border-primary/18 bg-[radial-gradient(circle_at_35%_35%,rgb(30_115_190/0.16),transparent_62%)]"
              : "border border-aqua/25 bg-[radial-gradient(circle_at_35%_35%,rgb(70_195_230/0.4),transparent_62%)]"
          }`}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image
            src={bandImageSrc ?? visualSlots.cta.src}
            alt=""
            fill
            sizes="100vw"
            className={`object-cover saturate-[0.85] ${
              isBeigeBand ? "opacity-35 sm:opacity-45" : "opacity-35 sm:opacity-40"
            }`}
            style={{ objectPosition: visualSlots.cta.objectPosition ?? "50% 55%" }}
          />
        </div>
        <div
          className={`pointer-events-none absolute inset-0 ${
            isBeigeBand
              ? "bg-gradient-to-t from-[#e5dfd3]/88 via-[#ebe4d8]/72 to-[#f3ece1]/55"
              : "bg-gradient-to-t from-navy via-navy/88 to-navy/65"
          }`}
          aria-hidden
        />
        <div className="relative z-10">
          {title && (
            <h2
              className={`font-display mx-auto max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl lg:text-[2rem] lg:leading-tight ${
                isBeigeBand ? "text-slate-900" : "text-navy-foreground"
              }`}
            >
              {title}
            </h2>
          )}
          {description ? (
            <p
              className={`mx-auto mt-5 max-w-xl text-base leading-relaxed sm:text-[1.0625rem] ${
                isBeigeBand ? "text-slate-700" : "text-navy-foreground/75"
              }`}
            >
              {description}
            </p>
          ) : null}
          <div className="mt-9 flex justify-center sm:mt-10">{actions}</div>
          {footnote ? (
            <p
              className={`mt-8 text-xs leading-relaxed ${
                isBeigeBand ? "text-slate-500" : "text-navy-foreground/45"
              }`}
            >
              {footnote}
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div>
      {title && <h2 className="text-section-title">{title}</h2>}
      {description ? (
        <p className="text-body-muted mt-stack max-w-xl">{description}</p>
      ) : null}
      <div className="mt-block">
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Button href={primaryHref} variant="primary" className="min-h-11 sm:min-w-[11rem]">
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref ? (
            <Button
              href={secondaryHref}
              variant={forcePrimaryButtons ? "primary" : "ghost"}
              className="min-h-11 sm:min-w-[11rem]"
            >
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </div>
      {footnote ? (
        <p className="text-ink-subtle mt-stack text-sm">{footnote}</p>
      ) : null}
    </div>
  );
}
