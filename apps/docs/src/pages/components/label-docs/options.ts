import { Color, Size, Type } from "@/types";

export const LABEL_TYPE_OPTIONS = [
  { value: Type.Fill, label: "Fill" },
  { value: Type.Outline, label: "Outline" },
  { value: Type.Flat, label: "Flat" },
  { value: "text" as const, label: "Text" },
];

export const LABEL_COLOR_OPTIONS = [
  { value: Color.Brand, label: "Brand" },
  { value: Color.Danger, label: "Danger" },
  { value: Color.Positive, label: "Positive" },
  { value: Color.Action, label: "Action" },
  { value: Color.Warning, label: "Warning" },
  { value: Color.Info, label: "Info" },
  { value: Color.Secondary, label: "Secondary" },
];

export const LABEL_SIZE_OPTIONS = [
  { value: Size.Xs, label: "Xs" },
  { value: Size.Sm, label: "Sm" },
  { value: Size.Md, label: "Md" },
];
