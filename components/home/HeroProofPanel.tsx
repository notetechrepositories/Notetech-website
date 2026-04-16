"use client";

import type { HeroProofLine } from "@/data/homepage";
import { motion, useReducedMotion } from "framer-motion";

type HeroProofPanelProps = {
  lines: HeroProofLine[];
  className?: string;
};

/** Structured enterprise proof block for split hero (right rail). */
export default function HeroProofPanel({
  lines,
  className = "",
}: HeroProofPanelProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`surface-card relative overflow-hidden ${className}`}
      style={{ boxShadow: "var(--shadow-card-value), var(--shadow-panel-value)" }}
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="absolute bottom-0 left-0 top-0 w-1 bg-primary/30"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          className="absolute -right-12 -top-14 h-44 w-44 rounded-full bg-primary/10"
          animate={reduceMotion ? undefined : { x: [0, -8, 0], y: [0, 6, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-10 top-14 h-24 w-24 rounded-full border border-aqua/35 bg-aqua/10"
          animate={reduceMotion ? undefined : { x: [0, 6, 0], y: [0, -8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <svg className="absolute inset-x-0 top-0 h-40 w-full text-primary/10">
          <defs>
            <pattern id="proof-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#proof-grid)" />
        </svg>
      </div>
      <div className="border-border-subtle border-b px-6 py-5 pl-9 sm:px-8 sm:py-6 sm:pl-11">
        <p className="text-label text-ink-muted">At a glance</p>
        <p className="font-display mt-2 text-lg font-semibold tracking-tight text-ink sm:text-xl">
          Why firms engage Notetech
        </p>
      </div>
      <motion.ul
        className="divide-border-subtle divide-y"
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.45 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
        }}
      >
        {lines.map((line, i) => (
          <motion.li
            key={line.id}
            className="motion-interactive px-6 py-5 pl-9 transition-colors hover:bg-badge-soft/60 sm:px-8 sm:py-6 sm:pl-11"
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex gap-4">
              <span
                className="hidden w-6 shrink-0 pt-0.5 text-sm font-semibold tabular-nums text-primary/50 sm:block"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <p className="font-display text-base font-semibold tracking-tight text-ink sm:text-[1.0625rem]">
                  {line.headline}
                </p>
                <p className="text-ink-muted mt-2 text-sm leading-relaxed">
                  {line.supporting}
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
