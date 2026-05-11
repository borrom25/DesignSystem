import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import type * as PopoverPrimitive from "@radix-ui/react-popover";

export type TooltipSide = "top" | "right" | "bottom" | "left";
export type TooltipAlign = "start" | "center" | "end";

export type TooltipProps = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: ReactNode;
};

export type TooltipTriggerProps = PopoverPrimitive.PopoverTriggerProps;

export type TooltipContentProps = {
  title: string;
  subTitle?: string;
  icon?: LucideIcon;
  actionSlot?: ReactNode;
  side?: TooltipSide;
  align?: TooltipAlign;
  sideOffset?: number;
  alignOffset?: number;
  showArrow?: boolean;
  arrowWidth?: number;
  arrowHeight?: number;
  className?: string;
  maxWidth?: number;
  collisionPadding?:
    | number
    | Partial<Record<"top" | "right" | "bottom" | "left", number>>;
  forceMount?: true;
};
