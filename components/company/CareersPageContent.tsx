import HomeSection from "@/components/home/HomeSection";
import PageHero from "@/components/marketing/PageHero";
import Button from "@/components/ui/Button";
import type { DocPageData } from "@/components/content/DocPageTemplate";
import Image from "next/image";

type CareersPageContentProps = {
  page: DocPageData;
};

const whyWorkWithUs = [
  {
    icon: "ownership",
    iconTileClass: "border-[#20385a] bg-[#132947] text-[#dce8f8]",
    title: "Ownership and engineering discipline",
    body: "You will work with teams that value clean implementation, reviews, testing discipline, and maintainable architecture.",
  },
  {
    icon: "long-term",
    iconTileClass: "border-[#b9c9df] bg-[#e9f0fa] text-[#5f7fa6]",
    title: "Long-term delivery",
    body: "We support products over the long term, which means you learn domains deeply and build systems that remain reliable.",
  },
  {
    icon: "expectations",
    iconTileClass: "border-[#2a7a7b] bg-[#0d5f60] text-[#d6fbf8]",
    title: "Clear expectations",
    body: "Responsibilities and priorities stay clear so delivery is structured and professional.",
  },
  {
    icon: "growth",
    iconTileClass: "border-[#c9d2dc] bg-[#eef2f7] text-[#5f768f]",
    title: "Growth through real work",
    body: "You gain exposure to product engineering, modernization, integrations, and production systems.",
  },
];

