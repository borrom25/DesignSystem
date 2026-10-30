export type VerticalChartPoint = {
  name: string;
  orders: number;
  revenue: number;
};

export type BarChartVerticalSeriesItem = {
  dataKey: keyof VerticalChartPoint;
  label: string;
};

export type BarChartVerticalPlaygroundState = {
  title: string;
  withSecondSeries: boolean;
};

export const BAR_CHART_VERTICAL_DEFAULT_STATE: BarChartVerticalPlaygroundState =
  {
    title: "Продажи по кварталам",
    withSecondSeries: true,
  };
