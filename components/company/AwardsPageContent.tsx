"use client";

import HomeSection from "@/components/home/HomeSection";
import PageHero from "@/components/marketing/PageHero";
import Button from "@/components/ui/Button";
import type { DocPageData } from "@/components/content/DocPageTemplate";
import TechPhoto from "@/components/visuals/TechPhoto";
import { useEffect, useMemo, useRef, useState } from "react";

type AwardsPageContentProps = {
  page: DocPageData;
};

type AwardYearGroup = {
  year: string;
  entries: string[];
};

const highlights = [
  "Multiple IBM PartnerWorld® Beacon Awards (Winners + Finalists)",
  "Multiple IBM Lotus Awards (Winners + Finalists)",
  "Recognitions at Lotusphere Showcase and Lotus Advisor awards",
];

function HighlightCardIcon({ index }: { index: number }) {
  const svg = "h-5 w-5 shrink-0";
  const mod = index % 3;
  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15"
      aria-hidden
    >
      {mod === 0 ? (
        <svg className={svg} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      ) : null}
      {mod === 1 ? (
        <svg className={svg} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ) : null}
      {mod === 2 ? (
        <svg className={svg} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
          />
        </svg>
      ) : null}
    </span>
  );
}

const awardsTimeline: AwardYearGroup[] = [
  {
    year: "2002",
    entries: [
      "Lotus Advisor \u201cEditor\u2019s Choice\u201d \u2014 Best CRM (Winner) \u2014 iExtensions CRM",
      "Lotus Advisor Excellence Award \u2014 Domino 6 Multilingual CRM (Winner) \u2014 iExtensions CRM",
    ],
  },
  {
    year: "2003",
    entries: [
      "Lotusphere Showcase Award \u2014 Best in Showcase (Winner) \u2014 iExtensions CRM",
      "Lotus Beacon Award \u2014 Best Collaborative Solution (Finalist) \u2014 (as listed by client)",
      "Gold Lotus Advisor \u201cEditor\u2019s Choice\u201d \u2014 Best Business Solution (Winner) \u2014 iExtensions CRM",
    ],
  },
  {
    year: "2004",
    entries: [
      "Lotusphere Showcase Award \u2014 Best in Showcase (Finalist) \u2014 iExtensions CRM",
      "Apex Award \u2014 Readers\u2019 Choice (Finalist) \u2014 (as listed by client)",
    ],
  },
  {
    year: "2005",
    entries: [
      "Gold Lotus Advisor \u201cGold Editor\u2019s Choice\u201d \u2014 CRM Solutions (Winner) \u2014 CRM on the Go",
      "IBM PartnerWorld\u00ae Beacon Award \u2014 Best Lotus Solution (Winner) \u2014 iExtensions CRM",
      "Lotusphere Showcase Award \u2014 Best in Showcase (Winner) \u2014 iExtensions CRM",
      "IBM Lotus Award \u2014 Best Collaborative Solution (Winner) \u2014 iExtensions CRM",
    ],
  },
  {
    year: "2006",
    entries: [
      "IBM PartnerWorld\u00ae Beacon Award \u2014 Best SOA Solution (Winner) \u2014 CRM on the Go",
    ],
  },
  {
    year: "2007",
    entries: [
      "IBM PartnerWorld\u00ae Beacon Award \u2014 Best Industry-Optimized Solution (Finalist) \u2014 iExtensions CRM",
    ],
  },
  {
    year: "2008",
    entries: [
      "IBM Beacon Award \u2014 Best Cross-Industry Solution (Winner) \u2014 iExtensions CRM",
      "Lotus Award \u2014 Best Composite Application (Finalist) \u2014 iExtensions CRM",
    ],
  },
  {
    year: "2009",
    entries: [
      "IBM Beacon Award \u2014 Outstanding Information On Demand Solution (Finalist) \u2014 iExtensions CRM",
      "IBM Lotus Award \u2014 Best Mid-Market Solution (Winner) \u2014 iExtensions CRM",
      "Lotus Awards \u2014 Best Tool/Utility (Finalist) \u2014 Mobile Edge",
    ],
  },
  {
    year: "2010",
    entries: [
      "Lotus Award \u2014 Best End-User Solution (Finalist) \u2014 iExtensions CRM",
    ],
  },
  {
    year: "2011",
    entries: [
      "IBM Lotus Award \u2014 Mobile & Tablet Applications (Winner) \u2014 Mobile Edge",
    ],
  },
];

