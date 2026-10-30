import type { ReactNode } from "react";

export type PieChartType = "pie" | "donut";

export interface PieChartData {
  name: string;
  value: number;
  caption?: (percent: number) => ReactNode;
}

export interface PieChartBaseProps {
  type?: PieChartType;
  data: PieChartData[];
  hasInteractiveLegend?: boolean;
}

interface PieChartPieProps extends PieChartBaseProps {
  type: "pie";
}

export interface PieChartDonutProps extends PieChartBaseProps {
  type: "donut";
  title?: string;
  subtitle?: string;
}

export type PieChartProps = PieChartPieProps | PieChartDonutProps;
