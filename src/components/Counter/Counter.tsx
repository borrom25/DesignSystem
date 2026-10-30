import { cn } from "@/utils";
import { Size } from "@/types";
import type { CounterProps } from "./Counter.types";
import { CounterVariant } from "./Counter.types";
import { counterStyles } from "./styles";
import { formatCount } from "./Counter.utils";

export function Counter({
  count,
  maxCount,
  size = Size.Sm,
  variant = CounterVariant.Accent,
  empty = false,
  disabled = false,
  className,
  ...props
}: CounterProps) {
  return (
    <span
      className={cn(
        counterStyles.base,
        counterStyles.size[size],
        counterStyles.variant[variant],
        empty && counterStyles.empty,
        disabled && counterStyles.disabled,
        className
      )}
      aria-disabled={disabled || undefined}
      {...props}
    >
      {!empty && (
        <span className={counterStyles.content[size]}>
          {formatCount(count, maxCount)}
        </span>
      )}
    </span>
  );
}
