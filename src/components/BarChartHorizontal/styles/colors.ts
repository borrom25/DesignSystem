import { getBarColor } from "@/shared/Chart";

const barFills = [
  "var(--colors-light-green-400-solid)",
  "var(--background-info-heavy-hover)",
  "var(--background-utility-heavy-default)",
];

const legendFills = [
  "var(--background-positive-heavy-default)",
  "var(--background-info-heavy-default)",
  "var(--background-utility-heavy-default)",
];

export const getHorizontalBarColor = (index: number) =>
  barFills[index] ?? getBarColor(index);

export const getHorizontalLegendColor = (index: number) =>
  legendFills[index] ?? getBarColor(index);
