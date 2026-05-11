import { Size } from "@/types";
import { ListItem } from "@/components/ListItem";
import { multiSelectStyles } from "../styles";
import { MultiSelectAllProps } from "../MultiSelect.types.ts";

export function MultiSelectAll({
  label,
  checked,
  onToggle,
}: MultiSelectAllProps) {
  return (
    <div>
      <ListItem
        size={Size.Xs}
        checkbox
        selected={checked}
        hideSelectedOutline
        className={multiSelectStyles.selectAll.root}
        onClick={onToggle}
      >
        {label}
      </ListItem>
      <div className={multiSelectStyles.selectAll.divider} />
    </div>
  );
}
