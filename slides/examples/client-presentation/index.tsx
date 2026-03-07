/**
 * Client Presentation Deck — ~20 slides
 *
 * A comprehensive reference deck for presenting Webstacks to a prospective
 * client. Based on the structure of the Dartmouth–Tuck demo presentation.
 *
 * This deck demonstrates the full range of slide components including the
 * newer ThreeUpSlide, SectionSlide, and MultiStatSlide patterns.
 *
 * Deck flow:
 * 1. Title → 2. Section: About → 3. Capabilities → 4. Logo Grid →
 * 5. Section: Process → 6. Discovery → 7. Design → 8. Build →
 * 9. Section: Results → 10. Team → 11. Testimonials (Quote) →
 * 12. Client Story Intro → 13. Before/After → 14. Client Results →
 * 15. Client Story 2 Intro → 16. Client Story 2 Detail → 17. Client 2 Results →
 * 18. Client Quote → 19. Section: Next Steps → 20. CTA
 */
import { Text } from "@webstacks/ui";
import {
  TitleSlide,
  ContentSlide,
  SplitSlide,
  StatSlide,
  QuoteSlide,
  ImageSlide,
  ComparisonSlide,
  TeamSlide,
  LogoGridSlide,
  CTASlide,
  ThreeUpSlide,
  SectionSlide,
  MultiStatSlide,
} from "../../components";

/* ── Slide 1: Cover ──────────────────────────────────── */
export function Slide01_Cover() {
  return (
    <TitleSlide
      eyebrow="March 2026"
      title="Dartmouth Tuck × Webstacks"
      subtitle="Website Strategy & Execution Partner"
      theme="dark"
    />
  );
}

/* ── Slide 2: Section — About Webstacks ──────────────── */
export function Slide02_AboutSection() {
  return (
    <SectionSlide
      eyebrow="Who We Are"
      title="Built for B2B SaaS"
      subtitle="Strategy, design, and engineering under one roof."
      theme="dark"
    />
  );
}

/* ── Slide 3: Capabilities Overview ──────────────────── */
export function Slide03_Capabilities() {
  return (
    <ThreeUpSlide
      eyebrow="Our Capabilities"
      title="Everything Your Website Needs"
      items={[
        {
          title: "Website-First Strategy",
          description:
            "We align your web presence with business goals through stakeholder interviews, data analysis, and competitive research.",
        },
        {
          title: "Design Systems at Scale",
          description:
            "Component-driven design systems that give marketing teams autonomy while keeping brand consistency across every page.",
        },
        {
          title: "Modern Engineering",
          description:
            "Next.js, headless CMS, and composable architecture — built for performance, flexibility, and fast iteration.",
        },
      ]}
      theme="light"
    />
  );
}

/* ── Slide 4: Client Logos ───────────────────────────── */
export function Slide04_Logos() {
  return (
    <LogoGridSlide
      title="Trusted by Leading SaaS Companies"
      logos={[
        { name: "ServiceTitan", src: "/logos/servicetitan.svg" },
        { name: "Cribl", src: "/logos/cribl.svg" },
        { name: "Braze", src: "/logos/braze.svg" },
        { name: "Vanta", src: "/logos/vanta.svg" },
        { name: "Drata", src: "/logos/drata.svg" },
        { name: "Tipalti", src: "/logos/tipalti.svg" },
        { name: "Orum", src: "/logos/orum.svg" },
        { name: "Fivetran", src: "/logos/fivetran.svg" },
      ]}
      theme="dark"
    />
  );
}

/* ── Slide 5: Section — Our Process ──────────────────── */
export function Slide05_ProcessSection() {
  return (
    <SectionSlide
      eyebrow="How We Work"
      title="Our Process"
      subtitle="A proven methodology refined across hundreds of B2B SaaS projects."
      theme="light"
    />
  );
}

/* ── Slide 6: Discovery Phase ────────────────────────── */
export function Slide06_Discovery() {
  return (
    <ThreeUpSlide
      eyebrow="Phase 1 — Discovery"
      title="Understanding Your Business Inside Out"
      items={[
        {
          title: "Stakeholder Interviews",
          description:
            "Hour-long one-on-one interviews between your strategist and your key stakeholders to make sure we fully understand your goals.",
        },
        {
          title: "Website & Channel Data Review",
          description:
            "We review your current website performance data and conduct an analysis of your marketing channels and conversion funnels.",
        },
        {
          title: "Technical Discovery",
          description:
            "In-depth conversations with your team — from marketers using your CRM to technical experts managing integrations.",
        },
      ]}
      theme="dark"
    />
  );
}

