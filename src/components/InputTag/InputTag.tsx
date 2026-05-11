import { cn } from "@/utils";
import { Size } from "@/types";
import { FieldLabel, FieldHint } from "@/components/Field";
import { wrapperClasses } from "@/components/Field/styles";
import { useInputIds } from "@/components/Input/hooks/useInputIds";
import type { InputTagProps } from "./InputTag.types";
import { useInputTagClassNames } from "./hooks/useInputTagClassNames";
import { useInputTagValue } from "./hooks/useInputTagValue";
import { InputTagField } from "./ui";

export function InputTag({
  size = Size.Md,
  disabled = false,
  label,
  required,
  hint,
  value,
  defaultValue,
  onChange,
  onCreateTag,
  onClear,
  className,
  inputClassName,
  id: idProp,
  ...restProps
}: InputTagProps) {
  const { inputId, hintId } = useInputIds({
    id: idProp,
    hint,
    hintError: undefined,
  });

  const { wrapperClassName } = useInputTagClassNames({
    size,
    disabled,
  });

  const {
    tags,
    inputValue,
    hasValue,
    handleKeyDown,
    handleInputChange,
    removeTag,
    clearAll,
  } = useInputTagValue({
    value,
    defaultValue,
    onChange,
    onCreateTag,
    onClear,
    disabled,
  });

  return (
    <div className={cn(wrapperClasses, className)}>
      {label && (
        <FieldLabel
          size={size}
          required={required}
          disabled={disabled}
          htmlFor={inputId}
        >
          {label}
        </FieldLabel>
      )}

      <InputTagField
        wrapperClassName={wrapperClassName}
        tags={tags}
        inputValue={inputValue}
        hasValue={hasValue}
        size={size}
        disabled={disabled}
        inputClassName={inputClassName}
        onInputChange={handleInputChange}
        onInputKeyDown={handleKeyDown}
        onRemoveTag={removeTag}
        onClearAll={clearAll}
        id={inputId}
        aria-required={required || undefined}
        aria-describedby={hintId}
        {...restProps}
      />

      {hint && (
        <FieldHint size={size} id={hintId}>
          {hint}
        </FieldHint>
      )}
    </div>
  );
}
