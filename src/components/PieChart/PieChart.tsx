import { Cell, Pie, PieChart as PieChartComponent, Sector } from "recharts";
import { PieChartDonutProps, PieChartProps } from "./PieChart.types.ts";
import { ChartTooltip } from "@/shared/Chart";
import { PieChartLegend } from "./ui";
import { usePieChartState } from "./hooks";
import { pieChartStyles } from "./styles";

export const PieChart = ({
  data,
  type,
  hasInteractiveLegend = false,
  ...props
}: PieChartProps) => {
  const {
    visibleData,
    isAnimationActive,
    onAnimationEnd,
    setHiddenKeys,
    hiddenKeys,
    innerRadius,
    getCellFill,
  } = usePieChartState({ data, type });
  const { title, subtitle } = props as PieChartDonutProps;

  return (
    <div className={pieChartStyles.base}>
      <div className={pieChartStyles.container}>
        <PieChartComponent width={250} height={250} responsive>
          <Pie
            data={visibleData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            innerRadius={innerRadius}
            cornerRadius={4}
            stroke="none"
            animationDuration={650}
            isAnimationActive={isAnimationActive}
            onAnimationEnd={onAnimationEnd}
            activeShape={({ outerRadius, ...rest }) => (
              <Sector {...rest} outerRadius={outerRadius + 8} />
            )}
          >
            <ChartTooltip />
            {visibleData.map(({ name }, i) => (
              <Cell key={i} fill={getCellFill(name)} />
            ))}
          </Pie>
        </PieChartComponent>
        {(title || subtitle) && (
          <div className={pieChartStyles.textContainer}>
            {title && <h3 className={pieChartStyles.title}>{title}</h3>}
            {subtitle && (
              <span className={pieChartStyles.subtitle}>{subtitle}</span>
            )}
          </div>
        )}
      </div>
      <PieChartLegend
        data={data}
        setHiddenKeys={setHiddenKeys}
        hiddenKeys={hiddenKeys}
        hasInteractiveLegend={hasInteractiveLegend}
      />
    </div>
  );
};
