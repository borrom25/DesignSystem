import type { BarChartVerticalPlaygroundState } from "./types";

export function createBarChartVerticalUsageCode(
  packageName: string,
  state: BarChartVerticalPlaygroundState
) {
  return `import { BarChartVertical } from "${packageName}";
import "${packageName}/styles.css";

const data = [
  { name: "Q1", orders: 120, revenue: 160 },
  { name: "Q2", orders: 180, revenue: 210 },
  { name: "Q3", orders: 140, revenue: 190 },
  { name: "Q4", orders: 230, revenue: 280 },
];

const series = [
  { dataKey: "orders", label: "Orders" },${state.withSecondSeries ? '\n  { dataKey: "revenue", label: "Revenue" },' : ""}
];

export function Example() {
  return (
    <BarChartVertical
      title="${state.title}"
      data={data}
      series={series}
    />
  );
}`;
}
