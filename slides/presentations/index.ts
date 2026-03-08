import SalesPitchDeck, { metadata as salesPitchMeta, slides as salesPitchSlides } from "./sales-pitch";
import V0PresentationsDeck, { metadata as v0PresentationsMeta, slides as v0PresentationsSlides } from "./v0-presentations";
import type { PresentationMeta, SlideEntry } from "./types";

export type { PresentationMeta, SlideEntry } from "./types";

export interface PresentationEntry {
  meta: PresentationMeta;
  Component: React.ComponentType;
  slides: SlideEntry[];
}

export const presentations: PresentationEntry[] = [
  { meta: salesPitchMeta, Component: SalesPitchDeck, slides: salesPitchSlides },
  { meta: v0PresentationsMeta, Component: V0PresentationsDeck, slides: v0PresentationsSlides },
];
