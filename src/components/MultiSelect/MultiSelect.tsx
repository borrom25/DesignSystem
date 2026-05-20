import { useCallback, useMemo, useState } from "react";
import { Size } from "@/types";
import { cn } from "@/utils/cn";
import { Popover } from "@/components/Popover";
import { FieldHint } from "@/components/Field";
import { MultiSelectContext } from "./MultiSelect.context";
import { useMultiSelectState } from "./hooks/useMultiSelectState";
import {
  MultiSelectItem,
  MultiSelectValue,
  MultiSelectTrigger,
  MultiSelectContent,
} from "./ui";
import { wrapperClasses } from "./styles";
import type {
  MultiSelectOption,
  MultiSelectOptionValue,
  MultiSelectProps,
} from "./MultiSelect.types.ts";

function getDefaultSearchText<T extends MultiSelectOptionValue>(
  option: MultiSelectOption<T>
) {
  return String(option.label);
}

export function MultiSelect<
  T extends MultiSelectOptionValue = MultiSelectOptionValue,
>({
  value,
  defaultValue,
  onValueChange,
  open: controlledOpen,
  defaultOpen,
  onOpenChange,
  options = [],
  size = Size.Md,
  placeholder = "Select items...",
  disabled = false,
  error = false,
  label,
  required = false,
  hint,
  hintError,
  name,
  className,
  triggerClassName,
  contentClassName,
  itemClassName,
  maxHeight = 300,
  matchTriggerWidth = true,
  onScrollEnd,
  scrollEndOffset = 40,
  side = "bottom",
  sideOffset = 4,
  align = "start",
  isLoading = false,
  hasMore = true,
  children,
  renderValue,
  renderItem,
  selectedLabel,
  search = false,
  searchValue: controlledSearchValue,
  defaultSearchValue = "",
  onSearchChange,
  searchPlaceholder,
  searchClassName,
  getSearchText = getDefaultSearchText,
  selectAll = false,
  selectAllLabel,
  returnAll = false,
  clearable = false,
  onClear,
}: MultiSelectProps<T>) {
  const [internalSearchValue, setInternalSearchValue] =
    useState(defaultSearchValue);
  const canUseInternalSearch = search && !children;
  const searchValue = controlledSearchValue ?? internalSearchValue;
  const normalizedSearchValue = searchValue.trim().toLowerCase();
  const isSearching = canUseInternalSearch && normalizedSearchValue.length > 0;

  const setSearchValue = useCallback(
    (nextValue: string) => {
      if (controlledSearchValue === undefined) {
        setInternalSearchValue(nextValue);
      }

      onSearchChange?.(nextValue);
    },
    [controlledSearchValue, onSearchChange]
  );

  const clearSearch = useCallback(() => {
    setSearchValue("");
  }, [setSearchValue]);

  const visibleOptions = useMemo(() => {
    if (!isSearching) return options;

    return options.filter((option) =>
      getSearchText(option).toLowerCase().includes(normalizedSearchValue)
    );
  }, [getSearchText, isSearching, normalizedSearchValue, options]);

  const canUseInternalSelectAll =
    selectAll && !children && visibleOptions.length > 0;
  const {
    value: selectedValues,
    open,
    setOpen,
    handleToggle,
    handleSelectAll,
    handleClear,
    allSelected,
    someSelected,
    selectedOptions,
  } = useMultiSelectState({
    value,
    defaultValue,
    onValueChange,
    open: controlledOpen,
    defaultOpen,
    onOpenChange,
    onClear,
    options,
    selectableOptions: visibleOptions,
    returnAll,
  });

  const contextValue = useMemo(
    () => ({
      value: selectedValues,
      open,
      setOpen,
      disabled,
      size,
      label,
      required,
      clearable,
      onClear: handleClear,
    }),
    [
      clearable,
      disabled,
      handleClear,
      label,
      open,
      required,
      selectedValues,
      setOpen,
      size,
    ]
  );

  const valueSet = useMemo(() => new Set(selectedValues), [selectedValues]);

  const resolvedChildren = children ?? (
    <>
      <MultiSelectTrigger
        size={size}
        error={error}
        className={triggerClassName}
      >
        <MultiSelectValue<T>
          size={size}
          placeholder={placeholder}
          selectedOptions={selectedOptions}
          renderValue={renderValue}
          selectedLabel={selectedLabel}
          error={error}
        />
      </MultiSelectTrigger>

      <MultiSelectContent
        matchTriggerWidth={matchTriggerWidth}
        maxHeight={maxHeight}
        className={contentClassName}
        onScrollEnd={onScrollEnd}
        scrollEndOffset={scrollEndOffset}
        side={side}
        sideOffset={sideOffset}
        align={align}
        isLoading={isLoading}
        hasMore={hasMore}
        selectAll={canUseInternalSelectAll}
        selectAllLabel={selectAllLabel}
        allSelected={allSelected}
        someSelected={someSelected}
        onSelectAll={canUseInternalSelectAll ? handleSelectAll : undefined}
        search={canUseInternalSearch}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onSearchClear={clearSearch}
        searchPlaceholder={searchPlaceholder}
        searchClassName={searchClassName}
      >
        {visibleOptions.map((item) => {
          const selected = valueSet.has(item.value);

          return (
            <MultiSelectItem<T>
              key={item.value}
              option={item}
              selected={selected}
              onToggle={handleToggle}
              className={itemClassName}
            >
              {renderItem?.(item, { selected }) ?? item.label}
            </MultiSelectItem>
          );
        })}
      </MultiSelectContent>
    </>
  );

  return (
    <MultiSelectContext.Provider value={contextValue}>
      <div className={cn(wrapperClasses, className)}>
        <Popover open={open} onOpenChange={setOpen}>
          {resolvedChildren}
        </Popover>

        {(hintError || hint) && (
          <FieldHint size={size} error={error || !!hintError}>
            {hintError || hint}
          </FieldHint>
        )}
      </div>

      {name &&
        (selectedValues.length > 0 ? (
          selectedValues.map((selectedValue) => (
            <input
              key={selectedValue}
              type="hidden"
              name={name}
              value={selectedValue}
            />
          ))
        ) : (
          <input type="hidden" name={name} value="" required={required} />
        ))}
    </MultiSelectContext.Provider>
  );
}
