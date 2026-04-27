import CTASection from "@/components/home/CTASection";
import HomeSection from "@/components/home/HomeSection";
import SectionHeading from "@/components/home/SectionHeading";
import PageHero from "@/components/marketing/PageHero";
import VisualSlot from "@/components/visuals/VisualSlot";
import type { VisualSlotId } from "@/data/visualSlots";
import Image from "next/image";

export type DocCard = {
  title: string;
  body: string;
};

export type DocPageSection = {
  title: string;
  description?: string;
  bullets?: string[];
  cards?: DocCard[];
  columns?: 1 | 2 | 3;
};

export type DocPageData = {
  title: string;
  metaTitle?: string;
  metaDescription: string;
  headline: string;
  intro: string;
  parentLabel: string;
  parentHref: string;
  visualSlot: VisualSlotId;
  heroImageSrc?: string;
  heroImageObjectPosition?: string;
  /** Abstract images shown in alternating section cards. Cycles if fewer than sections. */
  sectionImages?: string[];
  sections: DocPageSection[];
  cta: {
    title: string;
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
        tone="beigePattern"
        contentMinHeightClassName={page.heroImageSrc ? "min-h-[18rem] sm:min-h-[21rem] lg:min-h-[24rem]" : ""}
        backgroundDecor={
          page.heroImageSrc ? (
            <div className="absolute -inset-y-[18%] -right-[2%] hidden w-[45%] overflow-hidden [clip-path:polygon(0_32%,100%_0,100%_68%,0_100%)] lg:block">
              <Image
                src={page.heroImageSrc}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className={`absolute inset-0 h-full w-full object-cover ${
                  page.heroImageObjectPosition ?? "object-[56%_50%]"
                } saturate-[0.92] contrast-[1.04]`}
              />
              <div className="absolute inset-0 bg-[linear-gradient(118deg,rgb(8_18_36/0.45)_0%,transparent_50%),linear-gradient(to_top,rgb(8_18_36/0.28)_0%,transparent_42%)]" />
            </div>
          ) : undefined
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
        <HomeSection tone="white" className="!bg-[#f6f2ea] py-16 lg:py-20">
          <div className="space-y-8 lg:space-y-10">
            {page.sections.map((section, index) => {
              const imgSrc = page.sectionImages![index % page.sectionImages!.length];
              const imageLeft = index % 2 === 0;
              return (
                <section
                  key={section.title}
                  className="overflow-hidden rounded-2xl bg-[#ede7d8] shadow-sm ring-1 ring-stone-300/60"
                >
                  <div className={`grid items-stretch lg:grid-cols-2 ${imageLeft ? "" : "lg:[&>*:first-child]:order-last"}`}>
                    {/* Image */}
                    <div className="relative aspect-[4/3] lg:aspect-auto">
                      <Image
                        src={imgSrc}
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center"
                      />
                    </div>
                    {/* Content */}
                    <div className="p-8 lg:p-12">
                      <h2 className="font-display text-2xl tracking-tight text-slate-900 lg:text-3xl">
                        {section.title}
                      </h2>
                      <div className="mb-6 mt-2 h-0.5 w-8 bg-[#46c3e6]" />
                      {section.description && (
                        <p className="mb-5 text-[0.97rem] leading-relaxed text-slate-600">
                          {section.description}
                        </p>
                      )}
                      {section.bullets?.length ? (
                        <ul className="space-y-3">
                          {section.bullets.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-slate-700">
                              <span className="mt-0.5 shrink-0 text-[0.65rem] font-bold tracking-[0.12em] text-[#081a35]">
                                {(i + 1).toString().padStart(2, "0")}
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {section.cards?.length ? (
                        <ul className="space-y-3">
                          {section.cards.map((card, i) => (
                            <li key={i} className="text-[0.95rem] leading-relaxed text-slate-700">
                              <span className="font-semibold text-slate-900">{card.title}: </span>
                              {card.body}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </section>
              );
            })}
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

                {section.bullets?.length ? (
                  <ul className="grid gap-3">
                    {section.bullets.map((item) => (
                      <li
                        key={item}
                        className="motion-interactive flex gap-3 rounded-[var(--radius-card)] border border-border-subtle bg-surface p-4 text-sm text-ink shadow-card"
                      >
                        <span className="text-primary mt-0.5 font-semibold" aria-hidden>
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            </HomeSection>
          ))}
        </>
      )}

      <HomeSection tone="patterned" className="pb-24 lg:pb-28">
        <CTASection
          variant="band"
          title={page.cta.title}
          description={page.cta.description}
          primaryLabel={page.cta.primaryLabel}
          primaryHref={page.cta.primaryHref}
          secondaryLabel={page.cta.secondaryLabel}
          secondaryHref={page.cta.secondaryHref}
          forcePrimaryButtons
        />
      </HomeSection>
    </>
  );
}
