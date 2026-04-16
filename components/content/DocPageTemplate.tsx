import CTASection from "@/components/home/CTASection";
import HomeSection from "@/components/home/HomeSection";
import SectionHeading from "@/components/home/SectionHeading";
import PageHero from "@/components/marketing/PageHero";
import VisualSlot from "@/components/visuals/VisualSlot";
import type { VisualSlotId } from "@/data/visualSlots";

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
        aside={
          <VisualSlot
            slot={page.visualSlot}
            aspectClassName="aspect-[4/3] sm:aspect-[16/11]"
            sizes="(max-width: 1024px) 100vw, 520px"
          />
        }
      />

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

      <HomeSection tone="white">
        <div className="surface-card overflow-hidden border-primary/12">
          <VisualSlot
            slot="architecture"
            aspectClassName="h-44 sm:h-56"
            sizes="(max-width: 1024px) 100vw, 1100px"
            showEyebrow={false}
          />
        </div>
      </HomeSection>

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
