import { Input } from "../Input";
import { CalendarIcon } from "lucide-react";
import { DatePickerProps } from "./DatePicker.types";
import { Size } from "@/types";
import { Popover } from "../Popover";
import { Calendar } from "../Calendar";
import { datePickerStyles } from "./styles";
import { cn } from "@/utils";
import { useDatePickerValue } from "./hooks/useDatePickerValue";
import { IconButton } from "../IconButton";
import { pointerEventsNone } from "@/styles/shared";

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
      suffix={
        (!hasValue || rightSlot) && (
          <div
            className={cn(
              datePickerStyles.rightSlot,
              disabled && pointerEventsNone
            )}
          >
            {!hasValue && (
              <Popover>
                <Popover.Trigger>
                  <IconButton
                    icon={Icon}
                    type="icon"
                    color="inverse"
                    className={datePickerStyles.size[size]}
                  />
                </Popover.Trigger>
                <Popover.Content>
                  <Calendar value={date} onChange={handleCalendarChange} />
                </Popover.Content>
              </Popover>
            )}
            {rightSlot}
          </div>
        )
      }
      disabled={disabled}
      aria-required={required}
      onClear={handleClear}
      hintError={hintError}
      error={error}
      hint={hint}
    />
  );
}
