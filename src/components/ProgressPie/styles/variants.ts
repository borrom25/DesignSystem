import type { ProgressPieColors } from "../ProgressPie.types";

export const colorClasses: Record<ProgressPieColors, string> = {
  brand: "stroke-(--color-brand-heavy)",
  action: "stroke-(--color-action-heavy)",
  danger: "stroke-(--color-danger-heavy)",
  positive: "stroke-(--color-positive-heavy)",
  warning: "stroke-(--color-warning-heavy)",
  info: "stroke-(--color-info-heavy)",
} as const;
