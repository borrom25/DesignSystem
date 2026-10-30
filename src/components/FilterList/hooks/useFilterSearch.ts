import { useMemo, useState, useCallback } from "react";
import type { FilterListOption, FilterListGroup } from "../FilterList.types.ts";

export interface UseFilterSearchOptions<T> {
  options?: FilterListOption<T>[];
  groups?: FilterListGroup<T>[];
  getSearchText?: (option: FilterListOption<T>) => string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  filterOptionsLocally?: boolean;
}

export interface UseFilterSearchReturn<T> {
  searchValue: string;
  setSearchValue: (value: string) => void;
  clearSearch: () => void;
  filteredOptions: FilterListOption<T>[];
  filteredGroups: FilterListGroup<T>[];
  hasResults: boolean;
  isSearching: boolean;
}

export function useFilterSearch<T = string>({
  options = [],
  groups = [],
  getSearchText = (opt) => String(opt.label),
  searchValue: controlledSearchValue,
  onSearchChange,
  filterOptionsLocally = true,
}: UseFilterSearchOptions<T>): UseFilterSearchReturn<T> {
  const [internalSearchValue, setInternalSearchValue] = useState("");

  const searchValue = controlledSearchValue ?? internalSearchValue;
  const normalizedSearch = searchValue.trim().toLowerCase();
  const isSearching = normalizedSearch.length > 0;

  const setSearchValue = useCallback(
    (value: string) => {
      if (controlledSearchValue === undefined) {
        setInternalSearchValue(value);
      }
      onSearchChange?.(value);
    },
    [controlledSearchValue, onSearchChange]
  );

  const clearSearch = useCallback(() => {
    setSearchValue("");
  }, [setSearchValue]);

  const filteredOptions = useMemo(() => {
    if (!isSearching || !filterOptionsLocally) return options;
    return options.filter((opt) =>
      getSearchText(opt).toLowerCase().includes(normalizedSearch)
    );
  }, [
    options,
    normalizedSearch,
    isSearching,
    getSearchText,
    filterOptionsLocally,
  ]);

  const filteredGroups = useMemo(() => {
    if (!isSearching || !filterOptionsLocally) return groups;
    return groups
      .map((group) => ({
        ...group,
        options: group.options.filter((opt) =>
          getSearchText(opt).toLowerCase().includes(normalizedSearch)
        ),
      }))
      .filter((group) => group.options.length > 0);
  }, [
    groups,
    normalizedSearch,
    isSearching,
    getSearchText,
    filterOptionsLocally,
  ]);

  const hasResults = isSearching
    ? filteredOptions.length > 0 ||
      filteredGroups.some((g) => g.options.length > 0)
    : true;

  return {
    searchValue,
    setSearchValue,
    clearSearch,
    filteredOptions,
    filteredGroups,
    hasResults,
    isSearching,
  };
}
