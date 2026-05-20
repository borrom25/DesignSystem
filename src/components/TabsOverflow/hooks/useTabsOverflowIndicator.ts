import { useCallback, useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import type {
  TabsOverflowIndicatorRect,
  TabsOverflowItem,
} from "../TabsOverflow.types";

interface UseTabsOverflowIndicatorOptions<T extends string | number> {
  containerRef: RefObject<HTMLDivElement | null>;
  value?: T;
  visibleItems: TabsOverflowItem<T>[];
}

export function useTabsOverflowIndicator<T extends string | number>({
  containerRef,
  value,
  visibleItems,
}: UseTabsOverflowIndicatorOptions<T>) {
  const tabButtonRefs = useRef<Map<T, HTMLButtonElement>>(new Map());
  const [indicatorStyle, setIndicatorStyle] =
    useState<TabsOverflowIndicatorRect | null>(null);

  useEffect(() => {
    const activeEl =
      value !== undefined ? tabButtonRefs.current.get(value) : undefined;
    if (activeEl && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const elRect = activeEl.getBoundingClientRect();
      setIndicatorStyle({
        left: elRect.left - containerRect.left,
        width: elRect.width,
      });
    } else {
      setIndicatorStyle(null);
    }
  }, [containerRef, value, visibleItems]);

  const registerTabButton = useCallback(
    (nextValue: T, element: HTMLButtonElement | null) => {
      if (element) {
        tabButtonRefs.current.set(nextValue, element);
        return;
      }

      tabButtonRefs.current.delete(nextValue);
    },
    []
  );

  return {
    indicatorStyle,
    registerTabButton,
  };
}
