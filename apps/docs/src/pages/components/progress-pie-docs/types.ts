import { Color } from "@/types";

export type ProgressPieSize = "xs" | "sm" | "md" | "lg";
export type ProgressValue = "0" | "25" | "50" | "75" | "100";
export type ProgressPieColor =
  | "brand"
  | "danger"
  | "positive"
  | "action"
  | "warning"
  | "info";

export type ProgressPiePlaygroundState = {
  size: ProgressPieSize;
  progress: ProgressValue;
  color: ProgressPieColor;
  showIcon: boolean;
  showProgress: boolean;
};

export const PROGRESS_PIE_DEFAULT_STATE: ProgressPiePlaygroundState = {
  size: "md",
  progress: "75",
  color: Color.Brand,
  showIcon: true,
  showProgress: true,
};
