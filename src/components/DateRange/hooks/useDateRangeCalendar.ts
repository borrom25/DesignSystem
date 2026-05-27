import { useMemo } from "react";
import type { DateRangeBound, DateRangeValue } from "../DateRange.types";
import {
  buildCalendarKey,
  getCalendarDisplayMonth,
  getCalendarMonthCount,
} from "../utils/calendar";

export interface UseDateRangeCalendarParams {
  activeBound: DateRangeBound | null;
  currentValue: DateRangeValue;
  showTimeBar: boolean;
  open: boolean;
}

export const useDateRangeCalendar = ({
  activeBound,
  currentValue,
  showTimeBar,
  open,
}: UseDateRangeCalendarParams) => {
  const displayMonth = useMemo(
    () => getCalendarDisplayMonth(activeBound, currentValue),
    [activeBound, currentValue]
  );

  const numberOfMonths = getCalendarMonthCount(showTimeBar);

  const key = useMemo(
    () => buildCalendarKey(activeBound, displayMonth, numberOfMonths, open),
    [activeBound, displayMonth, numberOfMonths, open]
  );

  return { displayMonth, numberOfMonths, key };
};
