import { PieChart, type PieChartData } from "@/components";
import type { PieChartPlaygroundState } from "./types";

const PIE_CHART_DATA: PieChartData[] = [
  {
    name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis",
    value: 10,
    caption: (percent) => <>Ответов: 10 {percent}%</>,
  },
  {
    name: "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus",
    value: 9,
    caption: (percent) => <>Ответов: 9 {percent}%</>,
  },
  {
    name: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem",
    value: 8,
    caption: (percent) => <>Ответов: 8 {percent}%</>,
  },
  {
    name: "Nullam dictum felis eu pede mollis pretium. Integer tincidunt",
    value: 7,
    caption: (percent) => <>Ответов: 7 {percent}%</>,
  },
  {
    name: "Cras dapibus. Vivamus elementum semper nisi",
    value: 6,
    caption: (percent) => <>Ответов: 6 {percent}%</>,
  },
  {
    name: "Aenean vulputate eleifend tellus. Aenean leo ligula",
    value: 5,
    caption: (percent) => <>Ответов: 5 {percent}%</>,
  },
  {
    name: "Quisque rutrum. Aenean imperdiet",
    value: 4,
    caption: (percent) => <>Ответов: 4 {percent}%</>,
  },
];

export function PieChartPreview(state: PieChartPlaygroundState) {
  return (
    <PieChart
      type={state.type}
      data={PIE_CHART_DATA}
      hasInteractiveLegend={state.hasInteractiveLegend}
      {...(state.type === "donut"
        ? {
            title: state.title,
            subtitle: state.subtitle,
          }
        : {})}
    />
  );
}
