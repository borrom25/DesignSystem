import type { TimeValue } from "@/components/TimeBar";
import { defaultTimeValue } from "../constants";
import type { DateRangeBound } from "../DateRange.types";

export const getActiveTimeValue = (activeDate?: Date): TimeValue => {
  if (!activeDate) {
    return defaultTimeValue;
  }

  return {
    hours: activeDate.getHours(),
    minutes: activeDate.getMinutes(),
    seconds: activeDate.getSeconds(),
  };
};

export const buildTimeBarKey = (
  activeBound: DateRangeBound | null,
  activeDate?: Date
): string =>
  `timebar-${activeBound ?? "none"}-${activeDate?.getTime() ?? "empty"}`;
