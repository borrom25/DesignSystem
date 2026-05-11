import { useCallback, useMemo, useState } from "react";
import type {
  TabsOverflowItem,
  TabsOverflowProps,
} from "../TabsOverflow.types";

type UseTabsOverflowStateProps<T extends string | number> = Pick<
  TabsOverflowProps<T>,
  "value" | "defaultValue" | "onValueChange" | "disabled"
> & {
  items: TabsOverflowItem<T>[];
};

export function useTabsOverflowState<T extends string | number>({
  items,
  value: controlledValue,
  defaultValue,
  onValueChange,
  disabled = false,
}: UseTabsOverflowStateProps<T>) {
  const [internalValue, setInternalValue] = useState<T | undefined>(
    defaultValue
  );
  const [open, setOpen] = useState(false);

  const isValueControlled = controlledValue !== undefined;
  const value: T | undefined = isValueControlled
    ? controlledValue
    : internalValue;

  const hiddenSelected = useCallback(
    (hiddenItems: TabsOverflowItem<T>[]) =>
      hiddenItems.some((item) => item.value === value),
    [value]
  );

  const itemsMap = useMemo(
    () => new Map(items.map((item) => [item.value, item])),
    [items]
  );

  const onSelect = useCallback(
    (nextValue: T) => {
      const item = itemsMap.get(nextValue);

      if (disabled || item?.disabled) {
        return;
      }

      if (!isValueControlled) {
        setInternalValue(nextValue);
      }

      onValueChange?.(nextValue);
      setOpen(false);
    },
    [disabled, isValueControlled, itemsMap, onValueChange]
  );

  return {
    open,
    setOpen,
    value,
    onSelect,
    hasSelectedHiddenItem: hiddenSelected,
  };
}
