import { defaultBarColors } from "./consts";

export type BarColorsType = (typeof defaultBarColors)[number];

export interface ChartSeries<
  TData extends Record<string, unknown> = Record<string, unknown>,
> {
  dataKey: keyof TData;
  label?: string;
}

export interface ChartProps<
  TData extends Record<string, unknown> = Record<string, unknown>,
> {
  data: TData[];
  series: ChartSeries<TData>[];
  title?: string;
}
