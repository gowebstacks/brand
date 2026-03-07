import * as React from "react";
import { Heading, Text, Stack } from "@webstacks/ui";
import { SlideBase, type SlideBaseProps } from "../SlideBase";

export interface StatSlideProps {
  /** The headline number or stat (e.g. "3.2x", "98%", "$4.2M") */
  stat: string;
  /** Description of what the stat means */
  description: string;
  /** Optional context or source */
  context?: string;
  /** Optional eyebrow label */
  eyebrow?: string;
  /** Background theme */
  theme?: SlideBaseProps["theme"];
}

/**
 * Stat/metric slide — highlights a single key number.
 * Centers a large stat with supporting description.
 */
export function StatSlide({
  stat,
  description,
  context,
  eyebrow,
  theme = "dark",
}: StatSlideProps) {
  return (
    <SlideBase theme={theme}>
      <Stack
        direction="vertical"
        gap="spacious"
        align="center"
        justify="center"
        className="h-full text-center"
      >
        {eyebrow && (
          <Text
            as="span"
            size={200}
            className="font-mono uppercase tracking-widest opacity-70"
          >
            {eyebrow}
          </Text>
        )}
        <Heading as="h2" size="display">
          {stat}
        </Heading>
        <Text size={600} className="max-w-lg">
          {description}
        </Text>
        {context && (
          <Text size={300} className="opacity-60">
            {context}
          </Text>
        )}
      </Stack>
    </SlideBase>
  );
}
