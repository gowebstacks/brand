import * as React from "react";
import { Heading, Text, Stack, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, type SlideBaseProps } from "./SlideBase";

export interface TeamMember {
  name: string;
  title: string;
  imageSrc?: string;
}

export interface TeamSlideProps {
  /** Slide title — defaults to "Our Team" */
  title?: string;
  /** Team members (3–4 recommended) */
  members: TeamMember[];
  /** Background theme */
  theme?: SlideBaseProps["theme"];
}

/**
 * Team slide — showcases team member bios with photos.
 */
export function TeamSlide({
  title = "Our Team",
  members,
  theme = "light",
}: TeamSlideProps) {
  const columns = Math.min(members.length, 4) as 1 | 2 | 3 | 4;

  return (
    <SlideBase theme={theme}>
      <Stack direction="vertical" gap="extra-spacious" className="h-full">
        <Heading as="h2" size={3}>
          {title}
        </Heading>
        <Grid columns={columns} gap="extra-spacious" className="flex-1" align="start">
          {members.map((member, i) => (
            <GridColumn key={i}>
              <Stack direction="vertical" gap="normal" align="center" className="text-center">
                {member.imageSrc ? (
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-28 h-28 rounded-full bg-muted flex items-center justify-center">
                    <Text size={700} className="text-muted-foreground">
                      {member.name.charAt(0)}
                    </Text>
                  </div>
                )}
                <Stack direction="vertical" gap="none">
                  <Text size={400} weight="medium">
                    {member.name}
                  </Text>
                  <Text size={300} className="opacity-70">
                    {member.title}
                  </Text>
                </Stack>
              </Stack>
            </GridColumn>
          ))}
        </Grid>
      </Stack>
    </SlideBase>
  );
}
