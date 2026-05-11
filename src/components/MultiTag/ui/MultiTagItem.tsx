import { BaseItem } from "@/shared/Select";
import type { MultiTagOption } from "../types";

type MultiTagItemProps<T extends string | number = string> = {
  option: MultiTagOption<T>;
  selected: boolean;
  onToggle: (value: T) => void;
  className?: string;
};

export function MultiTagItem<T extends string | number = string>({
  option,
  selected,
  onToggle,
  className,
}: MultiTagItemProps<T>) {
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
      {option.label}
    </BaseItem>
  );
}
