"use client";

import type { TrustChip as TrustChipType } from "@/data/homepage";
import TrustChip from "@/components/home/TrustChip";
import { motion, useReducedMotion } from "framer-motion";

type TrustChipsRowProps = {
  chips: TrustChipType[];
  className?: string;
};

export default function TrustChipsRow({
  chips,
  className = "",
}: TrustChipsRowProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.ul
      className={`flex flex-wrap gap-2.5 sm:gap-3 ${className}`}
      aria-label="Trust indicators"
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.65 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.07, delayChildren: 0.02 } },
      }}
    >
      {chips.map((chip) => (
        <motion.li
          key={chip.id}
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          whileHover={reduceMotion ? undefined : { y: -1 }}
        >
          <TrustChip>{chip.label}</TrustChip>
        </motion.li>
      ))}
    </motion.ul>
  );
}
