import { TextColor, TextShade, TextVariant } from "@/components";
import { Color, Size } from "@/types";

export const PROGRESS_BAR_STATUS_OPTIONS = [
  { value: "loading" as const, label: "Loading" },
  { value: "success" as const, label: "Success" },
  { value: "error" as const, label: "Error" },
];

export const PROGRESS_BAR_PROGRESS_OPTIONS = [
  { value: "0" as const, label: "0%" },
  { value: "25" as const, label: "25%" },
  { value: "50" as const, label: "50%" },
  { value: "75" as const, label: "75%" },
  { value: "100" as const, label: "100%" },
];

export const PROGRESS_BAR_MODE_OPTIONS = [
  { value: "single" as const, label: "Single" },
  { value: "segmented" as const, label: "Segmented" },
];

export const PROGRESS_BAR_TITLE_VARIANT_OPTIONS = [
  { value: "default" as const, label: "Default" },
  { value: TextVariant.B1, label: "b1" },
  { value: TextVariant.B2, label: "b2" },
  { value: TextVariant.B3, label: "b3" },
  { value: TextVariant.C1, label: "c1" },
  { value: TextVariant.C2, label: "c2" },
  { value: TextVariant.H1, label: "h1" },
  { value: TextVariant.H2, label: "h2" },
  { value: TextVariant.H3, label: "h3" },
  { value: TextVariant.H4, label: "h4" },
  { value: TextVariant.H5, label: "h5" },
];

export const PROGRESS_BAR_TITLE_COLOR_OPTIONS = [
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

export const PROGRESS_BAR_TITLE_SHADE_OPTIONS = [
  { value: "default" as const, label: "Default" },
  { value: TextShade.Primary, label: "Primary" },
  { value: TextShade.Secondary, label: "Secondary" },
  { value: TextShade.Hint, label: "Hint" },
  { value: TextShade.Complementary, label: "Complementary" },
  { value: TextShade.Heavy, label: "Heavy" },
  { value: TextShade.Medium, label: "Medium" },
  { value: TextShade.Light, label: "Light" },
];

export const PROGRESS_BAR_LABEL_SIZE_OPTIONS = [
  { value: "default" as const, label: "Default" },
  { value: Size.Xs, label: "Xs" },
  { value: Size.Sm, label: "Sm" },
  { value: Size.Md, label: "Md" },
];

export const PROGRESS_BAR_LABEL_COLOR_OPTIONS = [
  { value: "default" as const, label: "Default" },
  { value: Color.Brand, label: "Brand" },
  { value: Color.Danger, label: "Danger" },
  { value: Color.Positive, label: "Positive" },
  { value: Color.Action, label: "Action" },
  { value: Color.Warning, label: "Warning" },
  { value: Color.Info, label: "Info" },
  { value: Color.Secondary, label: "Secondary" },
];

export const PROGRESS_BAR_LABEL_POSITION_OPTIONS = [
  { value: "default" as const, label: "Default" },
  { value: "top" as const, label: "Top" },
  { value: "end" as const, label: "End" },
];
