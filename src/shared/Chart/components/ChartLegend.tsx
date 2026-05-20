import { Bar, BarChart, Legend, LegendProps } from "recharts";
import { chartStyles } from "../styles";
import { getBarColor } from "../utils.ts";
import { ChartProps } from "../types.ts";

interface ChartLegendProps extends LegendProps, Omit<ChartProps, "title"> {
  width?: number;
}

export const ChartLegend = ({
  data,
  width,
  series,
  iconType = "circle",
  ...props
}: ChartLegendProps) => {
  return (
    <div className={chartStyles.legendContainer}>
      <BarChart data={data} width={width ?? 900} height={20}>
        <Legend
          iconType={iconType}
          formatter={(value) => (
            <span className={chartStyles.legend}>{value}</span>
          )}
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
