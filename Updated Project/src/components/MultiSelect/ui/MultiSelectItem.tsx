import { BaseItem } from "@/shared/Select";
import type {
  MultiSelectItemProps,
  MultiSelectOptionValue,
} from "../MultiSelect.types.ts";

export function MultiSelectItem<
  T extends MultiSelectOptionValue = MultiSelectOptionValue,
>({
  option,
  selected,
  onToggle,
  className,
  children,
}: MultiSelectItemProps<T>) {
  return (
    <BaseItem
      checkbox
      selected={selected}
      disabled={option.disabled}
      onClick={() => !option.disabled && onToggle(option.value)}
      className={className}
      iconRight={option.icon}
      hideSelectedOutline
      visualSelected={false}
    >
      {children ?? option.label}
    </BaseItem>
  );
}
