import * as React from "react";
import { Heading, Text, Stack, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, type SlideBaseProps } from "../SlideBase";

export interface LogoItem {
  /** Company name (used as alt text) */
  name: string;
  /** Logo image URL */
  src: string;
}

export interface LogoGridSlideProps {
  /** Slide title — defaults to "Trusted By" */
  title?: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Logo items (6–12 recommended) */
  logos: LogoItem[];
  /** Background theme */
  theme?: SlideBaseProps["theme"];
}

/**
 * Logo grid slide — displays a grid of client/partner logos.
 */
export function LogoGridSlide({
  title = "Trusted By",
  subtitle,
  logos,
  theme = "light",
}: LogoGridSlideProps) {
  // Determine grid columns based on logo count
  const columns = logos.length <= 4 ? (logos.length as 1 | 2 | 3 | 4) : logos.length <= 8 ? 4 : (4 as 1 | 2 | 3 | 4);

  return (
    <SlideBase theme={theme}>
      <Stack direction="vertical" gap="extra-spacious" align="center" className="h-full">
        <Stack direction="vertical" gap="condensed" align="center" className="text-center">
          <Heading as="h2" size={3}>
            {title}
          </Heading>
          {subtitle && (
            <Text size={400} className="opacity-70">
              {subtitle}
            </Text>
          )}
        </Stack>
        <Grid
          columns={columns}
          gap="extra-spacious"
          align="center"
          className="flex-1 w-full max-w-4xl"
        >
          {logos.map((logo, i) => (
            <GridColumn key={i}>
              <Stack align="center" justify="center" className="h-full p-4">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-12 max-w-[160px] object-contain opacity-60 grayscale"
                />
              </Stack>
            </GridColumn>
          ))}
        </Grid>
      </Stack>
    </SlideBase>
  );
}
