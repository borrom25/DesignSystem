import type { ReactNode } from "react";
import type { CalendarSingleProps } from "@components/Calendar/Calendar.types.ts";

export interface CalendarFilterPanelProps {
  value?: Date;
  defaultValue?: Date;
  onApply: (value?: Date) => void;
  className?: string;
  width?: number;
  calendarClassName?: string;
  resetLabel?: ReactNode;
  applyLabel?: ReactNode;
  calendarProps?: Omit<
    CalendarSingleProps,
    "mode" | "value" | "defaultValue" | "onChange" | "className"
  >;
}

export interface UseCalendarFilterStateOptions {
  value?: Date;
  defaultValue?: Date;
  onChange?: (value?: Date) => void;
}

export interface UseCalendarFilterStateReturn {
  value?: Date;
  draft?: Date;
  setDraft: (value?: Date) => void;
  apply: () => void;
  reset: () => void;
  clear: () => void;
  isDirty: boolean;
  isEmpty: boolean;
}
