/**
 * Sales Pitch Deck — ~13 slides
 *
 * A complete reference deck demonstrating how to compose slide components
 * into a full sales presentation. This follows the recommended pacing
 * from guidelines/slides.md.
 *
 * Deck flow:
 * 1. Title → 2. Philosophy → 3. Meet Webstacks → 4. Clients →
 * 5. Problem Stat → 6. Solution → 7. How It Works →
 * 8. Feature 1 → 9. Feature 2 → 10. Quote → 11. Results →
 * 12. Case Study Teaser → 13. CTA
 */
import { useState, useEffect } from "react";
import { Heading, Text } from "@webstacks/ui";
import {
  SlideBase,
  TitleSlide,
  ContentSlide,
  StatSlide,
  SplitSlide,
  QuoteSlide,
  ImageSlide,
  CTASlide,
} from "../../components";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityClient, urlFor } from "../../lib/sanity";
import { companiesWithLogosQuery } from "../../lib/queries";

/* ── Slide 1: Title ─────────────────────────────────── */
export function Slide01_Title() {
  return (
    <TitleSlide
      date="March 04, 2026"
      eyebrow="Webstacks"
      title="Exploring an Agency Partnership"
      subtitle="Accelerating the evolution of your brand and web presence for your next phase of growth."
      heroImage="/images/3d-shapes/layered-diamonds.png"
      teamMembers={[
        { name: "Nikan Shahidi", role: "CEO", avatarSrc: "/images/headshots/leadership/nikan-shahidi.png" },
        { name: "Jesse Schor", role: "Head of Growth", avatarSrc: "/images/headshots/leadership/jesse-schor.png" },
        { name: "Emily Winsauer", role: "Head of Strategy", avatarSrc: "/images/headshots/leadership/emily-winsauer.png" },
        { name: "Hunter McLean", role: "Head of Design", avatarSrc: "/images/headshots/leadership/hunter-mcclean.png" },
        { name: "Tori Wolski", role: "Head of PMO", avatarSrc: "/images/headshots/leadership/tori-wolski.png" },
      ]}
      theme="dark"
    />
  );
}

/* ── Slide 2: Philosophy ───────────────────────────────── */
const philosophyItems = [
  "Brand Matures",
  "Messaging Changes",
  "Products Expand",
  "Campaigns Launch",
  "Conversion Goals Shift",
  "Teams Grow",
];

export function Slide02_Philosophy() {
  return (
    <SlideBase theme="dark" className="!p-0">
      {/* 3D accent shapes — top corners */}
      <img
        src="/images/3d-shapes/glass-panels.png"
        alt=""
        className="pointer-events-none absolute -left-[18%] -top-[30%] w-[45%] -rotate-12 object-contain select-none"
        aria-hidden="true"
      />
      <img
        src="/images/3d-shapes/glass-cubes.png"
        alt=""
        className="pointer-events-none absolute -right-[15%] -top-[30%] w-[50%] object-contain select-none"
        aria-hidden="true"
      />

      {/* Centered content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Our Philosophy
        </Text>
        <Heading as="h2" size={1} align="center">
          Your website is a product, not a project.
        </Heading>

        {/* Bullet row */}
        <div className="mt-4 flex items-center gap-6 rounded-sm bg-white/5 px-8 py-4">
          {philosophyItems.map((item) => (
            <div key={item} className="flex items-center gap-2 whitespace-nowrap">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0 text-foreground"
              >
                <path
                  d="M3 8.5L6.5 12L13 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Text as="span" size={300} className="opacity-70">
                {item}
              </Text>
            </div>
          ))}
        </div>
      </div>

      {/* Footer bar */}
      <div className="absolute bottom-0 left-0 z-10 flex w-full items-center justify-between border-t border-white/10 px-16 py-3">
        <div className="flex items-center gap-2">
          <img
            src="/logos/symbol-negative.svg"
            alt="Webstacks"
            className="h-4 w-auto"
          />
          <Text as="span" size={100} className="opacity-50">
            webstacks.com
          </Text>
        </div>
        <Text as="span" size={100} className="opacity-40">
          &copy; Webstacks LLC Proprietary and Confidential
        </Text>
      </div>
    </SlideBase>
  );
}

