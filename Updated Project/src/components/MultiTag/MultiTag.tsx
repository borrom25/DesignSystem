import { Size } from "@/types";
import { cn } from "@/utils/cn";
import { Popover } from "@/components/Popover";
import { FieldHint, FieldLabel } from "@/components/Field";
import { useMultiTagState } from "./hooks/useMultiTagState";
import {
  MultiTagTrigger,
  MultiTagContent,
  MultiTagItem,
  MultiTagValue,
} from "./ui";
import { multiTagStyles, wrapperClasses } from "./styles";
import type { MultiTagProps } from "./types";

export function MultiTag<T extends string | number = string>({
  value,
  defaultValue,
  onChange,
  options = [],
  size = Size.Md,
  placeholder = "Выберите...",
  disabled = false,
  error = false,
  label,
  required = false,
  hint,
  hintError,
  className,
  triggerClassName,
  contentClassName,
  maxHeight = 300,
  matchTriggerWidth = true,
  onScrollEnd,
  scrollEndOffset,
  isLoading = false,
  hasMore = true,
  children,
  selectAll = false,
  selectAllLabel,
  returnAll = false,
  clearable = false,
  onClear,
  maxVisibleRows = 2,
}: MultiTagProps<T>) {
  const {
    value: selectedValues,
    open,
    setOpen,
    isFilled,
    handleToggle,
    handleRemove,
    handleSelectAll,
    handleClear,
    allSelected,
    someSelected,
    selectedOptions,
  } = useMultiTagState({
    value,
    defaultValue,
    onChange,
    onClear,
    options,
    returnAll,
  });

  const hasValue = selectedValues.length > 0;

  return (
    <div className={cn(wrapperClasses, className)}>
      {label && (
        <FieldLabel
          size={size}
          required={required}
          className={multiTagStyles.field.inlinePadding[size]}
        >
          {label}
        </FieldLabel>
      )}

      <Popover open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <MultiTagTrigger
            size={size}
            error={error}
            open={open}
            isFilled={isFilled}
            disabled={disabled}
            className={triggerClassName}
            clearable={clearable}
            onClear={clearable ? handleClear : undefined}
            hasValue={hasValue}
            maxVisibleRows={maxVisibleRows}
          >
            <MultiTagValue<T>
              size={size}
              placeholder={placeholder}
              selectedOptions={selectedOptions}
              disabled={disabled}
              error={error}
              onRemove={handleRemove}
            />
          </MultiTagTrigger>
        </Popover.Trigger>

        <MultiTagContent
          matchTriggerWidth={matchTriggerWidth}
          maxHeight={maxHeight}
          className={contentClassName}
          onScrollEnd={onScrollEnd}
          scrollEndOffset={scrollEndOffset}
          isLoading={isLoading}
          hasMore={hasMore}
          selectAll={selectAll}
          selectAllLabel={selectAllLabel}
          allSelected={allSelected}
          someSelected={someSelected}
          onSelectAll={handleSelectAll}
        >
          {children ??
            options.map((option) => (
              <MultiTagItem<T>
                key={option.value}
                option={option}
                selected={selectedValues.includes(option.value)}
                onToggle={handleToggle}
              />
            ))}
        </MultiTagContent>
      </Popover>

      {(hintError || hint) && (
        <FieldHint
          size={size}
          error={error || !!hintError}
          className={multiTagStyles.field.inlinePadding[size]}
        >
          {hintError || hint}
        </FieldHint>
      )}
    </div>
  );
}
