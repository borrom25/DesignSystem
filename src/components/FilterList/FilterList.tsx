import { ListItem } from "@/components/ListItem";
import { Size } from "@/types";
import { cn } from "@/utils";
import type {
  FilterListProps,
  FilterListOption,
  FilterListGroup,
} from "./FilterList.types";
import { useFilterListState } from "./hooks/useFilterListState.ts";
import { filterListStyles } from "./styles";

export function FilterList<T = string>({
  options,
  groups,
  value,
  onChange,
  showSelectAll = false,
  selectAllLabel = "Выбрать все",
  size = Size.Xs,
  className,
  groupClassName,
  groupLabelClassName,
  itemClassName,
  getOptionKey = (opt) => String(opt.value),
}: FilterListProps<T>) {
  const {
    handleSelectAll,
    someSelected,
    handleToggle,
    hasContent,
    valueSet,
    allSelected,
    hasGroups,
    groupItems,
    allOptions,
  } = useFilterListState<T>({ value, onChange, groups, options });

  const renderOption = (option: FilterListOption<T>) => (
    <ListItem
      key={getOptionKey(option)}
      size={size}
      checkbox
      selected={valueSet.has(option.value)}
      disabled={option.disabled}
      hideSelectedOutline
      visualSelected={false}
      className={itemClassName}
      onClick={() => handleToggle(option.value)}
    >
      {option.label}
    </ListItem>
  );

  const renderGroup = (group: FilterListGroup<T>, index: number) => (
    <div
      key={group.label ? String(group.label) : `group-${index}`}
      className={cn(filterListStyles.list, groupClassName)}
    >
      {index > 0 && <div className={filterListStyles.separator} />}
      {group.label && (
        <div className={cn(filterListStyles.groupLabel, groupLabelClassName)}>
          {group.label}
        </div>
      )}
      {group.options.map(renderOption)}
    </div>
  );

  return (
    <div className={cn(filterListStyles.allList, className)}>
      {showSelectAll && (
        <>
          <ListItem
            size={size}
            checkbox
            selected={allSelected}
            hideSelectedOutline
            className={itemClassName}
            onClick={handleSelectAll}
            data-indeterminate={someSelected && !allSelected}
          >
            {selectAllLabel}
          </ListItem>
          {hasContent && <div className={filterListStyles.separator} />}
        </>
      )}
      {hasGroups ? (
        groupItems.map(renderGroup)
      ) : (
        <div className={filterListStyles.list}>
          {allOptions.map(renderOption)}
        </div>
      )}
    </div>
  );
}
