import type { TextDecoration } from "../constants";

export const decorationClasses: Record<TextDecoration, string> = {
  underline: "underline",
  overline: "overline",
  "line-through": "line-through",
  none: "no-underline",
};
