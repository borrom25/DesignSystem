import { cn } from "@/utils";
import { Size } from "@/types";
import { useMemo } from "react";
import { FieldLabel, FieldHint } from "@/components/Field";
import { Popover, PopoverSurface } from "@/components/Popover";
import { TimeBar } from "@/components/TimeBar";
import { wrapperClasses } from "@/components/Field/styles";
import { useInputIds } from "@/components/Input/hooks/useInputIds";
import { dateRangeStyles } from "./styles";
import type { DateRangeProps } from "./DateRange.types";
import { useDateRangeClassNames } from "./hooks/useDateRangeClassNames";
import { useDateRangeInteraction } from "./hooks/useDateRangeInteraction";
import { useDateRangeValue } from "./hooks/useDateRangeValue";
import { useDateRangeVisualState } from "./hooks/useDateRangeVisualState";
import { DateRangeCalendar } from "./ui/DateRangeCalendar";
import { DateRangeField } from "./ui/DateRangeField";

export function DateRange({
  size = Size.Md,
  disabled = false,
  error = false,
  showTimeBar = false,
  label,
  required,
  hint,
  hintError,
  value,
  defaultValue,
  onChange,
  onClear,
  placeholderStart = "Дата поступления",
  placeholderEnd = "Дата закрытия",
  className,
  fieldClassName,
  startError = false,
  endError = false,
  timeBarFooter,
  id: idProp,
}: DateRangeProps) {
  const { inputId, hintId } = useInputIds({
    id: idProp,
    hint,
    hintError,
  });

  const { isError, showHint } = useDateRangeVisualState({
    error,
    hintError,
    hint,
    startError,
    endError,
  });

  const {
    value: currentValue,
    formattedStart,
    formattedEnd,
    hasValue,
    handleClear,
    handleBoundSelect,
    handleTimeSelect,
  } = useDateRangeValue({
    value,
    defaultValue,
    onChange,
    onClear,
    disabled,
    showTimeBar,
  });

  const {
    open,
    activeBound,
    setActiveBound,
    handleBoundClick,
    handleFieldClick,
    handleOpenChange,
    handleClearClick,
    handleCalendarSelect,
  } = useDateRangeInteraction({
    disabled,
    currentValue,
    showTimeBar,
    handleClear,
    handleBoundSelect,
  });

  const { wrapperClassName, chipClassName, chipErrorClassName } =
    useDateRangeClassNames({
      size,
      disabled,
      isError,
      open,
    });

  const calendarDisplayMonth =
    activeBound === "end"
      ? (currentValue.end ?? currentValue.start ?? new Date())
      : (currentValue.start ?? currentValue.end ?? new Date());

  const calendarMonths = showTimeBar ? 1 : 2;
  const calendarKey = `${activeBound ?? "none"}-${calendarDisplayMonth.getFullYear()}-${calendarDisplayMonth.getMonth()}-${calendarMonths}-${open ? "open" : "closed"}`;
  const activeDate = activeBound ? currentValue[activeBound] : undefined;

  const activeTimeValue = useMemo(() => {
    if (activeDate) {
      return {
        hours: activeDate.getHours(),
        minutes: activeDate.getMinutes(),
        seconds: activeDate.getSeconds(),
      };
    }

    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }, [activeDate]);

  const timeBarKey = useMemo(() => {
    return `timebar-${activeBound ?? "none"}-${activeDate?.getTime() ?? "empty"}`;
  }, [activeBound, activeDate]);

  const handleActiveTimeChange = (timeValue: {
    hours: number;
    minutes: number;
    seconds: number;
  }) => {
    if (!activeBound) {
      return;
    }

    handleTimeSelect(activeBound, timeValue);
  };

  const handleActiveTimeConfirm = (timeValue: {
    hours: number;
    minutes: number;
    seconds: number;
  }) => {
    const confirmedBound = activeBound;

    handleActiveTimeChange(timeValue);

    if (confirmedBound === "start") {
      setActiveBound("end");
    } else if (confirmedBound === "end") {
      handleOpenChange(false);
    }
  };

  return (
    <div className={cn(wrapperClasses, className)}>
      {label && (
        <FieldLabel
          size={size}
          required={required}
          disabled={disabled}
          htmlFor={inputId}
        >
          {label}
        </FieldLabel>
      )}

      <Popover open={open} onOpenChange={handleOpenChange}>
        <Popover.Trigger>
          <DateRangeField
            wrapperClassName={cn(wrapperClassName, fieldClassName)}
            chipClassName={chipClassName}
            chipErrorClassName={chipErrorClassName}
            formattedStart={formattedStart}
            formattedEnd={formattedEnd}
            placeholderStart={placeholderStart}
            placeholderEnd={placeholderEnd}
            size={size}
            disabled={disabled}
            activeBound={activeBound}
            clearable
            hasValue={hasValue}
            startError={startError}
            endError={endError}
            onClear={handleClearClick}
            onClick={handleFieldClick}
            onStartClick={() => handleBoundClick("start")}
            onEndClick={() => handleBoundClick("end")}
          />
        </Popover.Trigger>

        <Popover.Content className="w-max">
          <PopoverSurface className="w-max border-none bg-transparent p-0 shadow-none">
            <div className={cn(showTimeBar && dateRangeStyles.popover.content)}>
              <DateRangeCalendar
                key={calendarKey}
                value={currentValue}
                onSelect={handleCalendarSelect}
                displayMonth={calendarDisplayMonth}
                numberOfMonths={calendarMonths}
                disabled={disabled}
                className={cn(showTimeBar && "!rounded-r-none")}
              />

              {showTimeBar && (
                <div className={dateRangeStyles.popover.timeBarPanel}>
                  <TimeBar
                    key={timeBarKey}
                    value={activeTimeValue}
                    onChange={handleActiveTimeChange}
                    onConfirm={handleActiveTimeConfirm}
                    disabled={disabled || !activeBound || !activeDate}
                    columnsFillHeight
                    footerSlot={timeBarFooter}
                    className="min-h-0 w-full flex-1 rounded-none border-0 bg-transparent shadow-none"
                  />
                </div>
              )}
            </div>
          </PopoverSurface>
        </Popover.Content>
      </Popover>

      {showHint && (
        <FieldHint size={size} error={isError} id={hintId}>
          {hintError || hint}
        </FieldHint>
      )}
    </div>
  );
}
