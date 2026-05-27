import { useEffect, useRef, useCallback } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import type { UseVirtualScrollOptions } from "../types";

export function useVirtualScroll(options: UseVirtualScrollOptions) {
  const {
    count,
    rowHeight,
    estimateSize,
    getItemKey,
    overscan = 5,
    parentRef,
    onScrollEnd,
  } = options;

  const onScrollEndRef = useRef(onScrollEnd);
  const isTriggeredRef = useRef(false);
  const prevCountRef = useRef(count);

  onScrollEndRef.current = onScrollEnd;

  if (count !== prevCountRef.current) {
    isTriggeredRef.current = false;
    prevCountRef.current = count;
  }

  const virtualizer = useVirtualizer({
    count,
    getScrollElement: () => parentRef.current,
    estimateSize: estimateSize ?? (() => rowHeight),
    getItemKey,
    overscan,
  });

  const virtualItems = virtualizer.getVirtualItems();
  const totalSize = virtualizer.getTotalSize();

  const paddingTop =
    virtualItems.length > 0 ? (virtualItems[0]?.start ?? 0) : 0;
  const paddingBottom =
    virtualItems.length > 0
      ? totalSize - (virtualItems[virtualItems.length - 1]?.end ?? 0)
      : 0;

  const triggerScrollEnd = useCallback(() => {
    if (isTriggeredRef.current || !onScrollEndRef.current) return;
    isTriggeredRef.current = true;
    onScrollEndRef.current();
  }, []);

  useEffect(() => {
    const element = parentRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrollTop = element.scrollTop;
      const clientHeight = element.clientHeight;
      const scrollHeight = element.scrollHeight;
      const distanceFromBottom = scrollHeight - scrollTop - clientHeight;

      if (distanceFromBottom <= rowHeight * 3) {
        triggerScrollEnd();
      }
    };

    element.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [parentRef, rowHeight, triggerScrollEnd]);

  return {
    virtualizer,
    virtualItems,
    totalSize,
    paddingTop,
    paddingBottom,
  };
}
