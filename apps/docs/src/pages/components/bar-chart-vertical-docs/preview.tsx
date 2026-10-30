import { BarChartVertical } from "@/components";
import type {
  BarChartVerticalPlaygroundState,
  BarChartVerticalSeriesItem,
  VerticalChartPoint,
} from "./types";

const BAR_CHART_VERTICAL_DATA: VerticalChartPoint[] = [
  { name: "Q1", orders: 120, revenue: 160 },
  { name: "Q2", orders: 180, revenue: 210 },
  { name: "Q3", orders: 140, revenue: 190 },
  { name: "Q4", orders: 230, revenue: 280 },
];

const BAR_CHART_VERTICAL_BASE_SERIES: BarChartVerticalSeriesItem[] = [
  { dataKey: "orders", label: "Orders" },
];

const BAR_CHART_VERTICAL_SECOND_SERIES: BarChartVerticalSeriesItem = {
  dataKey: "revenue",
  label: "Revenue",
};

export function BarChartVerticalPreview(
  state: BarChartVerticalPlaygroundState
) {
  return (
    <BarChartVertical
      title={state.title}
      data={BAR_CHART_VERTICAL_DATA}
      series={[
        ...BAR_CHART_VERTICAL_BASE_SERIES,
        ...(state.withSecondSeries ? [BAR_CHART_VERTICAL_SECOND_SERIES] : []),
      ]}
    />
  );
}
