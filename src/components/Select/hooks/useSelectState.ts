import { useCallback } from "react";
import { useControllableState, useOpenState } from "@/shared/hooks";
import type { SelectOptionValue } from "@/shared/Select";
import type { SelectProps } from "../types";

export type UseSelectStateProps<T extends SelectOptionValue = string> = Pick<
  SelectProps<T>,
  | "value"
  | "defaultValue"
  | "onValueChange"
  | "onClear"
  | "open"
  | "defaultOpen"
  | "onOpenChange"
>;

export function useSelectState<T extends SelectOptionValue = string>(
  props: UseSelectStateProps<T>
) {
  const {
    value: controlledValue,
    defaultValue,
    onValueChange,
    onClear,
    open: controlledOpen,
    defaultOpen = false,
    onOpenChange,
  } = props;
  const isValueControlled = Object.prototype.hasOwnProperty.call(
    props,
    "value"
  );

  const [value, setValue] = useControllableState<T | null>({
    value: controlledValue ?? null,
    defaultValue: defaultValue ?? null,
    onChange: onValueChange,
    isControlled: isValueControlled,
  });

  const { open, setOpen } = useOpenState({
    open: controlledOpen,
    defaultOpen,
    onOpenChange,
  });

  const onSelect = useCallback(
    (val: T) => {
      setValue(val);
      setOpen(false);
    },
    [setValue, setOpen]
  );

  const handleClear = useCallback(() => {
    if (onClear) {
      onClear();
    } else {
      setValue(null);
    }
  }, [onClear, setValue]);

  return { value, open, setOpen, onSelect, handleClear };
}
