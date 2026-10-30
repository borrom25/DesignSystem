import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { StepBarItem, UseStepBarProps } from "../StepBar.types";

type StepBarItems = readonly StepBarItem<string | number>[];
type StepBarItemId<TItems extends StepBarItems> = TItems[number]["id"];

export function useStepBar<TItems extends StepBarItems>({
  items,
  active,
  defaultActive,
  onChangeStep,
  onStepTransition,
}: UseStepBarProps<TItems>) {
  type StepId = StepBarItemId<TItems>;
  const stepsRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [internalActive, setInternalActive] = useState<StepId | undefined>(
    (defaultActive ?? items[0]?.id) as StepId | undefined
  );
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    transform: "translateX(0px)",
    opacity: 0,
  });
  const isControlled = active !== undefined;
  const currentActive = ((isControlled ? active : internalActive) ??
    items[0]?.id) as StepId | undefined;

  const enabledItems = items.filter((item) => !item?.disabled);
  const activeItemsIndex = enabledItems.findIndex(
    (item) => item.id === currentActive
  );
  const activeIndex = items.findIndex((item) => item.id === currentActive);
  const isFirstStep = activeIndex <= 0;
  const isLastStep =
    activeIndex < 0 ||
    activeIndex >= items.length - 1 ||
    activeItemsIndex >= enabledItems.length - 1;

  useEffect(() => {
    if (isControlled) return;
    if (internalActive !== undefined) return;

    const nextDefault = defaultActive ?? items[0]?.id;
    if (nextDefault !== undefined) {
      setInternalActive(nextDefault as StepId);
    }
  }, [defaultActive, internalActive, isControlled, items]);

  const changeStep = (step: StepId) => {
    const previousStep = currentActive;

    if (!isControlled) {
      setInternalActive(step);
    }

    if (previousStep !== undefined) {
      const enabledStepIds = enabledItems.map((item) => item.id as StepId);
      const previousIndex = enabledStepIds.indexOf(previousStep);
      const nextIndex = enabledStepIds.indexOf(step);
      const direction =
        nextIndex === previousIndex
          ? "same"
          : nextIndex < previousIndex
            ? "backward"
            : "forward";

      onStepTransition?.({
        previousStep,
        nextStep: step,
        direction,
      });
    }

    onChangeStep?.(step);
  };

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

  const onStepClick = (step: StepId) => changeStep(step);
  const goPrev = () =>
    !isFirstStep && changeStep(enabledItems[activeItemsIndex - 1].id as StepId);
  const goNext = () =>
    !isLastStep && changeStep(enabledItems[activeItemsIndex + 1].id as StepId);

  return {
    active: currentActive,
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
