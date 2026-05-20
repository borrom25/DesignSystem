import { BaseContent } from "@/shared/Select";
import { MultiTagAll } from "./MultiTagAll";
import type { MultiTagContentProps } from "../types";

export function MultiTagContent({
  matchTriggerWidth = true,
  maxHeight = 300,
  className,
  children,
  onScrollEnd,
  scrollEndOffset,
  isLoading = false,
  hasMore = true,
  selectAll = false,
  selectAllLabel = "Выбрать все",
  allSelected = false,
  someSelected = false,
  onSelectAll,
}: MultiTagContentProps) {
  const header =
    selectAll && onSelectAll ? (
      <MultiTagAll
        label={selectAllLabel}
        checked={allSelected}
        indeterminate={someSelected}
        onToggle={onSelectAll}
      />
    ) : undefined;

  return (
    <BaseContent
      matchTriggerWidth={matchTriggerWidth}
      maxHeight={maxHeight}
      className={className}
      onScrollEnd={onScrollEnd}
      scrollEndOffset={scrollEndOffset}
      isLoading={isLoading}
      hasMore={hasMore}
      header={header}
    >
      {children}
    </BaseContent>
  );
}
