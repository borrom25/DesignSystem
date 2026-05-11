import { CascaderItemProps } from "../Cascader.types.ts";
import { ListItem, Popover, PopoverSurface } from "@/components";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/utils";
import { cascaderStyles } from "../styles";

export function CascaderItem({
  id,
  label,
  icon,
  nested,
  onClick,
  disabled,
}: CascaderItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!nested || !nested.length)
    return (
      <ListItem
        key={id}
        iconLeft={icon}
        disabled={disabled}
        onClick={() => {
          onClick?.();
          setIsOpen(false);
        }}
      >
        {label}
      </ListItem>
    );

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        <ListItem
          key={id}
          iconLeft={icon}
          disabled={disabled}
          iconRight={ChevronRight}
          className={cn(isOpen && cascaderStyles.open)}
        >
          {label}
        </ListItem>
      </Popover.Trigger>
      <Popover.Content side="right" align="start" sideOffset={8}>
        <PopoverSurface>
          {nested.map((item) => (
            <CascaderItem key={item.id} {...item} />
          ))}
        </PopoverSurface>
      </Popover.Content>
    </Popover>
  );
}
