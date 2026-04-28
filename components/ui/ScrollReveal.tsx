"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up";
  delayMs?: number;
  distancePx?: number;
  once?: boolean;
};

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delayMs = 0,
  distancePx = 140,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry) return;

        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.22, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const hiddenTransform =
    direction === "left"
      ? `translateX(-${distancePx}px)`
      : direction === "right"
        ? `translateX(${distancePx}px)`
        : `translateY(${distancePx}px)`;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0,0,0)" : hiddenTransform,
        transition:
          "opacity 1200ms cubic-bezier(0.12,1,0.22,1), transform 1200ms cubic-bezier(0.12,1,0.22,1)",
        transitionDelay: `${delayMs}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
