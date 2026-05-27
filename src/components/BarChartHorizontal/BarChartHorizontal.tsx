import { Bar, CartesianGrid, XAxis, BarChart, YAxis, Cell } from "recharts";
import {
  getBarColor,
  ChartTooltip,
  chartBaseStroke,
  chartBaseAxisTickStyle,
} from "@/shared/Chart";
import { BarChartHorizontalProps } from "./BarChartHorizontal.types.ts";
import { axisLabelStyle } from "@/shared/Chart/consts.ts";
import { BarChartHorizontalLegend } from "./ui";

export function BarChartHorizontal({ data, title }: BarChartHorizontalProps) {
  return (
    <BarChart
      syncId="sticky-sync"
      width={900}
      height={360}
      layout="vertical"
      data={data}
    >
      <CartesianGrid horizontal={false} stroke={chartBaseStroke} />
      <ChartTooltip />
      <XAxis
        type="number"
        stroke={chartBaseStroke}
        tick={chartBaseAxisTickStyle}
      />
      <YAxis
        dataKey="name"
        type="category"
        stroke={chartBaseStroke}
        tick={chartBaseAxisTickStyle}
        width={125}
        interval={0}
        label={{
          value: title,
          angle: -90,
          position: "left",
          offset: -10,
          style: axisLabelStyle,
        }}
      />
      <BarChartHorizontalLegend data={data} />
      <Bar dataKey="value" radius={[0, 12, 12, 0]} barSize={30}>
        {data.map((item, i) => (
          <Cell key={item.name} fill={getBarColor(i)} />
        ))}
      </Bar>
    </BarChart>
  );
}
