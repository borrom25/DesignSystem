import { Size } from "@/types";
import { cn } from "@/utils";
import { Tag } from "@/components/Tag";
import { getOptionKey, type SelectOptionValue } from "@/shared/Select";
import { placeholderClasses, triggerStyles } from "../styles";
import type { MultiTagValueProps } from "../types";

export function MultiTagValue<T extends SelectOptionValue = string>({
  placeholder = "Выберите...",
  selectedOptions,
  size = Size.Md,
  disabled = false,
  error = false,
  onRemove,
  label,
  open = false,
}: MultiTagValueProps<T>) {
  const hasLabel = !!label;
  const isLabelActive = hasLabel && (open || selectedOptions.length > 0);

  if (selectedOptions.length === 0) {
    const showPlaceholder = !hasLabel || isLabelActive;

    if (!showPlaceholder) return null;

    return (
      <span
        className={cn(
          triggerStyles.value,
          placeholderClasses,
          hasLabel && triggerStyles.valuePlaceholderVisible
        )}
      >
        {placeholder}
      </span>
    );
  }

  const handleRemove = (value: T) => () => {
    onRemove?.(value);
  };

  return (
    <>
      {selectedOptions.map((option) => (
        <Tag
          key={getOptionKey(option.value)}
          size={size}
          error={error}
          onClose={disabled ? undefined : handleRemove(option.value)}
        >
          {option.label}
        </Tag>
      ))}
    </>
  );
}
