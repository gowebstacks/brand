import type { PresentationMeta, SlideEntry } from "../types";

import { SlideTitle } from "./slides/title";
import { SlideWhatIsV0 } from "./slides/what-is-v0";
import { SlideWhyPresentations } from "./slides/why-presentations";
import { SlideGettingStarted } from "./slides/getting-started";
import { SlideSlideComponents } from "./slides/slide-components";
import { SlideBuildingSection } from "./slides/building-section";
import { SlideBestPractices } from "./slides/best-practices";
import { SlideAdvancedTechniques } from "./slides/advanced-techniques";
import { SlideLiveDemo } from "./slides/live-demo";
import { SlideQuestions } from "./slides/questions";

export const metadata: PresentationMeta = {
  id: "v0-presentations",
  label: "Creating Presentations with v0",
  count: 10,
};

export const slides: SlideEntry[] = [
  { Component: SlideTitle, label: "Title" },
  { Component: SlideWhatIsV0, label: "What is v0?" },
  { Component: SlideWhyPresentations, label: "Why Presentations?" },
  { Component: SlideGettingStarted, label: "Getting Started" },
  { Component: SlideSlideComponents, label: "Slide Components" },
  { Component: SlideBuildingSection, label: "Building Section" },
  { Component: SlideBestPractices, label: "Best Practices" },
  { Component: SlideAdvancedTechniques, label: "Advanced Techniques" },
  { Component: SlideLiveDemo, label: "Live Demo" },
  { Component: SlideQuestions, label: "Questions" },
];
