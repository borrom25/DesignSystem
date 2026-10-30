import { cn } from "@/utils";
import { triggerStyles } from "@/shared/Select";
import { useSelectContext } from "../Select.context";
import type { SelectValueProps } from "../types";

export function SelectValue({
  placeholder,
  children,
  className,
  isFilled = false,
}: SelectValueProps) {
  const { label, open, value } = useSelectContext();
  const hasValue = (value != null && value !== "") || isFilled;
  const hasFloatingLabel = !!label;
  const isLabelActive = hasFloatingLabel && (open || hasValue);

  if (hasValue) {
    return (
      <span
        className={cn(
          triggerStyles.value,
          hasFloatingLabel &&
            isLabelActive &&
            triggerStyles.valueWithFloatingLabel,
          className
        )}
      >
        {children ?? value}
      </span>
    );
  }

  const showPlaceholder = !hasFloatingLabel || isLabelActive;

  return (
    <span
      className={cn(
        triggerStyles.value,
        hasFloatingLabel &&
          isLabelActive &&
          triggerStyles.valueWithFloatingLabel,
        className
      )}
    >
      {showPlaceholder && (
        <span
          className={cn(
            triggerStyles.placeholder,
            hasFloatingLabel && triggerStyles.valuePlaceholderVisible
          )}
        >
          {placeholder}
        </span>
      )}
    </span>
  );
}
