import { isSameDay, startOfDay } from "date-fns";

export function normalizeCalendarFilterDate(value?: Date | null) {
  return value ? startOfDay(value) : undefined;
}

export function areCalendarFilterDatesEqual(
  left?: Date | null,
  right?: Date | null
) {
  if (!left || !right) {
    return left === right;
  }

  return isSameDay(left, right);
}
