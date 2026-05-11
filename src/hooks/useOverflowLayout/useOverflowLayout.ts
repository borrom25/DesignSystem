import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { getVisibleItemsCount } from "@/utils";
import { UseOverflowLayoutProps } from "./useOverflowLayout.types";

export function useOverflowLayout<T>({
  items,
  gap,
}: UseOverflowLayoutProps<T>) {
  const [visibleCount, setVisibleCount] = useState(items.length);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemMeasureRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const moreMeasureRef = useRef<HTMLButtonElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const recalculateVisibleCount = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0;
    const itemWidths = items.map(
      (_, index) => itemMeasureRefs.current[index]?.offsetWidth ?? 0
    );
    const moreWidth = moreMeasureRef.current?.offsetWidth ?? 0;

    const hasValidMeasurements = itemWidths
      .slice(0, visibleCount)
      .every((width) => width > 0);

    if (!hasValidMeasurements) return;

    const nextVisibleCount = getVisibleItemsCount(
      containerWidth,
      itemWidths,
      moreWidth,
      gap
    );

    setVisibleCount((currentVisibleCount) =>
      currentVisibleCount === nextVisibleCount
        ? currentVisibleCount
        : nextVisibleCount
    );
  }, [gap, items, visibleCount]);

  const scheduleRecalculation = useCallback(() => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      animationFrameRef.current = null;
      recalculateVisibleCount();
    });
  }, [recalculateVisibleCount]);

  useLayoutEffect(() => {
    scheduleRecalculation();
  }, [scheduleRecalculation]);

  useEffect(() => {
    const containerElement = containerRef.current;

    if (!containerElement || typeof ResizeObserver === "undefined") {
      return undefined;
    }

    const observer = new ResizeObserver(() => {
      scheduleRecalculation();
    });

    observer.observe(containerElement);

    return () => {
      observer.disconnect();
    };
  }, [scheduleRecalculation]);

  useEffect(() => {
    itemMeasureRefs.current = itemMeasureRefs.current.slice(0, items.length);
  }, [items.length]);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const visibleItems = useMemo(
    () => items.slice(0, visibleCount),
    [items, visibleCount]
  );
  const hiddenItems = useMemo(
    () => items.slice(visibleCount),
    [items, visibleCount]
  );

  return {
    containerRef,
    itemMeasureRefs,
    moreMeasureRef,
    visibleItems,
    hiddenItems,
  };
}
