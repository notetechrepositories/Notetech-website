"use client";

import type { LandingLink } from "@/data/navLandings";
import {
  MOTION_DURATION_REVEAL,
  MOTION_EASE_STANDARD,
  MOTION_REVEAL_Y,
} from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

type LandingLinksCardGridProps = {
  links: LandingLink[];
  circleImageByHref?: Record<string, string | StaticImageData>;
  variant?: "default" | "beigeInteractive";
};

const FALLBACK_CIRCLE_IMAGES = [
  "/imagery/services-network.jpg",
  "/imagery/technology-analytics.jpg",
  "/imagery/cta-circuit.jpg",
  "/imagery/hero-data-center.jpg",
  "/imagery/service-cloud-modernization.jpg",
  "/imagery/service-integrations-api.jpg",
];

export default function LandingLinksCardGrid({
  links,
  circleImageByHref,
  variant = "default",
}: LandingLinksCardGridProps) {
  const reduceMotion = useReducedMotion();
  const isBeigeInteractive = variant === "beigeInteractive";

  return (
    <motion.div
      className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-8"
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
      }}
    >
      {links.map((link, index) => {
        const circleImage =
          circleImageByHref?.[link.href] ??
          FALLBACK_CIRCLE_IMAGES[index % FALLBACK_CIRCLE_IMAGES.length];

        return (
        <motion.div
          key={link.href}
          className="h-full"
          variants={{
            hidden: { opacity: 0, y: MOTION_REVEAL_Y },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: MOTION_DURATION_REVEAL, ease: MOTION_EASE_STANDARD }}
        >
          <Link
            href={link.href}
            className={`group motion-interactive block h-full overflow-hidden rounded-[var(--radius-card)] p-7 shadow-[var(--shadow-card-value)] lg:p-8 ${
              isBeigeInteractive
                ? "border border-[#d3caba] bg-[#e5dfd3] hover:-translate-y-[2px] hover:border-[#4f76a8] hover:bg-[#4f76a8] hover:shadow-[var(--shadow-card-hover-value)] active:border-[#4f76a8] active:bg-[#4f76a8]"
                : "border border-stone-200/80 bg-[#f7f4ee] hover:-translate-y-[2px] hover:border-primary/25 hover:shadow-[var(--shadow-card-hover-value)]"
            }`}
          >
            <div className="flex h-full min-h-[20rem] flex-col">
              <motion.div
                className="mx-auto mt-1"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.88, y: 8 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.62,
                  ease: MOTION_EASE_STANDARD,
                  delay: reduceMotion ? 0 : 0.08 + index * 0.04,
                }}
              >
                <span
                  className="relative block h-36 w-36 overflow-hidden rounded-full border border-stone-300/70 bg-[#efe9dd] shadow-[0_8px_18px_-12px_rgb(11_18_32_/_0.35)] sm:h-40 sm:w-40"
                  aria-hidden
                >
                  <Image
                    src={circleImage}
                    alt=""
                    fill
                    sizes="160px"
                    className="object-cover opacity-[0.94] transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.32),rgba(30,115,190,0.04)_58%,rgba(11,18,32,0.22)_100%)]" />
                </span>
              </motion.div>

              <div className="mt-auto flex items-end justify-between gap-4 pt-10">
                <div className="min-w-0">
                  <h3
                    className={`font-display text-[1.12rem] font-semibold tracking-tight sm:text-[1.22rem] ${
                      isBeigeInteractive
                        ? "text-slate-900 group-hover:text-white group-active:text-white"
                        : "text-slate-900"
                    }`}
                  >
                    {link.title}
                  </h3>
                  <p
                    className={`mt-2 line-clamp-3 text-sm leading-relaxed ${
                      isBeigeInteractive
                        ? "text-slate-700 group-hover:text-white/85 group-active:text-white/85"
                        : "text-slate-600"
                    }`}
                  >
                    {link.description}
                  </p>
                </div>
                <span
                  className={`motion-interactive inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                    isBeigeInteractive
                      ? "border border-primary/22 bg-white/75 text-primary group-hover:border-white/35 group-hover:bg-white/15 group-hover:text-white group-active:border-white/35 group-active:bg-white/15 group-active:text-white"
                      : "border border-primary/22 bg-white/75 text-primary group-hover:border-primary/40 group-hover:bg-white"
                  }`}
                  aria-hidden
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12h13m-5-5 5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
        );
      })}
    </motion.div>
  );
}
