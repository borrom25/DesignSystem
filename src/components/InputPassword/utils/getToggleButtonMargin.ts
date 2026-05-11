import type { Size } from "@/types";

export const toggleButtonMarginClasses: Record<Size, string> = {
  xs: "-mr-2",
  sm: "-mr-2",
  md: "-mr-2.5",
};

export function getToggleButtonMargin(size: Size): string {
  return toggleButtonMarginClasses[size];
}
