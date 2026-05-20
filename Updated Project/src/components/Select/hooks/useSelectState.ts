import { useCallback } from "react";
import { useControllableState, useOpenState } from "@/shared/hooks";
import type { SelectProps } from "../types";

export type UseSelectStateProps<T extends string | number = string> = Pick<
  SelectProps<T>,
  | "value"
  | "defaultValue"
  | "onValueChange"
  | "onClear"
  | "open"
  | "defaultOpen"
  | "onOpenChange"
>;

export function useSelectState<T extends string | number = string>({
  value: controlledValue,
  defaultValue,
  onValueChange,
  onClear,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
}: UseSelectStateProps<T>) {
  const [value, setValue] = useControllableState({
    value: controlledValue,
    defaultValue,
    onChange: onValueChange,
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
      setValue(undefined);
    }
  }, [onClear, setValue]);

  return { value, open, setOpen, onSelect, handleClear };
}
