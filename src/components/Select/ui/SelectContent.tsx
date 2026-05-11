import { BaseContent } from "@/shared/Select";
import type { SelectContentProps } from "../types";

export function SelectContent({
  matchTriggerWidth = true,
  maxHeight = 300,
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "start",
  onScrollEnd,
  scrollEndOffset = 40,
}: SelectContentProps) {
  return (
    <BaseContent
      matchTriggerWidth={matchTriggerWidth}
      maxHeight={maxHeight}
      className={className}
      side={side}
      sideOffset={sideOffset}
      align={align}
      onScrollEnd={onScrollEnd}
      scrollEndOffset={scrollEndOffset}
    >
      {children}
    </BaseContent>
  );
}
