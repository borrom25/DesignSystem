import { cn } from "@/utils";
import type { FieldHintProps } from "./Field.types";
import { fieldHintStyles } from "./styles";

export function FieldHint({
  size,
  error,
  id,
  children,
  className,
}: FieldHintProps) {
  return (
    <span
      id={id}
      className={cn(
        fieldHintStyles.base,
        fieldHintStyles.size[size],
        error ? fieldHintStyles.error : fieldHintStyles.default,
        className
      )}
    >
      {children}
    </span>
  );
}
