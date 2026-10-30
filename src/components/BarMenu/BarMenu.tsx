import { useOverflowLayout } from "@/hooks";
import { tabsOverflowGapPx } from "@/constants";
import { BarMenuItem, BarMenuProps } from "./BarMenu.types.ts";
import { Menu } from "lucide-react";
import { cn } from "@/utils";
import { barMenuStyles } from "./styles";
import { ListItem } from "@/components/ListItem";
import { Popover } from "@/components/Popover";
import React, { useCallback, useEffect, useState } from "react";
import { BarMenuTrigger } from "./ui";
import { Size } from "@/types";

export const BarMenu = ({
  items,
  value,
  onSelect,
  className,
}: BarMenuProps) => {
  const [open, setOpen] = useState(false);
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

  const setMeasureRef = useCallback(
    (index: number) => (el: HTMLButtonElement | null) => {
      itemMeasureRefs.current[index] = el;
    },
    [itemMeasureRefs]
  );

  const handleSelect = useCallback(
    (id: string) => {
      onSelect(id);
      setOpen(false);
    },
    [onSelect]
  );

  useEffect(() => {
    if (hiddenItems.length === 0 && open) {
      setOpen(false);
    }
  }, [hiddenItems.length, open]);

  return (
    <div ref={containerRef} className={cn(barMenuStyles.container, className)}>
      <div className={barMenuStyles.base}>
        {visibleItems.map((item) => (
          <BarMenuTrigger
            key={item.id}
            item={item}
            onSelect={handleSelect}
            selected={value === item.id}
            className={barMenuStyles.triggerBase}
          />
        ))}

        {hiddenItems.length > 0 && (
          <Popover open={open} onOpenChange={setOpen}>
            <Popover.Trigger>
              <ListItem
                iconLeft={Menu}
                iconOnly
                size={Size.Md}
                className={barMenuStyles.triggerBase}
                selected={hiddenItems.some((item) => item.id === value)}
              >
                <React.Fragment />
              </ListItem>
            </Popover.Trigger>

            <Popover.Content align="end" side="top" sideOffset={8}>
              <Popover.Surface>
                <Popover.ScrollArea maxHeight={320}>
                  <div className={barMenuStyles.list}>
                    {hiddenItems.map((item) => (
                      <ListItem
                        key={item.id}
                        size={Size.Md}
                        iconLeft={item.icon}
                        selected={value === item.id}
                        disabled={item.disabled}
                        onClick={() => handleSelect(item.id)}
                      >
                        {item.label}
                      </ListItem>
                    ))}
                  </div>
                </Popover.ScrollArea>
              </Popover.Surface>
            </Popover.Content>
          </Popover>
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
          <Menu />
        </button>
      </div>
    </div>
  );
};
