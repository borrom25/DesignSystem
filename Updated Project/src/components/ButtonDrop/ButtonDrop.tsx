import { useMemo, useCallback } from "react";
import { ChevronDown, MoreVertical } from "lucide-react";
import { cn } from "@/utils";
import { Color, Size, Type } from "@/types";
import { Button } from "@/components/Button";
import { Popover, PopoverSurface } from "@/components/Popover";
import type { ButtonDropProps } from "./ButtonDrop.types";
import { buttonDropStyles } from "./styles";
import { useButtonDropOpen } from "./hooks/useButtonDropOpen";
import { ButtonDropMenuList } from "./ui/ButtonDropMenuList";

export function ButtonDrop<T extends string | number = string>({
  value,
  onChange,
  items,
  placeholder = "Select",
  color = Color.Inverse,
  type = Type.Flat,
  size = Size.Md,
  disabled = false,
  hideChevron = false,
  iconOnly = false,
  open,
  onOpenChange,
  className,
  contentClassName,
  matchTriggerWidth = true,
}: ButtonDropProps<T>) {
  const { isOpen, setIsOpen } = useButtonDropOpen({ open, onOpenChange });

  const selectedItem = useMemo(
    () => items.find((item) => item.value === value),
    [items, value]
  );

  const displayText = selectedItem?.label ?? placeholder;
  const isPlaceholder = !selectedItem;

  const handleItemClick = useCallback(
    (item: (typeof items)[number]) => {
      onChange?.(item.value);
      item.onClick?.();
      setIsOpen(false);
    },
    [onChange, setIsOpen]
  );

  if (iconOnly) {
    return (
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <Popover.Trigger>
          <Button
            color={color}
            type={type}
            size={size}
            disabled={disabled}
            scaling={false}
            iconOnly={MoreVertical}
            className={className}
            aria-label="Действия"
          />
        </Popover.Trigger>

        <Popover.Content
          className={cn(contentClassName)}
          sideOffset={4}
          align="end"
        >
          <PopoverSurface>
            <Popover.ScrollArea maxHeight={320}>
              <ButtonDropMenuList
                items={items}
                value={value}
                size={size}
                onItemClick={handleItemClick}
              />
            </Popover.ScrollArea>
          </PopoverSurface>
        </Popover.Content>
      </Popover>
    );
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger>
        <Button
          color={color}
          type={type}
          size={size}
          disabled={disabled}
          scaling={false}
          className={cn(
            buttonDropStyles.trigger,
            buttonDropStyles.triggerPadding[size],
            "[&>span>svg:last-child]:transition-transform [&>span>svg:last-child]:duration-200",
            isOpen && "[&>span>svg:last-child]:rotate-180",
            className
          )}
          iconRight={hideChevron ? undefined : ChevronDown}
        >
          <span className={cn(buttonDropStyles.value, isPlaceholder)}>
            {displayText}
          </span>
        </Button>
      </Popover.Trigger>

      <Popover.Content
        matchTriggerWidth={matchTriggerWidth}
        className={cn(contentClassName)}
        sideOffset={4}
        align="start"
      >
        <PopoverSurface className="w-full">
          <Popover.ScrollArea maxHeight={320}>
            <ButtonDropMenuList
              items={items}
              value={value}
              size={size}
              onItemClick={handleItemClick}
            />
          </Popover.ScrollArea>
        </PopoverSurface>
      </Popover.Content>
    </Popover>
  );
}
