// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/?node-id=5118-1811
// source=src/components/BarChartHorizontal/BarChartHorizontal.tsx
// component=BarChartHorizontal
const figma = require("figma");
const instance = figma.selectedInstance;
instance.getEnum("Property 1", { Variant2: "default" });
// Temporary mapping: runtime accepts data, not independently editable Figma
// rows, columns and axis labels. Values below are example application data.
// Row/Col/Primary Info booleans have no direct runtime props.
export default {
  example: figma.tsx`<BarChartHorizontal data={[{ name: "Группа A", value: 32 }, { name: "Группа B", value: 26 }, { name: "Группа C", value: 20 }]} />`,
  imports: ['import { BarChartHorizontal } from "borrom-ds-test"'],
  id: "bar-chart-horizontal",
  metadata: { nestable: true },
};
