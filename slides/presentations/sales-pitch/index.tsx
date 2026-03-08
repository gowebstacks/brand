/**
 * Sales Pitch Deck — 21 slides
 *
 * Deck flow:
 * 1. Title → 2. Philosophy → 3. Meet Webstacks → 4. Clients
 * 5. Retainer Title → 6. Who We Are → 7. Point of View → 8. Why Teams Bring Us In
 * 9. What Makes Us Different → 10. Core Disciplines → 11. Strong Partner
 * 12. Roadmap Matters → 13. Roadmap + Retainer → 14. Monthly Capacity
 * 15. Flex Model → 16. Pod Model → 17. Kinds of Work
 * 18. Commercial Framing → 19. How We Start
 */
import { useState, useEffect } from "react";
import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter, TitleSlide } from "../../components";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityClient, urlFor } from "../../lib/sanity";
import { companiesWithLogosQuery } from "../../lib/queries";
import type { PresentationMeta, SlideEntry } from "../types";

export const metadata: PresentationMeta = {
  id: "sales-pitch",
  label: "Dartmouth Tuck School of Business Demonstration Call",
  count: 21,
};

/* ── Slide 1: Title ─────────────────────────────────── */
export function Slide01_Title({ clientLogoSrc, clientLogoNeedsInvert }: { clientLogoSrc?: string; clientLogoNeedsInvert?: boolean } = {}) {
  const [logo, setLogo] = useState<{ src: string; needsInvert: boolean } | null>(null);

  useEffect(() => {
    if (clientLogoSrc !== undefined) return;
    sanityClient
      .fetch(companiesWithLogosQuery)
      .then((results: Array<{ _id: string; name: string; logoOnDark?: SanityImageSource; logoOnLight?: SanityImageSource }>) => {
        const braze = results.find((c) => c.name === "Braze");
        if (!braze) return;
        const useDark = !!braze.logoOnDark;
        const source = (useDark ? braze.logoOnDark : braze.logoOnLight)!;
        setLogo({ src: urlFor(source).height(64).url(), needsInvert: !useDark });
      })
      .catch(() => {});
  }, [clientLogoSrc]);

  const resolvedSrc = clientLogoSrc ?? logo?.src;
  const resolvedInvert = clientLogoNeedsInvert ?? logo?.needsInvert;

  return (
    <TitleSlide
      date="March 04, 2026"
      eyebrow="Webstacks"
      title="Exploring an Agency Partnership"
      subtitle="Accelerating the evolution of your brand and web presence for your next phase of growth."
      heroImage="/images/3d-shapes/layered-diamonds.png"
      clientLogoSrc={resolvedSrc}
      clientLogoNeedsInvert={resolvedInvert}
      clientLogoAlt="Braze"
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

      <SlideFooter />
    </SlideBase>
  );
}

/* ── Slide: At a Glance ────────────────────────────────── */
const glancePillars = [
  { label: "Website-first", image: "/images/3d-shapes/split-ring.png" },
  { label: "Fast & Flexible", image: "/images/3d-shapes/glass-cubes.png" },
  { label: "Strategic Focus", image: "/images/3d-shapes/glass-panels.png" },
  { label: "Enterprise-ready", image: "/images/3d-shapes/twisted-torus.png" },
  { label: "Platform Agnostic", image: "/images/3d-shapes/layered-diamonds.png" },
];

