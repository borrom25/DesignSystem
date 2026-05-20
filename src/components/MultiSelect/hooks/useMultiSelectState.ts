import { useCallback } from "react";
import { useControllableState, useOpenState } from "@/shared/hooks";
import { useSelectableOptions } from "./useSelectableOptions";
import { useSelectionState } from "./useSelectionState";
import { useSelectAllHandler } from "./useSelectAllHandler";
import type {
  MultiSelectOptionValue,
  UseMultiSelectStateProps,
} from "../MultiSelect.types.ts";

export function useMultiSelectState<
  T extends MultiSelectOptionValue = MultiSelectOptionValue,
>({
  value: controlledValue,
  defaultValue = [],
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  onValueChange,
  onClear,
  options = [],
  selectableOptions,
  returnAll = false,
}: UseMultiSelectStateProps<T>) {
  const [value, setValue, isControlled] = useControllableState<T[]>({
    value: controlledValue,
    defaultValue,
    onChange: undefined,
  });

  const { open, setOpen } = useOpenState({
    open: controlledOpen,
    defaultOpen,
    onOpenChange,
  });

  const { selectableValues, valueSet, selectedOptions } = useSelectableOptions({
    options,
    selectableOptions,
    value,
  });

  const { allSelected, someSelected } = useSelectionState({
    selectableValues,
    valueSet,
  });

  const emitChange = useCallback(
    (newValue: T[], isSelectAll = false) => {
      if (!isControlled) setValue(newValue);

      if (returnAll && isSelectAll && newValue.length > 0) {
        (onValueChange as ((v: T[] | "all") => void) | undefined)?.("all");
      } else {
        onValueChange?.(newValue);
      }
    },
    [isControlled, onValueChange, returnAll, setValue]
  );

  const { handleSelectAll, selectAllActiveRef } = useSelectAllHandler({
    value,
    selectableValues,
    valueSet,
    allSelected,
    open,
    emitChange,
  });

  const handleToggle = useCallback(
    (optionValue: T) => {
      const isSelected = valueSet.has(optionValue);
      if (isSelected) selectAllActiveRef.current = false;

      const next = isSelected
        ? value.filter((v) => v !== optionValue)
        : [...value, optionValue];
      emitChange(next);
    },
    [emitChange, selectAllActiveRef, value, valueSet]
  );

  const handleClear = useCallback(() => {
    selectAllActiveRef.current = false;
    if (onClear) onClear();
    else emitChange([]);
  }, [emitChange, onClear, selectAllActiveRef]);

  return {
    value,
    open,
    setOpen,
    isFilled: value.length > 0,
    handleToggle,
    handleSelectAll,
    handleClear,
    allSelected,
    someSelected,
    selectedOptions,
  };
}
