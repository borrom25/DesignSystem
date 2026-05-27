import { ChartProps } from "@/shared/Chart";
import { CurveType } from "recharts/types/shape/Curve";

export interface LineChartProps<
  TData extends Record<string, unknown> = Record<string, unknown>,
> extends ChartProps<TData> {
  lineType?: CurveType;
  showDots?: boolean;
}