export default function AwardsPageContent({ page }: AwardsPageContentProps) {
  /** One ref map for year blocks — single DOM stack so IO works on all breakpoints */
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [activeYear, setActiveYear] = useState(awardsTimeline[0].year);
  const years = useMemo(() => awardsTimeline.map((group) => group.year), []);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let cancelled = false;
    let pickRaf = 0;
    let didInitialCommit = false;
    let pendingYear: string | null = null;
    let stableFrames = 0;

    const pickActiveYearFromViewport = () => {
      pickRaf = 0;
      if (cancelled) return;

      const viewportMid = window.innerHeight / 2;
      const vh = window.innerHeight;

      let contained: HTMLElement | null = null;
      let fallback: { el: HTMLElement; dist: number } | null = null;

      for (const y of years) {
        const el = sectionRefs.current[y];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.height <= 0) continue;
        const overlapsViewport = rect.bottom > 0 && rect.top < vh;
        if (!overlapsViewport) continue;

        if (rect.top <= viewportMid && rect.bottom >= viewportMid) {
          contained = el;
          break;
        }

        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - viewportMid);
        if (!fallback || dist < fallback.dist) {
          fallback = { el, dist };
        }
      }

      const chosen = contained ?? fallback?.el ?? null;
      const yearAttr = chosen?.getAttribute("data-year");
      if (!yearAttr) return;

      if (!didInitialCommit) {
        didInitialCommit = true;
        pendingYear = yearAttr;
        stableFrames = 2;
        setActiveYear((prev) => (prev === yearAttr ? prev : yearAttr));
        return;
      }

      if (yearAttr === pendingYear) {
        stableFrames += 1;
      } else {
        pendingYear = yearAttr;
        stableFrames = 1;
      }

      if (stableFrames >= 2) {
        setActiveYear((prev) => (prev === pendingYear ? prev : pendingYear!));
      }
    };

    const schedulePick = () => {
      if (pickRaf !== 0) return;
      pickRaf = window.requestAnimationFrame(pickActiveYearFromViewport);
    };

    const frame = window.requestAnimationFrame(() => {
      if (cancelled) return;

      const sections = years
        .map((y) => sectionRefs.current[y])
        .filter((el): el is HTMLElement => Boolean(el));

      if (!sections.length) return;

      observer = new IntersectionObserver(schedulePick, {
        root: null,
        rootMargin: "-38% 0px -38% 0px",
        threshold: [0, 0.08, 0.15, 0.25, 0.35, 0.5, 0.65, 0.8, 1],
      });

      sections.forEach((el) => observer!.observe(el));
      schedulePick();
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
      if (pickRaf !== 0) window.cancelAnimationFrame(pickRaf);
      observer?.disconnect();
    };
  }, [years]);

  const activeIndex = useMemo(() => years.indexOf(activeYear), [years, activeYear]);

  const introParagraphs = useMemo(
    () =>
      page.intro
        .split(/\n\n+/)
        .map((s) => s.trim())
        .filter(Boolean),
    [page.intro],
  );

  const DRUM_SLOT = 8; // rem — height of each year slot in the drum

  const scrollToYear = (year: string) => {
    sectionRefs.current[year]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: page.parentLabel, href: page.parentHref },
          { label: page.title },
        ]}
        title={page.title}
        subtitle={undefined}
        description={undefined}
        tone="navy"
        contentMinHeightClassName="min-h-[6rem] sm:min-h-[7rem] lg:min-h-[8rem]"
      />

      <HomeSection
        tone="white"
        className="!bg-white py-10 lg:py-12"
        disableAnimation
      >
        <div className="border border-border-subtle bg-[#f8f8f6] p-8 shadow-[0_18px_42px_-16px_rgba(11,18,32,0.45)]">
          <section className="lg:grid lg:grid-cols-2 lg:gap-10 lg:items-start xl:gap-12">
            <div>
              <h2 className="font-display text-4xl tracking-tight text-headline lg:text-[2.7rem] lg:leading-[1.08]">
                {page.headline}
              </h2>
              <div className="mt-4 max-w-4xl space-y-4 text-[1.02rem] leading-[1.75] text-body">
                {introParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={page.cta.primaryHref} variant="primary" className="px-6">
                  {page.cta.primaryLabel}
                </Button>
                {page.cta.secondaryLabel && page.cta.secondaryHref ? (
                  <Button href={page.cta.secondaryHref} variant="primary" className="px-6">
                    {page.cta.secondaryLabel}
                  </Button>
                ) : null}
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <TechPhoto
                src="/imagery/awards-trophy.png"
                alt="Awards and industry recognition"
                aspectClassName="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, 480px"
                className="rounded-xl ring-1 ring-[#e2e8f0]/80 shadow-[0_10px_28px_-20px_rgba(9,24,47,0.35)]"
              />
            </div>
          </section>

          <section className="mt-10 border-t border-[#e2e8f0] pt-10 lg:mt-12 lg:pt-12">
            <div className="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.07] via-white to-slate-50/70 px-6 py-7 shadow-[0_8px_32px_-16px_rgb(30_115_190_/_0.11)] sm:px-8 sm:py-8 lg:px-10 lg:py-9">
              <header className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  At a glance
                </p>
                <h3 className="font-display text-[2rem] tracking-tight text-headline">
                  <span className="relative inline-block pb-1.5">
                    Highlights
                    <span
                      className="absolute bottom-0 left-0 h-0.5 w-10 rounded-full bg-primary/80"
                      aria-hidden
                    />
                  </span>
                </h3>
              </header>
              <div className="mt-6 grid gap-5 lg:grid-cols-3 lg:gap-6">
                {highlights.map((item, index) => (
                  <article
                    key={item}
                    className="flex items-start gap-4 rounded-xl border border-slate-200/90 border-l-[3px] border-l-primary/65 bg-white/90 p-5 shadow-[0_6px_24px_-12px_rgb(30_115_190_/_0.07)] backdrop-blur-sm transition-shadow duration-200 sm:p-6 lg:hover:shadow-md"
                  >
                    <HighlightCardIcon index={index} />
                    <p className="min-w-0 pt-0.5 text-[1.02rem] leading-relaxed text-body">{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-10 border-t border-[#e2e8f0] pt-10 lg:mt-12 lg:pt-12">
            <h3 className="font-display text-[2rem] tracking-tight text-headline">
              Awards & Recognition (Client Products Developed with Notetech)
            </h3>

            {/* Scroll-driven timeline: sticky years + tall blocks; IO updates active year */}
            <div className="mt-8 rounded-xl border border-[#e2e8f0] bg-white shadow-[0_10px_28px_-20px_rgba(9,24,47,0.4)] [overflow-x:clip]">
              {/* Mobile: horizontal sticky year selector */}
              <div
                className="sticky top-20 z-20 flex gap-2 overflow-x-auto border-b border-[#e2e8f0] bg-[#fafbfc]/95 px-4 py-3 backdrop-blur-sm [-ms-overflow-style:none] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden"
                aria-label="Award years"
              >
                {years.map((year) => (
                  <button
                    key={year}
                    type="button"
                    aria-current={activeYear === year ? "true" : undefined}
                    aria-controls={`awards-year-${year}`}
                    id={`awards-year-m-${year}`}
                    onClick={() => scrollToYear(year)}
                    className={`shrink-0 rounded-full px-4 py-2 font-display text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2 ${
                      activeYear === year
                        ? "bg-[#1d4ed8] text-white shadow-sm"
                        : "bg-white text-[#94a3b8] ring-1 ring-[#e2e8f0] hover:bg-[#f1f5f9] hover:text-[#64748b]"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>

              <div className="lg:grid lg:min-h-0 lg:grid-cols-[380px_1fr] lg:items-start">
                {/* Desktop: ruler + slot-machine drum year display */}
                <div className="hidden lg:sticky lg:top-24 lg:flex lg:self-start lg:items-center lg:gap-1 lg:border-r lg:border-[#e2e8f0] lg:px-4 lg:py-8">
                  {/* Ruler: one clickable tick per year */}
                  <nav className="flex flex-col items-end gap-[5px]" aria-label="Award years">
                    {years.map((year) => (
                      <button
                        key={year}
                        type="button"
                        aria-current={activeYear === year ? "true" : undefined}
                        aria-controls={`awards-year-${year}`}
                        id={`awards-year-d-${year}`}
                        onClick={() => scrollToYear(year)}
                        className={`block h-[2px] rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] ${
                          activeYear === year
                            ? "w-7 bg-[#1d4ed8]"
                            : "w-3 bg-[#cbd5e1] hover:w-5 hover:bg-[#94a3b8]"
                        }`}
                        aria-label={`Go to year ${year}`}
                      />
                    ))}
                  </nav>

                  {/* Drum: slot-machine year wheel */}
                  <div
                    className="relative overflow-hidden"
                    style={{ height: `${DRUM_SLOT * 3}rem` }}
                    aria-hidden="true"
                  >
                    <div
                      className="will-change-transform transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateY(${-activeIndex * DRUM_SLOT}rem)` }}
                    >
                      {/* leading padding so first year centres at translateY(0) */}
                      <div style={{ height: `${DRUM_SLOT}rem` }} />
                      {years.map((year, i) => (
                        <div
                          key={year}
                          style={{ height: `${DRUM_SLOT}rem` }}
                          className="flex items-center"
                        >
                          <span
                            className={`font-display font-bold leading-none select-none text-[6.5rem] origin-left will-change-transform transition-[transform,opacity,color] duration-500 ease-in-out ${
                              year === activeYear
                                ? "scale-100 opacity-100 text-[#1d4ed8]"
                                : Math.abs(i - activeIndex) === 1
                                  ? "scale-[0.70] opacity-75 text-[#dde6ef]"
                                  : "scale-[0.55] opacity-0 text-[#edf1f6]"
                            }`}
                          >
                            {year}
                          </span>
                        </div>
                      ))}
                      {/* trailing padding */}
                      <div style={{ height: `${DRUM_SLOT}rem` }} />
                    </div>

                    {/* Decorative circle centred on the active slot */}
                    <div
                      className="pointer-events-none absolute rounded-full border border-[#d1d9e6]"
                      style={{
                        width: `${DRUM_SLOT * 1.5}rem`,
                        height: `${DRUM_SLOT * 1.5}rem`,
                        top: `calc(50% - ${DRUM_SLOT * 0.75}rem)`,
                        left: `-${DRUM_SLOT * 0.25}rem`,
                      }}
                    />
                  </div>
                </div>

                {/* One stack of year blocks — drives scroll + IntersectionObserver */}
                <div className="divide-y divide-[#e2e8f0]">
                  {awardsTimeline.map((group) => (
                    <article
                      key={group.year}
                      id={`awards-year-${group.year}`}
                      ref={(el) => {
                        sectionRefs.current[group.year] = el;
                      }}
                      data-year={group.year}
                      aria-label={`Awards and recognition in ${group.year}`}
                      className={`flex min-h-[10rem] flex-col px-6 py-8 transition-colors duration-300 lg:px-10 lg:py-12 ${
                        activeYear === group.year ? "bg-[#f0f6ff]" : "bg-white"
                      }`}
                    >
                      <p className="mb-4 text-base font-bold uppercase tracking-[0.12em] text-[#1d4ed8] lg:mb-5 lg:text-lg">
                        {group.year}
                      </p>
                      <ul className="max-w-none space-y-4 lg:space-y-5">
                        {group.entries.map((entry) => (
                          <li
                            key={`${group.year}-${entry}`}
                            className="flex items-start gap-3 text-[1.05rem] leading-[1.75] text-body lg:text-[1.125rem] lg:leading-[1.8]"
                          >
                            <span
                              className="mt-[0.5em] block h-2 w-2 shrink-0 rounded-full bg-[#1d4ed8]"
                              aria-hidden
                            />
                            {entry}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 border-t border-[#e2e8f0] pt-10 lg:mt-12 lg:pt-12">
            <div className="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] via-white to-slate-50/70 px-6 py-7 shadow-[0_8px_32px_-16px_rgb(30_115_190_/_0.1)] sm:px-8 sm:py-8 lg:px-10 lg:py-9">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                For clients
              </p>
              <h3 className="mt-2 font-display text-[2rem] tracking-tight text-headline">
                What this means for clients today
              </h3>
              <div className="mt-5 max-w-3xl space-y-4 text-[1.02rem] leading-[1.75] text-body">
                <p>
                  Recognition is not the goal—reliable delivery is. These awards reflect the discipline required to ship software that customers adopt and that organizations stand behind.
                </p>
                <p>
                  If you&apos;re looking for an offshore partner that delivers measurable results—not just code—let&apos;s talk. We&apos;ll share relevant case studies and propose a team model aligned to your product roadmap.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={page.cta.primaryHref} variant="primary" className="px-6">
                  {page.cta.primaryLabel}
                </Button>
                <Button href="/contact" variant="primary" className="px-6">
                  Contact Us
                </Button>
              </div>
              <div className="mt-6 border-t border-slate-200/90 pt-5">
                <p className="max-w-3xl text-sm italic leading-relaxed text-body">
                  Some project details and references can be shared under NDA depending on client confidentiality.
                </p>
              </div>
            </div>
          </section>
        </div>
      </HomeSection>
    </>
  );
}
