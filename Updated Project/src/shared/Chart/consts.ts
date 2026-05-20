export const defaultBarColors = [
  "purple",
  "green",
  "sky",
  "yellow",
  "blue",
  "red",
  "orange",
] as const;

export const chartBaseStroke = "var(--line-basic-generic-hover)";

export const chartBaseAxisTickStyle = { fill: "var(--text-basic-secondary)" };

export const tooltipHoverStyle = {
  fill: "var(--background-basic-generic-medium)",
};

export const axisLabelStyle: React.CSSProperties = {
  fill: "var(--text-basic-primary)",
  fontSize: 14,
  textAnchor: "middle",
};
