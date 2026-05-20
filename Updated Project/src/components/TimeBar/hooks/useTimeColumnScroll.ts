import { useRef, useCallback, useLayoutEffect, useEffect } from "react";
import type { KeyboardEvent } from "react";
import {
  ITEM_HEIGHT,
  MOUSE_WHEEL_LINE_HEIGHT,
  MOUSE_WHEEL_SCROLL_MULTIPLIER,
  PROGRAMMATIC_SCROLL_RELEASE_DELAY_MS,
  REPEAT_COUNT,
  SCROLL_ADJUST_DELAY_SMOOTH,
  SCROLL_DEBOUNCE_MS,
} from "../constants/scroll";
import {
  normalizeIndex,
  getMiddleAbsoluteIndex,
  shouldRecenter,
  calculateRecenterIndex,
  getAbsoluteIndexAtViewportCenter,
  getScrollTopForCenteredAbsoluteIndex,
} from "../utils/scroll";

interface UseTimeColumnScrollProps {
  values: number[];
  selectedValue: number;
  onSelect: (value: number) => void;
  disabled: boolean;
  contentEdgePadding: number;
}

const DOM_DELTA_PIXEL = 0;
const DOM_DELTA_LINE = 1;
const DOM_DELTA_PAGE = 2;

function getWheelDeltaY(event: WheelEvent, container: HTMLDivElement): number {
  if (event.deltaMode === DOM_DELTA_LINE) {
    return event.deltaY * MOUSE_WHEEL_LINE_HEIGHT;
  }

  if (event.deltaMode === DOM_DELTA_PAGE) {
    return event.deltaY * container.clientHeight;
  }

  return event.deltaY;
}

function isMouseWheelEvent(event: WheelEvent): boolean {
  return (
    event.deltaY !== 0 &&
    (event.deltaMode !== DOM_DELTA_PIXEL ||
      Math.abs(event.deltaY) >= ITEM_HEIGHT)
  );
}

