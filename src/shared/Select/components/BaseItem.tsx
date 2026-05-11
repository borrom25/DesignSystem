import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/utils";
import { Size } from "@/types";
import { ListItem } from "@/components/ListItem";

type BaseItemProps = {
  size?: Size;
  selected?: boolean;
  disabled?: boolean;
  checkbox?: boolean;
  hideSelectedOutline?: boolean;
  onClick?: () => void;
  className?: string;
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
  children?: ReactNode;
  visualSelected?: boolean;
};

export function BaseItem({
  size = Size.Xs,
  selected = false,
  disabled = false,
  checkbox = false,
  hideSelectedOutline = false,
  onClick,
  className,
  iconLeft,
  iconRight,
  children,
  visualSelected,
}: BaseItemProps) {
  return (
    <ListItem
      size={size}
      selected={selected}
      disabled={disabled}
      checkbox={checkbox}
      hideSelectedOutline={hideSelectedOutline}
      onClick={onClick}
      className={cn("w-full", className)}
      iconLeft={iconLeft}
      iconRight={iconRight}
      visualSelected={visualSelected}
    >
      {children}
    </ListItem>
  );
}
