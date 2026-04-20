import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import ConfidentialityNote from "@/components/home/ConfidentialityNote";
import CTASection from "@/components/home/CTASection";
import HighlightBlock from "@/components/home/HighlightBlock";
import HomeSection from "@/components/home/HomeSection";
import PageHero from "@/components/home/PageHero";
import SectionHeading from "@/components/home/SectionHeading";
import ServiceCard from "@/components/home/ServiceCard";
import Button from "@/components/ui/Button";
import VisualSlot from "@/components/visuals/VisualSlot";
import type { Metadata } from "next";
import Image from "next/image";
import {
  homeAwards,
  homeBusinessModelIp,
  homeCaseStudiesSection,
  homeFeaturedCaseStudies,
  homeFinalCta,
  homeHero,
  homeNotableOutcome,
  homeProductHighlight,
  homeTechnologyTeaser,
  homeWhatWeDo,
  homeWhoWeWorkWith,
  homeWhyNotetech,
} from "@/data/homepage";

export const metadata: Metadata = {
  title: "Dedicated teams for predictable product delivery",
  description: homeHero.subhead,
  openGraph: {
    title: "Notetech · Dedicated development teams for predictable delivery",
    description: homeHero.subhead,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <PageHero
        headline={homeHero.headline}
        subhead={homeHero.subhead}
        primaryLabel={homeHero.ctas.primaryLabel}
        primaryHref={homeHero.ctas.primaryHref}
        secondaryLabel={homeHero.ctas.secondaryLabel}
        secondaryHref={homeHero.ctas.secondaryHref}
        backgroundImage={homeHero.backgroundImage}
      />

      <HomeSection id={homeWhatWeDo.sectionId} tone="white">
        <SectionHeading
          title={homeWhatWeDo.title}
          description={homeWhatWeDo.intro}
          spacing="compact"
        />
        <p className="text-label text-ink-muted mt-3">
          {homeWhatWeDo.coreServicesLabel}
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-8">
          {homeWhatWeDo.services.map((s) => (
            <ServiceCard
              key={s.id}
              title={s.title}
              href={s.href}
              description={s.description}
              imageSrc={s.imageSrc}
              imageAlt={s.imageAlt}
            />
          ))}
        </div>
        <div className="mt-12 flex justify-center lg:mt-14">
          <Button
            href={homeWhatWeDo.cta.href}
            variant="primary"
            className="min-h-11 px-7"
          >
            {homeWhatWeDo.cta.label}
          </Button>
        </div>
      </HomeSection>

      <HomeSection id={homeWhoWeWorkWith.sectionId} tone="patterned">
        <SectionHeading title={homeWhoWeWorkWith.title} />
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {homeWhoWeWorkWith.audiences.map((a) => (
            <HighlightBlock key={a.id} variant="accent">
              {"imageSrc" in a && typeof a.imageSrc === "string" ? (
                <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-[var(--radius-card)] border border-primary/10 bg-surface-muted">
                  <Image
                    src={a.imageSrc}
                    alt={"imageAlt" in a && typeof a.imageAlt === "string" ? a.imageAlt : `${a.title} visual`}
                    fill
                    sizes="(max-width: 768px) 100vw, 48vw"
                    className="object-cover"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent" />
                </div>
              ) : null}
              <h3 className="text-lg font-semibold text-ink">{a.title}</h3>
              <p className="text-body-muted mt-2 text-sm">{a.description}</p>
            </HighlightBlock>
          ))}
        </div>
        <p className="text-ink-muted mx-auto mt-10 max-w-3xl text-center text-sm font-medium">
          Regions: {homeWhoWeWorkWith.regions}
        </p>
      </HomeSection>

      <HomeSection id={homeWhyNotetech.sectionId} tone="white">
        <SectionHeading title={homeWhyNotetech.title} />
        <ul className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {homeWhyNotetech.points.map((p) => (
            <li
              key={p.id}
              className="surface-card motion-interactive group flex flex-col gap-4 overflow-hidden border border-primary/10 bg-surface p-4 transition-colors duration-300 ease-out hover:border-[#e6dccd] hover:bg-[#f7f2ea] active:border-[#e6dccd] active:bg-[#f7f2ea] lg:p-5"
            >
              {"imageSrc" in p && typeof p.imageSrc === "string" ? (
                <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-card)] border border-primary/10 bg-surface-muted">
                  <Image
                    src={p.imageSrc}
                    alt={"imageAlt" in p && typeof p.imageAlt === "string" ? p.imageAlt : "Why Notetech visual"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 48vw, 33vw"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent transition-colors duration-300 group-hover:from-[#a89273]/22" />
                </div>
              ) : null}
              <div className="flex gap-4">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[var(--radius-card)] border border-primary/20 bg-primary text-[11px] font-bold text-white transition-colors duration-300 group-hover:border-[#d0bfa8] group-hover:bg-[#efe5d6] group-hover:text-[#7a6548]"
                  aria-hidden
                >
                  ✓
                </span>
                <span className="text-sm font-medium leading-relaxed text-ink transition-colors duration-300 group-hover:text-[#7a6548]">
                  {p.text}
                </span>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center">
          <Button
            href={homeWhyNotetech.cta.href}
            variant="primary"
            className="min-h-11 px-7"
          >
            {homeWhyNotetech.cta.label}
          </Button>
        </div>
      </HomeSection>

      <HomeSection id={homeBusinessModelIp.sectionId} tone="patterned">
        <SectionHeading
          title={homeBusinessModelIp.title}
          eyebrow={homeBusinessModelIp.subtitle}
        />
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {homeBusinessModelIp.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="surface-card motion-interactive p-7 lg:p-8"
            >
              <h3 className="text-lg font-semibold text-ink">{pillar.title}</h3>
              <p className="text-body-muted mt-3 text-sm">{pillar.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href={homeBusinessModelIp.cta.href} variant="primary" className="min-h-11 px-7">
            {homeBusinessModelIp.cta.label}
          </Button>
        </div>
      </HomeSection>

      <HomeSection id={homeNotableOutcome.sectionId} tone="white">
        <SectionHeading title={homeNotableOutcome.title} />
        <HighlightBlock variant="accent">
          <p className="text-label text-ink">{homeNotableOutcome.badge}</p>
          <p className="text-body-muted mt-4 text-base">{homeNotableOutcome.body}</p>
        </HighlightBlock>
      </HomeSection>

      <HomeSection id={homeCaseStudiesSection.sectionId} tone="patterned">
        <SectionHeading
          title={homeCaseStudiesSection.title}
          eyebrow={homeCaseStudiesSection.subtitle}
        />
        <div className="border-primary/12 relative mt-8 overflow-hidden rounded-[var(--radius-hero)] border bg-surface shadow-[var(--shadow-card-hover-value)] sm:mt-10">
          <VisualSlot
            slot="case-studies"
            aspectClassName="h-44 sm:h-52 max-h-[13rem] sm:max-h-[16rem]"
            sizes="(max-width: 1024px) 100vw, 900px"
            showTags={false}
          />
          <div className="absolute inset-y-0 left-0 flex max-w-md items-end p-5 sm:p-7">
            <p className="text-sm leading-relaxed text-navy-foreground/90 sm:text-[0.95rem]">
              Representative enterprise engagements across modernization, integration, and product-scale delivery.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-3 lg:gap-8">
          {homeFeaturedCaseStudies.map((cs) => (
            <CaseStudyCard
              key={cs.id}
              title={cs.title}
              summary={cs.summary}
              stack={cs.stack}
              outcome={cs.outcome}
              href={`/case-studies/${cs.slug}`}
              ndaSafe={cs.ndaSafePresentation}
            />
          ))}
        </div>
        <ConfidentialityNote className="mt-12 lg:mt-14">
          {homeCaseStudiesSection.confidentialityNote}
        </ConfidentialityNote>
        <div className="mt-10 flex justify-center lg:mt-12">
          <Button
            href={homeCaseStudiesSection.viewAllHref}
            variant="primary"
            className="min-h-11 px-7"
          >
            {homeCaseStudiesSection.viewAllLabel}
          </Button>
        </div>
      </HomeSection>

      <HomeSection id={homeAwards.sectionId} tone="white">
        <SectionHeading
          title={homeAwards.title}
          align="center"
          subtitle={homeAwards.headline}
          description={homeAwards.body}
        />
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <ConfidentialityNote className="w-full text-center">
            {homeAwards.confidentialityNote}
          </ConfidentialityNote>
          <div className="mt-8 flex justify-center">
            <Button href={homeAwards.cta.href} variant="primary" className="min-h-11 px-7">
              {homeAwards.cta.label}
            </Button>
          </div>
        </div>
      </HomeSection>

      <HomeSection id={homeTechnologyTeaser.sectionId} tone="patterned">
        <SectionHeading
          eyebrow={homeTechnologyTeaser.title}
          subtitle={homeTechnologyTeaser.subtitle}
          title={homeTechnologyTeaser.headline}
          description={homeTechnologyTeaser.body}
          spacing="compact"
        />
        <div className="mt-10">
          <div className="mx-auto max-w-3xl">
            <div className="relative overflow-hidden rounded-[var(--radius-hero)] border border-primary/12 bg-surface shadow-[var(--shadow-card-value)]">
              <VisualSlot
                slot="technology"
                aspectClassName="aspect-[16/10]"
                sizes="(max-width: 1024px) 100vw, 920px"
                showEyebrow={false}
              />
            </div>
            <div className="mt-8 flex justify-center">
              <Button href={homeTechnologyTeaser.cta.href} variant="primary">
                {homeTechnologyTeaser.cta.label}
              </Button>
            </div>
          </div>
        </div>
      </HomeSection>

      <HomeSection id={homeProductHighlight.sectionId} tone="white">
        <SectionHeading title={homeProductHighlight.title} />
        <HighlightBlock>
          <h3 className="text-xl font-semibold text-ink">
            {homeProductHighlight.productName}
          </h3>
          <p className="text-body-muted mt-3 max-w-2xl">
            {homeProductHighlight.description}
          </p>
          <div className="mt-6 flex justify-center">
            <Button
              href={homeProductHighlight.ctaHref}
              variant="primary"
              external
            >
              {homeProductHighlight.ctaLabel} ↗
            </Button>
          </div>
        </HighlightBlock>
      </HomeSection>

      <HomeSection id={homeFinalCta.sectionId} tone="patterned" className="pb-24 lg:pb-28">
        <CTASection
          variant="band"
          title={homeFinalCta.title}
          description={homeFinalCta.body}
          primaryLabel={homeFinalCta.ctas.primaryLabel}
          primaryHref={homeFinalCta.ctas.primaryHref}
          secondaryLabel={homeFinalCta.ctas.secondaryLabel}
          secondaryHref={homeFinalCta.ctas.secondaryHref}
          forcePrimaryButtons
          footnote={homeFinalCta.responseNote}
        />
      </HomeSection>
    </>
  );
}
