import * as React from "react";
import { Heading, Text, Stack, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, type SlideBaseProps } from "../SlideBase";

export interface ThreeUpItem {
  /** Optional icon/image URL */
  iconSrc?: string;
  /** Card heading */
  title: string;
  /** Card description */
  description: string;
}

export interface ThreeUpSlideProps {
  /** Slide title */
  title?: string;
  /** Eyebrow label above the title */
  eyebrow?: string;
  /** Three content items */
  items: [ThreeUpItem, ThreeUpItem, ThreeUpItem];
  /** Background theme */
  theme?: SlideBaseProps["theme"];
}

/**
 * Three-up slide — 3-column card grid for features, process steps,
 * or capabilities. Each card has an optional icon, heading, and description.
 */
export function ThreeUpSlide({
  title,
  eyebrow,
  items,
  theme = "dark",
}: ThreeUpSlideProps) {
  return (
    <SlideBase theme={theme}>
      <Stack direction="vertical" gap="extra-spacious" className="h-full">
        {(eyebrow || title) && (
          <Stack direction="vertical" gap="spacious">
            {eyebrow && (
              <Text
                as="span"
                size={200}
                className="font-mono uppercase tracking-widest text-muted-foreground"
              >
                {eyebrow}
              </Text>
            )}
            {title && (
              <Heading as="h2" size={3}>
                {title}
              </Heading>
            )}
          </Stack>
        )}
        <Grid columns={3} gap="extra-spacious" className="flex-1" align="start">
          {items.map((item, i) => (
            <GridColumn key={i}>
              <Stack direction="vertical" gap="normal">
                {item.iconSrc && (
                  <img
                    src={item.iconSrc}
                    alt=""
                    className="w-10 h-10 object-contain"
                  />
                )}
                <Text size={500} weight="medium">
                  {item.title}
                </Text>
                <Text size={400} className="text-muted-foreground">
                  {item.description}
                </Text>
              </Stack>
            </GridColumn>
          ))}
        </Grid>
      </Stack>
    </SlideBase>
  );
}
