import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const pricing = [
  { module: "A", label: "Design Audit & Figma System", estimate: "$20,000" },
  { module: "B", label: "Program Management", estimate: "$30,000" },
  { module: "C", label: "Sanity Studio & Schema Ownership", estimate: "$12,500" },
  { module: "D", label: "Storybook Component Documentation", estimate: "$6,000" },
];

const totalEstimate = "$68,500";

export function SlideInvestment() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="flex h-full flex-col gap-10 px-16 pt-16 pb-24">
        <div className="flex flex-col gap-3">
          <Text as="span" size={200} className="font-mono uppercase tracking-widest opacity-50">
            Investment
          </Text>
          <Heading as="h2" size={3}>
            Pricing Structure
          </Heading>
        </div>

        <div className="flex flex-col gap-3 flex-1">
          {/* Header */}
          <div className="grid grid-cols-[48px_1fr_160px] gap-4 px-6 pb-2 border-b border-white/[0.08]">
            <Text size={200} className="font-mono uppercase tracking-widest opacity-40">
              #
            </Text>
            <Text size={200} className="font-mono uppercase tracking-widest opacity-40">
              Module
            </Text>
            <Text size={200} className="font-mono uppercase tracking-widest opacity-40 text-right">
              Estimate
            </Text>
          </div>

          {pricing.map((row) => (
            <div
              key={row.module}
              className="grid grid-cols-[48px_1fr_160px] items-center gap-4 bg-white/[0.04] px-6 py-4"
            >
              <div className="flex h-8 w-8 items-center justify-center bg-white/[0.08]">
                <Text as="span" size={300} className="opacity-80">
                  {row.module}
                </Text>
              </div>
              <Text size={400} className="opacity-90">{row.label}</Text>
              <Text size={400} className="text-right opacity-90">{row.estimate}</Text>
            </div>
          ))}

          {/* Total */}
          <div className="grid grid-cols-[48px_1fr_160px] items-center gap-4 border border-white/[0.12] bg-white/[0.06] px-6 py-4 mt-1">
            <div />
            <Text size={400} className="opacity-70">Total (all modules)</Text>
            <Text size={500} className="text-right">{totalEstimate}</Text>
          </div>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
