import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const stats = [
  { value: "$4.3B", label: "Raised by Our Clients" },
  { value: "50+", label: "In-House Experts" },
  { value: "150+", label: "Websites Launched" },
  { value: "97%", label: "Client Retention Rate" },
];

export function SlideMeetWebstacks() {
  return (
    <SlideBase theme="dark" className="!p-0">
      {/* Left column — text + globe */}
      <div className="absolute left-0 top-0 flex h-full w-[50%] flex-col justify-between pl-16 pt-16 pb-16">
        <div className="flex flex-col gap-4">
          <Text
            as="span"
            size={200}
            className="font-mono uppercase tracking-widest opacity-60"
          >
            A Composable Web Agency
          </Text>
          <Heading as="h2" size={1}>
            Meet Webstacks
          </Heading>
          <Text size={400} className="max-w-[90%] opacity-70">
            Webstacks has empowered marketing teams to break free from website
            bottlenecks with a composable approach built for speed and scale.
          </Text>
        </div>

        {/* 3D shape accent — bottom left, floating (clear of footer) */}
        <img
          src="/images/3d-shapes/stacked-discs.png"
          alt=""
          className="pointer-events-none absolute -left-[20%] bottom-[10%] w-[80%] -rotate-6 object-contain select-none"
          aria-hidden="true"
        />
      </div>

      {/* Right column — 2×2 stat grid */}
      <div className="absolute right-0 top-0 flex h-full w-[50%] items-center pr-16 pt-16 pb-16">
        <div className="grid h-[75%] w-full grid-cols-2 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col justify-between bg-white/[0.04] p-8"
            >
              <Heading as="h3" size={1}>
                {stat.value}
              </Heading>
              <Text
                as="span"
                size={100}
                className="font-mono uppercase tracking-widest opacity-50"
              >
                {stat.label}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
