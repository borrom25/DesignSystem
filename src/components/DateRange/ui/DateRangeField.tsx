import { cn } from "@/utils";
import { Size } from "@/types";
import { Calendar } from "lucide-react";
import { CloseBtn } from "@/components/CloseBtn/CloseBtn";
import { InputAdornment, InputSeparator } from "@/shared/Input";
import { useDateRangeFieldChrome } from "../hooks/useDateRangeFieldChrome";
import { dateRangeStyles } from "../styles";
import type { DateRangeFieldProps } from "../DateRange.types";
import { DateRangeFieldSection } from "./DateRangeFieldSection";

export function DateRangeField({
  wrapperClassName,
  chipClassName,
  chipErrorClassName,
  formattedStart,
  formattedEnd,
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
            text={formattedStart}
            placeholder={placeholderStart}
            chipClassName={chipClassName}
            chipErrorClassName={chipErrorClassName}
            filled={!!formattedStart}
            isError={startError}
            disabled={disabled}
            ariaLabel="Выбрать дату начала"
            onClick={onStartClick}
          />

          <InputSeparator className={dateRangeStyles.separator} />

          <DateRangeFieldSection
            text={formattedEnd}
            placeholder={placeholderEnd}
            chipClassName={chipClassName}
            chipErrorClassName={chipErrorClassName}
            filled={!!formattedEnd}
            isError={endError}
            disabled={disabled}
            ariaLabel="Выбрать дату окончания"
            onClick={onEndClick}
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
                aria-label="Очистить даты"
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
