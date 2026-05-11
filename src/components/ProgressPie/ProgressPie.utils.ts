import type { ConfigProps, ProgressPieSize } from "./ProgressPie.types";

export const progressPieConfig: Record<ProgressPieSize, ConfigProps> = {
  xs: {},
  sm: { showIcon: true },
  md: { showIcon: true, showProgress: true },
  lg: { showIcon: true, showProgress: true },
};

export const sizePxFromSize: Record<ProgressPieSize, number> = {
  xs: 32,
  sm: 46,
  md: 74,
  lg: 120,
};

export const getCorrectedProgress = (progress: number) =>
  Math.min(Math.max(progress, 0), 100);
