import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import PageHero from "@/components/marketing/PageHero";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact · Notetech",
  description:
    "Tell us about your project and team needs. We'll suggest a model aligned to your roadmap and respond within one business day.",
};

function ContactInfoItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
          {label}
        </p>
        <div className="mt-0.5 text-sm font-semibold text-slate-700">{children}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        title="Contact Us"
        tone="navy"
        contentMinHeightClassName="min-h-[6rem] sm:min-h-[7rem] lg:min-h-[8rem]"
        backgroundDecor={
          <div className="absolute -inset-y-[18%] -right-[2%] hidden w-[45%] overflow-hidden [clip-path:polygon(0_32%,100%_0,100%_68%,0_100%)] lg:block">
            <Image
              src="/imagery/capabilities-banner.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="absolute inset-0 h-full w-full object-cover object-[56%_50%] saturate-[0.92] contrast-[1.04]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(118deg,rgb(8_18_36/0.45)_0%,transparent_50%),linear-gradient(to_top,rgb(8_18_36/0.28)_0%,transparent_42%)]" />
          </div>
        }
      />
      <div
        className="min-h-[calc(100vh-4rem)] px-4 py-10 sm:px-6 lg:py-14"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.68), rgba(255,255,255,0.82)), url('/imagery/contact-world-map.png?v=2')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">

        {/* ── Left info column ── */}
        <div className="w-full shrink-0 lg:w-[260px] xl:w-[290px]">
          <h1 className="text-display-sm text-slate-800">
            Request a discussion
          </h1>
          <p className="mt-3 text-[0.98rem] leading-relaxed text-slate-600">
            Share a few details and we&rsquo;ll suggest a team model aligned
            to your roadmap.
          </p>

          {/* Contact info */}
          <div className="mt-7 space-y-4 border-t border-slate-300/70 pt-5">
            <ContactInfoItem
              label="Email"
              icon={
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <rect x="1" y="3" width="14" height="10" rx="1.5" />
                  <path d="M1 5l7 5 7-5" strokeLinecap="round" />
                </svg>
              }
            >
              <a href="mailto:sales@notetech.com" className="transition-colors duration-150 hover:text-primary">
                sales@notetech.com
              </a>
            </ContactInfoItem>

            <ContactInfoItem
              label="Phone / WhatsApp"
              icon={
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <path d="M3 2h2.5l1 3-1.5 1a9 9 0 004 4l1-1.5 3 1V13a1 1 0 01-1 1C5.373 14 2 10.627 2 3a1 1 0 011-1z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            >
              <a href="tel:+919633888269" className="transition-colors duration-150 hover:text-primary">
                +91 9633 888 269
              </a>
            </ContactInfoItem>

            <ContactInfoItem
              label="Office"
              icon={
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <path d="M8 1.5C5.515 1.5 3.5 3.515 3.5 6c0 3.75 4.5 8.5 4.5 8.5S12.5 9.75 12.5 6c0-2.485-2.015-4.5-4.5-4.5z" strokeLinejoin="round" />
                  <circle cx="8" cy="6" r="1.5" />
                </svg>
              }
            >
              Kochi, Kerala, India
            </ContactInfoItem>
          </div>

        </div>

        {/* ── Right form card ── */}
        <div className="min-w-0 flex-1">
          <div className="border border-border-subtle bg-[#f8f8f6] px-6 py-8 shadow-[0_18px_42px_-16px_rgba(11,18,32,0.45)] sm:px-8 sm:py-10">
            <div className="mb-7">
              <h2 className="text-display-sm text-[1.375rem] sm:text-[1.625rem]">
                Tell us about your project
              </h2>
              <p className="mt-1.5 text-sm text-ink-muted">
                Fill in the form and we&rsquo;ll be in touch shortly.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>

        </div>
      </div>
    </>
  );
}
