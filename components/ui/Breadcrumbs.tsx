import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  /** Omit on the current page (last item) */
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="text-ink-subtle flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? (
              <span className="text-slate-300" aria-hidden>
                /
              </span>
            ) : null}
            {item.href ? (
              <Link
                href={item.href}
                className="text-ink-muted motion-interactive hover:text-primary"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-ink">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
