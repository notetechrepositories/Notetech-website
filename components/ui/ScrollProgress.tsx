"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 28,
    mass: 0.2,
  });

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[120] h-0.5 bg-transparent">
      <motion.div
        className="h-full origin-left bg-primary shadow-[0_0_10px_rgb(30_115_190/0.45)]"
        style={{ scaleX }}
      />
    </div>
  );
}
