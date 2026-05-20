import { useCallback, useState } from "react";
import type { DateRangeBound, DateRangeValue } from "../DateRange.types";

export interface UseDateRangeInteractionParams {
  disabled: boolean;
  currentValue: DateRangeValue;
  showTimeBar?: boolean;
  handleClear: () => void;
  handleBoundSelect: (
    activeBound: DateRangeBound,
    range: { from?: Date; to?: Date } | undefined
  ) =>
    | {
        nextActiveBound: DateRangeBound;
        nextValue: DateRangeValue;
      }
    | undefined;
}

const fieldClickBound = (value: DateRangeValue): DateRangeBound =>
  value.start && !value.end ? "end" : "start";

export const useDateRangeInteraction = ({
  disabled,
  currentValue,
  showTimeBar = false,
  handleClear,
  handleBoundSelect,
}: UseDateRangeInteractionParams) => {
  const [open, setOpen] = useState(false);
  const [activeBound, setActiveBound] = useState<DateRangeBound | null>(null);

  const handleBoundClick = useCallback(
    (bound: DateRangeBound) => {
      if (disabled) {
        return;
      }
      setActiveBound(bound);
      setOpen(true);
    },
    [disabled]
  );

  const handleFieldClick = useCallback(() => {
    if (disabled) {
      return;
    }
    handleBoundClick(fieldClickBound(currentValue));
  }, [currentValue, disabled, handleBoundClick]);

  const handleOpenChange = useCallback((nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) {
      setActiveBound(null);
    }
  }, []);

  const handleClearClick = useCallback(() => {
    if (disabled) {
      return;
    }
    handleClear();
    setActiveBound(null);
    setOpen(false);
  }, [disabled, handleClear]);

  const handleCalendarSelect = useCallback(
    (range: { from?: Date; to?: Date } | undefined) => {
      if (!activeBound) {
        return;
      }

      const wasEditingCompletedRange =
        !!currentValue.start && !!currentValue.end;
      const wasCompletingInitialRange =
        activeBound === "end" && !!currentValue.start && !currentValue.end;

      const selectionResult = handleBoundSelect(activeBound, range);

      if (!selectionResult) {
        return;
      }

      const rangeCompleted =
        wasCompletingInitialRange &&
        selectionResult.nextValue.start &&
        selectionResult.nextValue.end;

      const shouldCloseAfterSelection =
        !showTimeBar &&
        !!selectionResult.nextValue.start &&
        !!selectionResult.nextValue.end &&
        (rangeCompleted || wasEditingCompletedRange);

      if (shouldCloseAfterSelection) {
        setActiveBound(null);
        setOpen(false);
        return;
      }

      setActiveBound(selectionResult.nextActiveBound);
    },
    [
      activeBound,
      currentValue.end,
      currentValue.start,
      handleBoundSelect,
      showTimeBar,
    ]
  );

  return {
    open,
    activeBound,
    setActiveBound,
    handleBoundClick,
    handleFieldClick,
    handleOpenChange,
    handleClearClick,
    handleCalendarSelect,
  };
};