/* ── Slide 3: Meet Webstacks ───────────────────────────── */
const stats = [
  { value: "$4.3B", label: "Raised by Our Clients" },
  { value: "50+", label: "In-House Experts" },
  { value: "150+", label: "Websites Launched" },
  { value: "97%", label: "Client Retention Rate" },
];

export function Slide03_MeetWebstacks() {
  return (
    <SlideBase theme="dark" className="!p-0">
      {/* Left column — text + globe */}
      <div className="absolute left-0 top-0 flex h-full w-[50%] flex-col justify-between pl-16 pt-16 pb-16">
        <div className="flex flex-col gap-4">
          <Text
            as="span"
            size={200}
            className="font-mono uppercase tracking-widest opacity-60"
          >
            A Composable Web Agency
          </Text>
          <Heading as="h2" size={1}>
            Meet Webstacks
          </Heading>
          <Text size={400} className="max-w-[90%] opacity-70">
            Webstacks has empowered marketing teams to break free from website
            bottlenecks with a composable approach built for speed and scale.
          </Text>
        </div>

        {/* 3D shape accent — bottom left, floating (clear of footer) */}
        <img
          src="/images/3d-shapes/stacked-discs.png"
          alt=""
          className="pointer-events-none absolute -left-[20%] bottom-[10%] w-[80%] -rotate-6 object-contain select-none"
          aria-hidden="true"
        />
      </div>

      {/* Right column — 2×2 stat grid */}
      <div className="absolute right-0 top-0 flex h-full w-[50%] items-center pr-16 pt-16 pb-16">
        <div className="grid h-[75%] w-full grid-cols-2 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col justify-between rounded-sm bg-white/[0.04] p-8"
            >
              <Heading as="h3" size={1}>
                {stat.value}
              </Heading>
              <Text
                as="span"
                size={100}
                className="font-mono uppercase tracking-widest opacity-50"
              >
                {stat.label}
              </Text>
            </div>
          ))}
        </div>
      </div>

      {/* Footer bar */}
      <div className="absolute bottom-0 left-0 z-10 flex w-full items-center justify-between border-t border-white/10 px-16 py-3">
        <div className="flex items-center gap-2">
          <img
            src="/logos/symbol-negative.svg"
            alt="Webstacks"
            className="h-4 w-auto"
          />
          <Text as="span" size={100} className="opacity-50">
            webstacks.com
          </Text>
        </div>
        <Text as="span" size={100} className="opacity-40">
          &copy; Webstacks LLC Proprietary and Confidential
        </Text>
      </div>
    </SlideBase>
  );
}

/* ── Slide 4: Clients ──────────────────────────────── */
const fallbackCompanies = [
  "Capital One", "SevenRooms", "Curative", "Braze", "Fireworks", "Cribl",
  "LogicMonitor", "BetterUp", "Klaviyo", "ServiceTitan", "Calendly", "Snowflake", "Varonis",
];

interface ClientCompany {
  name: string;
  logoUrl: string;
  needsInvert?: boolean;
}

