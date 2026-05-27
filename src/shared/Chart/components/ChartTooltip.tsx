import { Tooltip, TooltipProps } from "recharts";
import { chartStyles } from "../styles";
import { tooltipHoverStyle } from "../consts";

export const ChartTooltip = ({ cursor, ...props }: TooltipProps) => {
  return (
    <Tooltip
      {...props}
      cursor={cursor ?? tooltipHoverStyle}
      content={({ payload }) => (
        <div className={chartStyles.tooltip}>
          {payload.map((item) => (
            <div key={item.id} className={chartStyles.tooltipItem}>
              {payload.length > 1 && (
                <div
                  className={chartStyles.tooltipIcon}
                  style={{ backgroundColor: item.color }}
                />
              )}
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      )}
    />
  );
};
