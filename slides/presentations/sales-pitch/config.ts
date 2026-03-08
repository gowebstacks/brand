import type { PresentationMeta, SlideEntry } from "../types";

import { SlideTitle } from "./slides/title";
import { SlidePhilosophy } from "./slides/philosophy";
import { SlideAtAGlance } from "./slides/at-a-glance";
import { SlideMeetWebstacks } from "./slides/meet-webstacks";
import { SlideClients } from "./slides/clients";
import { SlideRetainerTitle } from "./slides/retainer-title";
import { SlideWhoWeAre } from "./slides/who-we-are";
import { SlidePointOfView } from "./slides/point-of-view";
import { SlideWhyTeamsBringUsIn } from "./slides/why-teams-bring-us-in";
import { SlideWhatMakesUsDifferent } from "./slides/what-makes-us-different";
import { SlideCoreDisciplines } from "./slides/core-disciplines";
import { SlideStrongPartner } from "./slides/strong-partner";
import { SlideRoadmapMatters } from "./slides/roadmap-matters";
import { SlideRoadmapAndRetainer } from "./slides/roadmap-and-retainer";
import { SlideMonthlyCapacity } from "./slides/monthly-capacity";
import { SlideFlexModel } from "./slides/flex-model";
import { SlidePodModel } from "./slides/pod-model";
import { SlideKindsOfWork } from "./slides/kinds-of-work";
import { SlideCommercialFraming } from "./slides/commercial-framing";
import { SlideHowWeStart } from "./slides/how-we-start";
import { SlideClosingCTA } from "./slides/closing-cta";

export interface ClientCompany {
  name: string;
  logoUrl: string;
  needsInvert?: boolean;
}

export const metadata: PresentationMeta = {
  id: "dartmouth-tuck",
  label: "Dartmouth Tuck School of Business Demonstration Call",
  count: 21,
};

export const slides: SlideEntry[] = [
  { Component: SlideTitle, label: "Title" },
  { Component: SlidePhilosophy, label: "Philosophy" },
  { Component: SlideAtAGlance, label: "At a Glance" },
  { Component: SlideMeetWebstacks, label: "Meet Webstacks" },
  { Component: SlideClients, label: "Clients" },
  { Component: SlideRetainerTitle, label: "Retainer Title" },
  { Component: SlideWhoWeAre, label: "Who We Are" },
  { Component: SlidePointOfView, label: "Point of View" },
  { Component: SlideWhyTeamsBringUsIn, label: "Why Teams Bring Us In" },
  { Component: SlideWhatMakesUsDifferent, label: "What Makes Us Different" },
  { Component: SlideCoreDisciplines, label: "Core Disciplines" },
  { Component: SlideStrongPartner, label: "Strong Partner" },
  { Component: SlideRoadmapMatters, label: "Roadmap Matters" },
  { Component: SlideRoadmapAndRetainer, label: "Roadmap + Retainer" },
  { Component: SlideMonthlyCapacity, label: "Monthly Capacity" },
  { Component: SlideFlexModel, label: "Flex Model" },
  { Component: SlidePodModel, label: "Pod Model" },
  { Component: SlideKindsOfWork, label: "Kinds of Work" },
  { Component: SlideCommercialFraming, label: "Commercial Framing" },
  { Component: SlideHowWeStart, label: "How We Start" },
  { Component: SlideClosingCTA, label: "Let's Win Together" },
];
