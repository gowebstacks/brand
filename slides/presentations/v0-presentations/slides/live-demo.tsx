import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

export function SlideLiveDemo() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/cube-grid.png"
        alt=""
        className="pointer-events-none absolute -right-[20%] -bottom-[30%] w-[55%] object-contain select-none"
        aria-hidden="true"
      />
      <img
        src="/images/3d-shapes/scattered-discs.png"
        alt=""
        className="pointer-events-none absolute -left-[15%] -top-[20%] w-[40%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Demonstration
        </Text>
        <Heading as="h2" size={1} align="center">
          Live Demo
        </Heading>
        <Text size={500} align="center" className="max-w-[60%] opacity-70">
          Watch how we build a new presentation deck from scratch using v0 in real-time.
        </Text>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
