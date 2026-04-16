import { siteName, siteTagline } from "@/data/site";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  /** Header: compact. Footer: slightly larger for legibility. */
  variant?: "header" | "footer";
  className?: string;
};

export default function Logo({ variant = "header", className = "" }: LogoProps) {
  const wrapperClass =
    variant === "header"
      ? "motion-interactive inline-flex shrink-0 items-center rounded-[var(--radius-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
      : "motion-interactive inline-flex shrink-0 items-center rounded-[var(--radius-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2";

  return (
    <Link
      href="/"
      className={`${wrapperClass} ${className}`}
      aria-label={`${siteName} — ${siteTagline}`}
    >
      {variant === "header" ? (
        <>
          <Image
            src="/brand/notetech-logo-mark.png"
            alt={`${siteName} mark`}
            width={220}
            height={220}
            className="block h-8 w-auto sm:hidden"
            priority
            sizes="32px"
          />
          <Image
            src="/brand/notetech-logo-extended-darktext.png"
            alt={`${siteName}, ${siteTagline}`}
            width={514}
            height={126}
            className="hidden h-8 w-auto sm:block md:h-9"
            priority
            sizes="(max-width: 768px) 220px, 260px"
          />
        </>
      ) : (
        <Image
          src="/brand/notetech-logo-extended.png"
          alt={`${siteName}, ${siteTagline}`}
          width={514}
          height={126}
          className="block h-10 w-auto sm:h-11"
          sizes="(max-width: 640px) 220px, 280px"
        />
      )}
    </Link>
  );
}
