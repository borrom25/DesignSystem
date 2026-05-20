import { Bar, BarChart, YAxis, YAxisProps } from "recharts";
import { getBarColor } from "../utils";
import { ChartProps } from "../types";
import { chartStyles } from "../styles";
import {
  axisLabelStyle,
  chartBaseAxisTickStyle,
  chartBaseStroke,
} from "../consts";

interface ChartYAxisProps extends YAxisProps, ChartProps {}

export const ChartYAxis = ({
  data,
  title,
  series,
  ...props
}: ChartYAxisProps) => {
  return (
    <div className={chartStyles.yAxis}>
      <BarChart
        syncId="sticky-sync"
        width={80}
        height={360}
        data={data}
        margin={{ top: 20, right: 0, bottom: 30, left: 50 }}
      >
        <YAxis
          width={30}
          tickLine={false}
          stroke={chartBaseStroke}
          tick={chartBaseAxisTickStyle}
          label={{
            value: title,
            angle: -90,
            position: "left",
            offset: 30,
            style: axisLabelStyle,
          }}
          {...props}
        />
        {series.map((item, i) => (
          <Bar
            key={item.dataKey}
            dataKey={item.dataKey}
            fill={getBarColor(i)}
            opacity={0}
          />
        ))}
      </BarChart>
    </div>
  );
};
