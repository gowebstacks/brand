export interface PresentationMeta {
  id: string;
  label: string;
  count: number;
}

export interface SlideEntry {
  Component: React.ComponentType;
  label?: string;
  notes?: string;
}
