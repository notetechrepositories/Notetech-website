"use client";

import {
  MOTION_DURATION_REVEAL,
  MOTION_EASE_STANDARD,
  MOTION_REVEAL_Y,
} from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";

type SectionSpacing = "default" | "compact" | "flush";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  /** Visually de-emphasized label above title */
  eyebrow?: string;
  /** Forwarded to the `h2` for `aria-labelledby` */
  id?: string;
  /**
   * Vertical rhythm below this block:
   * - default: generous gap before next section block
   * - compact: medium (e.g. intro + label + grid)
   * - flush: tight (e.g. heading + list)
   */
  spacing?: SectionSpacing;
};

const spacingClass: Record<SectionSpacing, string> = {
  default: "mb-12 lg:mb-[3.75rem]",
  compact: "mb-8 lg:mb-10",
  flush: "mb-5",
};

export default function SectionHeading({
  title,
  subtitle,
  description,
  align = "left",
  eyebrow,
  id,
  spacing = "default",
}: SectionHeadingProps) {
  const blockClass =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-4xl";
  const descAlign = align === "center" ? "mx-auto" : "";
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`${spacingClass[spacing]} ${blockClass}`}
      initial={reduceMotion ? false : { opacity: 0, y: MOTION_REVEAL_Y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: MOTION_DURATION_REVEAL, ease: MOTION_EASE_STANDARD }}
    >
      {eyebrow ? (
        <p className="text-label mb-3 text-ink-muted">{eyebrow}</p>
      ) : null}
      <h2 id={id} className="text-section-title">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-lead mt-4 max-w-2xl text-ink">{subtitle}</p>
      ) : null}
      {description ? (
        <p
          className={`text-body-muted mt-5 max-w-xl text-[1.0625rem] leading-relaxed sm:text-base ${descAlign}`}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
