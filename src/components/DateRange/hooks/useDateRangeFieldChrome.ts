import { cn, getIconSize } from "@/utils";
import { Size } from "@/types";
import { dateRangeStyles } from "../styles";
import type { DateRangeBound, DateRangeFieldProps } from "../DateRange.types";

export interface UseDateRangeFieldChromeParams {
  size: Size;
  disabled: boolean;
  onClick?: DateRangeFieldProps["onClick"];
  clearable: boolean;
  hasValue: boolean;
  activeBound: DateRangeBound | null | undefined;
}

export const useDateRangeFieldChrome = ({
  size,
  disabled,
  onClick,
  clearable,
  hasValue,
  activeBound,
}: UseDateRangeFieldChromeParams) => {
  const iconSize = getIconSize(size, dateRangeStyles.iconSizeMap);
  const isInteractive = !disabled && !!onClick;
  const showClearButton = clearable && hasValue;

  const indicatorClassName = activeBound
    ? cn(
        dateRangeStyles.section.indicator,
        activeBound === "start"
          ? dateRangeStyles.section.indicatorStart
          : dateRangeStyles.section.indicatorEnd
      )
    : undefined;

  const calendarIconClassName = cn(
    dateRangeStyles.calendarButton.icon,
    showClearButton && dateRangeStyles.calendarButton.iconHover
  );

  return {
    iconSize,
    isInteractive,
    showClearButton,
    indicatorClassName,
    calendarIconClassName,
  };
};
