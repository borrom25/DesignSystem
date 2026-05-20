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
        className
      )}
      {...props}
    >
      {!empty && (
        <span className={counterStyles.contentOffset[size]}>
          {formatCount(count, maxCount)}
        </span>
      )}
    </span>
  );
}
