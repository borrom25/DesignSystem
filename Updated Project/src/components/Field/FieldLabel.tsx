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
}: FieldLabelProps) {
  const combinedClassName = cn(
    fieldLabelStyles.base,
    fieldLabelStyles.size[size],
    disabled && fieldLabelStyles.disabled,
    className
  );

  const content = (
    <span className={fieldLabelStyles.content}>
      {children}
      {required && (
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
