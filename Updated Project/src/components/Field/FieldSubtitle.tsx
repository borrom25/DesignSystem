import { cn } from "@/utils";
import { fieldSubtitleStyles } from "./styles";
import { FieldSubtitleProps } from "./Field.types";

export function FieldSubtitle({
  size,
  disabled,
  children,
  className,
}: FieldSubtitleProps) {
  return (
    <span
      className={cn(
        fieldSubtitleStyles.base,
        fieldSubtitleStyles.size[size],
        disabled && fieldSubtitleStyles.disabled,
        className
      )}
    >
      {children}
    </span>
  );
}
