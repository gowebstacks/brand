import SalesPitchDeck, { metadata as salesPitchMeta, slides as salesPitchSlides } from "./sales-pitch";
import V0PresentationsDeck, { metadata as v0PresentationsMeta, slides as v0PresentationsSlides } from "./v0-presentations";
import APlaceForMomDeck, { metadata as aPlaceForMomMeta, slides as aPlaceForMomSlides } from "./a-place-for-mom";
import ModularDesignDeck, { metadata as modularDesignMeta, slides as modularDesignSlides } from "./modular-design";
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
  { meta: aPlaceForMomMeta, Component: APlaceForMomDeck, slides: aPlaceForMomSlides },
  { meta: modularDesignMeta, Component: ModularDesignDeck, slides: modularDesignSlides },
];