/* ── Slide 7: Design Phase ───────────────────────────── */
export function Slide07_Design() {
  return (
    <ThreeUpSlide
      eyebrow="Phase 2 — Design"
      title="From Concept to Component Library"
      items={[
        {
          title: "Web Presence Workshop",
          description:
            "An interactive workshop engaging key stakeholders to align on the vision for the web aesthetic and build consensus on design direction.",
        },
        {
          title: "Page Layouts & Design System",
          description:
            "Based on the approved concept and information architecture, we create a design system of atoms, molecules, organisms, and templates.",
        },
        {
          title: "Visual Content & Animations",
          description:
            "Illustrations, animations, and iconography that bring the pages to life and reinforce your brand's unique identity.",
        },
      ]}
      theme="light"
    />
  );
}

/* ── Slide 8: Build Phase ────────────────────────────── */
export function Slide08_Build() {
  return (
    <SplitSlide
      eyebrow="Phase 3 — Build"
      title="Composable Architecture for Maximum Flexibility"
      split="60/40"
      media="/images/architecture-diagram.svg"
      theme="dark"
    >
      <Text size={500}>
        We build on Next.js with a headless CMS (Sanity or Contentful), giving
        your marketing team full control over content while engineering focuses
        on performance and scalability.
      </Text>
      <Text size={400} className="text-muted-foreground">
        A monorepo structure with shared component libraries means consistent
        design across all your web properties.
      </Text>
      <Text size={300} className="text-muted-foreground">
        One content source, one codebase, multiple sites — built to scale with
        your business.
      </Text>
    </SplitSlide>
  );
}

/* ── Slide 9: Section — Results ──────────────────────── */
export function Slide09_ResultsSection() {
  return (
    <SectionSlide
      eyebrow="Track Record"
      title="Proven Results"
      theme="light"
    />
  );
}

/* ── Slide 10: Team ──────────────────────────────────── */
export function Slide10_Team() {
  return (
    <TeamSlide
      title="Your Dedicated Team"
      members={[
        { name: "Project Lead", title: "Manages timelines, deliverables, and communication" },
        { name: "Strategist", title: "Discovery, IA, content strategy, and optimization" },
        { name: "Designer", title: "Design system, page layouts, and visual content" },
        { name: "Developer", title: "Engineering, CMS integration, and performance" },
      ]}
      theme="dark"
    />
  );
}

/* ── Slide 11: Testimonials ──────────────────────────── */
export function Slide11_Quote() {
  return (
    <QuoteSlide
      quote="We have been working with Webstacks for several years, and they have become a valuable extension of our team."
      authorName="Bryan Olshock"
      authorTitle="SVP of Marketing"
      authorCompany="Vonage"
      theme="light"
    />
  );
}

/* ── Slide 12: Client Story 1 — Intro ────────────────── */
export function Slide12_CriblIntro() {
  return (
    <ContentSlide
      eyebrow="Client Story"
      title="Cribl: An Enterprise Design Partner"
      theme="dark"
    >
      <Text size={500}>
        Cribl came to us not too long after a website redesign, and wanted to
        elevate, simplify, and polish the experience without starting from
        scratch.
      </Text>
      <Text size={400} className="text-muted-foreground">
        We partnered on an iterative redesign — refining the design system,
        rebuilding key pages, and launching new experiences like an interactive
        demo center and conference site.
      </Text>
    </ContentSlide>
  );
}

/* ── Slide 13: Client Story 1 — Before/After ─────────── */
export function Slide13_CriblComparison() {
  return (
    <ComparisonSlide
      title="Cribl Homepage — Before and After"
      leftLabel="Before"
      leftItems={[
        "Cluttered navigation with too many options",
        "Generic hero messaging",
        "Heavy reliance on stock illustrations",
        "Inconsistent page layouts across sections",
        "No clear conversion path",
      ]}
      rightLabel="After"
      rightItems={[
        "Streamlined navigation with clear hierarchy",
        "Focused value proposition with social proof",
        "Custom branded illustrations and animations",
        "Systematic page templates from design system",
        "Clear CTAs with optimized conversion flow",
      ]}
      theme="light"
    />
  );
}