export function useTimeColumnScroll({
  values,
  selectedValue,
  onSelect,
  disabled,
  contentEdgePadding,
}: UseTimeColumnScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const totalRepeatItems = values.length * REPEAT_COUNT;

  const isInitialMount = useRef(true);
  const selectedValueRef = useRef<number>(selectedValue);
  const lastEmittedValueRef = useRef<number | null>(null);
  const onSelectRef = useRef(onSelect);
  const isProgrammaticScrollRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const scrollEndTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const programmaticScrollTimeoutRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);

  selectedValueRef.current = selectedValue;
  onSelectRef.current = onSelect;

  const releaseProgrammaticScroll = useCallback((delay: number) => {
    if (programmaticScrollTimeoutRef.current !== null) {
      clearTimeout(programmaticScrollTimeoutRef.current);
    }

    programmaticScrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, delay);
  }, []);

  const scrollToAbsoluteIndex = useCallback(
    (absoluteIndex: number, behavior: ScrollBehavior = "auto") => {
      const el = containerRef.current;
      if (!el || absoluteIndex === -1 || totalRepeatItems <= 0) return;

      isProgrammaticScrollRef.current = true;
      const top = getScrollTopForCenteredAbsoluteIndex(
        absoluteIndex,
        contentEdgePadding,
        el.clientHeight,
        el.scrollHeight
      );
      el.scrollTo({
        top,
        behavior,
      });
      releaseProgrammaticScroll(
        behavior === "smooth"
          ? SCROLL_ADJUST_DELAY_SMOOTH
          : PROGRAMMATIC_SCROLL_RELEASE_DELAY_MS
      );
    },
    [contentEdgePadding, releaseProgrammaticScroll, totalRepeatItems]
  );

  const getNearestAbsoluteIndex = useCallback(
    (value: number) => {
      const baseIndex = values.indexOf(value);
      if (baseIndex === -1) return -1;
      if (!containerRef.current) return getMiddleAbsoluteIndex(value, values);

      const valuesLength = values.length;
      if (valuesLength === 0) return -1;

      const totalLength = valuesLength * REPEAT_COUNT;
      const container = containerRef.current;
      const currentAbsoluteIndex = getAbsoluteIndexAtViewportCenter(
        container.scrollTop,
        container.clientHeight,
        contentEdgePadding,
        totalLength
      );
      const estimatedRepeat = Math.round(
        (currentAbsoluteIndex - baseIndex) / valuesLength
      );

      let nearestIndex = -1;
      let minDistance = Number.POSITIVE_INFINITY;

      for (
        let repeat = estimatedRepeat - 2;
        repeat <= estimatedRepeat + 2;
        repeat += 1
      ) {
        const candidateIndex = repeat * valuesLength + baseIndex;
        if (candidateIndex < 0 || candidateIndex >= totalLength) continue;

        const distance = Math.abs(candidateIndex - currentAbsoluteIndex);
        if (distance < minDistance) {
          minDistance = distance;
          nearestIndex = candidateIndex;
        }
      }

      return nearestIndex === -1
        ? getMiddleAbsoluteIndex(value, values)
        : nearestIndex;
    },
    [contentEdgePadding, values]
  );

  const scrollToValue = useCallback(
    (
      value: number,
      preferNearest = true,
      behavior: ScrollBehavior = "smooth"
    ) => {
      const absoluteIndex = preferNearest
        ? getNearestAbsoluteIndex(value)
        : getMiddleAbsoluteIndex(value, values);
      scrollToAbsoluteIndex(absoluteIndex, behavior);
    },
    [getNearestAbsoluteIndex, scrollToAbsoluteIndex, values]
  );

  const selectValue = useCallback((value: number) => {
    if (value === selectedValueRef.current) return;

    selectedValueRef.current = value;
    lastEmittedValueRef.current = value;
    onSelectRef.current(value);
  }, []);

  const snapToNearestValue = useCallback(() => {
    if (!containerRef.current || values.length === 0) return;

    const el = containerRef.current;
    const absoluteIndex = getAbsoluteIndexAtViewportCenter(
      el.scrollTop,
      el.clientHeight,
      contentEdgePadding,
      totalRepeatItems
    );
    const targetIndex = shouldRecenter(absoluteIndex, values.length)
      ? calculateRecenterIndex(absoluteIndex, values.length)
      : absoluteIndex;
    const behavior: ScrollBehavior =
      targetIndex === absoluteIndex ? "smooth" : "auto";

    scrollToAbsoluteIndex(targetIndex, behavior);
  }, [
    contentEdgePadding,
    scrollToAbsoluteIndex,
    totalRepeatItems,
    values.length,
  ]);

  const handleScroll = useCallback(() => {
    if (
      !containerRef.current ||
      disabled ||
      values.length === 0 ||
      isProgrammaticScrollRef.current
    ) {
      return;
    }

    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    if (scrollEndTimeoutRef.current !== null) {
      clearTimeout(scrollEndTimeoutRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      if (!containerRef.current || values.length === 0) return;

      const el = containerRef.current;
      const absoluteIndex = getAbsoluteIndexAtViewportCenter(
        el.scrollTop,
        el.clientHeight,
        contentEdgePadding,
        totalRepeatItems
      );
      const normalizedValue =
        values[normalizeIndex(absoluteIndex, values.length)];

      selectValue(normalizedValue);
      scrollEndTimeoutRef.current = setTimeout(
        snapToNearestValue,
        SCROLL_DEBOUNCE_MS
      );
    });
  }, [
    contentEdgePadding,
    disabled,
    selectValue,
    snapToNearestValue,
    totalRepeatItems,
    values,
  ]);

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      if (
        !containerRef.current ||
        disabled ||
        values.length === 0 ||
        !isMouseWheelEvent(event)
      ) {
        return;
      }

      event.preventDefault();
      containerRef.current.scrollTop +=
        getWheelDeltaY(event, containerRef.current) *
        MOUSE_WHEEL_SCROLL_MULTIPLIER;
    },
    [disabled, values.length]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  const handleItemClick = useCallback(
    (value: number) => {
      if (!disabled) {
        if (scrollEndTimeoutRef.current !== null) {
          clearTimeout(scrollEndTimeoutRef.current);
        }
        selectValue(value);
        scrollToValue(value, true, "auto");
      }
    },
    [disabled, scrollToValue, selectValue]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (disabled || values.length === 0) return;

      const idx = values.indexOf(selectedValueRef.current);
      if (idx === -1) return;

      let next: number | undefined;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (idx < values.length - 1) next = values[idx + 1];
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (idx > 0) next = values[idx - 1];
      } else if (e.key === "Home") {
        e.preventDefault();
        next = values[0];
      } else if (e.key === "End") {
        e.preventDefault();
        next = values[values.length - 1];
      }

      if (next === undefined) return;

      if (scrollEndTimeoutRef.current !== null) {
        clearTimeout(scrollEndTimeoutRef.current);
      }
      selectValue(next);
      scrollToValue(next, true, "auto");
    },
    [disabled, scrollToValue, selectValue, values]
  );

  useLayoutEffect(() => {
    if (values.length === 0 || !isInitialMount.current) return;
    scrollToValue(selectedValue, false, "auto");
    isInitialMount.current = false;
  }, [scrollToValue, selectedValue, values.length]);

  useLayoutEffect(() => {
    if (values.length === 0 || !containerRef.current) return;
    scrollToValue(selectedValueRef.current, true, "auto");
  }, [contentEdgePadding, scrollToValue, values.length]);

  useEffect(() => {
    if (values.length === 0 || isInitialMount.current) {
      return;
    }

    if (scrollEndTimeoutRef.current !== null) {
      clearTimeout(scrollEndTimeoutRef.current);
    }

    if (selectedValue === lastEmittedValueRef.current) {
      lastEmittedValueRef.current = null;
      return;
    }

    scrollToValue(selectedValue);
  }, [scrollToValue, selectedValue, values.length]);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (scrollEndTimeoutRef.current !== null) {
        clearTimeout(scrollEndTimeoutRef.current);
      }
      if (programmaticScrollTimeoutRef.current !== null) {
        clearTimeout(programmaticScrollTimeoutRef.current);
      }
    };
  }, []);

  return {
    containerRef,
    handleScroll,
    handleItemClick,
    handleKeyDown,
  };
}
