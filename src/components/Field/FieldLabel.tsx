import { cn } from "@/utils";
import { fieldLabelStyles } from "./styles";
import { FieldLabelProps } from "./Field.types";

export function FieldLabel({
  size,
  required,
  disabled,
  htmlFor,
  children,
  className,
  indent = true,
}: FieldLabelProps) {
  const combinedClassName = cn(
    fieldLabelStyles.base,
    fieldLabelStyles.size[size],
    disabled && fieldLabelStyles.disabled,
    !indent && "pl-0",
    className
  );

  const content = (
    <span className={fieldLabelStyles.content}>
      {children}
      {required && !disabled && (
        <span aria-hidden className={fieldLabelStyles.requiredMark}>
          *
        </span>
      )}
    </span>
  );

  if (htmlFor) {
    return (
      <label
        htmlFor={htmlFor}
        className={combinedClassName}
        aria-required={required || undefined}
      >
        {content}
      </label>
    );
  }

  return <span className={combinedClassName}>{content}</span>;
}
