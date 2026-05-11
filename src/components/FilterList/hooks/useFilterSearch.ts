import { useMemo, useState, useCallback } from "react";
import type { FilterListOption, FilterListGroup } from "../FilterList.types.ts";

export interface UseFilterSearchOptions<T> {
  options?: FilterListOption<T>[];
  groups?: FilterListGroup<T>[];
  getSearchText?: (option: FilterListOption<T>) => string;
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
}: UseFilterSearchOptions<T>): UseFilterSearchReturn<T> {
  const [searchValue, setSearchValue] = useState("");

  const normalizedSearch = searchValue.trim().toLowerCase();
  const isSearching = normalizedSearch.length > 0;

  const filteredOptions = useMemo(() => {
    if (!isSearching) return options;
    return options.filter((opt) =>
      getSearchText(opt).toLowerCase().includes(normalizedSearch)
    );
  }, [options, normalizedSearch, isSearching, getSearchText]);

  const filteredGroups = useMemo(() => {
    if (!isSearching) return groups;
    return groups
      .map((group) => ({
        ...group,
        options: group.options.filter((opt) =>
          getSearchText(opt).toLowerCase().includes(normalizedSearch)
        ),
      }))
      .filter((group) => group.options.length > 0);
  }, [groups, normalizedSearch, isSearching, getSearchText]);

  const hasResults = isSearching
    ? filteredOptions.length > 0 ||
      filteredGroups.some((g) => g.options.length > 0)
    : true;

  const clearSearch = useCallback(() => {
    setSearchValue("");
  }, []);

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
