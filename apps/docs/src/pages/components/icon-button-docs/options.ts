import { Color, Size } from "@/types";

export const ICON_BUTTON_TYPE_OPTIONS = [
  { value: "flat" as const, label: "Flat" },
  { value: "ghost" as const, label: "Ghost" },
  { value: "icon" as const, label: "Icon" },
];

export const ICON_BUTTON_COLOR_OPTIONS = [
  { value: Color.Brand, label: "Brand" },
  { value: Color.Danger, label: "Danger" },
  { value: Color.Positive, label: "Positive" },
  { value: Color.Action, label: "Action" },
  { value: Color.Warning, label: "Warning" },
  { value: Color.Info, label: "Info" },
  { value: Color.Secondary, label: "Secondary" },
];

export const ICON_BUTTON_SIZE_OPTIONS = [
  { value: Size.Xs, label: "Xs" },
  { value: Size.Sm, label: "Sm" },
  { value: Size.Md, label: "Md" },
];
