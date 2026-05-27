import type { TimeValue } from "@/components/TimeBar";

export const dateFormat = "dd.MM.yyyy";
export const dateTimeFormat = "dd.MM.yyyy - HH:mm:ss";

export const dateInputMaxDigits = 8;
export const dateInputMaxLength = 10;
export const dateInputPlaceholder = "ДД.ММ.ГГГГ";

export const datePlaceholderStart = "Дата поступления";
export const datePlaceholderEnd = "Дата закрытия";

export const defaultTimeValue: TimeValue = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export const calendarMonthsWithTimeBar = 1;
export const calendarMonthsDefault = 2;

export const dataRangeFieldAria = {
  start: "Выбрать дату начала",
  end: "Выбрать дату окончания",
  clear: "Очистить даты",
} as const;

export const dataRangePopover = {
  contentWidth: "w-max",
  surface: "w-max border-none bg-transparent p-0 shadow-none",
  timeBar:
    "min-h-0 w-full flex-1 rounded-none border-0 bg-transparent shadow-none",
} as const;
