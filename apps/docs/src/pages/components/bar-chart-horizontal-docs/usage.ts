import type { BarChartHorizontalPlaygroundState } from "./types";

export function createBarChartHorizontalUsageCode(
  packageName: string,
  state: BarChartHorizontalPlaygroundState
) {
  const dataCode =
    state.dataset === "products"
      ? `const data = [
  { name: "Mobile", value: 44 },
  { name: "Web", value: 35 },
  { name: "Desktop", value: 21 },
  { name: "API", value: 17 },
];`
      : `const answer =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis";

const data = [
  { name: answer, value: 32 },
  { name: answer, value: 26 },
  { name: answer, value: 20 },
  { name: answer, value: 18 },
];`;

  return `import { BarChartHorizontal } from "${packageName}";
import "${packageName}/styles.css";

${dataCode}

export function Example() {
  return <BarChartHorizontal data={data} />;
}`;
}
