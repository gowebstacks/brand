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
import { SlideBase, TitleSlide } from "../../components";
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

/* ── Slide 5: Problem Stat (dark) ────────────────────── */
export function Slide05_ProblemStat() {
  return (
    <SlideBase theme="dark" className="!p-0">
      {/* 3D accent shape — top-right corner */}
      <img
        src="/images/3d-shapes/ridged-cylinder.png"
        alt=""
        className="pointer-events-none absolute -right-[15%] -top-[20%] w-[45%] object-contain select-none"
        aria-hidden="true"
      />

      {/* Centered content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 px-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Industry Data
        </Text>
        <Heading as="h2" size="display">
          68%
        </Heading>
        <Text size={600} align="center" className="max-w-[70%] opacity-70">
          of B2B buyers say a company&apos;s website is the most influential
          factor when evaluating vendors
        </Text>
        <Text as="span" size={300} className="mt-2 opacity-50">
          Source: Demand Gen Report, 2024
        </Text>
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

/* ── Slide 6: Solution (light) ───────────────────────── */
const capabilityCards = [
  {
    label: "Strategy",
    description:
      "Market research, competitive analysis, and conversion strategy that aligns your site with business goals.",
  },
  {
    label: "Design",
    description:
      "Component-driven design systems that scale across campaigns, pages, and product launches.",
  },
  {
    label: "Engineering",
    description:
      "Modern headless architecture with Next.js, React, and your CMS of choice — built for speed.",
  },
];

export function Slide06_Solution() {
  return (
    <SlideBase theme="light" className="!p-0">
      <div className="flex h-full">
        {/* Left column — text */}
        <div className="flex w-[55%] flex-col gap-4 pl-16 pt-16 pr-8">
          <Text
            as="span"
            size={200}
            className="font-mono uppercase tracking-widest text-muted-foreground"
          >
            Our Approach
          </Text>
          <Heading as="h2" size={3}>
            Strategy, Design, and Engineering — Under One Roof
          </Heading>
          <Text size={500}>
            Webstacks is a full-service web team for growth-stage B2B SaaS
            companies. We combine strategic design with modern engineering so you
            ship faster and convert better.
          </Text>
          <Text size={400} className="text-muted-foreground">
            From headless CMS architecture to conversion-optimized landing pages,
            we handle everything so your marketing team can move at the speed of
            your business.
          </Text>
        </div>

        {/* Right column — capability cards */}
        <div className="flex w-[45%] flex-col gap-3 pr-16 pt-16 pb-16">
          {capabilityCards.map((card) => (
            <div
              key={card.label}
              className="flex flex-1 flex-col gap-3 rounded-sm bg-muted p-6"
            >
              <Text
                as="span"
                size={200}
                className="font-mono uppercase tracking-widest text-muted-foreground"
              >
                {card.label}
              </Text>
              <Text size={400}>{card.description}</Text>
            </div>
          ))}
        </div>
      </div>
    </SlideBase>
  );
}

/* ── Slide 7: How It Works (light) ───────────────────── */
const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Audit your current site, define goals, and map the user journey.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Create a component-driven design system that scales.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Engineer with Next.js, headless CMS, and performance best practices.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "A/B test, analyze, and iterate for continuous improvement.",
  },
];

export function Slide07_HowItWorks() {
  return (
    <SlideBase theme="light" className="!p-0">
      <div className="flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest text-muted-foreground"
        >
          How It Works
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          A Proven Process for High-Impact Websites
        </Heading>

        {/* 4-column process grid */}
        <div className="mt-8 grid flex-1 grid-cols-4 gap-3 pb-16">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col justify-between rounded-sm bg-muted p-8"
            >
              <Text
                as="span"
                size={200}
                className="font-mono text-muted-foreground"
              >
                {step.number}
              </Text>
              <div className="flex flex-col gap-2">
                <Text size={500}>{step.title}</Text>
                <Text size={400} className="text-muted-foreground">
                  {step.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideBase>
  );
}

/* ── Slide 8: Feature 1 — Performance (dark) ─────────── */
const perfStats = [
  { value: "95+", label: "Core Web Vitals" },
  { value: "< 1s", label: "Avg. Load Time" },
];

export function Slide08_Feature1() {
  return (
    <SlideBase theme="dark" className="!p-0">
      {/* 3D accent shape — bottom-left */}
      <img
        src="/images/3d-shapes/spiral-band.png"
        alt=""
        className="pointer-events-none absolute -bottom-[20%] -left-[15%] w-[45%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full">
        {/* Left column — text */}
        <div className="flex w-[50%] flex-col gap-4 pl-16 pt-16">
          <Text
            as="span"
            size={200}
            className="font-mono uppercase tracking-widest opacity-60"
          >
            Performance
          </Text>
          <Heading as="h2" size={3}>
            Sub-Second Load Times, Every Time
          </Heading>
          <Text size={500} className="opacity-70">
            Our sites consistently score 95+ on Core Web Vitals. We use edge
            rendering, optimized images, and smart caching to deliver
            blazing-fast experiences.
          </Text>
          <Text size={400} className="opacity-70">
            Faster sites mean better SEO rankings, lower bounce rates, and
            higher conversion rates.
          </Text>
        </div>

        {/* Right column — stat cards */}
        <div className="flex w-[50%] flex-col gap-3 pl-8 pr-16 pt-16 pb-16">
          {perfStats.map((card) => (
            <div
              key={card.label}
              className="flex flex-1 flex-col justify-between rounded-sm bg-white/[0.04] p-8"
            >
              <Heading as="h3" size={1}>
                {card.value}
              </Heading>
              <Text
                as="span"
                size={100}
                className="font-mono uppercase tracking-widest opacity-50"
              >
                {card.label}
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

/* ── Slide 9: Feature 2 — CMS Flexibility (light) ────── */
const cmsFeatures = ["Visual editing", "No-code page builder", "Instant publishing"];

export function Slide09_Feature2() {
  return (
    <SlideBase theme="light" className="!p-0">
      <div className="flex h-full flex-col px-16 pt-16 pb-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest text-muted-foreground"
        >
          Flexibility
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          Your Marketing Team Ships Without Waiting on Engineering
        </Heading>
        <div className="mt-4 max-w-[75%]">
          <Text size={500}>
            We build on headless CMS platforms like Sanity and Contentful with
            visual editing, so your content team can update pages, launch
            campaigns, and run experiments independently.
          </Text>
          <Text size={400} className="mt-3 text-muted-foreground">
            No more bottlenecks. No more tickets for copy changes.
          </Text>
        </div>

        {/* Feature pills */}
        <div className="mt-auto flex gap-3">
          {cmsFeatures.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 rounded-sm bg-muted px-6 py-4"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0"
              >
                <path
                  d="M3 8.5L6.5 12L13 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Text as="span" size={300}>
                {feature}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </SlideBase>
  );
}

/* ── Slide 10: Quote (dark) ──────────────────────────── */
export function Slide10_Quote() {
  return (
    <SlideBase theme="dark" className="!p-0">
      {/* 3D accent shape — left side */}
      <img
        src="/images/3d-shapes/glass-panels.png"
        alt=""
        className="pointer-events-none absolute -left-[25%] top-[10%] w-[50%] object-contain select-none"
        aria-hidden="true"
      />

      {/* Centered content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-16">
        <div className="max-w-[80%] text-center">
          <Text as="span" size={700} className="opacity-20">
            &ldquo;
          </Text>
          <Text size={700} align="center" className="italic opacity-70">
            Webstacks completely transformed how we think about our website.
            It&apos;s not just a brochure anymore — it&apos;s our
            best-performing sales channel.
          </Text>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Text as="span" size={400}>
              Sarah Chen
            </Text>
            <Text as="span" size={300} className="opacity-50">
              VP of Marketing, TechCorp
            </Text>
          </div>
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

/* ── Slide 11: Results Stat (dark) ───────────────────── */
export function Slide11_Results() {
  return (
    <SlideBase theme="dark" className="!p-0">
      {/* 3D accent shape — bottom-right corner */}
      <img
        src="/images/3d-shapes/triple-pyramids.png"
        alt=""
        className="pointer-events-none absolute -bottom-[15%] -right-[15%] w-[45%] object-contain select-none"
        aria-hidden="true"
      />

      {/* Centered content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 px-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Results
        </Text>
        <Heading as="h2" size="display">
          3.2x
        </Heading>
        <Text size={600} align="center" className="max-w-[70%] opacity-70">
          average increase in demo requests within 90 days of launch
        </Text>
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

/* ── Slide 12: Case Study Teaser (light) ─────────────── */
export function Slide12_CaseStudy() {
  return (
    <SlideBase theme="light" className="!p-0">
      <div className="flex h-full">
        {/* Left column — text */}
        <div className="flex w-[50%] flex-col gap-4 pl-16 pt-16 pb-16 pr-8">
          <Text
            as="span"
            size={200}
            className="font-mono uppercase tracking-widest text-muted-foreground"
          >
            Case Study
          </Text>
          <Heading as="h2" size={3}>
            How TechCorp Increased Pipeline by 240%
          </Heading>
          <Text size={500}>
            A complete website redesign that turned visitors into qualified
            leads, driving measurable pipeline growth in under 90 days.
          </Text>
          <Text size={400} className="text-muted-foreground">
            Read the full case study →
          </Text>
        </div>

        {/* Right column — image placeholder */}
        <div className="relative flex w-[50%] items-center justify-center overflow-hidden pr-16 pt-16 pb-16">
          <div className="h-full w-full overflow-hidden rounded-sm bg-muted">
            <img
              src="/images/3d-shapes/split-ring.png"
              alt=""
              className="h-full w-full object-contain p-12"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </SlideBase>
  );
}

/* ── Slide 13: CTA (dark) ────────────────────────────── */
export function Slide13_CTA() {
  return (
    <SlideBase theme="dark" className="!p-0">
      {/* 3D accent shape — right side (bookend with title slide) */}
      <img
        src="/images/3d-shapes/layered-diamonds.png"
        alt=""
        className="pointer-events-none absolute -bottom-[15%] -right-[20%] w-[60%] object-contain select-none"
        aria-hidden="true"
      />

      {/* Centered content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-16 text-center">
        <Heading as="h2" size={1}>
          Let&apos;s Build Your Best-Performing Channel
        </Heading>
        <Text size={600} className="mt-4 max-w-[70%] opacity-70">
          Get a free website audit and see where you&apos;re leaving conversions
          on the table.
        </Text>
        <div className="mt-8 flex items-center gap-8">
          <Text as="span" size={400} className="opacity-70">
            hello@webstacks.com
          </Text>
          <Text as="span" size={400} className="opacity-70">
            webstacks.com/contact
          </Text>
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
