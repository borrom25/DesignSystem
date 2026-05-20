import {
  ITEM_HEIGHT,
  REPEAT_COUNT,
  MIDDLE_REPEAT_INDEX,
} from "../constants/scroll";

export function getAbsoluteIndexAtViewportCenter(
  scrollTop: number,
  clientHeight: number,
  edgePadding: number,
  totalRepeatItems: number
): number {
  if (totalRepeatItems <= 0) return -1;

  const centerContentY = scrollTop + clientHeight / 2;
  const relative = centerContentY - edgePadding - ITEM_HEIGHT / 2;
  const idx = Math.round(relative / ITEM_HEIGHT);

  return Math.max(0, Math.min(totalRepeatItems - 1, idx));
}

export function getScrollTopForCenteredAbsoluteIndex(
  absoluteIndex: number,
  edgePadding: number,
  clientHeight: number,
  scrollHeight: number
): number {
  const itemCenterY =
    edgePadding + absoluteIndex * ITEM_HEIGHT + ITEM_HEIGHT / 2;
  const nextTop = itemCenterY - clientHeight / 2;
  const maxScroll = Math.max(0, scrollHeight - clientHeight);

  return Math.max(0, Math.min(maxScroll, nextTop));
}

export function normalizeIndex(index: number, length: number): number {
  return ((index % length) + length) % length;
}

export function generateRenderedValues<T>(values: T[]) {
  return Array.from({ length: REPEAT_COUNT }, (_, repeatIndex) =>
    values.map((value, index) => ({
      key: `${repeatIndex}-${value}`,
      value,
      absoluteIndex: repeatIndex * values.length + index,
    }))
  ).flat();
}

export function getMiddleAbsoluteIndex(
  value: number,
  values: number[]
): number {
  const index = values.indexOf(value);
  if (index === -1) return -1;
  return MIDDLE_REPEAT_INDEX * values.length + index;
}

export function shouldRecenter(
  absoluteIndex: number,
  valuesLength: number
): boolean {
  const isNearStart = absoluteIndex < valuesLength;
  const isNearEnd = absoluteIndex >= valuesLength * (REPEAT_COUNT - 1);
  return isNearStart || isNearEnd;
}

export function calculateRecenterIndex(
  absoluteIndex: number,
  valuesLength: number
): number {
  const normalizedIndex = normalizeIndex(absoluteIndex, valuesLength);
  return MIDDLE_REPEAT_INDEX * valuesLength + normalizedIndex;
}
