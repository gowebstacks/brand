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
  { Component: SlideTitle, label: "Title" },
  { Component: SlideTheProblem, label: "The Problem" },
  { Component: SlideTheIdea, label: "The Idea" },
  { Component: SlideHowItWorks, label: "How It Works" },
  { Component: SlideWhyWebstacks, label: "Why It's Webstacks" },
  { Component: SlideDesignSystem, label: "The Design System" },
  { Component: SlideWhatYouCanBuild, label: "What You Can Build" },
  { Component: SlideBeforeAfter, label: "Before & After" },
  { Component: SlideLiveDemo, label: "Live Demo" },
  { Component: SlideGetStarted, label: "Get Started" },
];
