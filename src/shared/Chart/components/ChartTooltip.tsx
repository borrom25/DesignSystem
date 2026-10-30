import type { CSSProperties } from "react";
import { Tooltip, TooltipProps } from "recharts";
import { chartStyles } from "../styles";
import { tooltipHoverStyle } from "../consts";

type ChartTooltipProps = TooltipProps & {
  contentStyle?: CSSProperties;
};

export const ChartTooltip = ({
  cursor,
  contentStyle,
  ...props
}: ChartTooltipProps) => {
  return (
    <Tooltip
      {...props}
      cursor={cursor ?? tooltipHoverStyle}
      content={({ payload }) => (
        <div
          className={chartStyles.tooltip}
          style={{
            backgroundColor: "var(--background-basic-generic)",
            ...contentStyle,
          }}
        >
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
