import { useState } from "react";
import { Size } from "@/types";
import { Popover, PopoverSurface } from "@/components/Popover";
import { TimeBar } from "@/components/TimeBar";
import type { TimePickerProps } from "./TimePicker.types";
import { useTimePickerValue } from "./hooks/useTimePickerValue";
import { Input } from "../Input";
import { IconButton } from "../IconButton";
import { Clock } from "lucide-react";
import { timePickerStyles } from "./styles";
import { pointerEventsNone } from "@/styles/shared";
import { cn } from "@/utils";

export function TimePicker({
  size = Size.Md,
  disabled = false,
  error = false,
  label = "Время",
  required,
  hint,
  hintError,
  value: valueProp,
  time,
  defaultValue,
  defaultTime,
  onChangeValue,
  onChangeTime,
  onClear,
  format: formatProp,
  placeholder = "ЧЧ:ММ",
  className,
  fieldClassName,
  showSeconds = true,
  use24Hour = true,
  showNowButton = true,
  showConfirmButton = true,
  nowButtonText = "Сейчас",
  confirmButtonText = "Ок",
  rightSlot,
}: TimePickerProps) {
  const [open, setOpen] = useState(false);
  const format = formatProp ?? (showSeconds ? "HH:mm:ss" : "HH:mm");

  const {
    value: currentTime,
    formattedValue,
    hasValue,
    handleInputChange,
    handleTimeChange,
    handleValueChange,
    handleClear,
  } = useTimePickerValue({
    value: valueProp,
    time,
    defaultValue,
    defaultTime,
    onChangeValue,
    onChangeTime,
    onClear,
    format,
    disabled,
  });

  const handleConfirm = (timeValue: {
    hours: number;
    minutes: number;
    seconds: number;
  }) => {
    handleTimeChange(timeValue);
    setOpen(false);
  };

  return (
    <Input
      className={className}
      inputClassName={fieldClassName}
      value={formattedValue}
      onChange={handleInputChange}
      required={required}
      label={label}
      placeholder={placeholder}
      size={size}
      disabled={disabled}
      hint={hint}
      hintError={hintError}
      error={error}
      onClear={handleClear}
      suffix={
        (!hasValue || rightSlot) && (
          <div
            className={cn(
              timePickerStyles.rightSlot,
              disabled && pointerEventsNone
            )}
          >
            <Popover open={open} onOpenChange={setOpen}>
              <Popover.Trigger>
                {!hasValue && (
                  <IconButton
                    icon={Clock}
                    className={timePickerStyles.iconSize[size]}
                    type="icon"
                    color="inverse"
                  />
                )}
              </Popover.Trigger>

              <Popover.Content
                side="bottom"
                align="end"
                onCloseAutoFocus={handleValueChange}
              >
                <PopoverSurface>
                  <TimeBar
                    value={currentTime}
                    onChange={handleTimeChange}
                    onConfirm={handleConfirm}
                    disabled={disabled}
                    showSeconds={showSeconds}
                    use24Hour={use24Hour}
                    showNowButton={showNowButton}
                    showConfirmButton={showConfirmButton}
                    nowButtonText={nowButtonText}
                    confirmButtonText={confirmButtonText}
                  />
                </PopoverSurface>
              </Popover.Content>
            </Popover>
            {rightSlot}
          </div>
        )
      }
    />
  );
}
