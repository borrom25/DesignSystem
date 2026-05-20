import { useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { Size } from "@/types";
import { closeButtonSize, cn, getIconSize } from "@/utils";
import { CloseBtn } from "@/components/CloseBtn";
import { useWrappedState } from "../hooks/useWrappedState";
import { multiTagStyles, iconSizeMap } from "../styles";
import type { MultiTagTriggerProps } from "../types";

export function MultiTagTrigger({
  size = Size.Md,
  error,
  open,
  isFilled,
  disabled,
  className,
  ref,
  children,
  clearable = false,
  onClear,
  hasValue = false,
  maxVisibleRows = 2,
  ...props
}: MultiTagTriggerProps) {
  const showClear = clearable && hasValue && !disabled;
  const iconSize = getIconSize(size, iconSizeMap);

  const singleRowHeight = multiTagStyles.tagRowHeight[size];
  const { containerRef, isWrapped } = useWrappedState({ singleRowHeight });

  const maxHeight = useMemo(() => {
    const rowHeight = multiTagStyles.tagRowHeight[size];
    const gap = multiTagStyles.tagGap;
    return maxVisibleRows * rowHeight + (maxVisibleRows - 1) * gap;
  }, [size, maxVisibleRows]);

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onClear?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
    }
  };

  const triggerClassName = cn(
    multiTagStyles.trigger.base,
    multiTagStyles.trigger.size[size],
    hasValue
      ? multiTagStyles.trigger.inlinePaddingWithValue[size]
      : multiTagStyles.trigger.inlinePadding[size],
    open && !error && multiTagStyles.trigger.open,
    error && !isFilled && multiTagStyles.trigger.error.default,
    error && isFilled && multiTagStyles.trigger.error.filled,
    error && open && multiTagStyles.trigger.error.open,
    className
  );

  const tagsContainerClassName = cn(
    multiTagStyles.tagsContainer,
    multiTagStyles.tagsContainerPadding[size],
    isWrapped && multiTagStyles.tagsContainerWrapped
  );

  const controlsClassName = cn(
    multiTagStyles.controls.base,
    multiTagStyles.controls.size[size],
    isWrapped && multiTagStyles.controls.wrapped[size]
  );

  return (
    <div
      ref={ref}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      aria-haspopup="listbox"
      aria-expanded={open}
      onKeyDown={handleKeyDown}
      className={triggerClassName}
      {...props}
    >
      <div
        ref={containerRef}
        className={tagsContainerClassName}
        style={{ maxHeight }}
      >
        {children}
      </div>

      <div className={controlsClassName}>
        {showClear ? (
          <CloseBtn
            size={closeButtonSize(size)}
            onClick={handleClear}
            disabled={disabled}
            aria-label="Очистить все"
            error={error}
          />
        ) : (
          <ChevronDown
            size={iconSize}
            className={cn(
              multiTagStyles.icon,
              open && multiTagStyles.chevronOpen
            )}
          />
        )}
      </div>
    </div>
  );
}
