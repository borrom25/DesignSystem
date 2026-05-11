import type {
  SegmentedIndicatorParams,
  SegmentedIndicatorStyles,
  SegmentedOption,
} from "./Segmented.types";

export function getSegmentedFallbackValue<T extends string | number = string>(
  defaultValue: T | undefined,
  options: SegmentedOption<T>[]
) {
  return defaultValue || options[0]?.value;
}

export function getSegmentedIndicatorStyles({
  containerElement,
  activeButton,
  position,
}: SegmentedIndicatorParams): SegmentedIndicatorStyles {
  const isHorizontal = position === "horizontal";
  const buttonRect = activeButton.getBoundingClientRect();
  const containerRect = containerElement.getBoundingClientRect();
  const containerStyles = getComputedStyle(containerElement);
  const axisPadding = parseFloat(containerStyles.padding);
  const normalizedPadding = Number.isNaN(axisPadding) ? 0 : axisPadding;
  const offset =
    buttonRect[isHorizontal ? "left" : "top"] -
    containerRect[isHorizontal ? "left" : "top"] -
    normalizedPadding;

  return {
    transform: `translate${isHorizontal ? "X" : "Y"}(${offset}px)`,
    width: buttonRect.width,
    height: buttonRect.height,
  };
}