const whyIconPaths: Record<string, React.ReactNode> = {
  ownership: (
    <path
      d="M10 3.6 5.8 16.4M10 3.6l4.2 12.8M7.1 11.3h5.8"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "long-term": (
    <>
      <path
        d="M14.2 6.6a4.9 4.9 0 1 0 1 5.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2 4.4v3.4h-3.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  expectations: (
    <>
      <path
        d="M5.1 8.1h9.8M5.1 11.9h9.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="m8.2 5.7-3.1 2.4 3.1 2.4M11.8 13.3l3.1-2.4-3.1-2.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  growth: (
    <path
      d="M6.2 13.8 13.8 6.2M9.8 6.2h4v4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

const howWeWork = [
  "Clear task ownership and accountability",
  "Code reviews as standard practice",
  "Documentation for key decisions and workflows",
  "Respectful collaboration and professional communication",
  "Tools aligned to the project (Git/GitHub/GitLab/Azure DevOps, trackers like Jira/ClickUp, etc.)",
];

const whatWeLookFor = [
  "Strong fundamentals in programming and problem solving",
  "Ability to write maintainable, production-quality code",
  "Comfort working with version control and code reviews",
  "Clear communication and team collaboration",
  "Ownership mindset - finishing what you start",
];

const roles = [
  "Software Engineers (Backend / Full-stack)",
  "Frontend Engineers (Angular / React)",
  "QA Engineers / Test Automation",
  "DevOps / Cloud Engineers (AWS)",
  "Technical Leads / Architects",
  "Support / Maintenance Engineers",
];

const interviewProcess = [
  { title: "Initial conversation", body: "Fit, interests, role expectations" },
  { title: "Technical discussion", body: "Core skills and problem-solving" },
  { title: "Practical evaluation", body: "Small task or code review" },
  { title: "Final discussion", body: "Team match and next steps" },
];

function BulletIcon() {
  return (
    <span className="mt-[0.34em] shrink-0 text-primary" aria-hidden>
      <svg viewBox="0 0 20 20" className="block h-4 w-4" fill="none">
        <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M7.3 10.1 9.2 12l3.6-3.8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function CareersPageContent({ page }: CareersPageContentProps) {
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
        backgroundDecor={
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
        }
        aside={null}
      />

      <HomeSection tone="white" className="!bg-white py-10 lg:py-12">
        <div className="border border-border-subtle bg-[#f8f8f6] p-8 shadow-[0_18px_42px_-16px_rgba(11,18,32,0.45)]">
          <section>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <h2 className="font-display text-4xl tracking-tight text-headline lg:text-[2.7rem] lg:leading-[1.08]">
                  Build software that lasts
                </h2>
                <p className="mt-4 max-w-2xl text-[1.02rem] leading-[1.75] text-body">
                  At Notetech Software, we work on software products and enterprise
                  platforms where quality, ownership, and long-term maintainability
                  matter. If you enjoy building real systems, collaborating with
                  strong engineers, and taking responsibility for outcomes, you will
                  fit here.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="/contact" variant="primary" className="px-6">
                    Send Your Resume
                  </Button>
                  <Button href="/contact" variant="primary" className="px-6">
                    View Open Roles
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="overflow-hidden rounded-xl border border-[#e2e8f0] bg-white p-2 shadow-[0_10px_28px_-18px_rgba(9,24,47,0.55)]">
                  <Image
                    src="/imagery/careers%20(2).jpg"
                    alt="Notetech team collaboration"
                    width={720}
                    height={520}
                    className="h-[320px] w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 border-t border-[#e2e8f0] pt-10 lg:mt-12 lg:pt-12">
            <h3 className="font-display text-[2rem] tracking-tight text-headline">
              Why work with us
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {whyWorkWithUs.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-[#e2e8f0] bg-[#f8f8f6] p-4 shadow-[0_10px_28px_-20px_rgba(9,24,47,0.4)]"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center border ${item.iconTileClass}`}
                    >
                      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden>
                        {whyIconPaths[item.icon]}
                      </svg>
                    </span>
                    <p className="text-lg font-semibold text-headline">{item.title}</p>
                  </div>
                  <p className="mt-2 text-[0.97rem] leading-relaxed text-body">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-10 border-t border-[#e2e8f0] pt-10 lg:mt-12 lg:pt-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
              <div>
                <div className="mb-4 flex items-center gap-4">
                  <h3 className="font-display text-[2rem] tracking-tight text-headline">
                    How we work
                  </h3>
                  <div className="h-px flex-1 bg-[#e2e8f0]" />
                </div>
                <ul className="mt-4 space-y-2.5">
                  {howWeWork.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <BulletIcon />
                      <span className="text-[0.98rem] leading-relaxed text-body">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="mb-4 flex items-center gap-4">
                  <h3 className="font-display text-[2rem] tracking-tight text-headline">
                    What we look for
                  </h3>
                  <div className="h-px flex-1 bg-[#e2e8f0]" />
                </div>
                <ul className="mt-4 space-y-2.5">
                  {whatWeLookFor.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <BulletIcon />
                      <span className="text-[0.98rem] leading-relaxed text-body">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-10 border-t border-[#e2e8f0] pt-10 lg:mt-12 lg:pt-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
              <div>
                <div className="mb-4 flex items-center gap-4">
                  <h3 className="font-display text-[2rem] tracking-tight text-headline">
                    Roles we typically hire
                  </h3>
                  <div className="h-px flex-1 bg-[#e2e8f0]" />
                </div>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {roles.map((role) => (
                    <span
                      key={role}
                      className="border border-[#e2e8f0] bg-[#f8f8f6] px-3 py-1.5 text-[0.7rem] font-semibold tracking-wide text-headline"
                    >
                      {role}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <Button href="/contact" variant="primary" className="px-6">
                    Apply Now
                  </Button>
                </div>
              </div>
              <div>
                <div className="mb-4 flex items-center gap-4">
                  <h3 className="font-display text-[2rem] tracking-tight text-headline">
                    Interview process
                  </h3>
                  <div className="h-px flex-1 bg-[#e2e8f0]" />
                </div>
                <ol className="mt-5 space-y-4">
                  {interviewProcess.map((step, i) => (
                    <li key={step.title} className="relative flex items-start gap-3 pl-8">
                      {i < interviewProcess.length - 1 ? (
                        <span
                          className="absolute left-[11px] top-6 h-[calc(100%+8px)] w-px bg-[#e2e8f0]"
                          aria-hidden
                        />
                      ) : null}
                      <span className="absolute left-0 top-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border border-[#b7c7da] bg-white text-[0.68rem] font-semibold text-headline">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-headline">{step.title}</p>
                        <p className="text-sm text-body">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          <section className="mt-10 border-t border-[#e2e8f0] pt-10 lg:mt-12 lg:pt-12">
            <section className="relative overflow-hidden p-6 shadow-[0_18px_34px_rgba(43,33,21,0.3)] ring-1 ring-[#b79f83]/50 lg:p-8">
              <Image
                src="/imagery/companyPage/engagement.jpg"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,22,42,0.88)_0%,rgba(11,35,64,0.76)_55%,rgba(6,18,36,0.92)_100%)]" />
              <div className="relative z-10 max-w-3xl">
                <div className="mb-5 flex items-center gap-3 text-[#d8c9b5]">
                  <span className="inline-flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-[#c99972]" />
                    <span className="h-2 w-2 rounded-full bg-[#d8b37a]" />
                    <span className="h-2 w-2 rounded-full bg-[#8f9b74]" />
                  </span>
                  <span className="font-mono text-xs">apply.sh</span>
                </div>
                <h3 className="font-display text-3xl tracking-tight text-white">
                  Send your resume and a short note
                </h3>
                <p className="mt-4 max-w-xl font-mono text-[0.88rem] leading-relaxed text-[#eadfce]">
                  {`const application = {
  role: "Specific role you are targeting",
  skills: ["Relevant stack", "tech stack"],
  availability: "When can you start?",
};`}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="/contact" variant="primary" className="px-6">
                    Send Your Resume
                  </Button>
                  <Button href="/contact" variant="primary" className="px-6">
                    Contact HR
                  </Button>
                </div>
              </div>
            </section>
            <p className="px-4 py-5 text-center text-[0.92rem] italic text-[#5479a3]">
              We hire based on skills and potential. If you are excited about the role
              but do not match every requirement, apply anyway.
            </p>
          </section>
        </div>
      </HomeSection>
    </>
  );
}
