import { Size } from "@/types";
import { Popover, PopoverSurface } from "@/components/Popover";
import { TimeBar } from "@/components/TimeBar";
import type { TimePickerProps } from "./TimePicker.types";
import { useTimePickerValue } from "./hooks/useTimePickerValue";
import { Input } from "../Input";
import { Clock } from "lucide-react";
import { timePickerStyles } from "./styles";
import { pointerEventsNone } from "@/styles/shared";
import { cn } from "@/utils";
import { useInputAnchoredPopover } from "@/shared/hooks";
import { CloseBtn } from "../CloseBtn";
import { inputStyles } from "../Input/styles";

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
  const format = formatProp ?? (showSeconds ? "HH:mm:ss" : "HH:mm");

  const {
    containerRef,
    open,
    setOpen,
    openPopover,
    handleRetainFieldInteraction,
    handleFocusOutside,
  } = useInputAnchoredPopover(disabled);

  const {
    value: currentTime,
    formattedValue,
    hasValue,
    handleInputChange,
    handleTimeChange,
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
    <div ref={containerRef} className={timePickerStyles.containerStyles}>
      <Popover open={open} onOpenChange={setOpen}>
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
          onFocus={openPopover}
          onClick={openPopover}
          clearable={false}
          suffix={
            (!hasValue || rightSlot) && (
              <div
                className={cn(
                  timePickerStyles.rightSlot,
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
                    <div className={timePickerStyles.iconWrapper}>
                      <Clock
                        className={cn(
                          timePickerStyles.iconStyles,
                          timePickerStyles.iconSize[size]
                        )}
                      />
                    </div>
                  )}
                </Popover.Trigger>
                {rightSlot}
              </div>
            )
          }
        />

        <Popover.Content
          side="bottom"
          align="end"
          onOpenAutoFocus={(event) => event.preventDefault()}
          onInteractOutside={(event) =>
            handleRetainFieldInteraction(event, event.target)
          }
          onFocusOutside={handleFocusOutside}
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
    </div>
  );
}
