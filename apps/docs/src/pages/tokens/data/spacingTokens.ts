export interface SpacingToken {
  name: string;
  variable: string;
  utility: string;
  value: string;
}

export const spacingTokens: SpacingToken[] = [
  { name: "0", variable: "--generic-spacing-0", utility: "p-0 / m-0", value: "0px" },
  {
    name: "0.5",
    variable: "--generic-spacing-05",
    utility: "p-0_5 / m-0_5",
    value: "2px",
  },
  { name: "1", variable: "--generic-spacing-1", utility: "p-1 / m-1", value: "4px" },
  { name: "2", variable: "--generic-spacing-2", utility: "p-2 / m-2", value: "6px" },
  { name: "3", variable: "--generic-spacing-3", utility: "p-3 / m-3", value: "8px" },
  { name: "4", variable: "--generic-spacing-4", utility: "p-4 / m-4", value: "10px" },
  { name: "5", variable: "--generic-spacing-5", utility: "p-5 / m-5", value: "12px" },
  { name: "6", variable: "--generic-spacing-6", utility: "p-6 / m-6", value: "14px" },
  { name: "7", variable: "--generic-spacing-7", utility: "p-7 / m-7", value: "16px" },
  { name: "8", variable: "--generic-spacing-8", utility: "p-8 / m-8", value: "18px" },
  { name: "9", variable: "--generic-spacing-9", utility: "p-9 / m-9", value: "20px" },
  { name: "10", variable: "--generic-spacing-10", utility: "p-10 / m-10", value: "22px" },
  { name: "11", variable: "--generic-spacing-11", utility: "p-11 / m-11", value: "24px" },
  { name: "12", variable: "--generic-spacing-12", utility: "p-12 / m-12", value: "28px" },
  { name: "13", variable: "--generic-spacing-13", utility: "p-13 / m-13", value: "32px" },
  { name: "14", variable: "--generic-spacing-14", utility: "p-14 / m-14", value: "36px" },
  { name: "15", variable: "--generic-spacing-15", utility: "p-15 / m-15", value: "40px" },
  { name: "16", variable: "--generic-spacing-16", utility: "p-16 / m-16", value: "44px" },
  { name: "17", variable: "--generic-spacing-17", utility: "p-17 / m-17", value: "48px" },
  { name: "18", variable: "--generic-spacing-18", utility: "p-18 / m-18", value: "52px" },
  { name: "19", variable: "--generic-spacing-19", utility: "p-19 / m-19", value: "56px" },
  { name: "20", variable: "--generic-spacing-20", utility: "p-20 / m-20", value: "60px" },
];
