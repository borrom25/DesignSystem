import { useSegmented } from "@/components/Segmented/hooks/useSegmented";
import { segmentedStyles } from "@/components/Segmented/styles";
import { SegmentedItem } from "@/components/Segmented/ui";
import { useTheme } from "@/providers";
import { cn } from "@/utils";
import { THEME_OPTIONS } from "./model/constants";
import { themeSwitcherStyles } from "./styles";
import type { ThemeSwitcherProps } from "./ThemeSwitcher.types";
import { useEffect } from "react";

export function ThemeSwitcher({ className, size = "sm" }: ThemeSwitcherProps) {
  const { setTheme, theme } = useTheme();
  const {
    currentValue,
    indicatorStyles,
    handleChange,
    registerButtonRef,
    containerRef,
    updateIndicator,
  } = useSegmented({
    value: theme,
    onChange: setTheme,
    options: THEME_OPTIONS,
  });

  useEffect(() => {
    updateIndicator();
  }, [size, updateIndicator]);

  return (
    <div
      ref={containerRef}
      className={cn(
        segmentedStyles.base,
        segmentedStyles.position.horizontal,
        segmentedStyles.shape.round,
        segmentedStyles.size.sm,
        themeSwitcherStyles.root,
        className
      )}
    >
      {indicatorStyles && (
        <div
          className={cn(segmentedStyles.indicator, segmentedStyles.shape.round)}
          style={indicatorStyles}
        />
      )}
      {THEME_OPTIONS.map(({ label, value, disabled }) => (
        <SegmentedItem
          key={value}
          value={value}
          label={label}
          disabled={disabled}
          active={currentValue === value}
          handleChange={handleChange}
          className={cn(
            segmentedStyles.itemBase,
            segmentedStyles.shape.round,
            themeSwitcherStyles.item,
            themeSwitcherStyles.itemSize[size]
          )}
          setRef={(el) => registerButtonRef(value, el)}
        />
      ))}
    </div>
  );
}
