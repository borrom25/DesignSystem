const emptyItemsCount = 0;
const firstVisibleIndex = 0;
const minGapCount = 0;
const itemsCountIncrement = 1;
const lastItemOffset = 1;

export function getVisibleItemsCount(
  containerWidth: number,
  itemWidths: number[],
  moreWidth: number,
  gap: number
) {
  if (!itemWidths.length || containerWidth <= emptyItemsCount) {
    return emptyItemsCount;
  }

  const totalItemsWidth = itemWidths.reduce(
    (sum, width) => sum + width,
    emptyItemsCount
  );
  const gapsCount = Math.max(itemWidths.length - lastItemOffset, minGapCount);
  const totalGapsWidth = gap * gapsCount;
  const totalRequiredWidth = totalItemsWidth + totalGapsWidth;

  if (totalRequiredWidth <= containerWidth) {
    return itemWidths.length;
  }

  let accumulatedWidth = emptyItemsCount;
  let visibleCount = emptyItemsCount;

  for (
    let index = firstVisibleIndex;
    index < itemWidths.length;
    index += itemsCountIncrement
  ) {
    const isFirstItem = visibleCount === emptyItemsCount;
    const currentItemWidth = itemWidths[index];

    const widthWithCurrentItem = isFirstItem
      ? currentItemWidth
      : accumulatedWidth + gap + currentItemWidth;

    const hasMoreItemsAfter = index < itemWidths.length - lastItemOffset;
    const moreButtonSpace = hasMoreItemsAfter
      ? gap + moreWidth
      : emptyItemsCount;

    const totalWidthNeeded = widthWithCurrentItem + moreButtonSpace;

    if (totalWidthNeeded > containerWidth) {
      break;
    }

    accumulatedWidth = widthWithCurrentItem;
    visibleCount += itemsCountIncrement;
  }

  return visibleCount;
}
