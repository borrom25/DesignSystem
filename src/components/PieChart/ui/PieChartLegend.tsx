import { PieChartData } from "@components/PieChart/PieChart.types.ts";
import { CheckBox } from "@/components";
import { Size } from "@/types";
import { getBarColor } from "@/shared/Chart";
import { pieChartStyles } from "../styles";

export interface PieChartLegendProps {
  data: PieChartData[];
  setHiddenKeys: (value: string[] | ((prev: string[]) => string[])) => void;
  hiddenKeys: string[];
  hasInteractiveLegend: boolean;
}

export const PieChartLegend = ({
  data,
  hiddenKeys,
  setHiddenKeys,
  hasInteractiveLegend,
}: PieChartLegendProps) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className={pieChartStyles.legend}>
      {data.map(({ name, value, caption }, i) => {
        const percent = total === 0 ? 0 : Math.round((value / total) * 100);
        const isChecked = !hiddenKeys.includes(name);
        const isDisabled = isChecked && hiddenKeys.length === data.length - 1;

        return (
          <div key={name} className={pieChartStyles.legendItem}>
            {hasInteractiveLegend ? (
              <CheckBox
                style={{
                  border: "none",
                  background: isChecked ? getBarColor(i) : "",
                }}
                size={Size.Xs}
                checked={isChecked}
                disabled={isDisabled}
                onChange={() =>
                  setHiddenKeys((prev) =>
                    prev.includes(name)
                      ? prev.filter((n) => n !== name)
                      : [...prev, name]
                  )
                }
              />
            ) : (
              <span
                className={pieChartStyles.legendIcon}
                style={{ background: getBarColor(i) }}
              />
            )}
            <div className={pieChartStyles.legendText}>
              <p className={pieChartStyles.legendLabel}>
                {name}: {value}
              </p>
              {caption && (
                <div className={pieChartStyles.legendLabel}>
                  {caption(percent)}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
