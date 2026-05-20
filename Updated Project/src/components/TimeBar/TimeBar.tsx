import { useMemo } from "react";
import { cn } from "@/utils";
import { TimeColumn, ControlButtons } from "./ui";
import { useTimeBarState } from "./hooks/useTimeBarState";
import { generateHours, generateMinutes, generateSeconds } from "./utils";
import { timeBarStyles } from "./styles";
import { SELECTION_PILL_HEIGHT } from "./constants/scroll";
import type { TimeBarProps } from "./TimeBar.types";

export function TimeBar({
  value,
  defaultValue,
  onChange,
  onConfirm,
  disabled = false,
  showSeconds = true,
  use24Hour = true,
  showNowButton = true,
  showConfirmButton = true,
  nowButtonText = "Сейчас",
  confirmButtonText = "Ок",
  className,
  columnsFillHeight = false,
  footerSlot,
}: TimeBarProps) {
  const { timeValue, setHours, setMinutes, setSeconds, setToNow, confirm } =
    useTimeBarState({
      value,
      defaultValue,
      onChange,
      onConfirm,
    });

  const hours = useMemo(() => generateHours(use24Hour), [use24Hour]);
  const minutes = useMemo(() => generateMinutes(), []);
  const seconds = useMemo(() => generateSeconds(), []);

  return (
    <div
      className={cn(
        timeBarStyles.wrapper,
        columnsFillHeight && timeBarStyles.wrapperFill,
        className
      )}
    >
      <div
        className={cn(
          timeBarStyles.columnsContainer,
          columnsFillHeight && timeBarStyles.columnsContainerFill
        )}
      >
        <div
          aria-hidden="true"
          className={timeBarStyles.selectionPill}
          style={{ height: SELECTION_PILL_HEIGHT }}
        />

        <TimeColumn
          values={hours}
          selectedValue={timeValue.hours}
          onSelect={setHours}
          disabled={disabled}
          fillHeight={columnsFillHeight}
        />

        <TimeColumn
          values={minutes}
          selectedValue={timeValue.minutes}
          onSelect={setMinutes}
          disabled={disabled}
          fillHeight={columnsFillHeight}
        />

        {showSeconds && (
          <TimeColumn
            values={seconds}
            selectedValue={timeValue.seconds}
            onSelect={setSeconds}
            disabled={disabled}
            fillHeight={columnsFillHeight}
          />
        )}
      </div>

      {footerSlot ?? (
        <ControlButtons
          onNow={setToNow}
          onConfirm={confirm}
          disabled={disabled}
          nowButtonText={nowButtonText}
          confirmButtonText={confirmButtonText}
          showNowButton={showNowButton}
          showConfirmButton={showConfirmButton}
        />
      )}
    </div>
  );
}
