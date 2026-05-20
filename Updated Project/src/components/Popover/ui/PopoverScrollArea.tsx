import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/utils";
import type { PopoverScrollAreaProps } from "../Popover.types";
import { scrollAreaClasses } from "../styles";
import { getScrollAreaStyles } from "../Popover.utils";

export function PopoverScrollArea({
  maxHeight,
  onScrollEnd,
  scrollEndOffset = 200,
  isLoading = false,
  hasMore = true,
  className,
  children,
}: PopoverScrollAreaProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasTriggeredRef = useRef(false);
  const wasLoadingRef = useRef(isLoading);

  const checkEndReached = useCallback(() => {
    if (!onScrollEnd || !hasMore || isLoading || !scrollRef.current) {
      return;
    }

    const scrollContainer = scrollRef.current;
    const distanceToBottom =
      scrollContainer.scrollHeight -
      scrollContainer.scrollTop -
      scrollContainer.clientHeight;

    if (distanceToBottom <= scrollEndOffset) {
      if (!hasTriggeredRef.current) {
        hasTriggeredRef.current = true;
        onScrollEnd();
      }
    } else {
      hasTriggeredRef.current = false;
    }
  }, [onScrollEnd, hasMore, isLoading, scrollEndOffset]);

  useEffect(() => {
    checkEndReached();
  }, [checkEndReached, children]);

  useEffect(() => {
    if (wasLoadingRef.current && !isLoading) {
      hasTriggeredRef.current = false;
      checkEndReached();
    }

    wasLoadingRef.current = isLoading;
  }, [isLoading, checkEndReached]);

  const scrollAreaStyles = getScrollAreaStyles(maxHeight);

  return (
    <div
      ref={scrollRef}
      onScroll={checkEndReached}
      className={cn(scrollAreaClasses, className)}
      style={scrollAreaStyles}
    >
      {children}
    </div>
  );
}