export function Slide04_Clients({
  companies,
}: {
  companies?: ClientCompany[];
}) {
  const hasLogos = companies && companies.length > 0;
  const displayCompanies = hasLogos
    ? companies.slice(0, 16)
    : fallbackCompanies.map((name): ClientCompany => ({ name, logoUrl: "" }));

  return (
    <SlideBase theme="dark" className="!p-0">
      {/* Top content row */}
      <div className="flex items-start justify-between px-16 pt-16 pb-10">
        <Heading as="h2" size={3} className="max-w-[55%]">
          We&apos;re the agency behind some of the best websites on the internet.
        </Heading>
        <Text size={400} className="max-w-[35%] pt-2 opacity-70">
          From fast growing startups to established enterprises.
        </Text>
      </div>

      {/* 6-col logo grid */}
      <div className="grid grid-cols-6 gap-px px-16">
        {displayCompanies.map((company) => (
          <div
            key={company.name}
            className="flex aspect-square items-center justify-center bg-white/[0.04] px-6"
          >
            {company.logoUrl ? (
              <img
                src={company.logoUrl}
                alt={company.name}
                className={`h-8 max-w-[120px] object-contain${company.needsInvert ? " brightness-0 invert" : ""}`}
              />
            ) : (
              <Text as="span" size={200} className="opacity-40 text-center">
                {company.name}
              </Text>
            )}
          </div>
        ))}
      </div>

      {/* Footer bar */}
      <div className="absolute bottom-0 left-0 z-10 flex w-full items-center justify-between border-t border-white/10 px-16 py-3">
        <div className="flex items-center gap-2">
          <img
            src="/logos/symbol-negative.svg"
            alt="Webstacks"
            className="h-4 w-auto"
          />
          <Text as="span" size={100} className="opacity-50">
            webstacks.com
          </Text>
        </div>
        <Text as="span" size={100} className="opacity-40">
          &copy; Webstacks LLC Proprietary and Confidential
        </Text>
      </div>
    </SlideBase>
  );
}

/* ── Slide 5: Stat — Scale of the problem ───────────── */
export function Slide05_ProblemStat() {
  return (
    <StatSlide
      eyebrow="Industry Data"
      stat="68%"
      description="of B2B buyers say a company's website is the most influential factor when evaluating vendors"
      context="Source: Demand Gen Report, 2024"
      theme="dark"
    />
  );
}

/* ── Slide 6: Solution ──────────────────────────────── */
export function Slide06_Solution() {
  return (
    <ContentSlide
      eyebrow="Our Approach"
      title="Strategy, Design, and Engineering — Under One Roof"
      theme="light"
    >
      <Text size={500}>
        Webstacks is a full-service web team for growth-stage B2B SaaS companies.
        We combine strategic design with modern engineering so you ship faster and
        convert better.
      </Text>
      <Text size={400} className="text-muted-foreground">
        From headless CMS architecture to conversion-optimized landing pages,
        we handle everything so your marketing team can move at the speed of
        your business.
      </Text>
    </ContentSlide>
  );
}

/* ── Slide 7: How It Works (Split) ──────────────────── */
export function Slide07_HowItWorks() {
  return (
    <SplitSlide
      eyebrow="How It Works"
      title="A Proven Process for High-Impact Websites"
      split="60/40"
      media="/images/process-diagram.svg"
      theme="light"
    >
      <div className="space-y-4">
        <div>
          <Text size={500} weight="medium">1. Discovery</Text>
          <Text size={300} className="text-muted-foreground">Audit your current site, define goals, and map the user journey.</Text>
        </div>
        <div>
          <Text size={500} weight="medium">2. Design</Text>
          <Text size={300} className="text-muted-foreground">Create a component-driven design system that scales.</Text>
        </div>
        <div>
          <Text size={500} weight="medium">3. Build</Text>
          <Text size={300} className="text-muted-foreground">Engineer with Next.js, headless CMS, and performance best practices.</Text>
        </div>
        <div>
          <Text size={500} weight="medium">4. Optimize</Text>
          <Text size={300} className="text-muted-foreground">A/B test, analyze, and iterate for continuous improvement.</Text>
        </div>
      </div>
    </SplitSlide>
  );
}

/* ── Slide 8: Feature 1 ─────────────────────────────── */
export function Slide08_Feature1() {
  return (
    <ContentSlide
      eyebrow="Performance"
      title="Sub-Second Load Times, Every Time"
      imageSrc="/images/lighthouse-score.png"
      imageAlt="Lighthouse performance score showing 98/100"
      theme="dark"
    >
      <Text size={500}>
        Our sites consistently score 95+ on Core Web Vitals. We use edge
        rendering, optimized images, and smart caching to deliver blazing-fast
        experiences.
      </Text>
      <Text size={400} className="text-muted-foreground">
        Faster sites mean better SEO rankings, lower bounce rates, and higher
        conversion rates.
      </Text>
    </ContentSlide>
  );
}

