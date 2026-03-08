import type { PresentationMeta, SlideEntry } from "../types";

import { SlideTitle } from "./slides/title";
import { SlideTheProblem } from "./slides/the-problem";
import { SlideTheIdea } from "./slides/the-idea";
import { SlideHowItWorks } from "./slides/how-it-works";
import { SlideWhyWebstacks } from "./slides/why-webstacks";
import { SlideDesignSystem } from "./slides/design-system";
import { SlideWhatYouCanBuild } from "./slides/what-you-can-build";
import { SlideBeforeAfter } from "./slides/before-after";
import { SlideLiveDemo } from "./slides/live-demo";
import { SlideGetStarted } from "./slides/get-started";

export const metadata: PresentationMeta = {
  id: "v0-presentations",
  label: "Presentations, Reimagined",
  count: 10,
};

export const slides: SlideEntry[] = [
  {
    Component: SlideTitle,
    label: "Title",
    notes:
      "Welcome everyone. Today we're going to show you a **completely new way** to build and deliver presentations — powered by code, design systems, and AI.",
  },
  {
    Component: SlideTheProblem,
    label: "The Problem",
    notes: [
      "Traditional slide tools create **static, inconsistent** decks. Key pain points:",
      "",
      "- Every presentation starts from scratch",
      "- Brand drift is constant across teams",
      "- Updating content across decks is painful and manual",
    ].join("\n"),
  },
  {
    Component: SlideTheIdea,
    label: "The Idea",
    notes:
      "What if presentations were **built with code**? Real components, real design tokens, version-controlled and reusable across every deck your team creates.",
  },
  {
    Component: SlideHowItWorks,
    label: "How It Works",
    notes: [
      "Walk through the architecture:",
      "",
      "1. Each slide is a **React component**",
      "2. A `config.ts` file defines deck order and metadata",
      "3. The preview app renders everything live",
      "",
      "> No export step, no PDF conversion — it's all live.",
    ].join("\n"),
  },
  {
    Component: SlideWhyWebstacks,
    label: "Why It's Webstacks",
    notes: [
      "This isn't just a prototype. Webstacks brings:",
      "",
      "- **Design engineering** team with deep component experience",
      "- **CMS expertise** for content-driven workflows",
      "- **Brand systems** knowledge to ship at scale",
    ].join("\n"),
  },
  {
    Component: SlideDesignSystem,
    label: "The Design System",
    notes:
      "Every slide pulls from a shared **design token system** — typography, color, spacing. Change a token once and it propagates everywhere. *No more manual brand audits.*",
  },
  {
    Component: SlideWhatYouCanBuild,
    label: "What You Can Build",
    notes: [
      "Any repeatable presentation format benefits from this approach:",
      "",
      "- Sales decks",
      "- Onboarding materials",
      "- Investor updates",
      "- Internal reports",
    ].join("\n"),
  },
  {
    Component: SlideBeforeAfter,
    label: "Before & After",
    notes:
      "**Left:** the old way — static slides, manual formatting.\n\n**Right:** consistent, component-driven slides that stay on-brand *automatically*.",
  },
  {
    Component: SlideLiveDemo,
    label: "Live Demo",
    notes: [
      "Time for a **live walkthrough**. Show:",
      "",
      "1. The dev workflow and hot reload",
      "2. Slide reordering via drag-and-drop",
      "3. Spinning up a new deck from existing components",
      "",
      "*Keep this section interactive — invite questions.*",
    ].join("\n"),
  },
  {
    Component: SlideGetStarted,
    label: "Get Started",
    notes:
      "Ready to get started? Reach out to our team and we'll scope a **pilot project**. We typically start with *one high-value deck* and expand from there.",
  },
];
