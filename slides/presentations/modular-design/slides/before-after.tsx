import { ComparisonSlide } from "../../../components";

const traditionalItems = [
  "Page-by-page design",
  "Hardcoded layouts",
  "Difficult to scale",
  "Developer bottlenecks",
];

const modularItems = [
  "Component-driven system",
  "Reusable modules",
  "Flexible page creation",
  "Faster iteration",
];

export function SlideBeforeAfter() {
  return (
    <ComparisonSlide
      title="Traditional vs Modular Websites"
      leftLabel="Traditional"
      leftItems={traditionalItems}
      rightLabel="Modular"
      rightItems={modularItems}
      theme="dark"
    />
  );
}
