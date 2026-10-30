import { CardVariant, TextColor, TextShade } from "@/components";
import { Size } from "@/types";

export const CARD_SIZE_OPTIONS = [
  { value: Size.Xs, label: "Xs" },
  { value: Size.Sm, label: "Sm" },
  { value: Size.Md, label: "Md" },
];

export const CARD_VARIANT_OPTIONS = [
  { value: CardVariant.Basic, label: "Basic" },
  { value: CardVariant.Secondary, label: "Secondary" },
];

export const CARD_PADDING_OPTIONS = [
  { value: "default" as const, label: "Default" },
  { value: "compact" as const, label: "Compact" },
  { value: "relaxed" as const, label: "Relaxed" },
];

export const CARD_TEXT_COLOR_OPTIONS = [
  { value: "default" as const, label: "Default" },
  { value: TextColor.Basic, label: "Basic" },
  { value: TextColor.Brand, label: "Brand" },
  { value: TextColor.Danger, label: "Danger" },
  { value: TextColor.Positive, label: "Positive" },
  { value: TextColor.Warning, label: "Warning" },
  { value: TextColor.Info, label: "Info" },
  { value: TextColor.Action, label: "Action" },
  { value: TextColor.Inverse, label: "Inverse" },
];

export const CARD_TEXT_SHADE_OPTIONS = [
  { value: "default" as const, label: "Default" },
  { value: TextShade.Primary, label: "Primary" },
  { value: TextShade.Secondary, label: "Secondary" },
  { value: TextShade.Hint, label: "Hint" },
  { value: TextShade.Complementary, label: "Complementary" },
  { value: TextShade.Heavy, label: "Heavy" },
  { value: TextShade.Medium, label: "Medium" },
  { value: TextShade.Light, label: "Light" },
];
