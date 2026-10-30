import { useCallback, useLayoutEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import type {
  TabsOverflowIndicatorRect,
  TabsOverflowItem,
} from "../TabsOverflow.types";

interface UseTabsOverflowIndicatorOptions<T extends string | number> {
  containerRef: RefObject<HTMLDivElement | null>;
  value?: T;
  visibleItems: TabsOverflowItem<T>[];
  indicatorOffset?: number;
}

function getIndicatorBottom(
  container: HTMLElement,
  indicatorOffset: number
): number {
  const header = container.closest("header");

  if (!header) {
    return -indicatorOffset;
  }

  return (
    container.getBoundingClientRect().bottom -
    header.getBoundingClientRect().bottom
  );
}

export function useTabsOverflowIndicator<T extends string | number>({
  containerRef,
  value,
  visibleItems,
  indicatorOffset = 0,
}: UseTabsOverflowIndicatorOptions<T>) {
  const tabButtonRefs = useRef<Map<T, HTMLButtonElement>>(new Map());
  const [indicatorStyle, setIndicatorStyle] =
    useState<TabsOverflowIndicatorRect | null>(null);

  const updateIndicator = useCallback(() => {
    const container = containerRef.current;
    const activeEl =
      value !== undefined ? tabButtonRefs.current.get(value) : undefined;

    if (!activeEl || !container) {
      setIndicatorStyle(null);
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const elRect = activeEl.getBoundingClientRect();

    setIndicatorStyle({
      left: elRect.left - containerRect.left,
      width: elRect.width,
      bottom: getIndicatorBottom(container, indicatorOffset),
    });
  }, [containerRef, indicatorOffset, value]);

  useLayoutEffect(() => {
    updateIndicator();

    const container = containerRef.current;

    if (!container || typeof ResizeObserver === "undefined") {
      return undefined;
    }

    const header = container.closest("header");
    const observer = new ResizeObserver(() => {
      updateIndicator();
    });

    observer.observe(container);
    if (header) {
      observer.observe(header);
    }

    window.addEventListener("resize", updateIndicator);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateIndicator);
    };
  }, [containerRef, updateIndicator, visibleItems]);

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
