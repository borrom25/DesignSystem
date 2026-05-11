import { useMemo } from "react";

export type UseSelectionStateProps<T extends string | number = string> = {
  selectableValues: T[];
  valueSet: Set<T>;
};

export type UseSelectionStateReturn = {
  allSelected: boolean;
  someSelected: boolean;
};

export function useSelectionState<T extends string | number = string>({
  selectableValues,
  valueSet,
}: UseSelectionStateProps<T>): UseSelectionStateReturn {
  const allSelected = useMemo(
    () =>
      selectableValues.length > 0 &&
      selectableValues.every((v) => valueSet.has(v)),
    [selectableValues, valueSet]
  );

  const someSelected = useMemo(
    () => !allSelected && selectableValues.some((v) => valueSet.has(v)),
    [allSelected, selectableValues, valueSet]
  );

  return { allSelected, someSelected };
}
