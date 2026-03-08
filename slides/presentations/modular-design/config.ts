import type { PresentationMeta, SlideEntry } from "../types";

import { SlideTitle } from "./slides/title";
import { SlideProblem } from "./slides/problem";
import { SlideShift } from "./slides/shift";
import { SlideWhatIsModular } from "./slides/what-is-modular";
import { SlideAnatomyOfModule } from "./slides/anatomy-of-module";
import { SlideModulesToPages } from "./slides/modules-to-pages";
import { SlideDesignersWork } from "./slides/designers-work";
import { SlideDevelopersWork } from "./slides/developers-work";
import { SlideMarketingUse } from "./slides/marketing-use";
import { SlideRealExample } from "./slides/real-example";
import { SlideBenefits } from "./slides/benefits";
import { SlideModernCMS } from "./slides/modern-cms";
import { SlideModernFrontend } from "./slides/modern-frontend";
import { SlideBeforeAfter } from "./slides/before-after";
import { SlideTakeaway } from "./slides/takeaway";

export const metadata: PresentationMeta = {
  id: "modular-design",
  label: "Modular Design for Modern Websites",
  count: 15,
};

export const slides: SlideEntry[] = [
  { Component: SlideTitle, label: "Title" },
  { Component: SlideProblem, label: "The Problem" },
  { Component: SlideShift, label: "The Shift Toward Systems" },
  { Component: SlideWhatIsModular, label: "What is Modular Design?" },
  { Component: SlideAnatomyOfModule, label: "Anatomy of a Module" },
  { Component: SlideModulesToPages, label: "From Modules to Pages" },
  { Component: SlideDesignersWork, label: "How Designers Work" },
  { Component: SlideDevelopersWork, label: "How Developers Build" },
  { Component: SlideMarketingUse, label: "How Marketing Uses It" },
  { Component: SlideRealExample, label: "Real Example" },
  { Component: SlideBenefits, label: "Benefits" },
  { Component: SlideModernCMS, label: "Modern CMS" },
  { Component: SlideModernFrontend, label: "Modern Frontend" },
  { Component: SlideBeforeAfter, label: "Before vs After" },
  { Component: SlideTakeaway, label: "Key Takeaway" },
];
