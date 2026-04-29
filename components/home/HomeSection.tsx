"use client";

import Container from "@/components/ui/Container";
import {
  MOTION_DURATION_REVEAL,
  MOTION_EASE_STANDARD,
  MOTION_REVEAL_Y,
} from "@/lib/motion";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type HomeSectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Alternate section background */
  tone?: "white" | "subtle" | "patterned";
  /** Suppress scroll-reveal animation for this section */
  disableAnimation?: boolean;
};

export default function HomeSection({
  id,
  children,
  className = "",
  tone = "white",
  disableAnimation = false,
}: HomeSectionProps) {
  const bg =
    tone === "patterned"
      ? "section-patterned"
      : tone === "subtle"
        ? "bg-surface-muted"
        : "bg-surface";
  const reduceMotion = useReducedMotion();
  const noAnim = disableAnimation || reduceMotion;

  return (
    <motion.section
      id={id}
      className={`scroll-mt-20 ${bg} ${className}`}
      initial={noAnim ? false : { opacity: 0, y: MOTION_REVEAL_Y }}
      whileInView={noAnim ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
      transition={{ duration: MOTION_DURATION_REVEAL, ease: MOTION_EASE_STANDARD }}
    >
      <Container className="py-section">{children}</Container>
    </motion.section>
  );
}
