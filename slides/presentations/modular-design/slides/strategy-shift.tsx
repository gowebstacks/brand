import { ComparisonSlide } from "../../../components";

export function SlideStrategyShift() {
  return (
    <ComparisonSlide
      title="How This Changes Website Strategy"
      leftLabel="One-time project"
      leftItems={[
        "Fixed scope and timeline",
        "Large upfront investment",
        "Redesigns every few years",
        "Slow to respond to market",
      ]}
      rightLabel="Continuous platform"
      rightItems={[
        "Add modules over time",
        "Optimize pages continuously",
        "Iterate faster",
        "Treat the website as a product",
      ]}
      theme="light"
    />
  );
}
