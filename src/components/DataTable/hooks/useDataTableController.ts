import { useCallback, useMemo, useState } from "react";
import type { DataTableToolbarProps } from "../types";
import type { FilterSchema } from "../types/DataTable.filter.types";
import {
  useDataTableFilters,
  type UseDataTableFiltersOptions,
  type UseDataTableFiltersReturn,
} from "./useDataTableFilters";

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
    searchValue: controlledSearchValue,
    defaultSearchValue = "",
    onSearchChange,
    toolbarProps: toolbarOverrides,
  } = options;

  const filters = useDataTableFilters({
    columns,
    defaultValues,
    onChange,
  });

  const [internalSearchValue, setInternalSearchValue] =
    useState(defaultSearchValue);

  const searchValue = controlledSearchValue ?? internalSearchValue;

  const setSearchValue = useCallback(
    (value: string) => {
      if (controlledSearchValue === undefined) {
        setInternalSearchValue(value);
      }

      onSearchChange?.(value);
    },
    [controlledSearchValue, onSearchChange]
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
