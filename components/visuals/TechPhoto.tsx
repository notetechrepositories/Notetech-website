import Image from "next/image";

type TechPhotoProps = {
  src: string;
  alt: string;
  /** Tailwind classes on the outer aspect-ratio wrapper */
  className?: string;
  priority?: boolean;
  /** e.g. aspect-[16/10], aspect-[21/9], min-h-[200px] */
  aspectClassName?: string;
  sizes?: string;
  objectPosition?: string;
};

/**
 * Cropped tech photography — consistent treatment for hero, sections, and asides.
 */
export default function TechPhoto({
  src,
  alt,
  className = "",
  priority = false,
  aspectClassName = "aspect-[16/10]",
  sizes = "(max-width: 1024px) 100vw, 560px",
  objectPosition = "50% 45%",
}: TechPhotoProps) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-surface-muted ${aspectClassName} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={{ objectPosition }}
      />
    </div>
  );
}
