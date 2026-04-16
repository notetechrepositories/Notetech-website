import Button from "@/components/ui/Button";
import { visualSlots } from "@/data/visualSlots";
import Image from "next/image";

type CTASectionProps = {
  title: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  footnote?: string;
  /** Band = full-bleed dark bar; inline = simple row of buttons */
  variant?: "band" | "inline";
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
    return (
      <div className="relative overflow-hidden rounded-[var(--radius-hero)] border border-white/10 bg-navy px-6 py-14 text-center shadow-[0_1px_0_0_rgb(255_255_255/0.06)_inset,var(--shadow-card-value)] ring-1 ring-inset ring-aqua/15 sm:px-12 sm:py-16">
        <div
          className="pointer-events-none absolute -right-14 -top-14 h-56 w-56 rounded-full border border-aqua/25 bg-[radial-gradient(circle_at_35%_35%,rgb(70_195_230/0.4),transparent_62%)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image
            src={visualSlots.cta.src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-35 saturate-[0.85] sm:opacity-40"
            style={{ objectPosition: visualSlots.cta.objectPosition ?? "50% 55%" }}
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-navy/88 to-navy/65"
          aria-hidden
        />
        <div className="relative z-10">
          <h2 className="font-display mx-auto max-w-2xl text-2xl font-semibold tracking-tight text-navy-foreground sm:text-3xl lg:text-[2rem] lg:leading-tight">
            {title}
          </h2>
          {description ? (
            <p className="text-navy-foreground/75 mx-auto mt-5 max-w-xl text-base leading-relaxed sm:text-[1.0625rem]">
              {description}
            </p>
          ) : null}
          <div className="mt-9 flex justify-center sm:mt-10">{actions}</div>
          {footnote ? (
            <p className="text-navy-foreground/45 mt-8 text-xs leading-relaxed">
              {footnote}
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-section-title">{title}</h2>
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
