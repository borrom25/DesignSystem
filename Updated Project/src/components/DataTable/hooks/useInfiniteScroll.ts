import { useEffect, useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import type { UseInfiniteScrollOptions } from "../types";

export function useInfiniteScroll(options: UseInfiniteScrollOptions) {
  const { hasMore, isFetchingMore, onLoadMore, threshold = 0.5 } = options;

  const loadingRef = useRef(false);

  const { ref: sentinelRef, inView } = useInView({
    threshold,
    rootMargin: "100px",
  });

  const triggerLoadMore = useCallback(() => {
    if (hasMore && !isFetchingMore && !loadingRef.current) {
      loadingRef.current = true;
      onLoadMore();
    }
  }, [hasMore, isFetchingMore, onLoadMore]);

  useEffect(() => {
    if (inView) {
      triggerLoadMore();
    }
  }, [inView, triggerLoadMore]);

  useEffect(() => {
    if (!isFetchingMore) {
      loadingRef.current = false;
    }
  }, [isFetchingMore]);

  return {
    sentinelRef,
    inView,
    canLoadMore: hasMore && !isFetchingMore,
  };
}
