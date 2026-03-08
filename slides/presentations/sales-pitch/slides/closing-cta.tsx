import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const closingTeam = [
  { name: "Nikan Shahidi", role: "CEO", avatarSrc: "/images/headshots/leadership/nikan-shahidi.png" },
  { name: "Jesse Schor", role: "Head of Growth", avatarSrc: "/images/headshots/leadership/jesse-schor.png" },
  { name: "Emily Winsauer", role: "Head of Web Strategy", avatarSrc: "/images/headshots/leadership/emily-winsauer.png" },
  { name: "Hunter McLean", role: "Head of Design", avatarSrc: "/images/headshots/leadership/hunter-mcclean.png" },
  { name: "Tori Wolski", role: "Head of PMO", avatarSrc: "/images/headshots/leadership/tori-wolski.png" },
];

const closingPhotos = [
  "/images/photography/coworkers-reviewing-design-layouts.jpg",
  "/images/photography/man-blue-cap-laptop-high-table-wide.jpg",
  "/images/photography/four-people-walking-hallway-smiling.jpg",
  "/images/photography/office-lounge-webstacks-sign-wide.jpg",
];

export function SlideClosingCTA() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="relative z-10 flex h-full flex-col">
        {/* Top section: CTA + team */}
        <div className="flex flex-1 items-start justify-between px-16 pt-16">
          {/* Left: headline + subtitle + button */}
          <div className="flex max-w-[50%] flex-col gap-5">
            <Heading as="h2" size={1}>
              Let&rsquo;s win together.
            </Heading>
            <Text size={400} className="opacity-50">
              Still have questions? Let&rsquo;s talk.
            </Text>
            <div className="mt-2">
              <span className="inline-block rounded-full bg-[#2563EB] px-6 py-3 text-sm text-white">
                Book with us
              </span>
            </div>
          </div>

          {/* Right: team grid */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-5">
            {closingTeam.map((member) => (
              <div key={member.name} className="flex items-center gap-3">
                <img
                  src={member.avatarSrc}
                  alt={member.name}
                  className="h-12 w-12 shrink-0 rounded-none object-cover"
                />
                <div className="flex flex-col">
                  <Text as="span" size={200}>
                    {member.name}
                  </Text>
                  <Text as="span" size={100} className="opacity-50">
                    {member.role}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: photography strip — edge-to-edge, staggered aspect ratios */}
        <div className="mb-20 mt-auto flex w-full items-center justify-between gap-5">
          {closingPhotos.map((src, i) => {
            return (
              <div
                key={src}
                className="overflow-hidden"
                style={{
                  aspectRatio: i === 1 ? "3/4" : i === 2 ? "16/9" : "4/3",
                  width: i === 1 ? "22%" : "26%",
                  ...(i === 1 ? { transform: "scale(0.9)" } : {}),
                }}
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover"
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
