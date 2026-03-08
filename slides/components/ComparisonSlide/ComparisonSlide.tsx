import * as React from "react";
import { Heading, Text, Stack, Grid, GridColumn, Box } from "@webstacks/ui";
import { SlideBase, type SlideBaseProps } from "../SlideBase";

export interface ComparisonSlideProps {
  /** Slide title */
  title: string;
  /** Label for the left column (e.g. "Before", "Without Webstacks") */
  leftLabel: string;
  /** Content items for the left column */
  leftItems: string[];
  /** Label for the right column (e.g. "After", "With Webstacks") */
  rightLabel: string;
  /** Content items for the right column */
  rightItems: string[];
  /** Background theme */
  theme?: SlideBaseProps["theme"];
}

/**
 * Comparison slide — before/after or side-by-side layout.
 */
export function ComparisonSlide({
  title,
  leftLabel,
  leftItems,
  rightLabel,
  rightItems,
  theme = "light",
}: ComparisonSlideProps) {
  return (
    <SlideBase theme={theme}>
      <Stack direction="vertical" gap="extra-spacious" className="h-full">
        <Heading as="h2" size={3}>
          {title}
        </Heading>
        <Grid columns={2} gap="extra-spacious" className="flex-1">
          {/* Left column */}
          <GridColumn>
            <Box padding="spacious" className="h-full bg-muted border border-border">
              <Stack direction="vertical" gap="normal">
                <Text size={400} weight="medium" className="text-muted-foreground">
                  {leftLabel}
                </Text>
                {leftItems.map((item, i) => (
                  <Stack key={i} direction="horizontal" gap="condensed" align="start">
                    <Text size={400} className="text-muted-foreground shrink-0">
                      &times;
                    </Text>
                    <Text size={400}>{item}</Text>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </GridColumn>
          {/* Right column */}
          <GridColumn>
            <Box padding="spacious" className="h-full bg-primary/5 border border-primary/20">
              <Stack direction="vertical" gap="normal">
                <Text size={400} weight="medium" className="text-primary">
                  {rightLabel}
                </Text>
                {rightItems.map((item, i) => (
                  <Stack key={i} direction="horizontal" gap="condensed" align="start">
                    <Text size={400} className="text-primary shrink-0">
                      &#10003;
                    </Text>
                    <Text size={400}>{item}</Text>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </GridColumn>
        </Grid>
      </Stack>
    </SlideBase>
  );
}
