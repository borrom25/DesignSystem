import type { ReactNode } from "react";
import { Popover } from "@/components/Popover";

type BaseContentProps = {
  matchTriggerWidth?: boolean;
  maxHeight?: number | "available";
  className?: string;
  children?: ReactNode;
  onScrollEnd?: () => void;
  scrollEndOffset?: number;
  isLoading?: boolean;
  hasMore?: boolean;
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
  align?: "start" | "center" | "end";
  header?: ReactNode;
};

export function BaseContent({
  matchTriggerWidth = true,
  maxHeight = 300,
  className,
  children,
  onScrollEnd,
  scrollEndOffset,
  isLoading,
  hasMore,
  side = "bottom",
  sideOffset = 4,
  align = "start",
  header,
}: BaseContentProps) {
  return (
    <Popover.Content
      matchTriggerWidth={matchTriggerWidth}
      side={side}
      sideOffset={sideOffset}
      align={align}
    >
      <Popover.Surface className={className}>
        {header}
        <Popover.ScrollArea
          maxHeight={maxHeight}
          onScrollEnd={onScrollEnd}
          scrollEndOffset={scrollEndOffset}
          isLoading={isLoading}
          hasMore={hasMore}
          showScrollbar
          className="w-full"
        >
          {children}
        </Popover.ScrollArea>
      </Popover.Surface>
    </Popover.Content>
  );
}
