import { useMemo } from "react";
import { cn } from "@/utils/cn";
import { BarChartHorizontalProps } from "./BarChartHorizontal.types.ts";
import { getHorizontalBarColor } from "./styles/colors.ts";
import { barChartHorizontalStyles } from "./styles";
import { BarChartHorizontalLegend } from "./ui";

const getPercent = (value: number, total: number) =>
  total === 0 ? 0 : Math.round((value / total) * 100);

export function BarChartHorizontal({ data }: BarChartHorizontalProps) {
  const percents = useMemo(() => {
    const total = data.reduce((sum, item) => sum + item.value, 0);

    return data.map((item) => getPercent(item.value, total));
  }, [data]);

  return (
    <div className={barChartHorizontalStyles.base}>
      <div className={barChartHorizontalStyles.plot}>
        {data.map((item, index) => {
          const percent = percents[index];
          const isLast = index === data.length - 1;

          return (
            <div
              key={`${item.name}-${index}`}
              className={barChartHorizontalStyles.row}
            >
              <span
                className={cn(
                  barChartHorizontalStyles.percent,
                  isLast && barChartHorizontalStyles.percentLast
                )}
              >
                {percent}%
              </span>
              <div
                className={cn(
                  barChartHorizontalStyles.cell,
                  isLast && barChartHorizontalStyles.cellLast
                )}
              >
                <span
                  className={barChartHorizontalStyles.bar}
                  style={{
                    width: `${percent}%`,
                    background: getHorizontalBarColor(index),
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <BarChartHorizontalLegend data={data} percents={percents} />
    </div>
  );
}
