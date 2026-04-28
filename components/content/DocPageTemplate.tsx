import HomeSection from "@/components/home/HomeSection";
import SectionHeading from "@/components/home/SectionHeading";
import PageHero from "@/components/marketing/PageHero";
import ExpandableHowWeWorkCard from "@/components/content/ExpandableHowWeWorkCard";
import Button from "@/components/ui/Button";
import VisualSlot from "@/components/visuals/VisualSlot";
import type { VisualSlotId } from "@/data/visualSlots";
import Image from "next/image";

export type DocCard = {
  title: string;
  body: string;
};

export type DocSubsection = {
  heading: string;
  bullets?: string[];
  note?: string;
};

export type DocPageSection = {
  title: string;
  description?: string;
  bullets?: string[];
  subsections?: DocSubsection[];
  cards?: DocCard[];
  columns?: 1 | 2 | 3;
};

export type DocPageData = {
  title: string;
  metaTitle?: string;
  metaDescription: string;
  headline: string;
  intro: string;
  contentHeading?: string;
  parentLabel: string;
  parentHref: string;
  visualSlot: VisualSlotId;
  heroImageSrc?: string;
  heroImageObjectPosition?: string;
  /** Abstract images shown in alternating section cards. Cycles if fewer than sections. */
  sectionImages?: string[];
  sections: DocPageSection[];
  cta: {
    title?: string;
    description?: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
};

type DocPageTemplateProps = {
  page: DocPageData;
};

const PHOTO_CARD_IMAGES = [
  "/imagery/companyPage/engagement.jpg",
  "/imagery/companyPage/leardeship.jpg",
  "/imagery/service-dedicated-team.jpg",
] as const;

/** Colour assigned to each known label. Falls back to navy. */
const LABEL_COLOURS: Record<string, string> = {
  "best for":           "text-black",
  "good when":          "text-black",
  "good when you need": "text-black",
  "across all models":  "text-black",
};

/**
 * Splits "Label: rest of text" and renders the label as a small
 * sub-heading line above the body text, matching the "How it works:"
 * heading style used in subsections.
 */
function LabelledText({ text }: { text: string }) {
  const colonIdx = text.indexOf(": ");
  if (colonIdx === -1) return <p className="text-[0.95rem] leading-relaxed text-slate-700">{text}</p>;

  const label = text.slice(0, colonIdx);
  const rest  = text.slice(colonIdx + 2);
  const colour = LABEL_COLOURS[label.toLowerCase()] ?? "text-[#8a745c]";

  return (
    <div>
      <p className={`mb-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] ${colour}`}>
        {label}
      </p>
      <p className="text-[0.95rem] leading-relaxed text-slate-700">{rest}</p>
    </div>
  );
}

export default function DocPageTemplate({ page }: DocPageTemplateProps) {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: page.parentLabel, href: page.parentHref },
          { label: page.title },
        ]}
        title={page.title}
        subtitle={page.headline}
        description={page.intro}
        tone="navy"
        contentMinHeightClassName="min-h-[6rem] sm:min-h-[7rem] lg:min-h-[8rem]"
        backgroundDecor={
          (
            <div className="absolute -inset-y-[18%] -right-[2%] hidden w-[45%] overflow-hidden [clip-path:polygon(0_32%,100%_0,100%_68%,0_100%)] lg:block">
              <Image
                src="/imagery/capabilities-banner.jpg"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className={`absolute inset-0 h-full w-full object-cover ${
                  page.heroImageObjectPosition ?? "object-[56%_50%]"
                } saturate-[0.92] contrast-[1.04]`}
              />
              <div className="absolute inset-0 bg-[linear-gradient(118deg,rgb(8_18_36/0.45)_0%,transparent_50%),linear-gradient(to_top,rgb(8_18_36/0.28)_0%,transparent_42%)]" />
            </div>
          )
        }
        aside={
          page.heroImageSrc ? undefined : (
            <VisualSlot
              slot={page.visualSlot}
              aspectClassName="aspect-[4/3] sm:aspect-[16/11]"
              sizes="(max-width: 1024px) 100vw, 520px"
            />
          )
        }
      />

      {page.sectionImages?.length ? (
        /* ── Card layout: beige bg, alternating image sides ── */
        <HomeSection tone="white" className="!bg-white py-16 lg:py-20">
          <div className="space-y-8 lg:space-y-10">
            {page.contentHeading ? (
              <div>
                <h2 className="font-display text-2xl tracking-tight text-slate-900 lg:text-3xl">
                  {page.contentHeading}
                </h2>
                <div className="mt-2 h-0.5 w-10 bg-[#46c3e6]" />
              </div>
            ) : null}
            <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {page.sections.map((section, index) => {
                const imgSrc = PHOTO_CARD_IMAGES[index % PHOTO_CARD_IMAGES.length];
                return (
                  <ExpandableHowWeWorkCard key={section.title} section={section} imgSrc={imgSrc} />
                );
              })}
            </div>
          </div>
        </HomeSection>
      ) : (
        /* ── Default layout: alternating white/patterned sections ── */
        <>
          {page.sections.map((section, index) => (
            <HomeSection
              key={section.title}
              tone={index % 2 === 0 ? "white" : "patterned"}
            >
              <section>
                <SectionHeading
                  title={section.title}
                  description={section.description}
                  spacing="compact"
                />

                {section.cards?.length ? (
                  <div
                    className={`grid gap-6 lg:gap-8 ${
                      section.columns === 3
                        ? "lg:grid-cols-3"
                        : section.columns === 2
                          ? "lg:grid-cols-2"
                          : ""
                    }`}
                  >
                    {section.cards.map((card) => (
                      <div key={card.title} className="surface-card p-7 lg:p-8">
                        <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
                        <p className="text-body-muted mt-3 text-sm leading-relaxed">
                          {card.body}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}

                {section.subsections?.length ? (
                  <div className="grid gap-6">
                    {section.subsections.map((sub, si) => (
                      <div key={si}>
                        <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-primary">
                          {sub.heading}
                        </p>
                        {sub.bullets?.length ? (
                          <ul className="grid gap-3">
                            {sub.bullets.map((item) => (
                              <li
                                key={item}
                                className="motion-interactive flex gap-3 rounded-[var(--radius-card)] border border-border-subtle bg-surface p-4 text-sm text-ink shadow-card"
                              >
                                <span className="text-primary mt-0.5 font-semibold" aria-hidden>
                                  —
                                </span>
                                <span className="whitespace-pre-line">{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                        {sub.note && (
                          <div className="mt-3">
                            <LabelledText text={sub.note} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : section.bullets?.length ? (
                  <ul className="grid gap-3">
                    {section.bullets.map((item) => (
                      <li
                        key={item}
                        className="motion-interactive flex gap-3 rounded-[var(--radius-card)] border border-border-subtle bg-surface p-4 text-sm text-ink shadow-card"
                      >
                        <span className="text-primary mt-0.5 font-semibold" aria-hidden>
                          —
                        </span>
                        <span className="whitespace-pre-line">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            </HomeSection>
          ))}
        </>
      )}

      <HomeSection tone="white" className="!bg-white pb-16 lg:pb-20">
        <section className="rounded-2xl bg-[#f7faff] p-8 text-center shadow-sm ring-1 ring-[#c9d9ee] lg:p-12">
          {page.cta.title && (
            <h2 className="font-display mb-4 text-2xl font-semibold tracking-tight text-slate-900">
              {page.cta.title}
            </h2>
          )}
          {page.cta.description && (
            <p className="mx-auto mb-8 max-w-xl text-[0.97rem] leading-relaxed text-slate-600">
              {page.cta.description}
            </p>
          )}
          <div className="flex flex-wrap justify-center gap-3">
            <Button href={page.cta.primaryHref} variant="primary" className="px-6">
              {page.cta.primaryLabel}
            </Button>
            {page.cta.secondaryLabel && page.cta.secondaryHref && (
              <Button href={page.cta.secondaryHref} variant="primary" className="px-6">
                {page.cta.secondaryLabel}
              </Button>
            )}
          </div>
        </section>
      </HomeSection>
    </>
  );
}
