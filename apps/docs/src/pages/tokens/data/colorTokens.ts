export interface ColorToken {
  name: string;
  variable: string;
  utility?: string;
}

export const backgroundTokens: ColorToken[] = [
  {
    name: "Page",
    variable: "--background-basic-background-page",
    utility: "bg-page",
  },
  {
    name: "Generic",
    variable: "--background-basic-generic",
    utility: "bg-generic",
  },
  {
    name: "Brand heavy",
    variable: "--background-brand-heavy-default",
    utility: "bg-brand-heavy",
  },
  {
    name: "Action heavy",
    variable: "--background-action-heavy-default",
    utility: "bg-action-heavy",
  },
  {
    name: "Danger heavy",
    variable: "--background-danger-heavy-default",
    utility: "bg-danger-heavy",
  },
  {
    name: "Positive heavy",
    variable: "--background-positive-heavy-default",
    utility: "bg-positive-heavy",
  },
  {
    name: "Info heavy",
    variable: "--background-info-heavy-default",
    utility: "bg-info-heavy",
  },
];

export const textTokens: ColorToken[] = [
  {
    name: "Primary",
    variable: "--text-basic-primary",
    utility: "text-primary",
  },
  {
    name: "Secondary",
    variable: "--text-basic-secondary",
    utility: "text-secondary",
  },
  {
    name: "Brand heavy",
    variable: "--text-brand-heavy",
    utility: "text-brand-text-heavy",
  },
  {
    name: "Danger heavy",
    variable: "--text-danger-heavy",
    utility: "text-danger-text-heavy",
  },
  {
    name: "Positive heavy",
    variable: "--text-positive-heavy",
    utility: "text-positive-text-heavy",
  },
];
