import { cn } from "@/utils";
import { Size } from "@/types";
import { Calendar } from "lucide-react";
import { CloseBtn } from "@/components/CloseBtn/CloseBtn";
import { InputAdornment, InputSeparator } from "@/shared/Input";
import { dateInputPlaceholder, dataRangeFieldAria } from "../constants";
import { useDateRangeFieldChrome } from "../hooks/useDateRangeFieldChrome";
import { dateRangeStyles } from "../styles";
import type { DateRangeFieldProps } from "../DateRange.types";
import { DateRangeFieldSection } from "./DateRangeFieldSection";

export function DateRangeField({
  wrapperClassName,
  startInputValue,
  endInputValue,
  placeholderStart,
  placeholderEnd,
  activeBound = null,
  size = Size.Md,
  disabled = false,
  clearable = false,
  hasValue = false,
  startError = false,
  endError = false,
  className,
  onClear,
  onClick,
  onStartClick,
  onEndClick,
  onStartInputChange,
  onEndInputChange,
  onStartInputCommit,
  onEndInputCommit,
  ref,
  ...props
}: DateRangeFieldProps) {
  const calendarButtonStyles = dateRangeStyles.calendarButton;
  const {
    iconSize,
    isInteractive,
    showClearButton,
    indicatorClassName,
    calendarIconClassName,
  } = useDateRangeFieldChrome({
    size,
    disabled,
    onClick,
    clearable,
    hasValue,
    activeBound,
  });

  return (
    <div
      {...props}
      ref={ref}
      className={cn(wrapperClassName, dateRangeStyles.field, className)}
      onClick={isInteractive ? onClick : undefined}
      aria-disabled={disabled}
    >
      <div className={dateRangeStyles.content}>
        <div className={dateRangeStyles.sections}>
          <DateRangeFieldSection
            value={startInputValue}
            label={placeholderStart}
            placeholder={dateInputPlaceholder}
            filled={!!startInputValue}
            active={activeBound === "start"}
            isError={startError}
            disabled={disabled}
            size={size}
            ariaLabel={dataRangeFieldAria.start}
            onClick={onStartClick}
            onValueChange={onStartInputChange}
            onCommit={onStartInputCommit}
          />

          <InputSeparator className={dateRangeStyles.separator} />

          <DateRangeFieldSection
            value={endInputValue}
            label={placeholderEnd}
            placeholder={dateInputPlaceholder}
            filled={!!endInputValue}
            active={activeBound === "end"}
            isError={endError}
            disabled={disabled}
            size={size}
            ariaLabel={dataRangeFieldAria.end}
            onClick={onEndClick}
            onValueChange={onEndInputChange}
            onCommit={onEndInputCommit}
          />

          {indicatorClassName && <span className={indicatorClassName} />}
        </div>
      </div>

      <InputAdornment
        disabled={disabled}
        containerClassName={cn(
          calendarButtonStyles.container,
          calendarButtonStyles.containerSize[size]
        )}
        containerDisabledClassName={calendarButtonStyles.containerDisabled}
      >
        <div className={calendarButtonStyles.button}>
          <span aria-hidden="true" className={calendarIconClassName}>
            <Calendar size={iconSize} />
          </span>

          {showClearButton && (
            <div
              className={cn(
                calendarButtonStyles.close,
                calendarButtonStyles.closeHover
              )}
            >
              <CloseBtn
                size={size}
                aria-label={dataRangeFieldAria.clear}
                onClick={(event) => {
                  event.stopPropagation();
                  onClear?.();
                }}
              />
            </div>
          )}
        </div>
      </InputAdornment>
    </div>
  );
}
