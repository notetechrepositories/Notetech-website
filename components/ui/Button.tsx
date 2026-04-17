import Link from "next/link";
import type {
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "inverse" | "ghostOnDark";
  className?: string;
  external?: boolean;
  /** Fires when the control is activated (including keyboard on native `button`). For `href`, runs on link click. */
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick"> & {
    type?: "button" | "submit";
  };

const variants = {
  primary:
    "motion-interactive inline-flex items-center justify-center rounded-[var(--radius-card)] bg-primary px-4 py-2 text-sm font-semibold text-white visited:text-white shadow-sm hover:-translate-y-px hover:bg-primary-hover hover:shadow-md active:translate-y-0 active:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2",
  ghost:
    "motion-interactive inline-flex items-center justify-center rounded-[var(--radius-card)] border border-border-subtle bg-surface px-4 py-2 text-sm font-semibold text-ink hover:-translate-y-px hover:border-primary/20 hover:bg-surface-muted hover:text-primary active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2",
  inverse:
    "motion-interactive inline-flex items-center justify-center rounded-[var(--radius-card)] border border-white/20 bg-white px-4 py-2 text-sm font-semibold text-ink shadow-sm hover:-translate-y-px hover:bg-white/95 hover:shadow-md active:translate-y-0 active:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
  ghostOnDark:
    "motion-interactive inline-flex items-center justify-center rounded-[var(--radius-card)] border border-white/25 bg-transparent px-4 py-2 text-sm font-semibold text-white hover:-translate-y-px hover:border-aqua/40 hover:bg-white/8 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua/50 focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
};

/** Primary CTA or ghost button; pass `href` to render as a link. */
export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  external,
  type = "button",
  onClick,
  ...rest
}: ButtonProps) {
  const styles = `${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={styles}
          rel="noopener noreferrer"
          target="_blank"
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={styles} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