/* ── Slide 9: Feature 2 ─────────────────────────────── */
export function Slide09_Feature2() {
  return (
    <SplitSlide
      eyebrow="Flexibility"
      title="Your Marketing Team Ships Without Waiting on Engineering"
      split="50/50"
      reversed
      media="/images/cms-editor.png"
      theme="light"
    >
      <Text size={500}>
        We build on headless CMS platforms (Sanity, Contentful) with visual
        editing, so your content team can update pages, launch campaigns, and
        run experiments independently.
      </Text>
      <Text size={300} className="text-muted-foreground">
        No more bottlenecks. No more tickets for copy changes.
      </Text>
    </SplitSlide>
  );
}

/* ── Slide 10: Quote ─────────────────────────────────── */
export function Slide10_Quote() {
  return (
    <QuoteSlide
      quote="Webstacks completely transformed how we think about our website. It's not just a brochure anymore — it's our best-performing sales channel."
      authorName="Sarah Chen"
      authorTitle="VP of Marketing"
      authorCompany="TechCorp"
      avatarSrc="/images/avatar-sarah.jpg"
      theme="light"
    />
  );
}

/* ── Slide 11: Results Stat ─────────────────────────── */
export function Slide11_Results() {
  return (
    <StatSlide
      eyebrow="Results"
      stat="3.2x"
      description="average increase in demo requests within 90 days of launch"
      theme="dark"
    />
  );
}

/* ── Slide 12: Case Study Teaser ────────────────────── */
export function Slide12_CaseStudy() {
  return (
    <ImageSlide
      imageSrc="/images/case-study-hero.jpg"
      title="How TechCorp Increased Pipeline by 240%"
      subtitle="A complete website redesign that turned visitors into qualified leads."
      overlay="gradient"
    />
  );
}

/* ── Slide 13: CTA ───────────────────────────────────── */
export function Slide13_CTA() {
  return (
    <CTASlide
      title="Let's Build Your Best-Performing Channel"
      subtitle="Get a free website audit and see where you're leaving conversions on the table."
      ctaText="Book a Free Audit"
      ctaHref="https://www.webstacks.com/contact"
      secondaryCtaText="View Our Work"
      contactInfo="hello@webstacks.com"
      theme="dark"
    />
  );
}

/**
 * Full deck — renders all 13 slides in sequence.
 * Use this as a reference for how to compose a complete deck.
 */
export default function SalesPitchDeck() {
  const [companies, setCompanies] = useState<ClientCompany[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(companiesWithLogosQuery)
      .then((results: Array<{ _id: string; name: string; logoOnDark?: SanityImageSource; logoOnLight?: SanityImageSource }>) => {
        const seen = new Set<string>();
        const deduped = results.filter((c) => {
          if (seen.has(c.name)) return false;
          seen.add(c.name);
          return true;
        });
        setCompanies(
          deduped.map((c) => {
            const useDark = !!c.logoOnDark;
            const source = (useDark ? c.logoOnDark : c.logoOnLight)!;
            return {
              name: c.name,
              logoUrl: urlFor(source).height(64).url(),
              needsInvert: !useDark,
            };
          })
        );
      })
      .catch(() => {
        // Silently fall back to text-only display
      });
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <Slide01_Title />
      <Slide02_Philosophy />
      <Slide03_MeetWebstacks />
      <Slide04_Clients companies={companies} />
      <Slide05_ProblemStat />
      <Slide06_Solution />
      <Slide07_HowItWorks />
      <Slide08_Feature1 />
      <Slide09_Feature2 />
      <Slide10_Quote />
      <Slide11_Results />
      <Slide12_CaseStudy />
      <Slide13_CTA />
    </div>
  );
}
