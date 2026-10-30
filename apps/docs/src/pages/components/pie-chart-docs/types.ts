import type { PieChartType } from "@/components";

export type PieChartPlaygroundState = {
  type: PieChartType;
  hasInteractiveLegend: boolean;
  title: string;
  subtitle: string;
};

export const PIE_CHART_DEFAULT_STATE: PieChartPlaygroundState = {
  type: "donut",
  hasInteractiveLegend: false,
  title: "2 418",
  subtitle: "Всего заявок",
};
