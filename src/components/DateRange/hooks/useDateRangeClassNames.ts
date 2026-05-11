import { useMemo } from "react";
import { triggerStyles } from "@/shared/Select";
import { cn } from "@/utils";
import { dateRangeStyles } from "../styles";
import type { UseDateRangeClassNamesProps } from "../DateRange.types";

export const useDateRangeClassNames = ({
  size,
  disabled,
  isError,
  open = false,
}: UseDateRangeClassNamesProps) => {
  const wrapperClassName = useMemo(() => {
    return cn(
      dateRangeStyles.base,
      dateRangeStyles.size[size],
      "gap-0",
      !disabled && dateRangeStyles.state,
      disabled && dateRangeStyles.disabled,
      !disabled && isError && dateRangeStyles.error,
      !disabled && open && !isError && triggerStyles.open,
      !disabled && open && isError && triggerStyles.error.open
    );
  }, [size, disabled, isError, open]);

  const chipClassName = useMemo(() => {
    return cn(
      dateRangeStyles.chip.base,
      dateRangeStyles.chip.size[size],
      disabled && dateRangeStyles.chip.disabled
    );
  }, [size, disabled]);

  const chipErrorClassName = useMemo(() => {
    return cn(
      dateRangeStyles.chip.base,
      dateRangeStyles.chip.size[size],
      dateRangeStyles.chip.error
    );
  }, [size]);

  return { wrapperClassName, chipClassName, chipErrorClassName };
};
