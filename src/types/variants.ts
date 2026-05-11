export const Color = {
  Brand: "brand",
  Danger: "danger",
  Positive: "positive",
  Action: "action",
  Warning: "warning",
  Info: "info",
  Inverse: "inverse",
  ContrastDark: "contrastDark",
  ContrastLight: "contrastLight",
} as const;

export type Color = (typeof Color)[keyof typeof Color];

export const Type = {
  Fill: "fill",
  Outline: "outline",
  Ghost: "ghost",
  Flat: "flat",
} as const;

export type Type = (typeof Type)[keyof typeof Type];

export const Size = {
  Xs: "xs",
  Sm: "sm",
  Md: "md",
} as const;

export type Size = (typeof Size)[keyof typeof Size];

export const HtmlType = {
  Button: "button",
  Submit: "submit",
  Reset: "reset",
} as const;

export type HtmlType = (typeof HtmlType)[keyof typeof HtmlType];
