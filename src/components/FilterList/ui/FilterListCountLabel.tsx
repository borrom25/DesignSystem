import { Counter } from "@/components/Counter";
import { Size } from "@/types";
import { filterListStyles } from "../styles";
import { FilterListCountLabelProps } from "../FilterList.types.ts";

export function FilterListCountLabel({
  label,
  count,
}: FilterListCountLabelProps) {
  return (
    <span className={filterListStyles.label}>
      <span className={filterListStyles.labelText}>{label}</span>
      <Counter count={count} size={Size.Xs} />
    </span>
  );
}
