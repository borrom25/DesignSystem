import { cn } from "@/utils";
import { Size } from "@/types";
import { dateInputMaxLength, dateInputPlaceholder } from "../constants";
import { useDateRangeFieldSection } from "../hooks/useDateRangeFieldSection";
import { dateRangeStyles } from "../styles";

export interface DateRangeFieldSectionProps {
  value: string;
  label: string;
  placeholder: string;
  filled: boolean;
  active: boolean;
  isError: boolean;
  disabled: boolean;
  size: Size;
  ariaLabel: string;
  onClick?: () => void;
  onValueChange?: (value: string) => void;
  onCommit?: () => void;
}

export function DateRangeFieldSection({
  value,
  label,
  placeholder = dateInputPlaceholder,
  filled,
  active,
  isError,
  disabled,
  size,
  ariaLabel,
  onClick,
  onValueChange,
  onCommit,
}: DateRangeFieldSectionProps) {
  const {
    inputRef,
    isInteractive,
    isLabelActive,
    handleSectionClick,
    handleInputClick,
    handleInputFocus,
  } = useDateRangeFieldSection({
    disabled,
    filled,
    active,
    onClick,
  });

  return (
    <div className={dateRangeStyles.section.base}>
      <div
        className={cn(
          dateRangeStyles.section.button,
          dateRangeStyles.section.buttonStacked,
          isInteractive && dateRangeStyles.section.interactive
        )}
        onClick={handleSectionClick}
      >
        <span
          className={cn(
            dateRangeStyles.section.label,
            isLabelActive && dateRangeStyles.section.labelActive,
            isLabelActive && dateRangeStyles.sectionLabelActiveSize[size],
            !isLabelActive && dateRangeStyles.section.labelCentered,
            !isLabelActive && dateRangeStyles.sectionLabelCenteredSize[size]
          )}
        >
          {label}
        </span>

        <input
          ref={inputRef}
          value={value}
          onChange={(event) => onValueChange?.(event.target.value)}
          onBlur={onCommit}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              onCommit?.();
            }
          }}
          inputMode="numeric"
          maxLength={dateInputMaxLength}
          placeholder={placeholder}
          autoComplete="off"
          className={cn(
            dateRangeStyles.section.input,
            dateRangeStyles.sectionInputSize[size],
            isError
              ? dateRangeStyles.section.inputError
              : dateRangeStyles.section.inputDefault,
            !isLabelActive && dateRangeStyles.section.inputHidden
          )}
          aria-label={ariaLabel}
          disabled={disabled}
          onClick={handleInputClick}
          onFocus={handleInputFocus}
        />
      </div>
    </div>
  );
}
