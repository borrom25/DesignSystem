import { useMemo } from "react";
import { Size } from "@/types";
import { cn } from "@/utils";
import { Counter, CounterVariant } from "@/components/Counter";
import { triggerStyles } from "@/shared/Select";
import { useMultiSelectContext } from "../MultiSelect.context";
import type {
  MultiSelectOptionValue,
  MultiSelectValueProps,
} from "../MultiSelect.types.ts";
import { counterClasses } from "../styles";

export function MultiSelectValue<
  T extends MultiSelectOptionValue = MultiSelectOptionValue,
>({
  placeholder = "Select items...",
  selectedOptions,
  renderValue,
  selectedLabel = "Выбрано строк:",
  size = Size.Sm,
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

    return (
      <span className={counterClasses}>
        <span>{selectedLabel}</span>
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
    selectedLabel,
    size,
  ]);

  return (
    <span
      className={cn(
        triggerStyles.value,
        hasLabel && isLabelActive && triggerStyles.valueWithFloatingLabel,
        className
      )}
    >
      {displayValue}
    </span>
  );
}
