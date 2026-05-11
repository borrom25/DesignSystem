import { cn } from "@/utils";
import { Size } from "@/types";
import { FieldWrapper } from "@/components/Field";
import type { RadioProps } from "./Radio.types";
import { radioStyles } from "./styles";

export function Radio({
  size = Size.Md,
  className,
  checked,
  defaultChecked,
  label,
  required,
  hint,
  hintError,
  error,
  ...restProps
}: RadioProps) {
  const hasField = label || hint || hintError;

  const input = (
    <label className={radioStyles.label}>
      <input
        type="radio"
        className={cn(
          "peer",
          radioStyles.base,
          radioStyles.size[size],
          radioStyles.input.state,
          radioStyles.input.hover,
          radioStyles.input.disabled,
          className
        )}
        checked={checked}
        defaultChecked={defaultChecked}
        {...restProps}
      />
      <span
        className={cn(
          radioStyles.innerDot.base,
          radioStyles.innerDot.size[size]
        )}
        aria-hidden="true"
      />
    </label>
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
