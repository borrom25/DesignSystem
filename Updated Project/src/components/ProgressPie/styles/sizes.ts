import type { ProgressPieSize } from "@components/ProgressPie";

export const contentGapSizeClasses: Record<ProgressPieSize, string> = {
  xs: "",
  sm: "",
  md: "gap-(--spacing-0_5)",
  lg: "gap-(--spacing-1)",
} as const;

export const textSizeClasses: Record<ProgressPieSize, string> = {
  xs: "",
  sm: "",
  md: "[font-size:var(--font-size-body-b3)]",
  lg: "[font-size:var(--font-size-body-b2)]",
} as const;
