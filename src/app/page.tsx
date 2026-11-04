import type { ReactElement, ReactNode } from "react";
import Clock from "@/components/Clock";
import SocialLink from "@/components/SocialLink";
import { GitHubIcon, LinkedInIcon, MailIcon, ResumeIcon, XIcon } from "@/components/Icons";
import { site, type LinkId } from "@/data/site";

const ICONS: Record<LinkId, (props: { size?: number }) => ReactElement> = {
  resume: ResumeIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  x: XIcon,
  mail: MailIcon,
};

type Accent = "sun" | "sky" | "brick";
const ACCENT_CLASS: Record<Accent, string> = {
  sun: "text-sun",
  sky: "text-sky",
  brick: "text-brick",
};

function Section({ label, accent, children }: { label: string; accent: Accent; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-mono text-[12px] font-semibold uppercase tracking-[0.12em]">
        {label}
        <span className={ACCENT_CLASS[accent]}> .</span>
      </h2>
      <div className="mb-[var(--para-gap)] mt-1 h-px w-full bg-forest/70" />
      <div className="space-y-[var(--para-gap)] text-[clamp(13.5px,1.7vw,14.5px)] leading-[1.55] tracking-[-0.004em] text-forest/90">
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    ...(site.url ? { url: site.url } : {}),
    email: `mailto:${site.email}`,
    jobTitle: "Software Engineer",
    description: site.description,
    affiliation: [
      { "@type": "CollegeOrUniversity", name: "University of Michigan" },
      { "@type": "Organization", name: "Relay", url: site.relay.href },
    ],
    address: { "@type": "PostalAddress", addressLocality: "Ann Arbor", addressRegion: "MI", addressCountry: "US" },
    sameAs: site.links.filter((l) => l.href.startsWith("http")).map((l) => l.href),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="halftone" aria-hidden="true" />
      <div className="column-rules" aria-hidden="true" />

      <div className="full-height relative z-10 flex items-center justify-center px-5 py-10 sm:px-4 sm:py-8">
        <main className="page-load-blur w-full max-w-[700px] text-forest sm:px-10">
          <div className="flex flex-col gap-2.5">
            {/* location / local time */}
            <div className="flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.08em] text-forest/75">
              <span>&quot;Location&quot; {site.location.label}</span>
              <span>
                &quot;Local time&quot; <Clock timeZone={site.location.timeZone} />
              </span>
            </div>

            {/* name */}
            <h1 className="mb-[var(--para-gap)] font-serif text-[clamp(32px,6vw,44px)] font-medium leading-[1.05] tracking-[-0.022em]">
              {site.name}
              <span className="text-brick"> .</span>
            </h1>

            <Section label="Work" accent="sun">
              <p>I&apos;m a Computer Science student at the University of Michigan.</p>
              <p>
                I built{" "}
                <a className="link" href={site.relay.href} target="_blank" rel="noopener noreferrer">
                  {site.relay.label}
                </a>
                , a messaging platform that makes interacting with AI agents as simple as texting.
              </p>
              <p>
                I believe we&apos;re still incredibly early in AI. Those of us building and using it today are in the top
                1% of people experiencing what this technology can do. I&apos;m especially interested in the intersection
                of AI and everyday life, and how we can make it accessible enough that our parents and grandparents can
                use it to meaningfully improve their lives.
              </p>
            </Section>

            <Section label="Personal" accent="sky">
              <p>Outside of tech, I enjoy coffee, DJing, traveling, and meeting interesting people.</p>
            </Section>

            <div className="mt-1 h-px w-full bg-forest/20" />

            <footer className="mt-1 flex flex-wrap items-center gap-3 sm:gap-4">
              <nav aria-label="Links" className="flex flex-wrap items-center gap-5 sm:gap-7">
                {site.links.map((link) => {
                  const Icon = ICONS[link.id];
                  return (
                    <SocialLink key={link.id} href={link.href} label={link.label}>
                      <Icon size={18} />
                    </SocialLink>
                  );
                })}
              </nav>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
}
