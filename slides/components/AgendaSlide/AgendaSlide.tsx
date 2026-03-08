import * as React from "react";
import { Heading, Text, Stack } from "@webstacks/ui";
import { SlideBase, type SlideBaseProps } from "../SlideBase";

export interface AgendaSlideProps {
  /** Slide title — defaults to "Agenda" */
  title?: string;
  /** List of agenda items */
  items: string[];
  /** Index of the currently active item (0-based), or -1 for none */
  activeIndex?: number;
  /** Background theme */
  theme?: SlideBaseProps["theme"];
}

/**
 * Agenda slide — table of contents or roadmap for the deck.
 * Optionally highlights the current topic.
 */
export function AgendaSlide({
  title = "Agenda",
  items,
  activeIndex = -1,
  theme = "light",
}: AgendaSlideProps) {
  return (
    <SlideBase theme={theme}>
      <Stack direction="vertical" gap="extra-spacious" className="h-full">
        <Heading as="h2" size={2}>
          {title}
        </Heading>
        <Stack direction="vertical" gap="normal" className="flex-1">
          {items.map((item, i) => {
            const isActive = i === activeIndex;
            return (
              <Stack
                key={i}
                direction="horizontal"
                gap="spacious"
                align="center"
                className={`py-3 border-b border-border ${
                  isActive ? "opacity-100" : activeIndex >= 0 ? "opacity-40" : "opacity-100"
                }`}
              >
                <Text
                  size={400}
                  weight="medium"
                  className={`font-mono w-8 ${isActive ? "text-primary" : ""}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </Text>
                <Text
                  size={500}
                  weight={isActive ? "medium" : "normal"}
                >
                  {item}
                </Text>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </SlideBase>
  );
}
