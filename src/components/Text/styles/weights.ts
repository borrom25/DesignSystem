import type { TextWeight } from "../Text.types";

export const weightClasses: Record<TextWeight, string> = {
  regular: "font-regular",
  medium: "font-medium",
  semibold: "font-semibold",
} as const;

export const getWeightClass = (
  _size: string,
  weight: TextWeight
): string => {
  return weightClasses[weight];
};
