type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  /** `accent` = soft brand badge; `subtle` = neutral (menus, meta) */
  variant?: "accent" | "subtle";
};

/** Small label for nav items (e.g. launch timing) */
export default function Badge({
  children,
  className = "",
  variant = "accent",
}: BadgeProps) {
  const styles =
    variant === "subtle"
      ? "border-border-subtle bg-surface-muted text-ink-muted ml-1.5 inline-flex shrink-0 items-center rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide"
      : "border-primary/15 bg-badge-soft text-primary ml-1.5 inline-flex shrink-0 items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide";

  return <span className={`${styles} ${className}`}>{children}</span>;
}
