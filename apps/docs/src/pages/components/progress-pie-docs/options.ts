import { Color } from "@/types";

export const PROGRESS_PIE_SIZE_OPTIONS = [
  { value: "xs" as const, label: "XS" },
  { value: "sm" as const, label: "SM" },
  { value: "md" as const, label: "MD" },
  { value: "lg" as const, label: "LG" },
];

export const PROGRESS_PIE_PROGRESS_OPTIONS = [
  { value: "0" as const, label: "0%" },
  { value: "25" as const, label: "25%" },
  { value: "50" as const, label: "50%" },
  { value: "75" as const, label: "75%" },
  { value: "100" as const, label: "100%" },
];

export const PROGRESS_PIE_COLOR_OPTIONS = [
  { value: Color.Brand, label: "Brand" },
  { value: Color.Danger, label: "Danger" },
  { value: Color.Positive, label: "Positive" },
  { value: Color.Action, label: "Action" },
  { value: Color.Warning, label: "Warning" },
  { value: Color.Info, label: "Info" },
];
