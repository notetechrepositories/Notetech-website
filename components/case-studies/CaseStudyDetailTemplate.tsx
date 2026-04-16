import CTASection from "@/components/home/CTASection";
import ConfidentialityNote from "@/components/home/ConfidentialityNote";
import PageHero from "@/components/marketing/PageHero";
import Container from "@/components/ui/Container";
import VisualSlot from "@/components/visuals/VisualSlot";
import type { CaseStudyDetail } from "@/data/case-studies";
import type { ReactNode } from "react";

function ProseSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id}>
      <h2
        id={id}
        className="font-display text-2xl font-semibold leading-[1.25] tracking-tight text-ink lg:text-[1.75rem]"
      >
        {title}
      </h2>
      <div className="text-body-muted mt-4 max-w-none text-base leading-relaxed">
        {children}
      </div>
    </section>
  );
}

type CaseStudyDetailTemplateProps = {
  study: CaseStudyDetail;
};

export default function CaseStudyDetailTemplate({
  study,
}: CaseStudyDetailTemplateProps) {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case studies", href: "/case-studies" },
          { label: study.title },
        ]}
        title={study.title}
        description={study.summary}
        aside={
          <VisualSlot
            slot="case-studies"
            aspectClassName="aspect-[4/3] sm:aspect-[16/11]"
            sizes="(max-width: 1024px) 100vw, 520px"
          />
        }
      />

      <Container className="pb-section pt-8">
        <div className="mx-auto max-w-3xl">
          <ConfidentialityNote>
            This summary is written to be NDA-safe: client names, industries, and
            timelines are generalized. Additional detail is often available under
            confidentiality agreements.
          </ConfidentialityNote>

          <div className="mt-8 space-y-10 lg:space-y-12">
            <ProseSection id="stack" title="Stack">
              <div className="flex flex-wrap gap-2">
                {study.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border-border-subtle rounded-full border bg-surface-muted px-3 py-1 font-mono text-sm text-ink"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </ProseSection>

            <ProseSection id="outcome" title="Outcome">
              <p>{study.outcome}</p>
            </ProseSection>

            <ProseSection id="context" title="Context">
              <p>{study.context}</p>
            </ProseSection>

            <ProseSection id="approach" title="Approach">
              <p>{study.approach}</p>
            </ProseSection>
          </div>
          <div className="surface-card mt-10 overflow-hidden border-primary/12">
            <VisualSlot
              slot="quality"
              aspectClassName="h-44 sm:h-56"
              sizes="(max-width: 1024px) 100vw, 900px"
              showEyebrow={false}
            />
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-[var(--radius-hero)] border border-border-subtle bg-surface-muted p-8 lg:p-10">
          <CTASection
            variant="inline"
            title="Discuss a similar engagement"
            description="Share the problem space at a high level—we’ll explore fit and next steps."
            primaryLabel="Schedule a Call"
            primaryHref="/contact"
            secondaryLabel="All case studies"
            secondaryHref="/case-studies"
          />
        </div>
      </Container>
    </>
  );
}