export function Slide_AtAGlance() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="relative z-10 flex h-full flex-col gap-10 px-16 pt-16 pb-24">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <Text
            as="span"
            size={200}
            className="font-mono uppercase tracking-widest opacity-60"
          >
            Webstacks at a Glance
          </Text>
          <Heading as="h2" size={1}>
            How to think of us as a partner.
          </Heading>
        </div>

        {/* Pillar tiles */}
        <div className="grid grid-cols-5 gap-1">
          {glancePillars.map((pillar) => (
            <div key={pillar.label} className="flex flex-col gap-4">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={pillar.image}
                  alt=""
                  className="h-full w-full object-cover"
                  aria-hidden="true"
                />
              </div>
              <Text as="span" size={500} className="text-center opacity-90">
                {pillar.label}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
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

      <SlideFooter />
    </SlideBase>
  );
}

/* ── Slide 4: Clients ──────────────────────────────── */
interface ClientCompany {
  name: string;
  logoUrl: string;
  needsInvert?: boolean;
}

export function Slide04_Clients({
  companies: companiesProp,
}: {
  companies?: ClientCompany[];
} = {}) {
  const [fetched, setFetched] = useState<ClientCompany[]>([]);

  useEffect(() => {
    if (companiesProp !== undefined) return;
    sanityClient
      .fetch(companiesWithLogosQuery)
      .then((results: Array<{ _id: string; name: string; logoOnDark?: SanityImageSource; logoOnLight?: SanityImageSource }>) => {
        const seen = new Set<string>();
        const deduped = results.filter((c) => {
          if (seen.has(c.name)) return false;
          seen.add(c.name);
          return true;
        });
        setFetched(
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
      .catch(() => {});
  }, [companiesProp]);

  const companies = companiesProp ?? fetched;
  const displayCompanies = companies.slice(0, 16);

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

      <SlideFooter />
    </SlideBase>
  );
}

/* ── Slide 5: Retainer Title ──────────────────────────── */
export function Slide05_RetainerTitle() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/layered-diamonds.png"
        alt=""
        className="pointer-events-none absolute -right-[15%] -top-[20%] w-[50%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Webstacks
        </Text>
        <Heading as="h2" size={1} align="center">
          Webstacks Retainer Engagement
        </Heading>
        <Text size={500} align="center" className="max-w-[70%] opacity-70">
          An operating model for building, managing, and improving modern B2B
          websites
        </Text>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}

/* ── Slide 6: Who Webstacks Is ───────────────────────── */
const whoWeAreItems = [
  "a serious growth channel",
  "a scalable content and campaign engine",
  "a strong product and brand experience",
  "a system their teams can actually manage",
];

export function Slide06_WhoWeAre() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="flex h-full">
        {/* Left column */}
        <div className="flex w-[50%] flex-col gap-4 pl-16 pt-16">
          <Text
            as="span"
            size={200}
            className="font-mono uppercase tracking-widest opacity-60"
          >
            Who We Are
          </Text>
          <Heading as="h2" size={3}>
            A web agency, by design
          </Heading>
          <Text size={500} className="opacity-70">
            We focus on one thing: websites.
          </Text>
          <Text size={400} className="max-w-[90%] opacity-70">
            We partner with B2B companies that need a website to function as:
          </Text>
        </div>

        {/* Right column — list cards */}
        <div className="flex w-[50%] flex-col justify-center gap-3 pr-16">
          {whoWeAreItems.map((item) => (
            <div
              key={item}
              className="rounded-sm bg-white/[0.04] px-6 py-4"
            >
              <Text size={400} className="opacity-70">{item}</Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}

/* ── Slide 7: Our Point of View ──────────────────────── */
const evolvesItems = [
  "the business evolves",
  "the brand matures",
  "new products launch",
  "campaigns change",
  "conversion goals shift",
  "internal teams grow",
];

export function Slide07_PointOfView() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/spiral-band.png"
        alt=""
        className="pointer-events-none absolute -left-[18%] -bottom-[25%] w-[45%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col justify-center gap-6 px-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Our Point of View
        </Text>
        <Heading as="h2" size={3}>
          We believe the website is a product
        </Heading>
        <Text size={500} className="opacity-70">
          It should evolve as:
        </Text>

        <div className="mt-2 grid grid-cols-3 gap-3">
          {evolvesItems.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-sm bg-white/[0.04] px-5 py-3"
            >
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
              <Text as="span" size={400} className="opacity-70">
                {item}
              </Text>
            </div>
          ))}
        </div>

        <Text size={400} className="mt-2 opacity-50">
          A website should not sit still.
        </Text>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}

/* ── Slide 8: Why Teams Bring Us In ──────────────────── */
const painPoints = [
  "Marketing needs to move faster than internal resources allow",
  "The site becomes harder to manage as it grows",
  "New launches and campaigns create constant demand",
  "Teams start assembling pages instead of building a system",
  "Strategy gets crowded out by production work",
  "The website becomes reactive instead of intentional",
];

export function Slide08_WhyTeamsBringUsIn() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          The Challenge
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          What usually breaks down internally
        </Heading>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-sm bg-white/[0.04] px-6 py-5"
            >
              <Text
                as="span"
                size={200}
                className="mt-0.5 shrink-0 font-mono opacity-50"
              >
                {String(i + 1).padStart(2, "0")}
              </Text>
              <Text size={400} className="opacity-70">{item}</Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}

