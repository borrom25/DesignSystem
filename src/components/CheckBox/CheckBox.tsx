import { Size } from "@/types";
import { FieldWrapper } from "@/components/Field";
import type { CheckBoxProps } from "./CheckBox.types";
import { CheckBoxInput } from "./ui";

export function CheckBox({
  size = Size.Md,
  className,
  checked,
  defaultChecked,
  indeterminate = false,
  inputRef,
  label,
  required,
  hint,
  hintError,
  error,
  scaling = true,
  ...restProps
}: CheckBoxProps) {
  const hasField = label || hint || hintError;

  const input = (
    <CheckBoxInput
      size={size}
      className={className}
      checked={checked}
      defaultChecked={defaultChecked}
      indeterminate={indeterminate}
      inputRef={inputRef}
      scaling={scaling}
      {...restProps}
    />
  );

  if (!hasField) return input;

  return (
    <FieldWrapper
      size={size}
      label={label}
      required={required}
      hint={hint}
      hintError={hintError}
      error={error}
    >
      {input}
    </FieldWrapper>
  );
}
