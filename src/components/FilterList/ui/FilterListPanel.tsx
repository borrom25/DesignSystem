import { FilterPanel } from "@/components/Filter";
import { FilterList } from "../FilterList.tsx";
import { useFilterSearch } from "../hooks/useFilterSearch.ts";
import { useFilterState } from "../hooks/useFilterState.ts";
import type { FilterListPanelProps } from "../FilterList.types.ts";
import { filterListStyles } from "../styles";

export function FilterListPanel<T = string>({
  value,
  onApply,
  options,
  groups,
  className,
  width = 270,
  searchPlaceholder = "Поиск",
  showSearch = true,
  showSelectAll = true,
  emptyMessage = "Ничего не найдено",
  getSearchText,
}: FilterListPanelProps<T>) {
  const filter = useFilterState<T>({
    value,
    onChange: onApply,
  });
  const search = useFilterSearch<T>({
    options,
    groups,
    getSearchText,
  });

  return (
    <FilterPanel
      className={className}
      width={width}
      showSearch={showSearch}
      searchValue={search.searchValue}
      onSearchChange={search.setSearchValue}
      onSearchClear={search.clearSearch}
      searchPlaceholder={searchPlaceholder}
      onReset={() => {
        filter.clear();
        search.clearSearch();
      }}
      onApply={() => {
        filter.apply();
        search.clearSearch();
      }}
      applyDisabled={!filter.isDirty}
      resetDisabled={
        filter.isEmpty && filter.draft.length === 0 && !search.searchValue
      }
    >
      {search.hasResults ? (
        <FilterList
          options={search.filteredOptions}
          groups={search.filteredGroups}
          value={filter.draft}
          onChange={filter.setDraft}
          showSelectAll={showSelectAll}
        />
      ) : (
        <div className={filterListStyles.panel}>{emptyMessage}</div>
      )}
    </FilterPanel>
  );
}
