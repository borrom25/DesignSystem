import { useCallback, useEffect, useRef, useState } from "react";
import { Size } from "@/types";
import { cn } from "@/utils";
import { ListItem } from "@/components/ListItem";
import { Popover, PopoverSurface } from "@/components/Popover";
import type { TabsOverflowItem, TabsOverflowProps } from "./TabsOverflow.types";
import { tabsOverflowStyles } from "./styles";
import { tabsOverflowGapPx } from "@/constants/overflow";
import { useTabsOverflowState } from "./hooks/useTabsOverflowState";
import { useOverflowLayout } from "@/hooks";
import { TabTrigger } from "./ui";

export function TabsOverflow<T extends string | number = string>({
  items,
  value,
  defaultValue,
  onValueChange,
  size = Size.Md,
  disabled = false,
  moreLabel = "Еще",
  indicatorOffset = 0,
  className,
  sideMenu,
  ...restProps
}: TabsOverflowProps<T>) {
  const state = useTabsOverflowState({
    items,
    value,
    defaultValue,
    onValueChange,
    disabled,
  });
  const layout = useOverflowLayout<TabsOverflowItem<T>>({
    items,
    gap: tabsOverflowGapPx,
  });

  const tabButtonRefs = useRef<Map<T | undefined, HTMLButtonElement>>(
    new Map()
  );
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
  } | null>(null);

  const tabTriggerClassName = cn(
    tabsOverflowStyles.triggerBase,
    tabsOverflowStyles.triggerSize[size],
    tabsOverflowStyles.tabState
  );

  const moreTriggerClassName = cn(
    tabsOverflowStyles.triggerBase,
    tabsOverflowStyles.triggerSize[size],
    tabsOverflowStyles.moreTriggerState
  );

  useEffect(() => {
    if (layout.hiddenItems.length === 0 && state.open) {
      state.setOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layout.hiddenItems.length, state.open, state.setOpen]);

  useEffect(() => {
    const activeEl = tabButtonRefs.current.get(state.value);
    if (activeEl && layout.containerRef.current) {
      const containerRect = layout.containerRef.current.getBoundingClientRect();
      const elRect = activeEl.getBoundingClientRect();
      setIndicatorStyle({
        left: elRect.left - containerRect.left,
        width: elRect.width,
      });
    } else {
      setIndicatorStyle(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.value, layout.visibleItems]);

  const registerTabButton = useCallback(
    (value: T, element: HTMLButtonElement | null) => {
      if (element) {
        tabButtonRefs.current.set(value, element);
        return;
      }

      tabButtonRefs.current.delete(value);
    },
    []
  );

  const renderHiddenItemContent = useCallback(
    (item: TabsOverflowItem<T>) => (
      <span className={tabsOverflowStyles.item}>
        <span className="truncate">{item.label}</span>
        {item.counter}
      </span>
    ),
    []
  );

  return (
    <div
      ref={layout.containerRef}
      className={cn(tabsOverflowStyles.container, className)}
      {...restProps}
    >
      {layout.visibleItems.map((item) => (
        <TabTrigger
          key={item.value}
          item={item}
          className={tabTriggerClassName}
          isSelected={item.value === state.value}
          isDisabled={disabled || Boolean(item.disabled)}
          registerTabButton={registerTabButton}
          onSelect={state.onSelect}
        />
      ))}

      {indicatorStyle && (
        <div
          aria-hidden
          className={tabsOverflowStyles.indictor}
          style={{
            transform: `translateX(${indicatorStyle.left}px)`,
            width: indicatorStyle.width,
            bottom: -indicatorOffset,
          }}
        />
      )}

      {layout.hiddenItems.length > 0 && (
        <Popover open={state.open} onOpenChange={state.setOpen}>
          <Popover.Trigger>
            <button type="button" className={moreTriggerClassName}>
              {moreLabel}
            </button>
          </Popover.Trigger>

          <Popover.Content align="end" sideOffset={4} sideMenu={sideMenu}>
            <PopoverSurface>
              <Popover.ScrollArea maxHeight={320}>
                <div className={tabsOverflowStyles.list}>
                  {layout.hiddenItems.map((item) => (
                    <ListItem
                      key={item.value}
                      size={tabsOverflowStyles.listItemSizeMap[size]}
                      selected={item.value === state.value}
                      disabled={disabled || item.disabled}
                      onClick={() => state.onSelect(item.value)}
                    >
                      {renderHiddenItemContent(item)}
                    </ListItem>
                  ))}
                </div>
              </Popover.ScrollArea>
            </PopoverSurface>
          </Popover.Content>
        </Popover>
      )}

      <div aria-hidden className={tabsOverflowStyles.measurement}>
        {items.map((item, index) => (
          <button
            key={item.value}
            type="button"
            className={tabTriggerClassName}
            ref={(element) => {
              layout.itemMeasureRefs.current[index] = element;
            }}
          >
            <span className={tabsOverflowStyles.inlineItem}>
              <span className="truncate">{item.label}</span>
              {item.counter}
            </span>
          </button>
        ))}
        <button
          type="button"
          className={moreTriggerClassName}
          ref={layout.moreMeasureRef}
        >
          {moreLabel}
        </button>
      </div>
    </div>
  );
}
