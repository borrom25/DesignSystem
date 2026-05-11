import { BaseContent } from "@/shared/Select";
import { MultiSelectAll } from "./MultiSelectAll";
import type { MultiSelectContentProps } from "../MultiSelect.types.ts";

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
}: MultiSelectContentProps) {
  const header =
    selectAll && onSelectAll ? (
      <MultiSelectAll
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
