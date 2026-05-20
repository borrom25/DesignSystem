import { useState, useCallback, useMemo } from "react";
import type { ColumnFiltersState, OnChangeFn } from "@tanstack/react-table";
import type {
  FilterSchema,
  DataTableFiltersState,
} from "../types/DataTable.filter.types";
import {
  isEmptyFilterValue,
  valuesToColumnFiltersState,
  columnFiltersStateToValues,
  getDataTableFilterDefaultValues,
} from "../utils/columnFiltersMapping";

export interface UseDataTableFiltersOptions<TSchema extends FilterSchema> {
  defaultValues?: TSchema;
  columns?: Parameters<typeof getDataTableFilterDefaultValues>[0];
  onChange?: (values: TSchema) => void;
}

export interface UseDataTableFiltersReturn<
  TSchema extends FilterSchema,
> extends DataTableFiltersState<TSchema> {
  columnFiltersState: ColumnFiltersState;
  onColumnFiltersChange: OnChangeFn<ColumnFiltersState>;
}

export function useDataTableFilters<TSchema extends FilterSchema>(
  options: UseDataTableFiltersOptions<TSchema>
): UseDataTableFiltersReturn<TSchema> {
  const { columns, defaultValues: controlledDefaultValues, onChange } = options;

  const defaultValues = useMemo(
    () =>
      (controlledDefaultValues ??
        getDataTableFilterDefaultValues(columns)) as TSchema,
    [columns, controlledDefaultValues]
  );

  const [values, setValues] = useState<TSchema>(defaultValues);

  const setValue = useCallback(
    <K extends keyof TSchema>(id: K, value: TSchema[K]) => {
      setValues((prev) => {
        const next = { ...prev, [id]: value };
        onChange?.(next);
        return next;
      });
    },
    [onChange]
  );

  const getValue = useCallback(
    <K extends keyof TSchema>(id: K): TSchema[K] => values[id],
    [values]
  );

  const clearValue = useCallback(
    (id: keyof TSchema) => {
      setValues((prev) => {
        const next = { ...prev, [id]: defaultValues[id] };
        onChange?.(next);
        return next;
      });
    },
    [defaultValues, onChange]
  );

  const clearAll = useCallback(() => {
    setValues(defaultValues);
    onChange?.(defaultValues);
  }, [defaultValues, onChange]);

  const hasValue = useCallback(
    (id: keyof TSchema): boolean => !isEmptyFilterValue(values[id]),
    [values]
  );

  const activeCount = useMemo(
    () => Object.values(values).filter((v) => !isEmptyFilterValue(v)).length,
    [values]
  );

  const columnFiltersState = useMemo(
    () => valuesToColumnFiltersState(values),
    [values]
  );

  const onColumnFiltersChange: OnChangeFn<ColumnFiltersState> = useCallback(
    (updaterOrValue) => {
      setValues((prev) => {
        const prevColumnFilters = valuesToColumnFiltersState(prev);
        const nextColumnFilters =
          typeof updaterOrValue === "function"
            ? updaterOrValue(prevColumnFilters)
            : updaterOrValue;
        const next = columnFiltersStateToValues(
          nextColumnFilters,
          defaultValues
        );
        onChange?.(next);
        return next;
      });
    },
    [defaultValues, onChange]
  );

  return {
    values,
    setValue,
    getValue,
    clearValue,
    clearAll,
    hasValue,
    activeCount,
    columnFiltersState,
    onColumnFiltersChange,
  };
}
