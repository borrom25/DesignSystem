import { useMemo } from "react";
import { Size } from "@/types";
import { cn } from "@/utils/cn";
import { Popover } from "@/components/Popover";
import { FieldHint } from "@/components/Field";
import { SelectContext } from "./Select.context";
import { useSelectState } from "./hooks/useSelectState";
import { SelectContent, SelectItem, SelectValue, SelectTrigger } from "./ui";
import { wrapperClasses } from "./styles";
import type { SelectProps } from "./types";

export function Select<T extends string | number = string>({
  value,
  defaultValue,
  onValueChange,
  open,
  defaultOpen,
  onOpenChange,
  options = [],
  disabled = false,
  name,
  required,
  error = false,
  label,
  hint,
  hintError,
  size = Size.Md,
  className,
  triggerClassName,
  contentClassName,
  itemClassName,
  children,
  placeholder = "Select...",
  renderValue,
  renderItem,
  matchTriggerWidth = true,
  maxHeight = 300,
  onScrollEnd,
  scrollEndOffset = 40,
  side = "bottom",
  sideOffset = 4,
  align = "start",
  onClear,
}: SelectProps<T>) {
  const state = useSelectState({
    value,
    defaultValue,
    onValueChange,
    onClear,
    open,
    defaultOpen,
    onOpenChange,
  });

  const contextValue = useMemo(
    () => ({
      value: state.value,
      open: state.open,
      setOpen: state.setOpen,
      onSelect: (nextValue: string | number) => state.onSelect(nextValue as T),
      disabled,
      size,
      label,
      required,
      onClear: state.handleClear,
    }),
    [disabled, label, required, size, state]
  );

  const selectedOption = useMemo(
    () => options.find((item) => item.value === state.value),
    [options, state.value]
  );

  const resolvedChildren = children ?? (
    <>
      <SelectTrigger size={size} error={error} className={triggerClassName}>
        <SelectValue placeholder={placeholder}>
          {renderValue?.(selectedOption) ?? selectedOption?.label}
        </SelectValue>
      </SelectTrigger>

      <SelectContent
        matchTriggerWidth={matchTriggerWidth}
        maxHeight={maxHeight}
        className={contentClassName}
        onScrollEnd={onScrollEnd}
        scrollEndOffset={scrollEndOffset}
        side={side}
        sideOffset={sideOffset}
        align={align}
      >
        {options.map((item) => {
          const selected = state.value === item.value;

          return (
            <SelectItem
              key={item.value}
              value={item.value}
              icon={item.icon}
              disabled={item.disabled}
              className={itemClassName}
            >
              {renderItem?.(item, { selected }) ?? item.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </>
  );

  return (
    <SelectContext.Provider value={contextValue}>
      <div className={cn(wrapperClasses, className)}>
        <Popover open={state.open} onOpenChange={state.setOpen}>
          {resolvedChildren}
        </Popover>

        {(hintError || hint) && (
          <FieldHint size={size} error={error || !!hintError}>
            {hintError || hint}
          </FieldHint>
        )}
      </div>

      {name && (
        <input
          type="hidden"
          name={name}
          value={state.value ?? ""}
          required={required}
        />
      )}
    </SelectContext.Provider>
  );
}
