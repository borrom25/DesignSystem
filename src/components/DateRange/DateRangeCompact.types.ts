import type { DateRangeProps } from "./DateRange.types";

export type DateRangeCompactProps = Omit<
  DateRangeProps,
  "size" | "label" | "required" | "hint" | "hintError"
>;
