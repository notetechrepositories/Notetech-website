import Link from "next/link";
import type { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
};

/**
 * Internal pages use Next `Link`; external URLs use a plain anchor with safe defaults.
 */
export default function NavLink({
  href,
  children,
  external,
  className = "",
}: NavLinkProps) {
  const base =
    "motion-interactive text-ink-muted rounded-sm hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2";

  if (external) {
    return (
      <a
        href={href}
        className={`${base} ${className}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${className}`}>
      {children}
    </Link>
  );
}
