import { cn, withStopPropagationClick } from "@/utils";
import { dateRangeStyles } from "../styles";
import { DateChip } from "./DateChip";

export interface DateRangeFieldSectionProps {
  text: string;
  placeholder: string;
  chipClassName: string;
  chipErrorClassName: string;
  filled: boolean;
  isError: boolean;
  disabled: boolean;
  ariaLabel: string;
  onClick?: () => void;
}

export function DateRangeFieldSection({
  text,
  placeholder,
  chipClassName,
  chipErrorClassName,
  filled,
  isError,
  disabled,
  ariaLabel,
  onClick,
}: DateRangeFieldSectionProps) {
  const isInteractive = !disabled && !!onClick;
  const handleClick = withStopPropagationClick(
    isInteractive ? onClick : undefined
  );

  return (
    <div className={dateRangeStyles.section.base}>
      <button
        type="button"
        className={cn(
          dateRangeStyles.section.button,
          isInteractive && dateRangeStyles.section.interactive
        )}
        onClick={handleClick}
        disabled={disabled}
        aria-label={ariaLabel}
      >
        <DateChip
          className={isError ? chipErrorClassName : chipClassName}
          isFilled={filled}
          isError={isError}
          disabled={disabled}
          filledClassName={dateRangeStyles.chip.filled}
          placeholderClassName={dateRangeStyles.chip.placeholder}
          errorHoverClassName={dateRangeStyles.chip.errorHover}
        >
          {text || placeholder}
        </DateChip>
      </button>
    </div>
  );
}
