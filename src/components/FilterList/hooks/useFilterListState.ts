import { useCallback, useMemo } from "react";
import { FilterListGroup, FilterListProps } from "../FilterList.types.ts";

const EMPTY_GROUPS: FilterListGroup<never>[] = [];

type UseFilterListState<T = string> = Pick<
  FilterListProps<T>,
  "groups" | "options" | "value" | "onChange"
>;

export const useFilterListState = <T>({
  options,
  value,
  groups,
  onChange,
}: UseFilterListState<T>) => {
  const valueSet = useMemo(() => new Set(value), [value]);
  const groupItems = (groups ?? EMPTY_GROUPS) as FilterListGroup<T>[];
  const hasGroups = groupItems.length > 0;
  const hasContent = Boolean(
    (hasGroups ? groupItems.length : options?.length) ?? 0
  );

  const allOptions = useMemo(() => {
    if (hasGroups) {
      return groupItems.flatMap((group) => group.options);
    }
    return options ?? [];
  }, [groupItems, hasGroups, options]);

  const enabledOptions = useMemo(
    () => allOptions.filter((opt) => !opt.disabled),
    [allOptions]
  );

  const allSelected =
    enabledOptions.length > 0 &&
    enabledOptions.every((opt) => valueSet.has(opt.value));

  const someSelected = enabledOptions.some((opt) => valueSet.has(opt.value));

  const handleToggle = useCallback(
    (optionValue: T) => {
      const isSelected = valueSet.has(optionValue);
      if (isSelected) {
        onChange(value.filter((v) => v !== optionValue));
      } else {
        onChange([...value, optionValue]);
      }
    },
    [value, valueSet, onChange]
  );

  const handleSelectAll = useCallback(() => {
    if (allSelected) {
      const enabledValues = new Set(enabledOptions.map((opt) => opt.value));
      onChange(value.filter((v) => !enabledValues.has(v)));
    } else {
      const newValues = new Set(value);
      enabledOptions.forEach((opt) => newValues.add(opt.value));
      onChange(Array.from(newValues));
    }
  }, [allSelected, enabledOptions, value, onChange]);

  return {
    valueSet,
    hasContent,
    someSelected,
    allSelected,
    handleToggle,
    handleSelectAll,
    groupItems,
    allOptions,
    hasGroups,
  };
};
