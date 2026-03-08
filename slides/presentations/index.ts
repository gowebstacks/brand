import SalesPitchDeck, { metadata as salesPitchMeta } from "./sales-pitch";
import type { PresentationMeta } from "./types";

export type { PresentationMeta } from "./types";

export interface PresentationEntry {
  meta: PresentationMeta;
  Component: React.ComponentType;
}

export const presentations: PresentationEntry[] = [
  { meta: salesPitchMeta, Component: SalesPitchDeck },
];
