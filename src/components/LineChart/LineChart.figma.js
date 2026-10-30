// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=5167-2230
// source=src/components/LineChart/LineChart.tsx
// component=LineChart
const figma = require("figma");
const instance = figma.selectedInstance;
instance.getEnum("Property 1", { Variant2: "default" });
// Temporary mapping: replace sample data/series with application data.
// Figma Row/Col visibility and individual axis/legend label booleans are not
// runtime props. Runtime derives axes and legend from data and series.
export default {
  example: figma.tsx`<LineChart data={[{ name: "Январь", primary: 12, secondary: 8 }, { name: "Февраль", primary: 18, secondary: 14 }]} series={[{ dataKey: "primary", label: "Основной" }, { dataKey: "secondary", label: "Дополнительный" }]} />`,
  imports: ['import { LineChart } from "borrom-ds-test"'],
  id: "line-chart",
  metadata: { nestable: true },
};
