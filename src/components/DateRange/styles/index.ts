export * from "@/shared/Input/styles";
export * from "./base";
export * from "./sizes";
export * from "./calendar";
export * from "./compact";

import * as sharedInput from "@/shared/Input/styles";
import * as dateRangeBase from "./base";
import * as dateRangeSizes from "./sizes";
import * as dateRangeCalendar from "./calendar";
import { compactClasses } from "./compact";

export const dateRangeStyles = {
  base: sharedInput.inputBaseClasses,
  state: sharedInput.inputStateClasses,
  disabled: sharedInput.inputDisabledClasses,
  error: sharedInput.inputErrorClasses,
  size: sharedInput.inputSizeClasses,
  chip: {
    base: dateRangeBase.dateChipBaseClasses,
    placeholder: dateRangeBase.dateChipPlaceholderClasses,
    filled: dateRangeBase.dateChipFilledClasses,
    error: dateRangeBase.dateChipErrorClasses,
    errorHover: dateRangeBase.dateChipErrorHoverClasses,
    disabled: dateRangeBase.dateChipDisabledClasses,
    size: dateRangeSizes.dateChipSizeClasses,
  },
  field: dateRangeBase.dateRangeFieldClasses,
  separator: dateRangeBase.separatorClasses,
  content: dateRangeBase.dateRangeContentClasses,
  sections: dateRangeBase.dateRangeSectionsClasses,
  section: {
    base: dateRangeBase.dateRangeSectionClasses,
    button: dateRangeBase.dateRangeSectionButtonClasses,
    interactive: dateRangeBase.dateRangeSectionButtonInteractiveClasses,
    indicator: dateRangeBase.dateRangeActiveIndicatorClasses,
    indicatorStart: dateRangeBase.dateRangeActiveIndicatorStartClasses,
    indicatorEnd: dateRangeBase.dateRangeActiveIndicatorEndClasses,
  },
  calendarButton: {
    container: dateRangeCalendar.calendarButtonContainerClasses,
    containerSize: dateRangeCalendar.calendarButtonContainerSizeClasses,
    containerDisabled: dateRangeCalendar.calendarButtonContainerDisabledClasses,
    button: dateRangeCalendar.calendarButtonClasses,
    icon: dateRangeCalendar.calendarButtonIconClasses,
    iconHover: dateRangeCalendar.calendarButtonIconHoverClasses,
    close: dateRangeCalendar.calendarButtonCloseClasses,
    closeHover: dateRangeCalendar.calendarButtonCloseHoverClasses,
  },
  calendar: dateRangeCalendar.dateRangeCalendarClasses,
  popover: {
    content: dateRangeCalendar.dateRangePopoverContentClasses,
    timeBarPanel: dateRangeCalendar.dateRangeTimeBarPanelClasses,
  },
  iconSizeMap: dateRangeSizes.dateRangeIconSizeMap,
  compact: compactClasses,
} as const;
