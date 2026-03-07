/**
 * Sales Pitch Deck — ~12 slides
 *
 * A complete reference deck demonstrating how to compose slide components
 * into a full sales presentation. This follows the recommended pacing
 * from guidelines/slides.md.
 *
 * Deck flow:
 * 1. Title → 2. Problem → 3. Stat → 4. Solution → 5. How It Works →
 * 6. Feature 1 → 7. Feature 2 → 8. Quote → 9. Results →
 * 10. Case Study Teaser → 11. Logo Grid → 12. CTA
 */
import { Text } from "@webstacks/ui";
import {
  TitleSlide,
  ContentSlide,
  StatSlide,
  SplitSlide,
  QuoteSlide,
  ImageSlide,
  LogoGridSlide,
  CTASlide,
} from "../components";

/* ── Slide 1: Title ─────────────────────────────────── */
export function Slide01_Title() {
  return (
    <TitleSlide
      eyebrow="Webstacks"
      title="Build Websites That Actually Convert"
      subtitle="High-performance web experiences for B2B SaaS"
      theme="dark"
    />
  );
}

/* ── Slide 2: Problem ───────────────────────────────── */
export function Slide02_Problem() {
  return (
    <ContentSlide
      eyebrow="The Challenge"
      title="Your Website Is Leaving Revenue on the Table"
      theme="light"
    >
      <Text size={500}>
        Most B2B SaaS websites suffer from slow performance, inconsistent
        branding, and poor conversion optimization. Marketing teams wait weeks
        for engineering to ship simple changes.
      </Text>
      <Text size={400} className="text-muted-foreground">
        The result: missed pipeline, longer sales cycles, and frustrated teams
        on both sides.
      </Text>
    </ContentSlide>
  );
}

/* ── Slide 3: Stat — Scale of the problem ───────────── */
export function Slide03_ProblemStat() {
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

/* ── Slide 4: Solution ──────────────────────────────── */
export function Slide04_Solution() {
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
      <Text size={400}>
        From headless CMS architecture to conversion-optimized landing pages,
        we handle everything so your marketing team can move at the speed of
        your business.
      </Text>
    </ContentSlide>
  );
}

/* ── Slide 5: How It Works (Split) ──────────────────── */
export function Slide05_HowItWorks() {
  return (
    <SplitSlide
      eyebrow="How It Works"
      title="A Proven Process for High-Impact Websites"
      split="60/40"
      media="/images/process-diagram.svg"
      theme="light"
    >
      <Text size={400}>
        <strong>1. Discovery</strong> — Audit your current site, define goals, and map the user journey.
      </Text>
      <Text size={400}>
        <strong>2. Design</strong> — Create a component-driven design system that scales.
      </Text>
      <Text size={400}>
        <strong>3. Build</strong> — Engineer with Next.js, headless CMS, and performance best practices.
      </Text>
      <Text size={400}>
        <strong>4. Optimize</strong> — A/B test, analyze, and iterate for continuous improvement.
      </Text>
    </SplitSlide>
  );
}

/* ── Slide 6: Feature 1 ─────────────────────────────── */
export function Slide06_Feature1() {
  return (
    <ContentSlide
      eyebrow="Performance"
      title="Sub-Second Load Times, Every Time"
      imageSrc="/images/lighthouse-score.png"
      imageAlt="Lighthouse performance score showing 98/100"
      theme="light"
    >
      <Text size={400}>
        Our sites consistently score 95+ on Core Web Vitals. We use edge
        rendering, optimized images, and smart caching to deliver blazing-fast
        experiences.
      </Text>
      <Text size={400}>
        Faster sites mean better SEO rankings, lower bounce rates, and higher
        conversion rates.
      </Text>
    </ContentSlide>
  );
}

/* ── Slide 7: Feature 2 ─────────────────────────────── */
export function Slide07_Feature2() {
  return (
    <SplitSlide
      eyebrow="Flexibility"
      title="Your Marketing Team Ships Without Waiting on Engineering"
      split="50/50"
      reversed
      media="/images/cms-editor.png"
      theme="light"
    >
      <Text size={400}>
        We build on headless CMS platforms (Sanity, Contentful) with visual
        editing, so your content team can update pages, launch campaigns, and
        run experiments independently.
      </Text>
      <Text size={400}>
        No more bottlenecks. No more tickets for copy changes.
      </Text>
    </SplitSlide>
  );
}

/* ── Slide 8: Quote ──────────────────────────────────── */
export function Slide08_Quote() {
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

/* ── Slide 9: Results Stat ──────────────────────────── */
export function Slide09_Results() {
  return (
    <StatSlide
      eyebrow="Results"
      stat="3.2x"
      description="average increase in demo requests within 90 days of launch"
      theme="dark"
    />
  );
}

/* ── Slide 10: Case Study Teaser ─────────────────────── */
export function Slide10_CaseStudy() {
  return (
    <ImageSlide
      imageSrc="/images/case-study-hero.jpg"
      title="How TechCorp Increased Pipeline by 240%"
      subtitle="A complete website redesign that turned visitors into qualified leads."
      overlay="gradient"
    />
  );
}

/* ── Slide 11: Logo Grid ─────────────────────────────── */
export function Slide11_Logos() {
  return (
    <LogoGridSlide
      title="Trusted by Leading SaaS Companies"
      logos={[
        { name: "TechCorp", src: "/logos/techcorp.svg" },
        { name: "CloudBase", src: "/logos/cloudbase.svg" },
        { name: "DataFlow", src: "/logos/dataflow.svg" },
        { name: "ScaleUp", src: "/logos/scaleup.svg" },
        { name: "DevStack", src: "/logos/devstack.svg" },
        { name: "GrowthIO", src: "/logos/growthio.svg" },
        { name: "PipelineHQ", src: "/logos/pipelinehq.svg" },
        { name: "MetricLab", src: "/logos/metriclab.svg" },
      ]}
      theme="light"
    />
  );
}

/* ── Slide 12: CTA ───────────────────────────────────── */
export function Slide12_CTA() {
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
 * Full deck — renders all 12 slides in sequence.
 * Use this as a reference for how to compose a complete deck.
 */
export default function SalesPitchDeck() {
  return (
    <div className="flex flex-col gap-8">
      <Slide01_Title />
      <Slide02_Problem />
      <Slide03_ProblemStat />
      <Slide04_Solution />
      <Slide05_HowItWorks />
      <Slide06_Feature1 />
      <Slide07_Feature2 />
      <Slide08_Quote />
      <Slide09_Results />
      <Slide10_CaseStudy />
      <Slide11_Logos />
      <Slide12_CTA />
    </div>
  );
}
