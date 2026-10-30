import { useLayoutEffect, useRef, useState, type RefObject } from "react";
import {
  defaultSkeletonRowCount,
  defaultStateOverlayMinHeight,
  skeletonRowHeight,
} from "../utils/constants";

interface DataTableViewportMetrics {
  clientWidth: number;
  overlayHeight: number;
  skeletonRowCount: number;
}

const initialMetrics: DataTableViewportMetrics = {
  clientWidth: 0,
  overlayHeight: defaultStateOverlayMinHeight,
  skeletonRowCount: defaultSkeletonRowCount,
};

function isSameMetrics(
  current: DataTableViewportMetrics,
  next: DataTableViewportMetrics
) {
  return (
    current.clientWidth === next.clientWidth &&
    current.overlayHeight === next.overlayHeight &&
    current.skeletonRowCount === next.skeletonRowCount
  );
}

function readMetrics(element: HTMLElement): DataTableViewportMetrics {
  const headerHeight =
    element.querySelector("thead")?.getBoundingClientRect().height ??
    skeletonRowHeight;
  const availableHeight = Math.max(0, element.clientHeight - headerHeight);
  const locksToContent = getComputedStyle(element).overflowY === "visible";

  return {
    clientWidth: element.clientWidth,
    overlayHeight: Math.max(
      defaultStateOverlayMinHeight,
      locksToContent ? defaultStateOverlayMinHeight : availableHeight
    ),
    skeletonRowCount: locksToContent
      ? defaultSkeletonRowCount
      : Math.max(
          defaultSkeletonRowCount,
          Math.floor(availableHeight / skeletonRowHeight) ||
            defaultSkeletonRowCount
        ),
  };
}

export function useDataTableViewportMetrics(
  containerRef: RefObject<HTMLDivElement | null>,
  enabled: boolean
): DataTableViewportMetrics {
  const [metrics, setMetrics] = useState(initialMetrics);
  const metricsRef = useRef(initialMetrics);

  useLayoutEffect(() => {
    const element = containerRef.current;
    if (!element || !enabled) {
      return;
    }

    let frameId = 0;

    const commit = () => {
      const next = readMetrics(element);
      if (isSameMetrics(metricsRef.current, next)) {
        return;
      }

      metricsRef.current = next;
      setMetrics(next);
    };

    const schedule = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(commit);
    };

    commit();
    const observer = new ResizeObserver(schedule);
    observer.observe(element);

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [containerRef, enabled]);

  return metrics;
}
