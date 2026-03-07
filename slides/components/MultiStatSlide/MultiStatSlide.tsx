import * as React from "react";
import { Heading, Text, Stack, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, type SlideBaseProps } from "../SlideBase";

export interface StatItem {
  /** The headline number (e.g. "350%", "3x", "$4.2M") */
  stat: string;
  /** Description of what the stat means */
  description: string;
}

export interface MultiStatSlideProps {
  /** Optional slide title */
  title?: string;
  /** Optional eyebrow label */
  eyebrow?: string;
  /** 2–3 stats to display */
  stats: StatItem[];
  /** Background theme */
  theme?: SlideBaseProps["theme"];
}

/**
 * Multi-stat slide — displays 2–3 key metrics side by side.
 * Unlike StatSlide (one big number), this shows multiple stats in a row.
 */
export function MultiStatSlide({
  title,
  eyebrow,
  stats,
  theme = "dark",
}: MultiStatSlideProps) {
  const columns = Math.min(stats.length, 3) as 1 | 2 | 3;

  return (
    <SlideBase theme={theme}>
      <Stack
        direction="vertical"
        gap="extra-spacious"
        justify="center"
        className="h-full"
      >
        {(eyebrow || title) && (
          <Stack direction="vertical" gap="spacious" align="center" className="text-center">
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
        <Grid columns={columns} gap="extra-spacious" className="flex-1" align="center">
          {stats.map((item, i) => (
            <GridColumn key={i}>
              <Stack direction="vertical" gap="normal" align="center" className="text-center">
                <Heading as="h3" size="display">
                  {item.stat}
                </Heading>
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
