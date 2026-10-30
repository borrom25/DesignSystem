import { LineChart } from "@/components";
import type {
  LineChartPlaygroundState,
  LineChartPoint,
  LineChartSeriesItem,
} from "./types";

const LINE_CHART_DATA: LineChartPoint[] = [
  { name: "Jan", users: 120, sessions: 180 },
  { name: "Feb", users: 150, sessions: 210 },
  { name: "Mar", users: 170, sessions: 250 },
  { name: "Apr", users: 160, sessions: 230 },
  { name: "May", users: 190, sessions: 275 },
  { name: "Jun", users: 220, sessions: 320 },
];

const LINE_CHART_BASE_SERIES: LineChartSeriesItem[] = [
  { dataKey: "users", label: "Users" },
];

const LINE_CHART_SECOND_SERIES: LineChartSeriesItem = {
  dataKey: "sessions",
  label: "Sessions",
};

export function LineChartPreview(state: LineChartPlaygroundState) {
  return (
    <LineChart
      title={state.title}
      data={LINE_CHART_DATA}
      series={[
        ...LINE_CHART_BASE_SERIES,
        ...(state.withSecondSeries ? [LINE_CHART_SECOND_SERIES] : []),
      ]}
      lineType={state.lineType}
      showDots={state.showDots}
    />
  );
}
