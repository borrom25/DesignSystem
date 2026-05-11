import { useMemo } from "react";
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
import type { MultiSelectProps } from "./MultiSelect.types.ts";

export function MultiSelect<T extends string | number = string>({
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
  selectAll = false,
  selectAllLabel,
  returnAll = false,
  clearable = false,
  onClear,
}: MultiSelectProps<T>) {
  const canUseInternalSelectAll = selectAll && !children && options.length > 0;
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
      >
        {options.map((item) => {
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
