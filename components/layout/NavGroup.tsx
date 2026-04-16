import type { ReactNode } from "react";

type NavGroupProps = {
  title: string;
  children: ReactNode;
  className?: string;
  /** Footer / dark surfaces: light column titles */
  tone?: "default" | "onDark";
};

/** Group heading + children (footer column or dense nav region). */
export default function NavGroup({
  title,
  children,
  className = "",
  tone = "default",
}: NavGroupProps) {
  const titleClass =
    tone === "onDark"
      ? "text-label text-navy-foreground/55"
      : "text-label text-ink-muted";

  return (
    <div className={className}>
      <h3 className={titleClass}>{title}</h3>
      <div className="mt-5">{children}</div>
    </div>
  );
}
