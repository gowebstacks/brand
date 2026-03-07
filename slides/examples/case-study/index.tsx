/**
 * Case Study Deck — ~8 slides
 *
 * A reference deck for presenting a client case study.
 * Follows the recommended case study pacing from guidelines/slides.md.
 *
 * Deck flow:
 * 1. Title → 2. Challenge → 3. Approach → 4. Key Metric →
 * 5. Solution Detail → 6. Results → 7. Quote → 8. CTA
 */
import { Text } from "@webstacks/ui";
import {
  TitleSlide,
  ContentSlide,
  SplitSlide,
  StatSlide,
  ComparisonSlide,
  QuoteSlide,
  CTASlide,
} from "../../components";

/* ── Slide 1: Title ─────────────────────────────────── */
export function Slide01_Title() {
  return (
    <TitleSlide
      eyebrow="Case Study — TechCorp"
      title="From Outdated Website to #1 Pipeline Driver"
      subtitle="How TechCorp increased demo requests by 240% in 90 days"
      theme="dark"
    />
  );
}

/* ── Slide 2: The Challenge ─────────────────────────── */
export function Slide02_Challenge() {
  return (
    <ContentSlide
      eyebrow="The Challenge"
      title="A Website That Couldn't Keep Up with Growth"
      theme="light"
    >
      <Text size={500}>
        TechCorp had doubled their ARR to $45M but their website was stuck in
        2019. The marketing team couldn't update content without engineering
        help, pages loaded slowly, and conversion rates were declining.
      </Text>
      <Text size={300} className="text-muted-foreground uppercase tracking-widest font-mono">
        Key pain points
      </Text>
      <ul className="space-y-2 ml-4">
        <Text as="li" size={400}>4.2s average page load time</Text>
        <Text as="li" size={400}>0.8% visitor-to-demo conversion rate</Text>
        <Text as="li" size={400}>2-week turnaround for any content changes</Text>
        <Text as="li" size={400}>No A/B testing or experimentation capability</Text>
      </ul>
    </ContentSlide>
  );
}

/* ── Slide 3: The Approach (Split) ──────────────────── */
export function Slide03_Approach() {
  return (
    <SplitSlide
      eyebrow="Our Approach"
      title="Component-Driven Redesign with Headless CMS"
      split="60/40"
      media="/images/techcorp-architecture.svg"
      theme="light"
    >
      <Text size={500}>
        We rebuilt TechCorp's site from the ground up using Next.js and Sanity CMS,
        with a modular component library that marketing could mix and match.
      </Text>
      <div className="space-y-3">
        <div>
          <Text size={400} weight="medium">Phase 1</Text>
          <Text size={300} className="text-muted-foreground">Discovery and content audit (2 weeks)</Text>
        </div>
        <div>
          <Text size={400} weight="medium">Phase 2</Text>
          <Text size={300} className="text-muted-foreground">Design system and component library (3 weeks)</Text>
        </div>
        <div>
          <Text size={400} weight="medium">Phase 3</Text>
          <Text size={300} className="text-muted-foreground">Build and migrate (4 weeks)</Text>
        </div>
        <div>
          <Text size={400} weight="medium">Phase 4</Text>
          <Text size={300} className="text-muted-foreground">Optimize and iterate (ongoing)</Text>
        </div>
      </div>
    </SplitSlide>
  );
}

/* ── Slide 4: Key Metric ────────────────────────────── */
export function Slide04_KeyMetric() {
  return (
    <StatSlide
      eyebrow="Performance"
      stat="0.9s"
      description="Average page load time after relaunch — down from 4.2 seconds"
      context="Measured via Lighthouse (p75, mobile)"
      theme="dark"
    />
  );
}

/* ── Slide 5: Solution Detail (Comparison) ──────────── */
export function Slide05_Comparison() {
  return (
    <ComparisonSlide
      title="Before and After"
      leftLabel="Before Webstacks"
      leftItems={[
        "Static WordPress site, hard to update",
        "4.2s page load time",
        "No CMS — all changes required engineering",
        "0.8% visitor-to-demo rate",
        "Zero experimentation capability",
      ]}
      rightLabel="After Webstacks"
      rightItems={[
        "Next.js + Sanity with visual editing",
        "0.9s page load time",
        "Marketing ships content independently",
        "2.7% visitor-to-demo rate",
        "Running 3+ A/B tests per month",
      ]}
      theme="light"
    />
  );
}

/* ── Slide 6: Results ───────────────────────────────── */
export function Slide06_Results() {
  return (
    <StatSlide
      eyebrow="Results"
      stat="240%"
      description="Increase in qualified demo requests within 90 days of launch"
      theme="dark"
    />
  );
}

/* ── Slide 7: Client Quote ──────────────────────────── */
export function Slide07_Quote() {
  return (
    <QuoteSlide
      quote="Our website went from a liability to our top revenue channel. The Webstacks team didn't just redesign — they rethought our entire digital presence."
      authorName="James Park"
      authorTitle="CMO"
      authorCompany="TechCorp"
      avatarSrc="/images/avatar-james.jpg"
      theme="light"
    />
  );
}

/* ── Slide 8: CTA ───────────────────────────────────── */
export function Slide08_CTA() {
  return (
    <CTASlide
      title="Ready for Results Like These?"
      subtitle="Let's talk about what Webstacks can do for your website."
      ctaText="Book a Strategy Call"
      ctaHref="https://www.webstacks.com/contact"
      contactInfo="hello@webstacks.com"
      theme="dark"
    />
  );
}

/**
 * Full deck — renders all 8 slides in sequence.
 */
export default function CaseStudyDeck() {
  return (
    <div className="flex flex-col gap-8">
      <Slide01_Title />
      <Slide02_Challenge />
      <Slide03_Approach />
      <Slide04_KeyMetric />
      <Slide05_Comparison />
      <Slide06_Results />
      <Slide07_Quote />
      <Slide08_CTA />
    </div>
  );
}
