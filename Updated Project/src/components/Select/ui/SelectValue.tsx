import { cn } from "@/utils";
import { triggerStyles } from "@/shared/Select";
import { useSelectContext } from "../Select.context";
import type { SelectValueProps } from "../types";

export function SelectValue({
  placeholder,
  children,
  className,
}: SelectValueProps) {
  const { label, open, value } = useSelectContext();
  const hasValue = value !== undefined && value !== "";
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
      <span
        className={cn(
          triggerStyles.placeholder,
          hasFloatingLabel &&
            (isLabelActive
              ? triggerStyles.valuePlaceholderVisible
              : triggerStyles.valuePlaceholderHidden)
        )}
      >
        {placeholder}
      </span>
    </span>
  );
}
