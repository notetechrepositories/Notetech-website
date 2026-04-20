import { visualSlots, type VisualSlotId } from "@/data/visualSlots";
import Image from "next/image";

type VisualSlotProps = {
  slot: VisualSlotId;
  aspectClassName?: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
  objectPosition?: string;
  decorative?: boolean;
  showEyebrow?: boolean;
  showTags?: boolean;
  showOverlay?: boolean;
};

export default function VisualSlot({
  slot,
  aspectClassName = "aspect-[16/10]",
  sizes = "(max-width: 1024px) 100vw, 560px",
  className = "",
  priority = false,
  objectPosition,
  decorative = false,
  showEyebrow = true,
  showTags = true,
  showOverlay = true,
}: VisualSlotProps) {
  const config = visualSlots[slot];
  const pos = objectPosition ?? config.objectPosition ?? "50% 45%";
  const isServicesVisual = slot === "services";
  const isBrandMarkVisual = slot === "brand-mark";

  return (
    <div
      className={`relative w-full overflow-hidden ${isBrandMarkVisual ? "bg-[#e5dfd3]" : "bg-surface-muted"} ${aspectClassName} ${className}`}
    >
      {isServicesVisual ? (
        <img
          src={config.src}
          alt={decorative ? "" : config.alt}
          className="absolute inset-0 h-full w-full object-cover saturate-[0.92] contrast-[1.04]"
          style={{ objectPosition: pos }}
        />
      ) : (
        <>
          <Image
            src={config.src}
            alt={decorative ? "" : config.alt}
            fill
            sizes={sizes}
            priority={priority}
            className={`${isBrandMarkVisual ? "object-contain p-8 sm:p-10" : "object-cover saturate-[0.93] contrast-[1.03]"}`}
            style={{ objectPosition: pos }}
          />
          {showOverlay && !isBrandMarkVisual ? (
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgb(11_18_32/0.08),transparent_45%),radial-gradient(circle_at_84%_14%,rgb(70_195_230/0.28),transparent_46%),linear-gradient(to_top,rgb(11_18_32/0.65),rgb(11_18_32/0.12)_38%,transparent)]"
              aria-hidden
            />
          ) : null}
        </>
      )}
      {showEyebrow ? (
        <span className="absolute left-3 top-3 rounded-[var(--radius-card)] border border-white/25 bg-navy/60 px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.16em] text-white uppercase sm:left-4 sm:top-4">
          {config.eyebrow}
        </span>
      ) : null}
      {showTags ? (
        <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 p-3 sm:p-4">
          {config.tags.map((tag) => (
            <span
              key={`${slot}-${tag}`}
              className="rounded-[var(--radius-card)] border border-white/25 bg-navy/58 px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.13em] text-navy-foreground/95 uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
