import { BannerSize } from "@/components";
import { Color } from "@/types";

export const BANNER_SIZE_OPTIONS = [
  { value: BannerSize.xs, label: "Xs" },
  { value: BannerSize.sm, label: "Sm" },
];

export const BANNER_COLOR_OPTIONS = [
  { value: Color.Brand, label: "Brand" },
  { value: Color.Action, label: "Action" },
  { value: Color.Danger, label: "Danger" },
  { value: Color.Positive, label: "Positive" },
  { value: Color.Warning, label: "Warning" },
  { value: Color.Info, label: "Info" },
  { value: Color.Secondary, label: "Secondary" },
  { value: Color.ContrastDark, label: "ContrastDark" },
  { value: Color.ContrastLight, label: "ContrastLight" },
  { value: Color.Generic, label: "Generic" },
];
