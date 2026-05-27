import { Bar, CartesianGrid, XAxis, BarChart } from "recharts";
import {
  getBarColor,
  ChartTooltip,
  ChartLayout,
  chartBaseStroke,
  chartBaseAxisTickStyle,
} from "@/shared/Chart";
import { BarChartVerticalProps } from "./BarChartVertical.types.ts";

export function BarChartVertical({
  series,
  data,
  title,
}: BarChartVerticalProps) {
  return (
    <ChartLayout data={data} series={series} title={title}>
      <BarChart
        syncId="sticky-sync"
        width={data.length * 130 + 100}
        height={360}
        data={data}
        margin={{ top: 20, right: 20 }}
      >
        <CartesianGrid vertical={false} stroke={chartBaseStroke} />
        <ChartTooltip />
        <XAxis
          dataKey="name"
          stroke={chartBaseStroke}
          tick={chartBaseAxisTickStyle}
          interval={0}
        />

        {series.map((item, i) => (
          <Bar
            key={item.dataKey}
            dataKey={item.dataKey}
            fill={getBarColor(i)}
            radius={[12, 12, 0, 0]}
          />
        ))}
      </BarChart>
    </ChartLayout>
  );
}
