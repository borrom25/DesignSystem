import { Tooltip, TooltipProps } from "recharts";
import { chartStyles } from "../styles";
import { tooltipHoverStyle } from "../consts";

export const ChartTooltip = ({ ...props }: TooltipProps) => {
  return (
    <Tooltip
      {...props}
      cursor={tooltipHoverStyle}
      content={({ payload }) => (
        <div className={chartStyles.tooltip}>
          {payload.map((item) => (
            <div key={item.id} className={chartStyles.tooltipItem}>
              <div
                className={chartStyles.tooltipIcon}
                style={{ backgroundColor: item.color }}
              />
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      )}
    />
  );
};
