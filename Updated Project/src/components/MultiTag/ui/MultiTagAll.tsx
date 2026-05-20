import { Size } from "@/types";
import { ListItem } from "@/components/ListItem";
import { selectAllClasses, selectAllDividerClasses } from "../styles";

export type MultiTagAllProps = {
  label: string;
  checked: boolean;
  indeterminate: boolean;
  onToggle: () => void;
};

export function MultiTagAll({
  label,
  checked,
  indeterminate,
  onToggle,
}: MultiTagAllProps) {
  return (
    <div>
      <ListItem
        size={Size.Xs}
        checkbox
        selected={checked || indeterminate}
        hideSelectedOutline
        className={selectAllClasses}
        onClick={onToggle}
      >
        {label}
      </ListItem>
      <div className={selectAllDividerClasses} />
    </div>
  );
}
