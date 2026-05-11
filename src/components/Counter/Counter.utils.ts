export const formatCount = (count: number, maxCount?: number): string => {
  if (!!maxCount && count > maxCount) {
    return `${maxCount}+`;
  }
  return count.toString();
};