/* ── Slide 9: What Makes Webstacks Different ─────────── */
const opinions = [
  "Empowering marketing teams to own the website more effectively",
  "Building systems, not one-off pages",
  "Designing for reuse, consistency, and composability",
  "Making CMS experiences more intuitive for non-technical teams",
  "Pairing execution with real website strategy",
  "Acting like a partner, not a ticket queue",
];

export function Slide09_WhatMakesUsDifferent() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/glass-cubes.png"
        alt=""
        className="pointer-events-none absolute -right-[15%] -bottom-[25%] w-[45%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Our Difference
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          What we are opinionated about
        </Heading>

        <div className="mt-8 flex flex-col gap-3">
          {opinions.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 rounded-sm bg-white/[0.04] px-6 py-4"
            >
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
              <Text as="span" size={400} className="opacity-70">
                {item}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}

/* ── Slide 10: Four Core Disciplines ─────────────────── */
const disciplines = [
  {
    title: "Web Strategy",
    description: "Roadmap, priorities, testing, goals, recommendations",
  },
  {
    title: "Design",
    description: "UX, systems, reusable components, consistency",
  },
  {
    title: "Development",
    description: "Frontend, backend, CMS, integrations, new functionality",
  },
  {
    title: "Program Management",
    description: "Visibility, planning, coordination, momentum",
  },
];

