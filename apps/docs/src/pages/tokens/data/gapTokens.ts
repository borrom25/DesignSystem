export interface GapToken {
  title: string;
  variable: string;
  utility: string;
  value: string;
}

export const gapTokens: GapToken[] = [
  {
    title: "gap 0.5",
    variable: "--generic-spacing-05",
    utility: "gap-0_5",
    value: "2px",
  },
  {
    title: "gap 1",
    variable: "--generic-spacing-1",
    utility: "gap-1",
    value: "4px",
  },
  {
    title: "gap 2",
    variable: "--generic-spacing-2",
    utility: "gap-2",
    value: "6px",
  },
  {
    title: "gap 3",
    variable: "--generic-spacing-3",
    utility: "gap-3",
    value: "8px",
  },
  {
    title: "gap 4",
    variable: "--generic-spacing-4",
    utility: "gap-4",
    value: "10px",
  },
  {
    title: "gap 5",
    variable: "--generic-spacing-5",
    utility: "gap-5",
    value: "12px",
  },
  {
    title: "gap 6",
    variable: "--generic-spacing-6",
    utility: "gap-6",
    value: "14px",
  },
  {
    title: "gap 7",
    variable: "--generic-spacing-7",
    utility: "gap-7",
    value: "16px",
  },
  {
    title: "gap 8",
    variable: "--generic-spacing-8",
    utility: "gap-8",
    value: "18px",
  },
  {
    title: "gap 9",
    variable: "--generic-spacing-9",
    utility: "gap-9",
    value: "20px",
  },
  {
    title: "gap 10",
    variable: "--generic-spacing-10",
    utility: "gap-10",
    value: "22px",
  },
];

export const componentGapTokens: GapToken[] = [
  {
    title: "Component XS",
    variable: "--component-xs-gap",
    utility: "gap-(--size-component-xs-gap)",
    value: "6px",
  },
  {
    title: "Component SM",
    variable: "--component-sm-gap",
    utility: "gap-(--size-component-sm-gap)",
    value: "8px",
  },
  {
    title: "Component MD",
    variable: "--component-md-gap",
    utility: "gap-(--size-component-md-gap)",
    value: "10px",
  },
];
