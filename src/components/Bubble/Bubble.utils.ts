import { CalculateLayoutResult } from "./Bubble.types.ts";

export const calculateLayout = (count: number): CalculateLayoutResult[] => {
  if (count === 0) return [];
  if (count === 1)
    return [
      { colSpan: 1, aspect: "aspect-auto", img: "h-auto object-contain" },
    ];
  if (count === 2 || count === 4)
    return Array(count).fill({
      colSpan: 1,
      aspect: "aspect-square",
      img: "h-full object-cover",
    });
  if (count === 3)
    return [
      { colSpan: 2, aspect: "aspect-video", img: "h-full object-cover" },
      { colSpan: 1, aspect: "aspect-square", img: "h-full object-cover" },
      { colSpan: 1, aspect: "aspect-square", img: "h-full object-cover" },
    ];

  const basePattern = [3, 3, 2, 2, 2];
  const cycles = Math.floor(count / 5);
  const remainder = count % 5;

  const spans = [
    ...Array.from({ length: cycles }, () => basePattern).flat(),
    ...(remainder === 0 ? basePattern : Array(remainder).fill(3)),
  ];

  return Array.from({ length: count }, (_, i) => ({
    colSpan: spans[i],
    aspect: "aspect-square",
    img: "h-full object-cover",
  }));
};
