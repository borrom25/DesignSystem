import { useCallback, useEffect, useRef, useState } from "react";
import type {
  SegmentedIndicatorStyles,
  UseSegmentedProps,
} from "../Segmented.types";
import {
  getSegmentedFallbackValue,
  getSegmentedIndicatorStyles,
} from "../Segmented.utils";

export function useSegmented<T extends string | number = string>({
  value: controlledValue,
  defaultValue,
  onChange,
  options,
  position = "horizontal",
}: UseSegmentedProps<T>) {
  const [internalValue, setInternalValue] = useState(() =>
    getSegmentedFallbackValue(defaultValue, options)
  );
  const [indicatorStyles, setIndicatorStyles] =
    useState<SegmentedIndicatorStyles | null>(null);
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  const containerRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<Map<T, HTMLButtonElement>>(new Map());

  const handleChange = useCallback(
    (nextValue: T) => {
      if (!isControlled) {
        setInternalValue(nextValue);
      }

      onChange?.(nextValue);
    },
    [isControlled, onChange]
  );

  const registerButtonRef = useCallback(
    (value: T, element: HTMLButtonElement | null) => {
      if (element) {
        buttonsRef.current.set(value, element);
        return;
      }

      buttonsRef.current.delete(value);
    },
    []
  );

  const updateIndicator = useCallback(() => {
    if (currentValue === undefined) {
      setIndicatorStyles(null);
      return;
    }

    const containerElement = containerRef.current;
    const activeButton = buttonsRef.current.get(currentValue);

    if (!containerElement || !activeButton) {
      setIndicatorStyles(null);
      return;
    }

    setIndicatorStyles(
      getSegmentedIndicatorStyles({
        containerElement,
        activeButton,
        position,
      })
    );
  }, [currentValue, position]);

  useEffect(() => {
    updateIndicator();
  }, [updateIndicator, options.length]);

  return {
    currentValue,
    indicatorStyles,
    handleChange,
    registerButtonRef,
    containerRef,
  };
}
