"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import {
  MOTION_DURATION_HERO_IMAGE,
  MOTION_DURATION_REVEAL,
  MOTION_EASE_STANDARD,
  MOTION_REVEAL_Y,
} from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";

type PageHeroProps = {
  headline: string;
  subhead: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  backgroundImage?: string;
};

export default function PageHero({
  headline,
  subhead,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  backgroundImage = "/imagery/hero-enterprise-city.jpg",
}: PageHeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="hero" className="scroll-mt-20">
      <div className="relative isolate min-h-[78vh] overflow-hidden bg-navy text-white sm:min-h-[82vh] lg:min-h-[88vh]">
        <motion.img
          src={backgroundImage}
          alt="Modern office towers"
          className="absolute inset-0 h-full w-full object-cover saturate-[0.7] brightness-[0.52]"
          initial={reduceMotion ? false : { scale: 1.05 }}
          animate={reduceMotion ? undefined : { scale: 1 }}
          transition={
            reduceMotion
              ? undefined
              : { duration: MOTION_DURATION_HERO_IMAGE, ease: MOTION_EASE_STANDARD }
          }
        />
        {/* Single overlay to keep image visible while preserving text readability */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(8,18,38,0.93)_0%,rgba(8,18,38,0.88)_36%,rgba(8,18,38,0.78)_64%,rgba(8,18,38,0.7)_100%)]"
          aria-hidden
        />

        <Container className="relative z-10 flex min-h-[78vh] items-center sm:min-h-[82vh] lg:min-h-[88vh]">
          <motion.div
            className="w-full max-w-3xl pt-14 sm:pt-18 lg:pt-20"
            initial={reduceMotion ? false : { opacity: 0, y: MOTION_REVEAL_Y }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={
              reduceMotion
                ? undefined
                : { duration: MOTION_DURATION_REVEAL, ease: MOTION_EASE_STANDARD, delay: 0.08 }
            }
          >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/75">
             
            </p>

            <h1 className="mt-5 text-[2.25rem] font-semibold leading-[1.02] tracking-tight text-white sm:mt-6 sm:text-[3rem] lg:text-[4.25rem]">
              {headline}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/82 sm:text-[1.05rem] sm:leading-8 lg:text-[1.1rem]">
              {subhead}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
              <Button
                href={primaryHref}
                variant="primary"
                className="min-h-12 w-full rounded-none bg-[#e31837] px-8 py-3 text-[0.82rem] font-semibold uppercase tracking-[0.08em] hover:bg-[#c9132f] focus-visible:ring-white/35 focus-visible:ring-offset-navy sm:w-auto"
              >
                {primaryLabel}
              </Button>
              {secondaryLabel && secondaryHref ? (
                <Button
                  href={secondaryHref}
                  variant="primary"
                  className="min-h-12 w-full rounded-none px-8 py-3 text-[0.82rem] font-semibold uppercase tracking-[0.08em] focus-visible:ring-white/35 focus-visible:ring-offset-navy sm:w-auto"
                >
                  {secondaryLabel}
                </Button>
              ) : null}
            </div>
          </motion.div>
        </Container>

        {/* Optional right-side slider indicators */}
        <div className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-4 lg:flex">
          <span className="h-8 w-[2px] bg-white/30" />
          <span className="h-8 w-[2px] bg-white" />
          <span className="h-8 w-[2px] bg-white/30" />
          <span className="h-8 w-[2px] bg-white/30" />
        </div>
      </div>
    </section>
  );
}