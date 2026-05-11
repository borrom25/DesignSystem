import { useOverflowLayout } from "@/hooks";
import { tabsOverflowGapPx } from "@/constants";
import { BarMenuItem, BarMenuProps } from "./BarMenu.types.ts";
import { Menu } from "lucide-react";
import { cn } from "@/utils";
import { barMenuStyles } from "./styles";
import { ListItem } from "@/components";
import React, { useCallback, useRef } from "react";
import { BarMenuTrigger } from "./ui";
import { Size } from "@/types";

export const BarMenu = ({
  items,
  value,
  onMoreClick,
  onSelect,
}: BarMenuProps) => {
  const tabButtonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const {
    visibleItems,
    containerRef,
    itemMeasureRefs,
    moreMeasureRef,
    hiddenItems,
  } = useOverflowLayout<BarMenuItem>({
    items,
    gap: tabsOverflowGapPx,
  });

  const registerTabButton = useCallback(
    (value: string, element: HTMLButtonElement | null) => {
      if (element) return tabButtonRefs.current.set(value, element);
      tabButtonRefs.current.delete(value);
    },
    []
  );

  const setMeasureRef = useCallback(
    (index: number) => (el: HTMLButtonElement | null) => {
      itemMeasureRefs.current[index] = el;
    },
    [itemMeasureRefs]
  );

  return (
    <div ref={containerRef} className={cn(barMenuStyles.container)}>
      <div className={barMenuStyles.base}>
        {visibleItems.map((item) => {
          const isSelected = value === item.id;
          return (
            <BarMenuTrigger
              key={item.id}
              item={item}
              onSelect={onSelect}
              selected={isSelected}
              registerTabButton={registerTabButton}
              className={barMenuStyles.triggerBase}
            />
          );
        })}
        {hiddenItems.length > 0 && (
          <ListItem
            onClick={onMoreClick}
            iconLeft={Menu}
            iconOnly
            size={Size.Md}
            className={barMenuStyles.triggerBase}
          >
            <React.Fragment />
          </ListItem>
        )}
      </div>

      <div aria-hidden className={barMenuStyles.measurement}>
        {items.map(({ id, label }, index) => (
          <button
            key={id}
            type="button"
            className={barMenuStyles.measurementItem}
            ref={setMeasureRef(index)}
          >
            {label}
          </button>
        ))}
        <button type="button" ref={moreMeasureRef}>
          <Menu onClick={onMoreClick} />
        </button>
      </div>
    </div>
  );
};
