import { useMemo } from "react";
import { Size } from "@/types";
import { cn } from "@/utils";
import { Counter, CounterVariant } from "@/components/Counter";
import { Tag } from "@/components/Tag";
import { triggerStyles } from "@/shared/Select";
import { useMultiSelectContext } from "../MultiSelect.context";
import type { MultiSelectValueProps } from "../MultiSelect.types.ts";
import { counterClasses } from "../styles";

export function MultiSelectValue<T extends string | number = string>({
  placeholder = "Select items...",
  selectedOptions,
  renderValue,
  size = Size.Sm,
  error = false,
  className,
}: MultiSelectValueProps<T>) {
  const { label, open, value } = useMultiSelectContext();
  const hasLabel = !!label;
  const isLabelActive = hasLabel && (open || value.length > 0);

  const displayValue = useMemo(() => {
    if (renderValue) return renderValue(selectedOptions);

    if (selectedOptions.length === 0) {
      return (
        <span
          className={cn(
            triggerStyles.placeholder,
            hasLabel &&
              (isLabelActive
                ? triggerStyles.valuePlaceholderVisible
                : triggerStyles.valuePlaceholderHidden)
          )}
        >
          {placeholder}
        </span>
      );
    }

    if (hasLabel) {
      return (
        <>
          {selectedOptions.map((option) => (
            <Tag key={String(option.value)} size={size} error={error}>
              {option.label}
            </Tag>
          ))}
        </>
      );
    }

    return (
      <span className={counterClasses}>
        <span>Выбрано:</span>
        <Counter
          count={selectedOptions.length}
          size={size}
          variant={CounterVariant.Neutral}
        />
      </span>
    );
  }, [
    hasLabel,
    isLabelActive,
    placeholder,
    renderValue,
    selectedOptions,
    size,
    error,
  ]);

  if (hasLabel) {
    return (
      <span className={cn("flex flex-wrap gap-1 min-w-0 w-full", className)}>
        {displayValue}
      </span>
    );
  }

  return (
    <span className={cn(triggerStyles.value, className)}>{displayValue}</span>
  );
}
