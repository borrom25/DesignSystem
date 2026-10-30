import { useCallback, useMemo, useState } from "react";
import type { DataTableToolbarProps } from "../types";
import type { FilterSchema } from "../types/DataTable.filter.types";
import {
  useDataTableFilters,
  type UseDataTableFiltersOptions,
  type UseDataTableFiltersReturn,
} from "./useDataTableFilters";

const DEFAULT_SCOPE_KEY = "__default__";

function getActiveScopeKey(scopeKey?: string): string {
  return scopeKey || DEFAULT_SCOPE_KEY;
}

export interface UseDataTableControllerOptions<
  TSchema extends FilterSchema = FilterSchema,
> extends UseDataTableFiltersOptions<TSchema> {
  searchValue?: string;
  defaultSearchValue?: string;
  onSearchChange?: (value: string) => void;
  toolbarProps?: Omit<DataTableToolbarProps, "searchValue" | "onSearchChange">;
}

export interface UseDataTableControllerReturn<
  TSchema extends FilterSchema = FilterSchema,
> {
  filters: UseDataTableFiltersReturn<TSchema>;
  searchValue: string;
  setSearchValue: (value: string) => void;
  clearAll: () => void;
  toolbarProps: Omit<DataTableToolbarProps, "rowCount">;
}

export function useDataTableController<TSchema extends FilterSchema>(
  options: UseDataTableControllerOptions<TSchema>
): UseDataTableControllerReturn<TSchema> {
  const {
    columns,
    defaultValues,
    onChange,
    scopeKey,
    searchValue: controlledSearchValue,
    defaultSearchValue = "",
    onSearchChange,
    toolbarProps: toolbarOverrides,
  } = options;
  const activeScopeKey = getActiveScopeKey(scopeKey);

  const filters = useDataTableFilters({
    columns,
    defaultValues,
    onChange,
    scopeKey,
  });

  const [internalSearchValuesByScope, setInternalSearchValuesByScope] =
    useState<Record<string, string>>(() => ({
      [activeScopeKey]: defaultSearchValue,
    }));

  const searchValue =
    controlledSearchValue ??
    internalSearchValuesByScope[activeScopeKey] ??
    defaultSearchValue;

  const setSearchValue = useCallback(
    (value: string) => {
      if (controlledSearchValue === undefined) {
        setInternalSearchValuesByScope((prev) => ({
          ...prev,
          [activeScopeKey]: value,
        }));
      }

      onSearchChange?.(value);
    },
    [activeScopeKey, controlledSearchValue, onSearchChange]
  );

  const clearAll = useCallback(() => {
    filters.clearAll();
    setSearchValue("");
  }, [filters, setSearchValue]);

  const toolbarProps = useMemo(
    () => ({
      ...toolbarOverrides,
      searchValue,
      onSearchChange: setSearchValue,
    }),
    [toolbarOverrides, searchValue, setSearchValue]
  );

  return {
    filters,
    searchValue,
    setSearchValue,
    clearAll,
    toolbarProps,
  };
}
