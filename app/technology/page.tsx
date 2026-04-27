import HomeSection from "@/components/home/HomeSection";
import PageHero from "@/components/marketing/PageHero";
import SectionHeading from "@/components/home/SectionHeading";
import Container from "@/components/ui/Container";
import VisualSlot from "@/components/visuals/VisualSlot";
import { technologyPage } from "@/data/technologyPage";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: technologyPage.metaTitle,
  description: technologyPage.metaDescription,
  openGraph: {
    title: `${technologyPage.heroTitle} · Notetech`,
    description: technologyPage.metaDescription,
    type: "website",
  },
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Technology" }]}
        title={technologyPage.heroTitle}
        subtitle={technologyPage.headline}
        description={technologyPage.intro}
        tone="beigePattern"
        contentMinHeightClassName="min-h-[18rem] sm:min-h-[21rem] lg:min-h-[24rem]"
        backgroundDecor={
          <div className="absolute -inset-y-[18%] -right-[2%] hidden w-[45%] overflow-hidden [clip-path:polygon(0_32%,100%_0,100%_68%,0_100%)] lg:block">
            <Image
              src="/imagery/smooth-wave-patterns-flow-abstract-elegance-generated-by-ai.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="absolute inset-0 h-full w-full object-cover object-[56%_50%] saturate-[0.92] contrast-[1.04]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(118deg,rgb(8_18_36/0.45)_0%,transparent_50%),linear-gradient(to_top,rgb(8_18_36/0.28)_0%,transparent_42%)]" />
          </div>
        }
      />

      <HomeSection tone="white" className="!bg-[#f6f2ea] py-16 lg:py-20">
        <div className="space-y-8 lg:space-y-10">
          {technologyPage.pillars.map((p, index) => {
            const images = [
              "/imagery/service/3d-abstract-background-with-flowing-particles-cyber-dots-network-connections.jpg",
              "/imagery/service/smooth-wave-patterns-flow-abstract-elegance-generated-by-ai.jpg",
              "/imagery/3d-render-abstract-tech-background-with-flowing-cyber-lines.jpg",
            ];
            const imgSrc = images[index % images.length];
            const imageLeft = index % 2 === 0;
            return (
              <section
                key={p.id}
                className="overflow-hidden rounded-2xl bg-[#ede7d8] shadow-sm ring-1 ring-stone-300/60"
              >
                <div className={`grid items-stretch lg:grid-cols-2 ${imageLeft ? "" : "lg:[&>*:first-child]:order-last"}`}>
                  <div className="relative aspect-[4/3] lg:aspect-auto">
                    <Image
                      src={imgSrc}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-8 lg:p-12">
                    <h2 className="font-display text-2xl tracking-tight text-slate-900 lg:text-3xl">
                      {p.title}
                    </h2>
                    <div className="mb-6 mt-2 h-0.5 w-8 bg-[#46c3e6]" />
                    <p className="text-[0.97rem] leading-relaxed text-slate-700">{p.body}</p>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </HomeSection>

      <Container className="pb-section">
        <div className="surface-card overflow-hidden border-primary/12">
          <VisualSlot
            slot="quality"
            aspectClassName="h-48 sm:h-60 max-h-[14rem] sm:max-h-[17rem]"
            sizes="(max-width: 1024px) 100vw, 1100px"
            showEyebrow={false}
          />
        </div>
        <p className="text-ink-subtle mt-4 text-center text-xs">
          Illustrative only—engagements follow your standards and security posture.
        </p>
      </Container>
    </>
  );
}
