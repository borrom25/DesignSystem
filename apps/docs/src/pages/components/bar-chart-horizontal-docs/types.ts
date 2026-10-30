export type HorizontalChartDataset = "regions" | "products";

export type HorizontalChartPoint = {
  name: string;
  value: number;
};

export type BarChartHorizontalPlaygroundState = {
  dataset: HorizontalChartDataset;
};

export const BAR_CHART_HORIZONTAL_DEFAULT_STATE: BarChartHorizontalPlaygroundState =
  {
    dataset: "regions",
  };
