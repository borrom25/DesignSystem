import { SegmentedProps } from "./Segmented.types";
import { SegmentedItem } from "./ui";
import { cn } from "@/utils";
import { segmentedStyles } from "./styles";
import { useSegmented } from "./hooks/useSegmented";

export function Segmented<T extends string | number = string>({
  value,
  defaultValue,
  onChange,
  options,
  position = "horizontal",
  shape = "default",
  className,
}: SegmentedProps<T>) {
  const {
    currentValue,
    indicatorStyles,
    handleChange,
    registerButtonRef,
    containerRef,
  } = useSegmented({
    value,
    defaultValue,
    onChange,
    options,
    position,
  });

  return (
    <div
      ref={containerRef}
      className={cn(
        segmentedStyles.base,
        segmentedStyles.position[position],
        segmentedStyles.shape[shape],
        className
      )}
    >
      {indicatorStyles && (
        <div
          className={cn(
            segmentedStyles.indicator,
            segmentedStyles.shape[shape]
          )}
          style={indicatorStyles}
        />
      )}
      {options.map(({ label, value, disabled }, i) => (
        <SegmentedItem
          key={`${value}_${i}`}
          value={value}
          label={label}
          disabled={disabled}
          active={currentValue === value}
          handleChange={handleChange}
          className={cn(
            segmentedStyles.itemBase,
            segmentedStyles.itemPosition[position],
            segmentedStyles.shape[shape]
          )}
          setRef={(el) => {
            registerButtonRef(value, el);
          }}
        />
      ))}
    </div>
  );
}
