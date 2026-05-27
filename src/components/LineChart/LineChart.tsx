import { LineChartProps } from "./LineChart.types.ts";
import {
  chartBaseAxisTickStyle,
  chartBaseStroke,
  ChartLayout,
  ChartTooltip,
  getBarColor,
} from "@/shared/Chart";
import {
  CartesianGrid,
  Line,
  LineChart as LineChartContainer,
  XAxis,
} from "recharts";
import {
  getLineActiveDot,
  getLineDot,
  tooltipLine,
} from "./LineChart.utils.ts";

export function LineChart({
  series,
  data,
  title,
  lineType,
  showDots = true,
}: LineChartProps) {
  return (
    <ChartLayout data={data} series={series} title={title} legendType="line">
      <LineChartContainer
        syncId="sticky-sync"
        width={data.length * 130 + 100}
        height={360}
        data={data}
        margin={{ top: 20, right: 20 }}
      >
        <CartesianGrid vertical={false} stroke={chartBaseStroke} />
        <ChartTooltip cursor={tooltipLine} />
        <XAxis
          dataKey="name"
          stroke={chartBaseStroke}
          tick={chartBaseAxisTickStyle}
          interval={0}
          padding={{ left: 56 }}
        />

        {series.map((item, i) => (
          <Line
            key={item.dataKey}
            dataKey={item.dataKey}
            stroke={getBarColor(i)}
            strokeWidth={3}
            type={lineType}
            dot={showDots && getLineDot(i)}
            activeDot={getLineActiveDot(i)}
          />
        ))}
      </LineChartContainer>
    </ChartLayout>
  );
}
