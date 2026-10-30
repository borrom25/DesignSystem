import { useCallback, useLayoutEffect, useRef, useState } from "react";
import type { PaginationItem } from "../Pagination.types";

type IndicatorStyles = {
  transform: string;
  width: number;
  height: number;
};

function getIndicatorStyles(
  containerElement: HTMLDivElement,
  activeButton: HTMLButtonElement
): IndicatorStyles {
  const buttonRect = activeButton.getBoundingClientRect();
  const containerRect = containerElement.getBoundingClientRect();

  return {
    transform: `translateX(${buttonRect.left - containerRect.left}px)`,
    width: buttonRect.width,
    height: buttonRect.height,
  };
}

export function usePaginationIndicator(
  currentPage: number,
  items: PaginationItem[]
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<Map<number, HTMLButtonElement>>(new Map());
  const [indicatorStyles, setIndicatorStyles] =
    useState<IndicatorStyles | null>(null);

  const registerButtonRef = useCallback(
    (page: number, element: HTMLButtonElement | null) => {
      if (element) {
        buttonsRef.current.set(page, element);
        return;
      }

      buttonsRef.current.delete(page);
    },
    []
  );

  const updateIndicator = useCallback(() => {
    const containerElement = containerRef.current;
    const activeButton = buttonsRef.current.get(currentPage);

    if (!containerElement || !activeButton) {
      setIndicatorStyles(null);
      return;
    }

    setIndicatorStyles(getIndicatorStyles(containerElement, activeButton));
  }, [currentPage]);

  useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator, items]);

  useLayoutEffect(() => {
    const containerElement = containerRef.current;
    if (!containerElement || typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(() => {
      updateIndicator();
    });

    observer.observe(containerElement);
    return () => observer.disconnect();
  }, [updateIndicator]);

  return {
    containerRef,
    indicatorStyles,
    registerButtonRef,
  };
}
