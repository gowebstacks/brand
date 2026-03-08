import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const flexAreas = ["Strategy", "Design", "Development", "Program Management"];

export function SlideFlexModel() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/twisted-torus.png"
        alt=""
        className="pointer-events-none absolute -right-[12%] -top-[20%] w-[40%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Flexibility
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          Capacity flexes with the work
        </Heading>
        <Text size={500} className="mt-4 max-w-[60%] opacity-70">
          Hours are not locked into rigid departmental buckets. That means
          capacity can move across:
        </Text>

        <div className="mt-6 flex gap-3">
          {flexAreas.map((area) => (
            <div
              key={area}
              className="bg-white/[0.04] px-6 py-4"
            >
              <Text size={400} className="opacity-70">
                {area}
              </Text>
            </div>
          ))}
        </div>

        <Text size={400} className="mt-6 max-w-[65%] opacity-50">
          So if one month requires heavier development, or another requires more
          planning and UX work, the team can adapt without restructuring the
          engagement.
        </Text>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
