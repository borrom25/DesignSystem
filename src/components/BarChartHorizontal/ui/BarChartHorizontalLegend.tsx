import { getBarColor } from "@/shared/Chart";
import { Legend } from "recharts";
import { BarChartHorizontalProps } from "@/components";
import { barChartHorizontalStyles } from "../styles";

type BarChartHorizontalLegendProps = Omit<BarChartHorizontalProps, "title">;

export const BarChartHorizontalLegend = ({
  data,
}: BarChartHorizontalLegendProps) => {
  return (
    <Legend
      verticalAlign="bottom"
      height={36}
      content={() => (
        <div className={barChartHorizontalStyles.legend}>
          {data.map((item, index) => (
            <div
              key={item.name}
              className={barChartHorizontalStyles.legendItem}
            >
              <span
                className={barChartHorizontalStyles.legendIcon}
                style={{ backgroundColor: getBarColor(index) }}
              />
              <span className={barChartHorizontalStyles.legendLabel}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      )}
    />
  );
};
