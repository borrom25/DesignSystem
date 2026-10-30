import { CascaderItemProps } from "../Cascader.types.ts";
import { ListItem, Popover } from "@/components";
import { ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/utils";
import { cascaderStyles } from "../styles";

export function CascaderItem({
  label,
  icon,
  nested,
  disabled,
  onClick,
}: CascaderItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const open = () => {
    clearTimeout(timer.current);
    setIsOpen(true);
  };

  const close = () => {
    timer.current = setTimeout(() => setIsOpen(false), 100);
  };

  if (!nested?.length)
    return (
      <ListItem
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
          iconLeft={icon}
          disabled={disabled}
          iconRight={ChevronRight}
          className={cn(isOpen && cascaderStyles.open)}
          onMouseEnter={open}
          onMouseLeave={close}
        >
          {label}
        </ListItem>
      </Popover.Trigger>
      <Popover.Content
        side="right"
        align="start"
        sideOffset={8}
        onMouseEnter={open}
        onMouseLeave={close}
      >
        <Popover.Surface>
          {nested.map((item) => (
            <CascaderItem key={item.id} {...item} />
          ))}
        </Popover.Surface>
      </Popover.Content>
    </Popover>
  );
}
