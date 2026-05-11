import type { ReactNode } from "react";
import { BaseItem } from "@/shared/Select";
import type { MultiSelectOption } from "../MultiSelect.types.ts";

type MultiSelectItemProps<T extends string | number = string> = {
  option: MultiSelectOption<T>;
  selected: boolean;
  onToggle: (value: T) => void;
  className?: string;
  children?: ReactNode;
};

export function MultiSelectItem<T extends string | number = string>({
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
