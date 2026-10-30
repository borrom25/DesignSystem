import type { HorizontalChartDataset, HorizontalChartPoint } from "./types";

const answer =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis";

export const HORIZONTAL_DATASETS: Record<
  HorizontalChartDataset,
  HorizontalChartPoint[]
> = {
  regions: [
    { name: answer, value: 32 },
    { name: answer, value: 26 },
    { name: answer, value: 20 },
    { name: answer, value: 18 },
  ],
  products: [
    { name: "Mobile", value: 44 },
    { name: "Web", value: 35 },
    { name: "Desktop", value: 21 },
    { name: "API", value: 17 },
  ],
};

export const HORIZONTAL_DATASET_OPTIONS = [
  { value: "regions" as const, label: "Regions" },
  { value: "products" as const, label: "Products" },
];
