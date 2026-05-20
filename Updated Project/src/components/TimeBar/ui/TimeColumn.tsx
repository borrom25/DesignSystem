import { useLayoutEffect, useMemo, useState } from "react";
import { cn } from "@/utils";
import { useScreenSize } from "@/providers";
import { formatTimeValue } from "../utils";
import {
  columnClassesBase,
  columnClassesHeightFill,
  columnClassesHeightFixed,
  itemBaseClasses,
  itemHoverClasses,
  itemSelectedClasses,
  itemDisabledClasses,
} from "../styles";
import { CENTER_SPACER_HEIGHT, ITEM_HEIGHT } from "../constants/scroll";
import { generateRenderedValues } from "../utils/scroll";
import { useTimeColumnScroll } from "../hooks/useTimeColumnScroll";
import type { TimeColumnProps } from "../TimeBar.types";

export function TimeColumn({
  values,
  selectedValue,
  onSelect,
  disabled = false,
  className,
  fillHeight = false,
}: TimeColumnProps) {
  const { isMobile } = useScreenSize();
  const [edgePadding, setEdgePadding] = useState(CENTER_SPACER_HEIGHT);

  const renderedValues = useMemo(
    () => generateRenderedValues(values),
    [values]
  );

  const { containerRef, handleScroll, handleItemClick, handleKeyDown } =
    useTimeColumnScroll({
      values,
      selectedValue,
      onSelect,
      disabled,
      contentEdgePadding: edgePadding,
    });

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateEdgePadding = () => {
      const currentHeight = el.clientHeight;
      if (currentHeight < ITEM_HEIGHT) return;

      const nextPadding = Math.max(0, (currentHeight - ITEM_HEIGHT) / 2);
      setEdgePadding((prev) =>
        Math.abs(prev - nextPadding) < 0.5 ? prev : nextPadding
      );
    };

    updateEdgePadding();
    const resizeObserver = new ResizeObserver(updateEdgePadding);
    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, [containerRef]);

  if (values.length === 0) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      data-mobile={isMobile}
      className={cn(
        columnClassesBase,
        fillHeight ? columnClassesHeightFill : columnClassesHeightFixed,
        disabled && itemDisabledClasses,
        className
      )}
      role="listbox"
      aria-label="Time selection"
      tabIndex={disabled ? undefined : 0}
      onScroll={handleScroll}
      onKeyDown={handleKeyDown}
    >
      <div
        aria-hidden="true"
        className="shrink-0 pointer-events-none"
        style={{ height: edgePadding }}
      />
      {renderedValues.map(({ key, value, absoluteIndex }) => {
        const isSelected = value === selectedValue;
        return (
          <button
            key={key}
            type="button"
            role="option"
            aria-selected={isSelected}
            data-mobile={isMobile}
            className={cn(
              itemBaseClasses,
              itemHoverClasses,
              isSelected && itemSelectedClasses
            )}
            onClick={() => handleItemClick(value)}
            disabled={disabled}
            data-index={absoluteIndex}
          >
            {formatTimeValue(value)}
          </button>
        );
      })}
      <div
        aria-hidden="true"
        className="shrink-0 pointer-events-none"
        style={{ height: edgePadding }}
      />
    </div>
  );
}
