import { useCallback, useMemo } from "react";
import type { TimeValue } from "@/components/TimeBar";
import type { DateRangeBound, DateRangeValue } from "../DateRange.types";
import { buildTimeBarKey, getActiveTimeValue } from "../utils/timeValue";

export interface UseDateRangeTimeBarParams {
  activeBound: DateRangeBound | null;
  currentValue: DateRangeValue;
  setActiveBound: (bound: DateRangeBound | null) => void;
  handleOpenChange: (open: boolean) => void;
  handleTimeSelect: (bound: DateRangeBound, time: TimeValue) => void;
}

export const useDateRangeTimeBar = ({
  activeBound,
  currentValue,
  setActiveBound,
  handleOpenChange,
  handleTimeSelect,
}: UseDateRangeTimeBarParams) => {
  const activeDate = activeBound ? currentValue[activeBound] : undefined;

  const value = useMemo(() => getActiveTimeValue(activeDate), [activeDate]);

  const key = useMemo(
    () => buildTimeBarKey(activeBound, activeDate),
    [activeBound, activeDate]
  );

  const handleChange = useCallback(
    (timeValue: TimeValue) => {
      if (!activeBound) {
        return;
      }

      handleTimeSelect(activeBound, timeValue);
    },
    [activeBound, handleTimeSelect]
  );

  const handleConfirm = useCallback(
    (timeValue: TimeValue) => {
      const confirmedBound = activeBound;

      handleChange(timeValue);

      if (confirmedBound === "start") {
        setActiveBound("end");
      } else if (confirmedBound === "end") {
        handleOpenChange(false);
      }
    },
    [activeBound, handleChange, handleOpenChange, setActiveBound]
  );

  return {
    activeDate,
    value,
    key,
    handleChange,
    handleConfirm,
  };
};
