"use client";

import type { ServiceDetail } from "@/data/services";
import {
  MOTION_DURATION_REVEAL,
  MOTION_EASE_STANDARD,
  MOTION_REVEAL_Y,
} from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type ServicesCardGridProps = {
  services: ServiceDetail[];
};

function excerpt(text: string, max = 150): string {
  const t = text.trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max).trim()}…`;
}

export default function ServicesCardGrid({
  services,
}: ServicesCardGridProps) {
  const reduceMotion = useReducedMotion();

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
      {services.map((s, index) => (
        <motion.div
          key={s.slug}
          className="h-full"
          custom={index}
          variants={{
            hidden: { opacity: 0, y: MOTION_REVEAL_Y },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: MOTION_DURATION_REVEAL,
            ease: MOTION_EASE_STANDARD,
          }}
        >
          <Link
            href={`/services/${s.slug}`}
            className="group motion-interactive block h-full overflow-hidden rounded-[var(--radius-card)] border border-stone-200/80 bg-[#f7f4ee] p-7 shadow-[var(--shadow-card-value)] hover:-translate-y-[2px] hover:border-primary/25 hover:shadow-[var(--shadow-card-hover-value)] lg:p-8"
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
                <div className="relative h-36 w-36 overflow-hidden rounded-full border border-stone-300/70 bg-[#efe9dd] shadow-[0_8px_18px_-12px_rgb(11_18_32_/_0.35)] sm:h-40 sm:w-40">
                  {s.imageSrc ? (
                    <Image
                      src={s.imageSrc}
                      alt={s.imageAlt ?? `${s.title} visual`}
                      fill
                      sizes="160px"
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    />
                  ) : (
                    <span
                      className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(30,115,190,0.22),rgba(30,115,190,0.06)_55%,transparent_78%)]"
                      aria-hidden
                    />
                  )}
                </div>
              </motion.div>

              <div className="mt-auto flex items-end justify-between gap-4 pt-10">
                <div className="min-w-0">
                  <h3 className="font-display text-[1.12rem] font-semibold tracking-tight text-slate-900 sm:text-[1.22rem]">
                    {s.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">
                    {excerpt(s.intro)}
                  </p>
                </div>

                <span
                  className="motion-interactive inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/22 bg-white/75 text-primary group-hover:border-primary/40 group-hover:bg-white"
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
      ))}
    </motion.div>
  );
}
