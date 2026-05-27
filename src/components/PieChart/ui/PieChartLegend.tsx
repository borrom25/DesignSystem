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
  return (
    <div className={pieChartStyles.legend}>
      {hasInteractiveLegend
        ? data.map(({ name }, i) => {
            const isChecked = !hiddenKeys.includes(name);
            const isDisabled =
              isChecked && hiddenKeys.length === data.length - 1;

            return (
              <CheckBox
                key={name}
                style={{
                  border: "none",
                  background: isChecked ? getBarColor(i) : "",
                }}
                size={Size.Xs}
                checked={!hiddenKeys.includes(name)}
                disabled={isDisabled}
                onChange={() =>
                  setHiddenKeys((prev) =>
                    prev.includes(name)
                      ? prev.filter((n) => n !== name)
                      : [...prev, name]
                  )
                }
                title={name}
              />
            );
          })
        : data.map(({ name }, i) => (
            <div key={name} className={pieChartStyles.legendItem}>
              <label
                className={pieChartStyles.legendIcon}
                style={{
                  background: getBarColor(i),
                }}
              />
              <span className={pieChartStyles.legendLabel}>{name}</span>
            </div>
          ))}
    </div>
  );
};
