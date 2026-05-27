export interface PieChartData {
  name: string;
  value: number;
}

export interface BarChartHorizontalProps {
  data: PieChartData[];
  title?: string;
}
