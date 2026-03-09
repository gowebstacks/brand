import { ThreeUpSlide } from "../../../components";

export function SlideDesignSystem() {
  return (
    <ThreeUpSlide
      eyebrow="Foundation"
      title="The Design System Behind Modular Websites"
      items={[
        {
          title: "Component Library",
          description: "Pre-built, tested UI components that ensure consistency across all pages and teams.",
        },
        {
          title: "Design Tokens",
          description: "Centralized colors, spacing, and typography that can be updated globally.",
        },
        {
          title: "Layout Rules",
          description: "Standardized grid systems and module variations for flexible page composition.",
        },
      ]}
      theme="light"
    />
  );
}
