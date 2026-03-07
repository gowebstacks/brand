import * as React from "react";
import { Heading, Text, Stack } from "@webstacks/ui";
import { SlideBase, type SlideBaseProps } from "../SlideBase";

export interface TitleSlideProps {
  /** Main title */
  title: string;
  /** Optional subtitle or date */
  subtitle?: string;
  /** Eyebrow text above the title (e.g. "Webstacks") */
  eyebrow?: string;
  /** Background theme */
  theme?: SlideBaseProps["theme"];
}

/**
 * Title/cover slide — the opening slide of a deck.
 * Large heading with optional eyebrow and subtitle.
 */
export function TitleSlide({
  title,
  subtitle,
  eyebrow,
  theme = "dark",
}: TitleSlideProps) {
  return (
    <SlideBase theme={theme}>
      <Stack direction="vertical" gap="spacious" justify="center" className="h-full">
        {eyebrow && (
          <Text
            as="span"
            size={200}
            className="font-mono uppercase tracking-widest opacity-80"
          >
            {eyebrow}
          </Text>
        )}
        <Heading as="h1" size={1}>
          {title}
        </Heading>
        {subtitle && (
          <Text size={600} className="opacity-90">
            {subtitle}
          </Text>
        )}
      </Stack>
    </SlideBase>
  );
}
