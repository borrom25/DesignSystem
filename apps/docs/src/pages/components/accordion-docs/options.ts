import { TextColor, TextShade } from "@/components";

export const ACCORDION_POSITION_OPTIONS = [
  { value: "start", label: "Start" },
  { value: "mid", label: "Mid" },
  { value: "end", label: "End" },
];

export const ACCORDION_CHEVRON_POSITION_OPTIONS = [
  { value: "left", label: "Left" },
  { value: "right", label: "Right" },
  { value: "none", label: "None" },
];

export const ACCORDION_TEXT_COLOR_OPTIONS = [
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

export const ACCORDION_TEXT_SHADE_OPTIONS = [
  { value: "default" as const, label: "Default" },
  { value: TextShade.Primary, label: "Primary" },
  { value: TextShade.Secondary, label: "Secondary" },
  { value: TextShade.Hint, label: "Hint" },
  { value: TextShade.Complementary, label: "Complementary" },
  { value: TextShade.Heavy, label: "Heavy" },
  { value: TextShade.Medium, label: "Medium" },
  { value: TextShade.Light, label: "Light" },
];
