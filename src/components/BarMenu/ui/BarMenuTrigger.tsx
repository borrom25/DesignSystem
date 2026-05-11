import React, { memo, useCallback } from "react";
import { ListItem } from "@/components";
import { Size } from "@/types";
import { BarMenuTriggerProps } from "@components/BarMenu/BarMenu.types.ts";

function BarMenuTriggerComponent({
  item,
  className,
  selected,
  registerTabButton,
  onSelect,
}: BarMenuTriggerProps) {
  const setButtonRef = useCallback(
    (element: HTMLButtonElement | null) => {
      registerTabButton(item.id, element);
    },
    [item.id, registerTabButton]
  );

  const handleClick = useCallback(() => {
    onSelect(item.id);
  }, [item.id, onSelect]);

  return (
    <ListItem
      ref={setButtonRef}
      className={className}
      selected={selected}
      disabled={item.disabled}
      aria-disabled={item.disabled}
      onClick={handleClick}
      size={Size.Md}
      iconLeft={item.icon}
      iconOnly
    >
      <React.Fragment />
    </ListItem>
  );
}

export const BarMenuTrigger = memo(BarMenuTriggerComponent);
