import { useState, useCallback, useMemo, useEffect } from "react";
import type { ColumnFiltersState, OnChangeFn } from "@tanstack/react-table";
import type {
  FilterSchema,
  DataTableFiltersState,
  DataTableScopedStateOptions,
} from "../types/DataTable.filter.types";
import {
  isEmptyFilterValue,
  valuesToColumnFiltersState,
  columnFiltersStateToValues,
  getDataTableFilterDefaultValues,
} from "../utils/columnFiltersMapping";

const DEFAULT_SCOPE_KEY = "__default__";

type ScopedFilterState<TSchema extends FilterSchema> = Record<string, TSchema>;

function getActiveScopeKey(scopeKey?: string): string {
  return scopeKey || DEFAULT_SCOPE_KEY;
}

function getScopedValues<TSchema extends FilterSchema>(
  valuesByScope: ScopedFilterState<TSchema>,
  scopeKey: string,
  defaultValues: TSchema
): TSchema {
  return valuesByScope[scopeKey] ?? defaultValues;
}

function syncFilterSchemaWithDefaults<TSchema extends FilterSchema>(
  values: TSchema | undefined,
  defaultValues: TSchema
): TSchema {
  const nextValues = { ...defaultValues } as TSchema;

  if (!values) {
    return nextValues;
  }

  for (const key of Object.keys(defaultValues) as Array<keyof TSchema>) {
    if (key in values) {
      nextValues[key] = values[key];
    }
  }

  return nextValues;
}

function areFilterSchemasEqual<TSchema extends FilterSchema>(
  left: TSchema,
  right: TSchema
): boolean {
  const leftKeys = Object.keys(left);
  const rightKeys = Object.keys(right);

  if (leftKeys.length !== rightKeys.length) {
    return false;
  }

  return leftKeys.every(
    (key) =>
      (left as Record<string, unknown>)[key] ===
      (right as Record<string, unknown>)[key]
  );
}

export interface UseDataTableFiltersOptions<
  TSchema extends FilterSchema,
> extends DataTableScopedStateOptions {
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
  const {
    columns,
    defaultValues: controlledDefaultValues,
    onChange,
    scopeKey,
  } = options;
  const activeScopeKey = getActiveScopeKey(scopeKey);

  const defaultValues = useMemo(
    () =>
      (controlledDefaultValues ??
        getDataTableFilterDefaultValues(columns)) as TSchema,
    [columns, controlledDefaultValues]
  );

  const [valuesByScope, setValuesByScope] = useState<
    ScopedFilterState<TSchema>
  >(() => ({
    [activeScopeKey]: defaultValues,
  }));

  useEffect(() => {
    setValuesByScope((prev) => {
      const nextScopeValues = syncFilterSchemaWithDefaults(
        prev[activeScopeKey],
        defaultValues
      );

      if (
        prev[activeScopeKey] &&
        areFilterSchemasEqual(prev[activeScopeKey], nextScopeValues)
      ) {
        return prev;
      }

      return {
        ...prev,
        [activeScopeKey]: nextScopeValues,
      };
    });
  }, [activeScopeKey, defaultValues]);

  const values = useMemo(
    () => getScopedValues(valuesByScope, activeScopeKey, defaultValues),
    [activeScopeKey, defaultValues, valuesByScope]
  );

  const setValue = useCallback(
    <K extends keyof TSchema>(id: K, value: TSchema[K]) => {
      setValuesByScope((prev) => {
        const currentValues = getScopedValues(
          prev,
          activeScopeKey,
          defaultValues
        );
        const next = { ...currentValues, [id]: value };
        onChange?.(next);
        return {
          ...prev,
          [activeScopeKey]: next,
        };
      });
    },
    [activeScopeKey, defaultValues, onChange]
  );

  const getValue = useCallback(
    <K extends keyof TSchema>(id: K): TSchema[K] => values[id],
    [values]
  );

  const clearValue = useCallback(
    (id: keyof TSchema) => {
      setValuesByScope((prev) => {
        const currentValues = getScopedValues(
          prev,
          activeScopeKey,
          defaultValues
        );
        const next = { ...currentValues, [id]: defaultValues[id] };
        onChange?.(next);
        return {
          ...prev,
          [activeScopeKey]: next,
        };
      });
    },
    [activeScopeKey, defaultValues, onChange]
  );

  const clearAll = useCallback(() => {
    setValuesByScope((prev) => ({
      ...prev,
      [activeScopeKey]: defaultValues,
    }));
    onChange?.(defaultValues);
  }, [activeScopeKey, defaultValues, onChange]);

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
      setValuesByScope((prev) => {
        const currentValues = getScopedValues(
          prev,
          activeScopeKey,
          defaultValues
        );
        const prevColumnFilters = valuesToColumnFiltersState(currentValues);
        const nextColumnFilters =
          typeof updaterOrValue === "function"
            ? updaterOrValue(prevColumnFilters)
            : updaterOrValue;
        const next = columnFiltersStateToValues(
          nextColumnFilters,
          defaultValues
        );
        onChange?.(next);
        return {
          ...prev,
          [activeScopeKey]: next,
        };
      });
    },
    [activeScopeKey, defaultValues, onChange]
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
