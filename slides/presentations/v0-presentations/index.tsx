/**
 * v0 Presentations Tutorial — 10 slides
 *
 * Deck flow:
 * 1. Title → 2. What is v0? → 3. Why Presentations in v0?
 * 4. Getting Started → 5. Slide Components → 6. Building Your First Deck
 * 7. Best Practices → 8. Advanced Techniques → 9. Live Demo → 10. Questions/CTA
 */
import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter, TitleSlide, SectionSlide } from "../../components";
import type { PresentationMeta, SlideEntry } from "../types";

export const metadata: PresentationMeta = {
  id: "v0-presentations",
  label: "Creating Presentations with v0",
  count: 10,
};

/* ── Slide 1: Title ─────────────────────────────────── */
export function Slide01_Title() {
  return (
    <TitleSlide
      date="March 07, 2026"
      eyebrow="v0 Tutorial"
      title="Creating Presentations with v0"
      subtitle="Learn how to build beautiful, branded slide decks using AI-powered development."
      heroImage="/images/3d-shapes/layered-diamonds.png"
      teamMembers={[
        { name: "Nikan Shahidi", role: "Presenter", avatarSrc: "/images/headshots/leadership/nikan-shahidi.png" },
      ]}
      theme="dark"
    />
  );
}

/* ── Slide 2: What is v0? ──────────────────────────── */
const v0Features = [
  { title: "AI-Powered", desc: "Generate code through natural language prompts" },
  { title: "React & Next.js", desc: "Built on modern web technologies" },
  { title: "Real-Time Preview", desc: "See changes instantly as you build" },
  { title: "Production Ready", desc: "Deploy directly to Vercel" },
];

export function Slide02_WhatIsV0() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/glass-cubes.png"
        alt=""
        className="pointer-events-none absolute -right-[15%] -top-[25%] w-[45%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Introduction
        </Text>
        <Heading as="h2" size={2} className="mt-4">
          What is v0?
        </Heading>
        <Text size={500} className="mt-4 max-w-[60%] opacity-70">
          v0 is Vercel&apos;s AI-powered development platform that transforms natural language into production-ready code.
        </Text>

        <div className="mt-10 grid grid-cols-2 gap-4">
          {v0Features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-2 rounded-sm bg-white/[0.04] p-6"
            >
              <Heading as="h3" size={5}>
                {feature.title}
              </Heading>
              <Text size={300} className="opacity-60">
                {feature.desc}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}

/* ── Slide 3: Why Presentations in v0? ─────────────── */
const benefitItems = [
  "Consistent brand styling across all slides",
  "Reusable component library",
  "Version control with Git",
  "Collaborative editing",
  "Deploy and share instantly",
  "Interactive elements possible",
];

export function Slide03_WhyPresentations() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/spiral-band.png"
        alt=""
        className="pointer-events-none absolute -right-[15%] -bottom-[20%] w-[45%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col justify-center gap-6 px-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          The Opportunity
        </Text>
        <Heading as="h2" size={2}>
          Why build presentations in v0?
        </Heading>
        <Text size={500} className="max-w-[55%] opacity-70">
          Move beyond static slides to dynamic, on-brand decks.
        </Text>

        <div className="mt-4 grid max-w-[75%] grid-cols-2 gap-3">
          {benefitItems.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-sm bg-white/[0.04] px-5 py-4"
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

/* ── Slide 4: Getting Started ──────────────────────── */
const steps = [
  { num: "01", title: "Clone the brand repo", desc: "Start with the Webstacks brand repository as your foundation" },
  { num: "02", title: "Open in v0", desc: "Connect your GitHub repo and start building with AI assistance" },
  { num: "03", title: "Create your deck", desc: "Add a new presentation folder under slides/presentations/" },
  { num: "04", title: "Build slides", desc: "Use existing components or create custom layouts" },
];

export function Slide04_GettingStarted() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Getting Started
        </Text>
        <Heading as="h2" size={2} className="mt-4">
          Four steps to your first deck
        </Heading>

        <div className="mt-10 grid grid-cols-2 gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex flex-col gap-3 rounded-sm bg-white/[0.04] p-6"
            >
              <Text
                as="span"
                size={200}
                className="font-mono opacity-50"
              >
                {step.num}
              </Text>
              <Heading as="h3" size={5}>
                {step.title}
              </Heading>
              <Text size={300} className="opacity-60">
                {step.desc}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}

/* ── Slide 5: Slide Components ─────────────────────── */
const components = [
  { name: "TitleSlide", use: "Opening/cover slides with team members" },
  { name: "ContentSlide", use: "General content with text and optional images" },
  { name: "SectionSlide", use: "Dividers between major sections" },
  { name: "StatSlide", use: "Highlight key metrics and numbers" },
  { name: "QuoteSlide", use: "Customer testimonials and quotes" },
  { name: "ComparisonSlide", use: "Side-by-side comparisons" },
  { name: "AgendaSlide", use: "Outline and table of contents" },
  { name: "CTASlide", use: "Closing call-to-action" },
];

