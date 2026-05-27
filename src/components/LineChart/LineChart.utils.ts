import { getBarColor } from "@/shared/Chart";

export const tooltipLine = {
  stroke: "var(--line-inverse-light)",
  strokeDasharray: "5 5",
  strokeWidth: 1,
};

export const getLineActiveDot = (index: number) => ({
  r: 4,
  fill: "var(--background-contrast-light-heavy-default)",
  stroke: getBarColor(index),
  strokeWidth: 1,
});

export const getLineDot = (index: number) => ({
  r: 4,
  stroke: getBarColor(index),
  strokeWidth: 2.5,
});