export function Slide10_CoreDisciplines() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Our Capabilities
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          How we show up as a web partner
        </Heading>

        <div className="mt-8 grid grid-cols-4 gap-3">
          {disciplines.map((d) => (
            <div
              key={d.title}
              className="flex flex-col justify-between rounded-sm bg-white/[0.04] p-8"
              style={{ minHeight: 240 }}
            >
              <Heading as="h3" size={4}>
                {d.title}
              </Heading>
              <Text size={400} className="opacity-70">
                {d.description}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}

/* ── Slide 11: Strong Web Partner ────────────────────── */
const partnerActions = [
  { title: "Stabilize", description: "what is slowing the team down" },
  { title: "Systemize", description: "how the site is designed, built, and managed" },
  { title: "Prioritize", description: "what matters most next" },
  { title: "Improve", description: "the website continuously over time" },
];

export function Slide11_StrongPartner() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/stacked-blocks.png"
        alt=""
        className="pointer-events-none absolute -left-[15%] -top-[25%] w-[40%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          The Role
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          A strong partner should help you do four things
        </Heading>

        <div className="mt-auto mb-20 grid grid-cols-4 gap-3">
          {partnerActions.map((a, i) => (
            <div
              key={a.title}
              className="flex flex-col gap-3 rounded-sm bg-white/[0.04] p-8"
            >
              <Text
                as="span"
                size={200}
                className="font-mono opacity-50"
              >
                {String(i + 1).padStart(2, "0")}
              </Text>
              <Heading as="h3" size={4}>
                {a.title}
              </Heading>
              <Text size={400} className="opacity-70">
                {a.description}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}

/* ── Slide 12: Why the Roadmap Matters ───────────────── */
const withoutRoadmap = [
  "Work becomes reactive",
  "Priorities get fuzzy",
  "Urgent requests crowd out meaningful progress",
];

const withRoadmap = [
  "The team has direction",
  "Initiatives ladder up to goals",
  "Capacity can be used intentionally",
  "Progress compounds over time",
];

export function Slide12_RoadmapMatters() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Strategy
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          The roadmap is what keeps the work strategic
        </Heading>

        <div className="mt-8 grid grid-cols-2 gap-6">
          {/* Without */}
          <div className="flex flex-col gap-3">
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest opacity-50"
            >
              Without a Roadmap
            </Text>
            {withoutRoadmap.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-sm bg-white/[0.04] px-6 py-4"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="shrink-0 opacity-50"
                >
                  <path
                    d="M4 8h8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <Text size={400} className="opacity-70">{item}</Text>
              </div>
            ))}
          </div>

          {/* With */}
          <div className="flex flex-col gap-3">
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest opacity-50"
            >
              With a Roadmap
            </Text>
            {withRoadmap.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-sm bg-white/[0.04] px-6 py-4"
              >
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
                <Text size={400} className="opacity-70">{item}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}

/* ── Slide 13: Roadmap + Retainer ────────────────────── */
const roadmapDefines = [
  "What to prioritize",
  "What to sequence",
  "What outcomes matter",
];

const retainerProvides = [
  "Monthly capacity",
  "Cross-functional execution",
  "Flexibility across priorities",
  "Continuity over time",
];

export function Slide13_RoadmapAndRetainer() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="relative z-10 flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          The Model
        </Text>
        <Heading as="h2" size={3} className="mt-4 max-w-[80%]">
          The roadmap sets direction. The retainer creates momentum.
        </Heading>

        <div className="mt-8 grid grid-cols-2 gap-6">
          {/* Roadmap column */}
          <div className="flex flex-col gap-3">
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest opacity-50"
            >
              The Roadmap Defines
            </Text>
            {roadmapDefines.map((item) => (
              <div
                key={item}
                className="rounded-sm bg-white/[0.04] px-6 py-4"
              >
                <Text size={400} className="opacity-70">
                  {item}
                </Text>
              </div>
            ))}
          </div>

          {/* Retainer column */}
          <div className="flex flex-col gap-3">
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest opacity-50"
            >
              The Retainer Provides
            </Text>
            {retainerProvides.map((item) => (
              <div
                key={item}
                className="rounded-sm bg-white/[0.04] px-6 py-4"
              >
                <Text size={400} className="opacity-70">
                  {item}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}

/* ── Slide 14: Monthly Capacity ──────────────────────── */
const roadmapInitiatives = [
  "CRO improvements",
  "New landing pages",
  "Technical enhancements",
  "CMS and UX improvements",
];

const adHocRequests = [
  "Campaign launches",
  "Content updates",
  "Quick fixes",
  "Small experiments",
];

export function Slide14_MonthlyCapacity() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Capacity
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          Monthly capacity enables both speed and strategic progress
        </Heading>

        <div className="mt-6 flex items-start gap-6">
          {/* Minimum engagement */}
          <div className="flex flex-col gap-2 rounded-sm bg-white/[0.04] p-6" style={{ minWidth: 200 }}>
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest opacity-50"
            >
              Minimum Engagement
            </Text>
            <Heading as="h3" size={2}>
              100+ hrs
            </Heading>
            <Text size={300} className="opacity-50">
              per month
            </Text>
          </div>

          {/* Roadmap initiatives */}
          <div className="flex flex-1 flex-col gap-3">
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest opacity-50"
            >
              Roadmap Initiatives — 60–70%
            </Text>
            <div className="grid grid-cols-2 gap-2">
              {roadmapInitiatives.map((item) => (
                <div key={item} className="rounded-sm bg-white/[0.04] px-4 py-3">
                  <Text size={300} className="opacity-70">{item}</Text>
                </div>
              ))}
            </div>
          </div>

          {/* Ad hoc */}
          <div className="flex flex-1 flex-col gap-3">
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest opacity-50"
            >
              Ad Hoc Requests — 30–40%
            </Text>
            <div className="grid grid-cols-2 gap-2">
              {adHocRequests.map((item) => (
                <div key={item} className="rounded-sm bg-white/[0.04] px-4 py-3">
                  <Text size={300} className="opacity-70">{item}</Text>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-auto mb-6">
          <Text size={300} className="opacity-50">
            Executed across: Strategy | Design | Development | Program Management
          </Text>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}

/* ── Slide 15: Why Flex Model Works ──────────────────── */
const flexAreas = ["Strategy", "Design", "Development", "Program Management"];

export function Slide15_FlexModel() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/twisted-torus.png"
        alt=""
        className="pointer-events-none absolute -right-[12%] -top-[20%] w-[40%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Flexibility
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          Capacity flexes with the work
        </Heading>
        <Text size={500} className="mt-4 max-w-[60%] opacity-70">
          Hours are not locked into rigid departmental buckets. That means
          capacity can move across:
        </Text>

        <div className="mt-6 flex gap-3">
          {flexAreas.map((area) => (
            <div
              key={area}
              className="rounded-sm bg-white/[0.04] px-6 py-4"
            >
              <Text size={400} className="opacity-70">
                {area}
              </Text>
            </div>
          ))}
        </div>

        <Text size={400} className="mt-6 max-w-[65%] opacity-50">
          So if one month requires heavier development, or another requires more
          planning and UX work, the team can adapt without restructuring the
          engagement.
        </Text>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}

/* ── Slide 16: Pod Model ─────────────────────────────── */
const podBenefits = [
  "Multiple specialists can contribute when needed",
  "Work can accelerate around priority initiatives",
  "Competency leads provide continuity and context",
  "You get depth without hiring a full internal team",
];

export function Slide16_PodModel() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Team Structure
        </Text>
        <Heading as="h2" size={3} className="mt-4 max-w-[70%]">
          You are not buying one person. You are getting a pod.
        </Heading>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {podBenefits.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-sm bg-white/[0.04] px-6 py-5"
            >
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
              <Text size={400} className="opacity-70">{item}</Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}

/* ── Slide 17: Kinds of Work ─────────────────────────── */
const workTypes = [
  "Ongoing website optimization",
  "New page and template creation",
  "Campaign and launch support",
  "CMS and editor experience improvements",
  "Technical cleanup and enhancements",
  "Design system expansion",
  "Experimentation and conversion work",
  "Roadmap planning and prioritization",
];

export function Slide17_KindsOfWork() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="relative z-10 flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Scope
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          What this model is built to support
        </Heading>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {workTypes.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 rounded-sm bg-white/[0.04] px-6 py-4"
            >
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
              <Text as="span" size={400} className="opacity-70">
                {item}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}

/* ── Slide 18: Commercial Framing ────────────────────── */
const commercialPoints = [
  { label: "Minimum Engagement", value: "6 Months" },
  { label: "Blended Hourly Rate", value: "$200/hr" },
  { label: "Recommended Start", value: "100+ hrs/mo" },
];

export function Slide18_CommercialFraming() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Commercials
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          How we typically structure engagements
        </Heading>

        <div className="mt-8 grid grid-cols-3 gap-3">
          {commercialPoints.map((c) => (
            <div
              key={c.label}
              className="flex flex-col justify-between rounded-sm bg-white/[0.04] p-8"
              style={{ minHeight: 180 }}
            >
              <Heading as="h3" size={1}>
                {c.value}
              </Heading>
              <Text
                as="span"
                size={200}
                className="font-mono uppercase tracking-widest opacity-50"
              >
                {c.label}
              </Text>
            </div>
          ))}
        </div>

        <div className="mt-auto mb-6 max-w-[70%]">
          <Text size={400} className="opacity-50">
            Capacity scales based on goals, pace, and complexity. If the
            capacity is too low, the work becomes too reactive and the value
            drops quickly.
          </Text>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}

/* ── Slide 19: How We Usually Start ──────────────────── */
const startingSteps = [
  "Review the current website, workflows, and systems",
  "Identify immediate blockers and areas of friction",
  "Align on goals and roadmap priorities",
  "Recommend the right starting capacity",
  "Begin execution with clear ownership and cadence",
];

export function Slide19_HowWeStart() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/layered-pebbles.png"
        alt=""
        className="pointer-events-none absolute -right-[12%] -bottom-[20%] w-[40%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Getting Started
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          A typical starting path
        </Heading>

        <div className="mt-8 flex flex-col gap-3">
          {startingSteps.map((step, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-sm bg-white/[0.04] px-6 py-4"
            >
              <Text
                as="span"
                size={200}
                className="shrink-0 font-mono opacity-50"
              >
                {String(i + 1).padStart(2, "0")}
              </Text>
              <Text as="span" size={400} className="opacity-70">
                {step}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}

/* ── Slide: Closing CTA ────────────────────────────────── */
const closingTeam = [
  { name: "Nikan Shahidi", role: "CEO", avatarSrc: "/images/headshots/leadership/nikan-shahidi.png" },
  { name: "Jesse Schor", role: "Head of Growth", avatarSrc: "/images/headshots/leadership/jesse-schor.png" },
  { name: "Emily Winsauer", role: "Head of Web Strategy", avatarSrc: "/images/headshots/leadership/emily-winsauer.png" },
  { name: "Hunter McLean", role: "Head of Design", avatarSrc: "/images/headshots/leadership/hunter-mcclean.png" },
  { name: "Tori Wolski", role: "Head of PMO", avatarSrc: "/images/headshots/leadership/tori-wolski.png" },
];

const closingPhotos = [
  "/images/photography/coworkers-reviewing-design-layouts.jpg",
  "/images/photography/man-blue-cap-laptop-high-table-wide.jpg",
  "/images/photography/four-people-walking-hallway-smiling.jpg",
  "/images/photography/office-lounge-webstacks-sign-wide.jpg",
];

export function Slide_ClosingCTA() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="relative z-10 flex h-full flex-col">
        {/* Top section: CTA + team */}
        <div className="flex flex-1 items-start justify-between px-16 pt-16">
          {/* Left: headline + subtitle + button */}
          <div className="flex max-w-[50%] flex-col gap-5">
            <Heading as="h2" size={1}>
              Let&rsquo;s win together.
            </Heading>
            <Text size={400} className="opacity-50">
              Still have questions? Let&rsquo;s talk.
            </Text>
            <div className="mt-2">
              <span className="inline-block rounded-full bg-[#2563EB] px-6 py-3 text-sm text-white">
                Book with us
              </span>
            </div>
          </div>

          {/* Right: team grid */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-5">
            {closingTeam.map((member) => (
              <div key={member.name} className="flex items-center gap-3">
                <img
                  src={member.avatarSrc}
                  alt={member.name}
                  className="h-12 w-12 shrink-0 rounded-none object-cover"
                />
                <div className="flex flex-col">
                  <Text as="span" size={200}>
                    {member.name}
                  </Text>
                  <Text as="span" size={100} className="opacity-50">
                    {member.role}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: photography strip — edge-to-edge, staggered aspect ratios */}
        <div className="mb-20 mt-auto flex w-full items-center justify-between gap-5">
          {closingPhotos.map((src, i) => {
            const isPortrait = i === 1;
            return (
              <div
                key={src}
                className="overflow-hidden"
                style={{
                  aspectRatio: i === 1 ? "3/4" : i === 2 ? "16/9" : "4/3",
                  width: i === 1 ? "22%" : "26%",
                  ...(i === 1 ? { transform: "scale(0.9)" } : {}),
                }}
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover"
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}

/** Ordered list of individual slide components with labels for sidebar nav */
export const slides: SlideEntry[] = [
  { Component: Slide01_Title, label: "Title" },
  { Component: Slide02_Philosophy, label: "Philosophy" },
  { Component: Slide_AtAGlance, label: "At a Glance" },
  { Component: Slide03_MeetWebstacks, label: "Meet Webstacks" },
  { Component: Slide04_Clients, label: "Clients" },
  { Component: Slide05_RetainerTitle, label: "Retainer Title" },
  { Component: Slide06_WhoWeAre, label: "Who We Are" },
  { Component: Slide07_PointOfView, label: "Point of View" },
  { Component: Slide08_WhyTeamsBringUsIn, label: "Why Teams Bring Us In" },
  { Component: Slide09_WhatMakesUsDifferent, label: "What Makes Us Different" },
  { Component: Slide10_CoreDisciplines, label: "Core Disciplines" },
  { Component: Slide11_StrongPartner, label: "Strong Partner" },
  { Component: Slide12_RoadmapMatters, label: "Roadmap Matters" },
  { Component: Slide13_RoadmapAndRetainer, label: "Roadmap + Retainer" },
  { Component: Slide14_MonthlyCapacity, label: "Monthly Capacity" },
  { Component: Slide15_FlexModel, label: "Flex Model" },
  { Component: Slide16_PodModel, label: "Pod Model" },
  { Component: Slide17_KindsOfWork, label: "Kinds of Work" },
  { Component: Slide18_CommercialFraming, label: "Commercial Framing" },
  { Component: Slide19_HowWeStart, label: "How We Start" },
  { Component: Slide_ClosingCTA, label: "Let's Win Together" },
];

/**
 * Full deck — renders all 19 slides in sequence.
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
      <div data-slide-index={0}><Slide01_Title clientLogoSrc={companies.find((c) => c.name === "Braze")?.logoUrl} clientLogoNeedsInvert={companies.find((c) => c.name === "Braze")?.needsInvert} /></div>
      <div data-slide-index={1}><Slide02_Philosophy /></div>
      <div data-slide-index={2}><Slide_AtAGlance /></div>
      <div data-slide-index={3}><Slide03_MeetWebstacks /></div>
      <div data-slide-index={4}><Slide04_Clients companies={companies} /></div>
      <div data-slide-index={5}><Slide05_RetainerTitle /></div>
      <div data-slide-index={6}><Slide06_WhoWeAre /></div>
      <div data-slide-index={7}><Slide07_PointOfView /></div>
      <div data-slide-index={8}><Slide08_WhyTeamsBringUsIn /></div>
      <div data-slide-index={9}><Slide09_WhatMakesUsDifferent /></div>
      <div data-slide-index={10}><Slide10_CoreDisciplines /></div>
      <div data-slide-index={11}><Slide11_StrongPartner /></div>
      <div data-slide-index={12}><Slide12_RoadmapMatters /></div>
      <div data-slide-index={13}><Slide13_RoadmapAndRetainer /></div>
      <div data-slide-index={14}><Slide14_MonthlyCapacity /></div>
      <div data-slide-index={15}><Slide15_FlexModel /></div>
      <div data-slide-index={16}><Slide16_PodModel /></div>
      <div data-slide-index={17}><Slide17_KindsOfWork /></div>
      <div data-slide-index={18}><Slide18_CommercialFraming /></div>
      <div data-slide-index={19}><Slide19_HowWeStart /></div>
      <div data-slide-index={20}><Slide_ClosingCTA /></div>
    </div>
  );
}
