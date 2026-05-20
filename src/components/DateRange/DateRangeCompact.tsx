import { Size } from "@/types";
import { cn } from "@/utils";
import { DateRange } from "./DateRange";
import { dateRangeStyles } from "./styles";
import type { DateRangeCompactProps } from "./DateRangeCompact.types";

export function DateRangeCompact({
  className,
  ...restProps
}: DateRangeCompactProps) {
  return (
    <DateRange
      {...restProps}
      size={Size.Xs}
      className={cn(dateRangeStyles.compact, className)}
    />
  );
}
