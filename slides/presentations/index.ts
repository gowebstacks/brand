import SalesPitchDeck, { metadata as salesPitchMeta, slides as salesPitchSlides } from "./sales-pitch";
import type { PresentationMeta, SlideEntry } from "./types";

export type { PresentationMeta, SlideEntry } from "./types";

export interface PresentationEntry {
  meta: PresentationMeta;
  Component: React.ComponentType;
  slides: SlideEntry[];
}

export const presentations: PresentationEntry[] = [
  { meta: salesPitchMeta, Component: SalesPitchDeck, slides: salesPitchSlides },
];
