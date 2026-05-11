import { Size } from "@/types";
import { Tag } from "@/components/Tag";
import { placeholderClasses } from "../styles";
import type { MultiTagValueProps } from "../types";

export function MultiTagValue<T extends string | number = string>({
  placeholder = "Выберите...",
  selectedOptions,
  size = Size.Md,
  disabled = false,
  error = false,
  onRemove,
}: MultiTagValueProps<T>) {
  if (selectedOptions.length === 0) {
    return <span className={placeholderClasses}>{placeholder}</span>;
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
