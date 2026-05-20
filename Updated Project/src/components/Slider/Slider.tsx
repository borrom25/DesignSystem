import { cn } from "@/utils";
import type { SliderProps } from "./Slider.types";
import { sliderStyles } from "./styles";
import { useSliderValue } from "./hooks";
import { ThumbCircleIcon, ValuePopoverArrowIcon } from "./ui";

export function Slider({
  value,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  showValuePopover = true,
  alwaysShowPopover = false,
  disabled = false,
  className,
  "aria-label": ariaLabel,
  ...restProps
}: SliderProps) {
  const { percentage, handleChange } = useSliderValue({
    value,
    min,
    max,
    disabled,
    onValueChange,
  });
  const valueLabel = String(value);
  const tooltipMaxWidth = valueLabel.length * 9 + 24;

  return (
    <div
      className={cn(
        sliderStyles.wrapper,
        disabled && sliderStyles.disabled,
        className
      )}
      {...restProps}
    >
      <div className={sliderStyles.container}>
        <div className={sliderStyles.track}>
          <div
            className={cn(
              sliderStyles.activeTrack,
              sliderStyles.activeTrackColor
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div
          className={sliderStyles.thumbWrapper}
          style={{ left: `${percentage}%` }}
        >
          {showValuePopover && (
            <div
              className={cn(
                sliderStyles.valuePopover,
                alwaysShowPopover && sliderStyles.valuePopoverAlwaysShow,
                disabled && sliderStyles.valuePopoverDisabled
              )}
              style={{ maxWidth: `${tooltipMaxWidth}px` }}
            >
              {valueLabel}
              <ValuePopoverArrowIcon />
            </div>
          )}
          <div className={sliderStyles.thumb}>
            <ThumbCircleIcon />
          </div>
        </div>

        <input
          type="range"
          className={sliderStyles.input}
          value={value}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          onChange={handleChange}
          aria-label={ariaLabel}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
        />
      </div>
    </div>
  );
}
