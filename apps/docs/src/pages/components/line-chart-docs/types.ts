export type LineChartCurve = "linear" | "monotone" | "step";

export type LineChartPoint = {
  name: string;
  users: number;
  sessions: number;
};

export type LineChartSeriesItem = {
  dataKey: keyof LineChartPoint;
  label: string;
};

export type LineChartPlaygroundState = {
  title: string;
  lineType: LineChartCurve;
  showDots: boolean;
  withSecondSeries: boolean;
};

export const LINE_CHART_DEFAULT_STATE: LineChartPlaygroundState = {
  title: "Активность пользователей",
  lineType: "monotone",
  showDots: true,
  withSecondSeries: true,
};
