import {
  TextAlign,
  TextColor,
  TextDecoration,
  TextOverflow,
  TextShade,
  TextVariant,
  TextWeight,
} from "@/components";

export const TEXT_ELEMENT_OPTIONS = [
  { value: "span" as const, label: "span" },
  { value: "p" as const, label: "p" },
  { value: "label" as const, label: "label" },
  { value: "h2" as const, label: "h2" },
];

export const TEXT_VARIANT_OPTIONS = [
  { value: TextVariant.B1, label: "b1" },
  { value: TextVariant.B2, label: "b2" },
  { value: TextVariant.B3, label: "b3" },
  { value: TextVariant.C1, label: "c1" },
  { value: TextVariant.C2, label: "c2" },
  { value: TextVariant.D1, label: "d1" },
  { value: TextVariant.D2, label: "d2" },
  { value: TextVariant.D3, label: "d3" },
  { value: TextVariant.H1, label: "h1" },
  { value: TextVariant.H2, label: "h2" },
  { value: TextVariant.H3, label: "h3" },
  { value: TextVariant.H4, label: "h4" },
  { value: TextVariant.H5, label: "h5" },
];

export const TEXT_WEIGHT_OPTIONS = [
  { value: TextWeight.Regular, label: "Regular" },
  { value: TextWeight.Medium, label: "Medium" },
  { value: TextWeight.Semibold, label: "Semibold" },
  { value: TextWeight.Bold, label: "Bold" },
];

export const TEXT_COLOR_OPTIONS = [
  { value: TextColor.Basic, label: "Basic" },
  { value: TextColor.Brand, label: "Brand" },
  { value: TextColor.Danger, label: "Danger" },
  { value: TextColor.Positive, label: "Positive" },
  { value: TextColor.Warning, label: "Warning" },
  { value: TextColor.Info, label: "Info" },
  { value: TextColor.Action, label: "Action" },
  { value: TextColor.Inverse, label: "Inverse" },
];

export const TEXT_SHADE_OPTIONS = [
  { value: TextShade.Primary, label: "Primary" },
  { value: TextShade.Secondary, label: "Secondary" },
  { value: TextShade.Hint, label: "Hint" },
  { value: TextShade.Complementary, label: "Complementary" },
  { value: TextShade.Heavy, label: "Heavy" },
  { value: TextShade.Medium, label: "Medium" },
  { value: TextShade.Light, label: "Light" },
];

export const TEXT_ALIGN_OPTIONS = [
  { value: "default" as const, label: "Default" },
  { value: TextAlign.Start, label: "Start" },
  { value: TextAlign.Center, label: "Center" },
  { value: TextAlign.End, label: "End" },
];

export const TEXT_OVERFLOW_OPTIONS = [
  { value: "default" as const, label: "Default" },
  { value: TextOverflow.Word, label: "Word" },
  { value: TextOverflow.Char, label: "Char" },
  { value: TextOverflow.Syllable, label: "Syllable" },
  { value: TextOverflow.Truncate, label: "Truncate" },
  { value: TextOverflow.Nowrap, label: "Nowrap" },
];

export const TEXT_DECORATION_OPTIONS = [
  { value: "default" as const, label: "Default" },
  { value: TextDecoration.Underline, label: "Underline" },
  { value: TextDecoration.Overline, label: "Overline" },
  { value: TextDecoration.LineThrough, label: "Line-through" },
  { value: TextDecoration.None, label: "None" },
];
