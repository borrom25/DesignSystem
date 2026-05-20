import { Input } from "../Input";
import { CalendarIcon } from "lucide-react";
import { DatePickerProps } from "./DatePicker.types";
import { Size } from "@/types";
import { Popover } from "../Popover";
import { Calendar } from "../Calendar";
import { datePickerStyles } from "./styles";
import { cn } from "@/utils";
import { useDatePickerValue } from "./hooks/useDatePickerValue";
import { pointerEventsNone } from "@/styles/shared";
import { useInputAnchoredPopover } from "@/shared/hooks";
import { CloseBtn } from "../CloseBtn";
import { inputStyles } from "../Input/styles";

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
}: DatePickerProps) {
  const Icon = IconProp ?? CalendarIcon;

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
    handleCalendarChange,
    handleClear,
    hasValue,
  } = useDatePickerValue({
    value: valueProp,
    onChangeInput,
    onChangeDate,
    onClear,
    format: formatProp,
  });

  return (
    <div ref={containerRef} className={datePickerStyles.containerStyles}>
      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <Input
          variant={variant}
          className={className}
          size={size}
          defaultValue={defaultValue}
          onChange={handleInputChange}
          value={formattedValue}
          required={required}
          label={label}
          placeholder={placeholder}
          onFocus={openPopover}
          onClick={openPopover}
          clearable={false}
          suffix={
            (!hasValue || rightSlot) && (
              <div
                className={cn(
                  datePickerStyles.rightSlot,
                  disabled && pointerEventsNone
                )}
              >
                <Popover.Trigger>
                  {hasValue ? (
                    <CloseBtn
                      size={size}
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
            )
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
          <Calendar value={date} onChange={handleCalendarChange} />
        </Popover.Content>
      </Popover>
    </div>
  );
}
