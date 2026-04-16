import Link from "next/link";

export type CaseStudyCardProps = {
  title: string;
  summary: string;
  /** Single line or use `stackItems` for chips */
  stack: string;
  stackItems?: string[];
  outcome?: string;
  href: string;
  linkLabel?: string;
  ndaSafe?: boolean;
};

function StackTokens({
  stack,
  stackItems,
}: Pick<CaseStudyCardProps, "stack" | "stackItems">) {
  const items =
    stackItems ??
    (stack.trim()
      ? stack
          .split("•")
          .map((s) => s.trim())
          .filter(Boolean)
      : []);

  if (!items.length) return null;

  return (
    <div className="mt-5 border-t border-border-subtle pt-5">
      <p className="text-label mb-3">Technology</p>
      <ul className="flex flex-wrap gap-1.5">
        {items.map((tech) => (
          <li key={tech}>
            <span className="inline-flex rounded-[var(--radius-card)] border border-primary/20 bg-white px-2.5 py-1 font-mono text-[0.6875rem] font-medium uppercase tracking-wide text-navy">
              {tech}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CaseStudyCard({
  title,
  summary,
  stack,
  stackItems,
  outcome,
  href,
  linkLabel = "Read overview",
  ndaSafe,
}: CaseStudyCardProps) {
  return (
    <article className="surface-card surface-card-hover flex h-full flex-col border-l-[3px] border-l-primary px-5 pb-6 pt-6 lg:px-6 lg:pb-7 lg:pt-7">
      <div className="flex min-h-0 flex-1 flex-col">
        <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-ink lg:text-[1.375rem]">
          {title}
        </h3>
        <p className="text-body-muted mt-4 max-w-prose flex-1 text-[0.9375rem] leading-relaxed">
          {summary}
        </p>
        <StackTokens stack={stack} stackItems={stackItems} />
        {outcome ? (
          <div className="border-border-subtle mt-6 border-t pt-6">
            <p className="text-label mb-2">Outcome</p>
            <p className="text-sm leading-relaxed text-ink">{outcome}</p>
          </div>
        ) : null}
        {ndaSafe ? (
          <p className="text-ink-subtle mt-4 border-l-2 border-aqua/40 pl-4 text-xs leading-relaxed italic">
            Representative engagement; identifiers generalized for
            confidentiality.
          </p>
        ) : null}
      </div>
      <Link
        href={href}
        className="group/link text-primary mt-7 inline-flex items-center gap-2 text-sm font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2"
      >
        <span className="motion-interactive border-b border-transparent border-primary/25 pb-0.5 group-hover/link:border-primary">
          {linkLabel}
        </span>
        <span
          aria-hidden
          className="motion-interactive inline-block transition-transform group-hover/link:translate-x-0.5"
        >
          →
        </span>
      </Link>
    </article>
  );
}
