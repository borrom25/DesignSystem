import { useCallback } from "react";
import { Size } from "@/types";
import { BaseItem } from "@/shared/Select";
import { useSelectContext } from "../Select.context";
import type { SelectItemProps } from "../types";

export function SelectItem<T extends string | number = string>({
  value,
  disabled = false,
  className,
  children,
  icon,
}: SelectItemProps<T>) {
  const { value: selectedValue, onSelect, size } = useSelectContext();
  const handleClick = useCallback(() => {
    if (!disabled) {
      onSelect(value);
    }
  }, [disabled, onSelect, value]);

  return (
    <BaseItem
      size={size ?? Size.Xs}
      selected={selectedValue === value}
      disabled={disabled}
      onClick={handleClick}
      className={className}
      iconLeft={icon}
    >
      {children}
    </BaseItem>
  );
}
