import { memo } from "react";
import { BarChartHorizontalData } from "../BarChartHorizontal.types.ts";
import { getHorizontalLegendColor } from "../styles/colors.ts";
import { barChartHorizontalStyles } from "../styles";

type BarChartHorizontalLegendProps = {
  data: BarChartHorizontalData[];
  percents: number[];
};

export const BarChartHorizontalLegend = memo(function BarChartHorizontalLegend({
  data,
  percents,
}: BarChartHorizontalLegendProps) {
  return (
    <div className={barChartHorizontalStyles.legend}>
      {data.map((item, index) => (
        <div
          key={`${item.name}-${index}`}
          className={barChartHorizontalStyles.legendItem}
        >
          <div className={barChartHorizontalStyles.legendRow}>
            <span
              className={barChartHorizontalStyles.legendIcon}
              style={{ background: getHorizontalLegendColor(index) }}
            />
            <p className={barChartHorizontalStyles.legendLabel}>{item.name}</p>
          </div>
          <div className={barChartHorizontalStyles.legendDetails}>
            {item.value > 0 && <span>Ответов: {item.value}</span>}
            <span>{percents[index]}%</span>
          </div>
        </div>
      ))}
    </div>
  );
});
