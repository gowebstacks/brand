import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const stackItems = [
  { label: "Frontend", tool: "Next.js" },
  { label: "CMS", tool: "Sanity / Contentful / Storyblok" },
  { label: "Hosting", tool: "Vercel / Netlify" },
  { label: "Search", tool: "Algolia" },
  { label: "Analytics", tool: "GA4 / Segment" },
];

export function SlideComposableWebsite() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/layered-pebbles.png"
        alt=""
        className="pointer-events-none absolute -right-[15%] -bottom-[25%] w-[50%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col justify-center gap-6 px-16 max-w-[60%]">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Architecture
        </Text>
        <Heading as="h2" size={3}>
          What Is a Composable Website?
        </Heading>
        <Text size={500} className="opacity-70">
          A composable website extends modular design across the entire technology stack.
        </Text>

        <div className="bg-white/[0.04] px-5 py-4 mt-2">
          <Text size={400} className="opacity-80">
            Instead of one large platform, you assemble best-in-class tools.
          </Text>
        </div>

        <div className="mt-4">
          <Text size={300} weight="medium" className="opacity-60 mb-3">
            Example stack:
          </Text>
          <div className="flex flex-col gap-2">
            {stackItems.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <Text as="span" size={300} className="opacity-50 w-20 font-mono">
                  {item.label}
                </Text>
                <div className="w-px h-4 bg-foreground/20" />
                <Text as="span" size={400}>
                  {item.tool}
                </Text>
              </div>
            ))}
          </div>
        </div>

        <Text size={400} className="opacity-50 mt-2">
          Each system handles what it does best.
        </Text>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
