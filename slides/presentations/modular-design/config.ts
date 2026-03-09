import type { PresentationMeta, SlideEntry } from "../types";

import { SlideTitle } from "./slides/title";
import { SlideProblem } from "./slides/problem";
import { SlideShift } from "./slides/shift";
import { SlideModularDesign } from "./slides/modular-design";
import { SlideComposableWebsite } from "./slides/composable-website";
import { SlideHowItWorks } from "./slides/how-it-works";
import { SlideExampleStructure } from "./slides/example-structure";
import { SlideDesignSystem } from "./slides/design-system";
import { SlideMarketerBenefits } from "./slides/marketer-benefits";
import { SlideBenefits } from "./slides/benefits";
import { SlideExampleStack } from "./slides/example-stack";
import { SlideStrategyShift } from "./slides/strategy-shift";
import { SlideIdealFor } from "./slides/ideal-for";
import { SlideMisconceptions } from "./slides/misconceptions";
import { SlideKeyTakeaway } from "./slides/key-takeaway";

export const metadata: PresentationMeta = {
  id: "modular-design",
  label: "Modular Design & Composable Websites",
  count: 15,
};

export const slides: SlideEntry[] = [
  { Component: SlideTitle, label: "Title" },
  { Component: SlideProblem, label: "The Problem" },
  { Component: SlideShift, label: "The Shift" },
  { Component: SlideModularDesign, label: "What Is Modular Design?" },
  { Component: SlideComposableWebsite, label: "What Is Composable?" },
  { Component: SlideHowItWorks, label: "How It Works" },
  { Component: SlideExampleStructure, label: "Example Page Structure" },
  { Component: SlideDesignSystem, label: "Design System" },
  { Component: SlideMarketerBenefits, label: "Marketer Benefits" },
  { Component: SlideBenefits, label: "Benefits" },
  { Component: SlideExampleStack, label: "Example Stack" },
  { Component: SlideStrategyShift, label: "Strategy Shift" },
  { Component: SlideIdealFor, label: "Ideal For" },
  { Component: SlideMisconceptions, label: "Misconceptions" },
  { Component: SlideKeyTakeaway, label: "Key Takeaway" },
];
