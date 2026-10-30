export const TextVariant = {
  B1: "b1",
  B2: "b2",
  B3: "b3",
  C1: "c1",
  C2: "c2",
  D1: "d1",
  D2: "d2",
  D3: "d3",
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
} as const;

export type TextVariant = (typeof TextVariant)[keyof typeof TextVariant] & {};

export const TextWeight = {
  Regular: "regular",
  Medium: "medium",
  Semibold: "semibold",
  Bold: "bold",
} as const;

export type TextWeight = (typeof TextWeight)[keyof typeof TextWeight] & {};

export const TextColor = {
  Action: "action",
  Basic: "basic",
  Brand: "brand",
  ContrastDark: "contrastDark",
  ContrastLight: "contrastLight",
  Danger: "danger",
  Info: "info",
  Inverse: "inverse",
  InverseAdditional: "inverseAdditional",
  Positive: "positive",
  Utility: "utility",
  Warning: "warning",
} as const;

export type TextColor = (typeof TextColor)[keyof typeof TextColor] & {};

export type TextColorCategory = TextColor;

export const TextShade = {
  Heavy: "heavy",
  Light: "light",
  Medium: "medium",
  Complementary: "complementary",
  Hint: "hint",
  Primary: "primary",
  Secondary: "secondary",
} as const;

export type TextShade = (typeof TextShade)[keyof typeof TextShade] & {};

export type TextColorShade = TextShade;

export const TEXT_VARIANTS = [
  TextVariant.B1,
  TextVariant.B2,
  TextVariant.B3,
  TextVariant.C1,
  TextVariant.C2,
  TextVariant.D1,
  TextVariant.D2,
  TextVariant.D3,
  TextVariant.H1,
  TextVariant.H2,
  TextVariant.H3,
  TextVariant.H4,
  TextVariant.H5,
] as const;

export const TEXT_VARIANT_CATEGORY = {
  [TextVariant.B1]: "body",
  [TextVariant.B2]: "body",
  [TextVariant.B3]: "body",
  [TextVariant.C1]: "caption",
  [TextVariant.C2]: "caption",
  [TextVariant.D1]: "display",
  [TextVariant.D2]: "display",
  [TextVariant.D3]: "display",
  [TextVariant.H1]: "heading",
  [TextVariant.H2]: "heading",
  [TextVariant.H3]: "heading",
  [TextVariant.H4]: "heading",
  [TextVariant.H5]: "heading",
} as const satisfies Record<TextVariant, TextCategory>;

export const TEXT_COLOR_CATEGORIES = [
  TextColor.Action,
  TextColor.Basic,
  TextColor.Brand,
  TextColor.ContrastDark,
  TextColor.ContrastLight,
  TextColor.Danger,
  TextColor.Info,
  TextColor.Inverse,
  TextColor.InverseAdditional,
  TextColor.Positive,
  TextColor.Utility,
  TextColor.Warning,
] as const;

export const TEXT_COLOR_SHADES = [
  TextShade.Heavy,
  TextShade.Light,
  TextShade.Medium,
  TextShade.Complementary,
  TextShade.Hint,
  TextShade.Primary,
  TextShade.Secondary,
] as const;

export type TextCategory = "body" | "caption" | "display" | "heading";

export const TextAlign = {
  Start: "start",
  Center: "center",
  End: "end",
} as const;

export type TextAlign = (typeof TextAlign)[keyof typeof TextAlign] & {};

export const TextOverflow = {
  Truncate: "truncate",
  Char: "char",
  Word: "word",
  Syllable: "syllable",
  Nowrap: "nowrap",
} as const;

export type TextOverflow =
  (typeof TextOverflow)[keyof typeof TextOverflow] & {};

export const TextDecoration = {
  Underline: "underline",
  Overline: "overline",
  LineThrough: "line-through",
  None: "none",
} as const;

export type TextDecoration =
  (typeof TextDecoration)[keyof typeof TextDecoration] & {};

export const COLOR_CATEGORY_TOKEN: Record<TextColor, string> = {
  [TextColor.Action]: "action",
  [TextColor.Basic]: "basic",
  [TextColor.Brand]: "brand",
  [TextColor.ContrastDark]: "contrast-dark",
  [TextColor.ContrastLight]: "contrast-light",
  [TextColor.Danger]: "danger",
  [TextColor.Info]: "info",
  [TextColor.Inverse]: "inverse",
  [TextColor.InverseAdditional]: "inverse-additional",
  [TextColor.Positive]: "positive",
  [TextColor.Utility]: "utility",
  [TextColor.Warning]: "warning",
};
