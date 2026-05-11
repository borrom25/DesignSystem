import type { ReactNode } from "react";
import type * as PopoverPrimitive from "@radix-ui/react-popover";

export type PopoverProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: ReactNode;
};

export type PopoverTriggerProps = PopoverPrimitive.PopoverTriggerProps;

export type PopoverContentProps = Omit<
  PopoverPrimitive.PopoverContentProps,
  "asChild"
> & {
  matchTriggerWidth?: boolean;
  maxHeight?: number | "available";
  collisionBoundary?: Element | Element[] | null;
  collisionPadding?:
    | number
    | Partial<Record<"top" | "right" | "bottom" | "left", number>>;
  forceMount?: true;
  sideMenu?: boolean;
};

export type PopoverSurfaceProps = {
  className?: string;
  children?: ReactNode;
};

export type PopoverScrollAreaProps = {
  maxHeight?: number | "available";
  onScrollEnd?: () => void;
  scrollEndOffset?: number;
  isLoading?: boolean;
  hasMore?: boolean;
  className?: string;
  children?: ReactNode;
};
