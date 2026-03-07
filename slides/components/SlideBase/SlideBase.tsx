import * as React from "react";
import { Box } from "@webstacks/ui";
import type { BoxProps } from "@webstacks/ui";

export interface SlideBaseProps extends Omit<BoxProps, "as"> {
  /** Color theme — "light" (white bg) or "dark" (black bg) */
  theme?: "light" | "dark";
  children: React.ReactNode;
}

/**
 * Base slide wrapper — enforces 16:9 aspect ratio, consistent padding,
 * and light/dark theming. All slide components should wrap their content
 * in SlideBase.
 *
 * - "light" → white background, dark text (default)
 * - "dark"  → black background, light text (applies .dark class so all
 *             semantic tokens flip automatically)
 */
export function SlideBase({
  theme = "light",
  className,
  children,
  ...props
}: SlideBaseProps) {
  return (
    <Box
      className={`relative w-[1280px] h-[720px] overflow-hidden p-16 bg-background text-foreground ${theme === "dark" ? "dark" : ""} ${className ?? ""}`}
      {...props}
    >
      {children}
    </Box>
  );
}
