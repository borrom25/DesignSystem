import type { LineChartPlaygroundState } from "./types";

export function createLineChartUsageCode(
  packageName: string,
  state: LineChartPlaygroundState
) {
  return `import { LineChart } from "${packageName}";
import "${packageName}/styles.css";

const data = [
  { name: "Jan", users: 120, sessions: 180 },
  { name: "Feb", users: 150, sessions: 210 },
  { name: "Mar", users: 170, sessions: 250 },
  { name: "Apr", users: 160, sessions: 230 },
  { name: "May", users: 190, sessions: 275 },
  { name: "Jun", users: 220, sessions: 320 },
];

const series = [
  { dataKey: "users", label: "Users" },${state.withSecondSeries ? '\n  { dataKey: "sessions", label: "Sessions" },' : ""}
];

export function Example() {
  return (
    <LineChart
      title="${state.title}"
      data={data}
      series={series}
      lineType="${state.lineType}"
      showDots={${state.showDots}}
    />
  );
}`;
}
