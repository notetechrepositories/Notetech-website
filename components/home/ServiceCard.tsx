import Badge from "@/components/ui/Badge";
import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function ServiceCard({
  title,
  href,
  description,
  badge,
  imageSrc,
  imageAlt,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="surface-card surface-card-hover group flex h-full flex-col overflow-hidden border border-primary/10 bg-surface p-5 transition-colors duration-300 ease-out hover:border-[#e6dccd] hover:bg-[#f7f2ea] active:border-[#e6dccd] active:bg-[#f7f2ea] lg:p-6"
    >
      {imageSrc ? (
        <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-[var(--radius-card)] border border-primary/10 bg-surface-muted">
          <Image
            src={imageSrc}
            alt={imageAlt ?? `${title} visual`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 380px"
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent transition-colors duration-300 group-hover:from-[#a89273]/22" />
        </div>
      ) : null}
      <span className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="font-display text-base font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-[#7a6548] lg:text-[1.0625rem]">
          {title}
        </span>
        {badge ? (
          <Badge className="ml-0 normal-case tracking-normal">{badge}</Badge>
        ) : null}
      </span>
      {description ? (
        <span className="text-ink-muted mt-3 text-sm leading-relaxed transition-colors duration-300 group-hover:text-ink">
          {description}
        </span>
      ) : null}
      <span className="text-ink-subtle mt-auto pt-5 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 group-hover:text-[#7a6548]">
        Learn more
        <span aria-hidden className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
