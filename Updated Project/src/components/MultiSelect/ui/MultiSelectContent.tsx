import { BaseContent } from "@/shared/Select";
import { SearchAutocomplete } from "@/components/SearchAutocomplete";
import { cn } from "@/utils";
import { MultiSelectAll } from "./MultiSelectAll";
import type { MultiSelectContentProps } from "../MultiSelect.types.ts";
import { multiSelectStyles } from "../styles";

export function MultiSelectContent({
  matchTriggerWidth = true,
  maxHeight = 300,
  className,
  children,
  onScrollEnd,
  scrollEndOffset,
  side = "bottom",
  sideOffset = 4,
  align = "start",
  isLoading = false,
  hasMore = true,
  selectAll = false,
  selectAllLabel = "Выбрать все",
  allSelected = false,
  someSelected = false,
  onSelectAll,
  search = false,
  searchValue,
  onSearchChange,
  onSearchClear,
  searchPlaceholder = "Поиск",
  searchClassName,
}: MultiSelectContentProps) {
  const searchHeader = search ? (
    <div className={cn(multiSelectStyles.search, searchClassName)}>
      <SearchAutocomplete
        value={searchValue ?? ""}
        placeholder={searchPlaceholder}
        clearable
        onClear={onSearchClear ?? (() => onSearchChange?.(""))}
        onValueChange={onSearchChange}
      />
    </div>
  ) : undefined;

  const selectAllHeader =
    selectAll && onSelectAll ? (
      <MultiSelectAll
        label={selectAllLabel}
        checked={allSelected}
        indeterminate={someSelected}
        onToggle={onSelectAll}
      />
    ) : undefined;

  const header =
    searchHeader || selectAllHeader ? (
      <>
        {searchHeader}
        {selectAllHeader}
      </>
    ) : undefined;

  return (
    <BaseContent
      matchTriggerWidth={matchTriggerWidth}
      maxHeight={maxHeight}
      className={className}
      onScrollEnd={onScrollEnd}
      scrollEndOffset={scrollEndOffset}
      side={side}
      sideOffset={sideOffset}
      align={align}
      isLoading={isLoading}
      hasMore={hasMore}
      header={header}
    >
      {children}
    </BaseContent>
  );
}
