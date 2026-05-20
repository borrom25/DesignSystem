import { useState, useMemo, useEffect, useCallback } from "react";
import type { MultiTagOption } from "../types";
import type { UseMultiTagStateProps } from "../types/hooks";

export function useMultiTagState<T extends string | number = string>({
  value: controlledValue,
  defaultValue,
  onChange,
  onClear,
  options = [],
  returnAll = false,
}: UseMultiTagStateProps<T>) {
  const [internalValue, setInternalValue] = useState<T[]>(defaultValue ?? []);
  const [open, setOpen] = useState(false);
  const [selectAllActive, setSelectAllActive] = useState(false);

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? (controlledValue as T[]) : internalValue;
  const isFilled = value.length > 0;

  const selectableOptions = useMemo(
    () => options.filter((opt) => !opt.disabled),
    [options]
  );

  const handleValueChange = useCallback(
    (newValue: T[], isSelectAllAction = false) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }

      if (returnAll && isSelectAllAction && newValue.length > 0) {
        (onChange as ((value: T[] | "all") => void) | undefined)?.("all");
      } else {
        onChange?.(newValue);
      }
    },
    [isControlled, onChange, returnAll]
  );

  useEffect(() => {
    if (!selectAllActive) return;

    const allValues = selectableOptions.map((opt) => opt.value);
    const hasNewOptions = allValues.some((val) => !value.includes(val));

    if (hasNewOptions) {
      handleValueChange(allValues);
    }
  }, [selectableOptions, selectAllActive, value, handleValueChange]);

  const handleToggle = useCallback(
    (optionValue: T) => {
      const isCurrentlySelected = value.includes(optionValue);

      if (isCurrentlySelected && selectAllActive) {
        setSelectAllActive(false);
      }

      const next = isCurrentlySelected
        ? value.filter((v) => v !== optionValue)
        : [...value, optionValue];

      handleValueChange(next);
    },
    [value, selectAllActive, handleValueChange]
  );

  const handleRemove = useCallback(
    (optionValue: T) => {
      if (selectAllActive) {
        setSelectAllActive(false);
      }

      const next = value.filter((v) => v !== optionValue);
      handleValueChange(next);
    },
    [value, selectAllActive, handleValueChange]
  );

  const allSelected = useMemo(
    () =>
      selectableOptions.length > 0 &&
      selectableOptions.every((opt) => value.includes(opt.value)),
    [selectableOptions, value]
  );

  const someSelected = useMemo(
    () =>
      !allSelected &&
      selectableOptions.some((opt) => value.includes(opt.value)),
    [allSelected, selectableOptions, value]
  );

  const handleSelectAll = useCallback(() => {
    if (allSelected || selectAllActive) {
      setSelectAllActive(false);
      handleValueChange([], true);
    } else {
      setSelectAllActive(true);
      const allValues = selectableOptions.map((opt) => opt.value);
      handleValueChange(allValues, true);
    }
  }, [allSelected, selectAllActive, selectableOptions, handleValueChange]);

  const selectedOptions = useMemo<MultiTagOption<T>[]>(
    () => options.filter((opt) => value.includes(opt.value)),
    [options, value]
  );

  const handleClear = useCallback(() => {
    setSelectAllActive(false);

    if (onClear) {
      onClear();
    } else {
      handleValueChange([]);
    }
  }, [handleValueChange, onClear]);

  return {
    value,
    open,
    setOpen,
    isFilled,
    handleToggle,
    handleRemove,
    handleSelectAll,
    handleClear,
    allSelected,
    someSelected,
    selectedOptions,
  };
}
