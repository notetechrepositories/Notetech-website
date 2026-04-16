type HighlightBlockProps = {
  children: React.ReactNode;
  variant?: "muted" | "accent";
  className?: string;
};

/** Pull-quote / emphasis block */
export default function HighlightBlock({
  children,
  variant = "muted",
  className = "",
}: HighlightBlockProps) {
  const surface =
    variant === "accent"
      ? "border-border-subtle border-l-[3px] border-l-primary bg-badge-soft/35"
      : "border-border-subtle bg-surface-muted";

  return (
    <div
      className={`motion-interactive rounded-[var(--radius-hero)] border p-7 shadow-[var(--shadow-card-value)] sm:p-9 ${surface} ${className}`}
    >
      {children}
    </div>
  );
}
