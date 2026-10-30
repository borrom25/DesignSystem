import { cn } from "@/utils";
import { Size } from "@/types";
import { FieldHint } from "@/components/Field";
import { Popover } from "@/components/Popover";
import { TimeBar } from "@/components/TimeBar";
import { wrapperClasses } from "@/components/Field/styles";
import { useInputIds } from "@/components/Input/hooks/useInputIds";
import {
  dataRangePopover,
  datePlaceholderEnd,
  datePlaceholderStart,
} from "./constants";
import { dateRangeStyles } from "./styles";
import type { DateRangeProps } from "./DateRange.types";
import { useDateRangeCalendar } from "./hooks/useDateRangeCalendar";
import { useDateRangeClassNames } from "./hooks/useDateRangeClassNames";
import { useDateRangeInteraction } from "./hooks/useDateRangeInteraction";
import { useDateRangeTimeBar } from "./hooks/useDateRangeTimeBar";
import { useDateRangeValue } from "./hooks/useDateRangeValue";
import { useDateRangeVisualState } from "./hooks/useDateRangeVisualState";
import { DateRangeCalendar } from "./ui/DateRangeCalendar";
import { DateRangeField } from "./ui/DateRangeField";

export function DateRange({
  size = Size.Md,
  disabled = false,
  error = false,
  showTimeBar = false,
  required,
  hint,
  hintError,
  value,
  defaultValue,
  onChange,
  onClear,
  placeholderStart = datePlaceholderStart,
  placeholderEnd = datePlaceholderEnd,
  className,
  fieldClassName,
  startError = false,
  endError = false,
  timeBarFooter,
  id: idProp,
}: DateRangeProps) {
  const { hintId } = useInputIds({
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
    startInputValue,
    endInputValue,
    hasValue,
    handleClear,
    handleBoundSelect,
    handleTimeSelect,
    handleBoundInputChange,
    handleBoundInputCommit,
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

  const { wrapperClassName } = useDateRangeClassNames({
    size,
    disabled,
    isError,
    open,
  });

  const {
    displayMonth,
    numberOfMonths,
    key: calendarKey,
  } = useDateRangeCalendar({
    activeBound,
    currentValue,
    showTimeBar,
    open,
  });

  const {
    activeDate,
    value: activeTimeValue,
    key: timeBarKey,
    handleChange: handleActiveTimeChange,
    handleConfirm: handleActiveTimeConfirm,
  } = useDateRangeTimeBar({
    activeBound,
    currentValue,
    setActiveBound,
    handleOpenChange,
    handleTimeSelect,
  });

  return (
    <div className={cn(wrapperClasses, className)}>
      <Popover open={open} onOpenChange={handleOpenChange}>
        <Popover.Trigger>
          <DateRangeField
            wrapperClassName={cn(wrapperClassName, fieldClassName)}
            startInputValue={startInputValue}
            endInputValue={endInputValue}
            placeholderStart={placeholderStart}
            placeholderEnd={placeholderEnd}
            size={size}
            disabled={disabled}
            required={required}
            activeBound={activeBound}
            clearable
            hasValue={hasValue}
            startError={startError}
            endError={endError}
            onClear={handleClearClick}
            onClick={handleFieldClick}
            onStartClick={() => handleBoundClick("start")}
            onEndClick={() => handleBoundClick("end")}
            onStartInputChange={(nextValue) =>
              handleBoundInputChange("start", nextValue)
            }
            onEndInputChange={(nextValue) =>
              handleBoundInputChange("end", nextValue)
            }
            onStartInputCommit={() => handleBoundInputCommit("start")}
            onEndInputCommit={() => handleBoundInputCommit("end")}
          />
        </Popover.Trigger>

        <Popover.Content
          className={dataRangePopover.contentWidth}
          onOpenAutoFocus={(event) => event.preventDefault()}
        >
          <Popover.Surface className={dataRangePopover.surface}>
            <div className={cn(showTimeBar && dateRangeStyles.popover.content)}>
              <DateRangeCalendar
                key={calendarKey}
                value={currentValue}
                onSelect={handleCalendarSelect}
                displayMonth={displayMonth}
                numberOfMonths={numberOfMonths}
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
                    className={dataRangePopover.timeBar}
                  />
                </div>
              )}
            </div>
          </Popover.Surface>
        </Popover.Content>
      </Popover>

      {showHint && (
        <FieldHint size={size} error={!!hintError} id={hintId}>
          {hintError || hint}
        </FieldHint>
      )}
    </div>
  );
}
