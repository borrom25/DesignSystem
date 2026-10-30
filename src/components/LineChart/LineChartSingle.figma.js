// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=5184-459
// source=src/components/LineChart/LineChart.tsx
// component=LineChart
const figma = require("figma");
const instance = figma.selectedInstance;
instance.getEnum("Property 1", { Variant2: "default" });
// Temporary mapping: chart labels, Row/Col visibility and values are application
// data. This example uses one series; replace it with the actual dataset.
// The public LineChart API derives axes and legend, without per-label booleans.
export default {
  example: figma.tsx`<LineChart data={[{ name: "Январь", value: 12 }, { name: "Февраль", value: 18 }]} series={[{ dataKey: "value", label: "Значение" }]} />`,
  imports: ['import { LineChart } from "borrom-ds-test"'],
  id: "line-chart-single",
  metadata: { nestable: true },
};
