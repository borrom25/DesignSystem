/**
 * Calculates the percentage position of a value within a range
 * @param value - Current value
 * @param min - Minimum value of the range
 * @param max - Maximum value of the range
 * @returns Percentage (0-100)
 */
export function calculatePercentage(
  value: number,
  min: number,
  max: number
): number {
  const clampedValue = Math.min(Math.max(value, min), max);
  return ((clampedValue - min) / (max - min)) * 100;
}
