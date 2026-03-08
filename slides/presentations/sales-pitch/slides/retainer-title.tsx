import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

export function SlideRetainerTitle() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/layered-diamonds.png"
        alt=""
        className="pointer-events-none absolute -right-[15%] -top-[20%] w-[50%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Webstacks
        </Text>
        <Heading as="h2" size={1} align="center">
          Webstacks Retainer Engagement
        </Heading>
        <Text size={500} align="center" className="max-w-[70%] opacity-70">
          An operating model for building, managing, and improving modern B2B
          websites
        </Text>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
