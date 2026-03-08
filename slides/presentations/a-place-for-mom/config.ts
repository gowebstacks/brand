import type { PresentationMeta, SlideEntry } from "../types";

import { SlideTitle } from "./slides/title";
import { SlideAgenda } from "./slides/agenda";
import { SlideExecutiveSummary } from "./slides/executive-summary";
import { SlidePhilosophy } from "../sales-pitch/slides/philosophy";
import { SlideAtAGlance } from "../sales-pitch/slides/at-a-glance";
import { SlideMeetWebstacks } from "../sales-pitch/slides/meet-webstacks";
import { SlideClients } from "../sales-pitch/slides/clients";
import { SlideObjectives } from "./slides/objectives";
import { SlideModuleA } from "./slides/module-a";
import { SlideModuleB } from "./slides/module-b";
import { SlideModuleC } from "./slides/module-c";
import { SlideModuleD } from "./slides/module-d";
import { SlideCollaboration } from "./slides/collaboration";
import { SlideAssumptions } from "./slides/assumptions";
import { SlideTimeline } from "./slides/timeline";
import { SlideInvestment } from "./slides/investment";
import { SlideAddOns } from "./slides/add-ons";
import { SlideClosingCTA } from "./slides/closing-cta";

export const metadata: PresentationMeta = {
  id: "a-place-for-mom",
  label: "A Place for Mom — Executive Summary",
  count: 18,
};

export const slides: SlideEntry[] = [
  { Component: SlideTitle, label: "Title" },
  { Component: SlideAgenda, label: "Agenda" },
  { Component: SlidePhilosophy, label: "Our Philosophy" },
  { Component: SlideAtAGlance, label: "At a Glance" },
  { Component: SlideExecutiveSummary, label: "Executive Summary" },
  { Component: SlideMeetWebstacks, label: "Meet Webstacks" },
  { Component: SlideClients, label: "Clients" },
  { Component: SlideObjectives, label: "Engagement Objectives" },
  { Component: SlideModuleA, label: "Module A: Design Audit" },
  { Component: SlideModuleB, label: "Module B: Program Management" },
  { Component: SlideModuleC, label: "Module C: Sanity Studio" },
  { Component: SlideModuleD, label: "Module D: Storybook" },
  { Component: SlideCollaboration, label: "Collaboration" },
  { Component: SlideAssumptions, label: "Assumptions" },
  { Component: SlideTimeline, label: "Timeline" },
  { Component: SlideInvestment, label: "Investment" },
  { Component: SlideAddOns, label: "Optional Add-Ons" },
  { Component: SlideClosingCTA, label: "Let's Get Started" },
];
