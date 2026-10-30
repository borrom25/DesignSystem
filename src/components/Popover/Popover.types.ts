import type { ReactNode } from "react";
import type * as PopoverPrimitive from "@radix-ui/react-popover";
import type { SearchAutocompleteProps } from "@/components/SearchAutocomplete";

export type PopoverProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: ReactNode;
};

export type PopoverSearchConfig = Omit<
  SearchAutocompleteProps,
  "value" | "defaultValue"
> & {
  value?: string;
  defaultValue?: string;
  slot?: ReactNode;
  wrapperClassName?: string;
  emptyMessage?: ReactNode;
};

export type PopoverSearchProps = boolean | PopoverSearchConfig;

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
  closeOnOverlayClick?: boolean;
};

export type PopoverSurfaceProps = {
  className?: string;
  children?: ReactNode;
  search?: PopoverSearchProps;
};

export type PopoverScrollAreaProps = {
  maxHeight?: number | "available";
  onScrollEnd?: () => void;
  scrollEndOffset?: number;
  isLoading?: boolean;
  hasMore?: boolean;
  showScrollbar?: boolean;
  className?: string;
  children?: ReactNode;
};
