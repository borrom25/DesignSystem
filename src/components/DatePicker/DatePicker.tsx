import { useInputAnchoredPopover } from "@/shared/hooks";
import { pointerEventsNone } from "@/styles/shared";
import { Size } from "@/types";
import { cn } from "@/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../Calendar";
import { CloseBtn } from "../CloseBtn";
import { Input } from "../Input";
import { inputStyles } from "../Input/styles";
import { Popover } from "../Popover";
import { DatePickerProps } from "./DatePicker.types";
import { useDatePickerValue } from "./hooks/useDatePickerValue";
import { datePickerStyles } from "./styles";

export function DatePicker({
  label = "Дата",
  size = Size.Sm,
  value: valueProp,
  defaultValue,
  onChangeInput,
  onChangeDate,
  placeholder,
  format: formatProp = "dd.MM.yyyy",
  icon: IconProp,
  rightSlot,
  disabled,
  error,
  hintError,
  hint,
  className,
  required,
  onClear,
  variant,
  minDate: minDateProp,
  maxDate: maxDateProp,
  calendarProps,
}: DatePickerProps) {
  const Icon = IconProp ?? CalendarIcon;
  const { displayMonth, ...restCalendarProps } = calendarProps ?? {};

  const {
    containerRef,
    open: popoverOpen,
    setOpen: setPopoverOpen,
    openPopover,
    handleRetainFieldInteraction,
    handleFocusOutside,
  } = useInputAnchoredPopover(!!disabled);

  const {
    date,
    formattedValue,
    handleInputChange,
    handleKeyDown,
    handleCalendarChange,
    handleClear,
    hasValue,
    inputRef,
    minDate,
    maxDate,
  } = useDatePickerValue({
    value: valueProp,
    onChangeInput,
    onChangeDate,
    onClear,
    format: formatProp,
    minDate: minDateProp ?? restCalendarProps.minDate,
    maxDate: maxDateProp ?? restCalendarProps.maxDate,
  });

  return (
    <div ref={containerRef} className={datePickerStyles.containerStyles}>
      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <Input
          ref={inputRef}
          variant={variant}
          className={className}
          size={size}
          defaultValue={defaultValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          value={formattedValue}
          required={required}
          label={label}
          labelActive={popoverOpen || Boolean(placeholder)}
          placeholder={placeholder}
          onFocus={openPopover}
          onClick={openPopover}
          clearable={false}
          suffix={
            <div
              className={cn(
                datePickerStyles.rightSlot,
                disabled && pointerEventsNone
              )}
            >
              <Popover.Trigger>
                {hasValue ? (
                  <CloseBtn
                    size={Size.Md}
                    onClick={handleClear}
                    className={inputStyles.clearButton}
                  />
                ) : (
                  <div className={datePickerStyles.iconWrapper}>
                    <Icon
                      className={cn(
                        datePickerStyles.iconStyles,
                        datePickerStyles.size[size]
                      )}
                    />
                  </div>
                )}
              </Popover.Trigger>
              {rightSlot}
            </div>
          }
          disabled={disabled}
          aria-required={required}
          hintError={hintError}
          error={error}
          hint={hint}
        />
        <Popover.Content
          onOpenAutoFocus={(event) => event.preventDefault()}
          onInteractOutside={(event) =>
            handleRetainFieldInteraction(event, event.target)
          }
          onFocusOutside={handleFocusOutside}
        >
          <Calendar
            value={date}
            onChange={handleCalendarChange}
            displayMonth={date ?? displayMonth}
            {...restCalendarProps}
            minDate={minDate}
            maxDate={maxDate}
          />
        </Popover.Content>
      </Popover>
    </div>
  );
}
