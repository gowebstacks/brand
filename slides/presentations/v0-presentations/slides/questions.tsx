import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

export function SlideQuestions() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/layered-diamonds.png"
        alt=""
        className="pointer-events-none absolute -right-[18%] -top-[15%] w-[50%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-8 px-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Q&A
        </Text>
        <Heading as="h2" size={1} align="center">
          Questions?
        </Heading>
        <Text size={500} align="center" className="max-w-[50%] opacity-70">
          Let&apos;s discuss how v0 can transform your presentation workflow.
        </Text>

        <div className="mt-4 flex flex-col items-center gap-2">
          <Text size={300} className="opacity-50">
            Get started at
          </Text>
          <Text size={500} className="font-mono">
            v0.dev
          </Text>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
