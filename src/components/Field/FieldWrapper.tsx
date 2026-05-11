import { cn } from "@/utils/cn";
import { FieldLabel } from "./FieldLabel";
import { FieldHint } from "./FieldHint";
import { wrapperClasses } from "./styles";
import { FieldWrapperProps } from "./Field.types.ts";

export function FieldWrapper({
  size,
  label,
  required,
  disabled,
  hint,
  hintError,
  error = false,
  inputId,
  hintId,
  className,
  children,
}: FieldWrapperProps) {
  const isError = error || !!hintError;
  const hintText = hintError || hint;

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
      {children}
      {hintText && (
        <FieldHint size={size} error={isError} id={hintId}>
          {hintText}
        </FieldHint>
      )}
    </div>
  );
}
