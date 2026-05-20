import { Check, X } from "lucide-react";
import { Color, Size, Type } from "@/types";
import type {
  ProgressBarStatus,
  ProgressSegmentItem,
  StatusLabelConfig,
} from "./ProgressBar.types";

const statusLabelConfigMap: Record<
  ProgressBarStatus,
  Omit<StatusLabelConfig, "text">
> = {
  loading: {
    color: Color.Brand,
    type: Type.Flat,
    size: Size.Xs,
    rounded: true,
  },
  success: {
    color: Color.Positive,
    type: Type.Flat,
    size: Size.Sm,
    rounded: true,
    iconOnly: Check,
  },
  error: {
    color: Color.Danger,
    type: Type.Flat,
    size: Size.Sm,
    rounded: true,
    iconOnly: X,
  },
};

const getSegmentedProgress = (items: ProgressSegmentItem[]) =>
  items.reduce(
    (acc, { progress = 0, status }) =>
      acc + (status === "success" ? 100 : progress),
    0
  ) / items.length;

export function clampProgress(
  progress: number | ProgressSegmentItem[]
): number {
  const value = Array.isArray(progress)
    ? getSegmentedProgress(progress)
    : progress;
  return Math.min(Math.max(value, 0), 100);
}

export function isTerminalStatus(status: ProgressBarStatus): boolean {
  return status === "success" || status === "error";
}

export function getProgressWidth(
  clampedProgress: number,
  status: ProgressBarStatus
): string {
  return `${isTerminalStatus(status) ? 100 : clampedProgress}%`;
}

export function getStatusLabelConfig(
  status: ProgressBarStatus,
  clampedProgress: number
): StatusLabelConfig {
  const config = statusLabelConfigMap[status];

  if (status === "loading") {
    return {
      ...config,
      text: `${clampedProgress}%`,
    };
  }

  return config;
}
