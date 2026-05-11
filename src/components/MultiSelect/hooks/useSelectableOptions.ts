import { useMemo } from "react";
import type { MultiSelectOption } from "../MultiSelect.types.ts";

export type UseSelectableOptionsProps<T extends string | number = string> = {
  options: MultiSelectOption<T>[];
  value: T[];
};

export type UseSelectableOptionsReturn<T extends string | number = string> = {
  selectableValues: T[];
  valueSet: Set<T>;
  selectedOptions: MultiSelectOption<T>[];
};

export function useSelectableOptions<T extends string | number = string>({
  options,
  value,
}: UseSelectableOptionsProps<T>): UseSelectableOptionsReturn<T> {
  const selectableValues = useMemo(
    () => options.filter((opt) => !opt.disabled).map((opt) => opt.value),
    [options]
  );

  const valueSet = useMemo(() => new Set(value), [value]);

  const selectedOptions = useMemo(
    () => options.filter((opt) => valueSet.has(opt.value)),
    [options, valueSet]
  );

  return { selectableValues, valueSet, selectedOptions };
}
