import { useCallback, useRef } from "react";
import { scrollEndDistance } from "../utils/constants";

interface UseDataTableScrollEndOptions {
  virtualized: boolean;
  isEmpty: boolean;
  hasMore: boolean;
  isFetchingMore: boolean;
  onLoadMore?: () => void;
  onScrollEnd?: () => void;
}

export function useDataTableScrollEnd({
  virtualized,
  isEmpty,
  hasMore,
  isFetchingMore,
  onLoadMore,
  onScrollEnd,
}: UseDataTableScrollEndOptions) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollEnd = useCallback(() => {
    onScrollEnd?.();
    if (hasMore && !isFetchingMore && onLoadMore) {
      onLoadMore();
    }
  }, [onScrollEnd, hasMore, isFetchingMore, onLoadMore]);

  const handleNonVirtualizedScroll = useCallback(() => {
    const element = containerRef.current;
    if (!element) return;

    const { scrollTop, scrollHeight, clientHeight } = element;
    const distanceFromBottom = scrollHeight - scrollTop - clientHeight;

    if (distanceFromBottom <= scrollEndDistance) {
      handleScrollEnd();
    }
  }, [handleScrollEnd]);

  const onContainerScroll =
    !virtualized && !isEmpty ? handleNonVirtualizedScroll : undefined;

  return {
    containerRef,
    handleScrollEnd,
    onContainerScroll,
  };
}