export function Slide05_SlideComponents() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/stacked-blocks.png"
        alt=""
        className="pointer-events-none absolute -right-[10%] -bottom-[20%] w-[40%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Component Library
        </Text>
        <Heading as="h2" size={2} className="mt-4">
          Pre-built slide components
        </Heading>
        <Text size={400} className="mt-2 max-w-[55%] opacity-70">
          Start with these ready-to-use templates for consistent, branded decks.
        </Text>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {components.map((comp) => (
            <div
              key={comp.name}
              className="flex items-center gap-4 rounded-sm bg-white/[0.04] px-5 py-3"
            >
              <Text as="span" size={300} className="font-mono text-foreground">
                {comp.name}
              </Text>
              <Text as="span" size={200} className="opacity-50">
                {comp.use}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}

/* ── Slide 6: Building Your First Deck Section ─────── */
export function Slide06_BuildingSection() {
  return (
    <SectionSlide
      eyebrow="Hands-On"
      title="Building Your First Deck"
      subtitle="Let&apos;s walk through the process step by step"
      theme="dark"
    />
  );
}

/* ── Slide 7: Best Practices ───────────────────────── */
const bestPractices = [
  { title: "Keep it visual", desc: "Use images, 3D shapes, and whitespace to create breathing room" },
  { title: "Limit text per slide", desc: "Maximum 6-8 bullet points or one key message" },
  { title: "Use the grid system", desc: "Leverage 2×2, 3×2, and column layouts for structure" },
  { title: "Maintain brand consistency", desc: "Use design tokens and the component library" },
  { title: "Add section dividers", desc: "Break up content with SectionSlide components" },
  { title: "Test at full screen", desc: "Preview at 1280×720 to check proportions" },
];

export function Slide07_BestPractices() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/glass-panels.png"
        alt=""
        className="pointer-events-none absolute -left-[15%] -top-[25%] w-[40%] -rotate-12 object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Tips & Tricks
        </Text>
        <Heading as="h2" size={2} className="mt-4">
          Best practices for great decks
        </Heading>

        <div className="mt-8 grid grid-cols-2 gap-4">
          {bestPractices.map((practice) => (
            <div
              key={practice.title}
              className="flex flex-col gap-2 rounded-sm bg-white/[0.04] p-5"
            >
              <Heading as="h3" size={6}>
                {practice.title}
              </Heading>
              <Text size={200} className="opacity-60">
                {practice.desc}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}

/* ── Slide 8: Advanced Techniques ──────────────────── */
const advancedItems = [
  "Fetch live data from APIs or CMS",
  "Add interactive elements with React state",
  "Create custom slide layouts when needed",
  "Use 3D shapes for visual interest",
  "Integrate with Sanity for dynamic content",
  "Deploy as a standalone presentation app",
];

export function Slide08_AdvancedTechniques() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/twisted-torus.png"
        alt=""
        className="pointer-events-none absolute -right-[12%] top-[10%] w-[38%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col justify-center gap-6 px-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Going Further
        </Text>
        <Heading as="h2" size={2}>
          Advanced techniques
        </Heading>
        <Text size={500} className="max-w-[55%] opacity-70">
          Take your presentations to the next level.
        </Text>

        <div className="mt-4 flex flex-col gap-3 max-w-[55%]">
          {advancedItems.map((item) => (
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
      </div>

      <SlideFooter />
    </SlideBase>
  );
}

/* ── Slide 9: Live Demo Section ────────────────────── */
export function Slide09_LiveDemo() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/cube-grid.png"
        alt=""
        className="pointer-events-none absolute -right-[20%] -bottom-[30%] w-[55%] object-contain select-none"
        aria-hidden="true"
      />
      <img
        src="/images/3d-shapes/scattered-discs.png"
        alt=""
        className="pointer-events-none absolute -left-[15%] -top-[20%] w-[40%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Demonstration
        </Text>
        <Heading as="h2" size={1} align="center">
          Live Demo
        </Heading>
        <Text size={500} align="center" className="max-w-[60%] opacity-70">
          Watch how we build a new presentation deck from scratch using v0 in real-time.
        </Text>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}

/* ── Slide 10: Questions / CTA ─────────────────────── */
export function Slide10_Questions() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/layered-diamonds.png"
        alt=""
        className="pointer-events-none absolute -right-[18%] -top-[15%] w-[50%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-8 px-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Q&A
        </Text>
        <Heading as="h2" size={1} align="center">
          Questions?
        </Heading>
        <Text size={500} align="center" className="max-w-[50%] opacity-70">
          Let&apos;s discuss how v0 can transform your presentation workflow.
        </Text>

        <div className="mt-4 flex flex-col items-center gap-2">
          <Text size={300} className="opacity-50">
            Get started at
          </Text>
          <Text size={500} className="font-mono">
            v0.dev
          </Text>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}

/* ── Slides array export ───────────────────────────── */
export const slides: SlideEntry[] = [
  { Component: Slide01_Title, label: "Title" },
  { Component: Slide02_WhatIsV0, label: "What is v0?" },
  { Component: Slide03_WhyPresentations, label: "Why Presentations?" },
  { Component: Slide04_GettingStarted, label: "Getting Started" },
  { Component: Slide05_SlideComponents, label: "Slide Components" },
  { Component: Slide06_BuildingSection, label: "Building Section" },
  { Component: Slide07_BestPractices, label: "Best Practices" },
  { Component: Slide08_AdvancedTechniques, label: "Advanced Techniques" },
  { Component: Slide09_LiveDemo, label: "Live Demo" },
  { Component: Slide10_Questions, label: "Questions" },
];

/* ── Default export: full deck component ───────────── */
export default function V0PresentationsDeck() {
  return (
    <div className="flex flex-col gap-8">
      <div data-slide-index={0}><Slide01_Title /></div>
      <div data-slide-index={1}><Slide02_WhatIsV0 /></div>
      <div data-slide-index={2}><Slide03_WhyPresentations /></div>
      <div data-slide-index={3}><Slide04_GettingStarted /></div>
      <div data-slide-index={4}><Slide05_SlideComponents /></div>
      <div data-slide-index={5}><Slide06_BuildingSection /></div>
      <div data-slide-index={6}><Slide07_BestPractices /></div>
      <div data-slide-index={7}><Slide08_AdvancedTechniques /></div>
      <div data-slide-index={8}><Slide09_LiveDemo /></div>
      <div data-slide-index={9}><Slide10_Questions /></div>
    </div>
  );
}
