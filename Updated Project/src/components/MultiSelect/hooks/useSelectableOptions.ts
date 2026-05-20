import { useMemo } from "react";
import type {
  MultiSelectOption,
  MultiSelectOptionValue,
} from "../MultiSelect.types.ts";

export type UseSelectableOptionsProps<
  T extends MultiSelectOptionValue = MultiSelectOptionValue,
> = {
  options: MultiSelectOption<T>[];
  selectableOptions?: MultiSelectOption<T>[];
  value: T[];
};

export type UseSelectableOptionsReturn<
  T extends MultiSelectOptionValue = MultiSelectOptionValue,
> = {
  selectableValues: T[];
  valueSet: Set<T>;
  selectedOptions: MultiSelectOption<T>[];
};

export function useSelectableOptions<
  T extends MultiSelectOptionValue = MultiSelectOptionValue,
>({
  options,
  selectableOptions = options,
  value,
}: UseSelectableOptionsProps<T>): UseSelectableOptionsReturn<T> {
  const selectableValues = useMemo(
    () =>
      selectableOptions.filter((opt) => !opt.disabled).map((opt) => opt.value),
    [selectableOptions]
  );

  const valueSet = useMemo(() => new Set(value), [value]);

  const selectedOptions = useMemo(
    () => options.filter((opt) => valueSet.has(opt.value)),
    [options, valueSet]
  );

  return { selectableValues, valueSet, selectedOptions };
}