/* ── Slide 14: Client Story 1 — Results ──────────────── */
export function Slide14_CriblResults() {
  return (
    <MultiStatSlide
      eyebrow="Client Story — Cribl"
      title="Impact After Launch"
      stats={[
        { stat: "42%", description: "Increase in organic traffic within 6 months" },
        { stat: "2.8x", description: "More demo requests from the homepage" },
        { stat: "60%", description: "Faster page load times across the site" },
      ]}
      theme="dark"
    />
  );
}

/* ── Slide 15: Client Story 2 — Intro ────────────────── */
export function Slide15_ServiceTitanIntro() {
  return (
    <ContentSlide
      eyebrow="Client Story"
      title="ServiceTitan: A Long-Term Joint Partnership"
      theme="light"
    >
      <Text size={500}>
        ServiceTitan partnered with Webstacks to modernize their marketing
        website. What started as a homepage redesign evolved into a multi-year
        partnership across four brands and multiple web properties.
      </Text>
      <Text size={400} className="text-muted-foreground">
        With three in-house developers plus Webstacks, the team maintains a
        unified codebase and shared design system across ServiceTitan, Aspire,
        FieldRoutes, and Convex.
      </Text>
    </ContentSlide>
  );
}

/* ── Slide 16: Client Story 2 — Solution ─────────────── */
export function Slide16_ServiceTitanSolution() {
  return (
    <SplitSlide
      eyebrow="Our Solution"
      title="One Content Source, One Codebase, Multiple Sites"
      split="50/50"
      media="/images/servicetitan-architecture.svg"
      theme="dark"
    >
      <Text size={500}>
        A monorepo structure with Turborepo, shared components, and design
        tokens that adapt per brand — so each property feels unique while
        sharing a single source of truth.
      </Text>
      <Text size={300} className="text-muted-foreground">
        The marketing team can ship content changes across all four brands
        without engineering bottlenecks.
      </Text>
    </SplitSlide>
  );
}

/* ── Slide 17: Client Story 2 — Results ──────────────── */
export function Slide17_ServiceTitanResults() {
  return (
    <MultiStatSlide
      eyebrow="Client Story — ServiceTitan"
      title="Increasing Impressions & CTR"
      stats={[
        { stat: "350%", description: "Increase in organic search impressions" },
        { stat: "3x", description: "Increase in clickthrough rate" },
      ]}
      theme="light"
    />
  );
}

/* ── Slide 18: Client Quote ──────────────────────────── */
export function Slide18_ClientQuote() {
  return (
    <QuoteSlide
      quote="Webstacks worked closely with us to redesign our website, creating a design system that allowed our marketing team to build and iterate independently."
      authorName="Garrett Scott"
      authorTitle="Head of Growth Marketing"
      authorCompany="Cribl"
      theme="dark"
    />
  );
}

/* ── Slide 19: Section — Next Steps ──────────────────── */
export function Slide19_NextStepsSection() {
  return (
    <SectionSlide
      eyebrow="What's Next"
      title="Let's Build Together"
      theme="light"
    />
  );
}

/* ── Slide 20: CTA ───────────────────────────────────── */
export function Slide20_CTA() {
  return (
    <CTASlide
      title="Ready to Transform Your Web Presence?"
      subtitle="Let's start with a discovery conversation to understand your goals and map out the path forward."
      ctaText="Book an Intro Call"
      ctaHref="https://www.webstacks.com/contact"
      contactInfo="hello@webstacks.com"
      theme="dark"
    />
  );
}

/**
 * Full deck — renders all 20 slides in sequence.
 */
export default function ClientPresentationDeck() {
  return (
    <div className="flex flex-col gap-8">
      <Slide01_Cover />
      <Slide02_AboutSection />
      <Slide03_Capabilities />
      <Slide04_Logos />
      <Slide05_ProcessSection />
      <Slide06_Discovery />
      <Slide07_Design />
      <Slide08_Build />
      <Slide09_ResultsSection />
      <Slide10_Team />
      <Slide11_Quote />
      <Slide12_CriblIntro />
      <Slide13_CriblComparison />
      <Slide14_CriblResults />
      <Slide15_ServiceTitanIntro />
      <Slide16_ServiceTitanSolution />
      <Slide17_ServiceTitanResults />
      <Slide18_ClientQuote />
      <Slide19_NextStepsSection />
      <Slide20_CTA />
    </div>
  );
}
