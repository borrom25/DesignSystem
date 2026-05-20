import { ChartProps } from "@/shared/Chart";

export type BarChartVerticalProps<
  TData extends Record<string, unknown> = Record<string, unknown>,
> = ChartProps<TData>;
