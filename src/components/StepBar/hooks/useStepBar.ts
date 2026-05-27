import { useLayoutEffect, useRef, useState } from "react";
import { UseStepBarProps } from "../StepBar.types";

export function useStepBar<T extends string | number = string>({
  items,
  active,
  onChangeStep,
}: UseStepBarProps<T>) {
  const stepsRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    transform: "translateX(0px)",
    opacity: 0,
  });

  const enabledItems = items.filter((item) => !item?.disabled);
  const activeItemsIndex = enabledItems.findIndex((item) => item.id === active);
  const activeIndex = items.findIndex((item) => item.id === active);
  const isFirstStep = activeIndex <= 0;
  const isLastStep =
    activeIndex < 0 ||
    activeIndex >= items.length - 1 ||
    activeItemsIndex >= enabledItems.length - 1;

  useLayoutEffect(() => {
    const updateIndicator = () => {
      if (activeIndex < 0) {
        setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
        return;
      }

      const activeStepElement = stepRefs.current[activeIndex];
      const stepsElement = stepsRef.current;

      if (!activeStepElement || !stepsElement) return;

      const { offsetWidth: activeElWidth, offsetLeft: activeElLeft } =
        activeStepElement;
      const { clientWidth: stepsClientWidth, scrollWidth: stepsScrollWidth } =
        stepsElement;

      setIndicatorStyle({
        width: activeElWidth,
        transform: `translateX(${activeElLeft}px)`,
        opacity: 1,
      });

      const maxScrollLeft = stepsScrollWidth - stepsClientWidth;
      const targetScrollLeft =
        activeElLeft + activeElWidth / 2 - stepsClientWidth / 2;

      stepsElement.scrollTo({
        left: Math.max(0, Math.min(targetScrollLeft, maxScrollLeft)),
        behavior: "smooth",
      });
    };

    let nestedFrameId = 0;
    const frameId = window.requestAnimationFrame(() => {
      nestedFrameId = window.requestAnimationFrame(updateIndicator);
    });
    window.addEventListener("resize", updateIndicator);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.cancelAnimationFrame(nestedFrameId);
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeIndex]);

  const setStepRef = (index: number, element: HTMLButtonElement | null) => {
    stepRefs.current[index] = element;
  };

  const onStepClick = (step: T) => onChangeStep(step);
  const goPrev = () =>
    !isFirstStep && onChangeStep(enabledItems[activeItemsIndex - 1].id);
  const goNext = () =>
    !isLastStep && onChangeStep(enabledItems[activeItemsIndex + 1].id);

  return {
    stepsRef,
    indicatorStyle,
    isFirstStep,
    isLastStep,
    setStepRef,
    onStepClick,
    goPrev,
    goNext,
  };
}
