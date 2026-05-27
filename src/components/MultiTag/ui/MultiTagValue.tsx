import { Size } from "@/types";
import { cn } from "@/utils";
import { Tag } from "@/components/Tag";
import { placeholderClasses, triggerStyles } from "../styles";
import type { MultiTagValueProps } from "../types";

export function MultiTagValue<T extends string | number = string>({
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
    return (
      <span
        className={cn(
          triggerStyles.value,
          placeholderClasses,
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

  const handleRemove = (value: T) => () => {
    onRemove?.(value);
  };

  return (
    <>
      {selectedOptions.map((option) => (
        <Tag
          key={option.value}
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
