import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { format, isAfter, isBefore, isValid, parse } from "date-fns";
import type { UseDatePickerValueProps } from "../DatePicker.types";
import { editDateText, formatDateText } from "../utils/dateInputMask";

function clampDate(date: Date, minDate?: Date, maxDate?: Date) {
  if (minDate && isBefore(date, minDate)) return minDate;
  if (maxDate && isAfter(date, maxDate)) return maxDate;
  return date;
}

export function useDatePickerValue({
  value,
  onChangeInput,
  onChangeDate,
  onClear,
  format: formatPattern,
  minDate: minDateProp,
  maxDate: maxDateProp,
}: UseDatePickerValueProps) {
  const [valueState, setValueState] = useState<string | undefined>("");
  const [date, setDate] = useState<Date | undefined>();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const caretRef = useRef<number | null>(null);

  const [minDate, maxDate] = useMemo(
    () =>
      [minDateProp, maxDateProp].map((limit) =>
        typeof limit === "string"
          ? parse(limit, formatPattern, new Date())
          : limit
      ),
    [minDateProp, maxDateProp, formatPattern]
  );

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : valueState;
  const changeValue = onChangeInput ?? setValueState;

  const formatDate = useCallback(
    (newDate?: Date): string =>
      !newDate || !isValid(newDate) ? "" : format(newDate, formatPattern),
    [formatPattern]
  );

  const formatValue = useCallback(
    (newValue?: string) => formatDateText(newValue, formatPattern),
    [formatPattern]
  );

  const formattedValue = useMemo(
    () => formatValue(currentValue),
    [currentValue, formatValue]
  );

  const restoreCaret = useCallback(() => {
    const caret = caretRef.current;
    const input = inputRef.current;
    if (caret == null || !input) return;

    input.setSelectionRange(caret, caret);
    caretRef.current = null;
  }, []);

  useLayoutEffect(() => {
    restoreCaret();
  }, [formattedValue, restoreCaret]);

  const commit = useCallback(
    (nextText: string, caret?: number) => {
      const nextValue = formatValue(nextText);
      const formatLength = formatPattern.replace(/[^a-zA-Z]/g, "").length;
      const inputLength = nextValue.replace(/\D/g, "").length;

      if (caret != null) caretRef.current = caret;

      if (inputLength === formatLength) {
        const parsedDate = parse(nextValue, formatPattern, new Date());
        const nextDate = isValid(parsedDate)
          ? clampDate(parsedDate, minDate, maxDate)
          : undefined;

        setDate(nextDate);
        onChangeDate?.(nextDate);

        const committed =
          nextDate && nextDate !== parsedDate
            ? formatDate(nextDate)
            : nextValue;

        if (committed === formattedValue) {
          restoreCaret();
        }

        changeValue(committed);
        return;
      }

      setDate(undefined);
      onChangeDate?.(undefined);

      if (nextValue === formattedValue) {
        restoreCaret();
      }

      changeValue(nextValue || undefined);
    },
    [
      changeValue,
      formatDate,
      formatPattern,
      formatValue,
      formattedValue,
      maxDate,
      minDate,
      onChangeDate,
      restoreCaret,
    ]
  );

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const nextValue = formatValue(event.target.value);
      caretRef.current = nextValue.length;
      commit(nextValue, nextValue.length);
    },
    [commit, formatValue]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      const { key } = event;
      const isDigit = /^\d$/.test(key);
      const isEditKey = key === "Backspace" || key === "Delete" || isDigit;

      if (!isEditKey || event.ctrlKey || event.metaKey || event.altKey) return;

      event.preventDefault();

      const input = event.currentTarget;
      const selectionStart = input.selectionStart ?? 0;
      const selectionEnd = input.selectionEnd ?? selectionStart;
      const result = editDateText({
        value: formattedValue,
        selectionStart,
        selectionEnd,
        key,
        format: formatPattern,
      });

      commit(result.value, result.caret);
    },
    [commit, formatPattern, formattedValue]
  );

  const handleCalendarChange = useCallback(
    (newDate?: Date) => {
      const nextValue = formatDate(newDate);
      caretRef.current = nextValue.length;
      setDate(newDate);
      onChangeDate?.(newDate);
      changeValue(nextValue);
    },
    [changeValue, formatDate, onChangeDate]
  );

  const handleClear = useCallback(() => {
    caretRef.current = 0;
    changeValue(undefined);
    setDate(undefined);
    onChangeDate?.(undefined);
    onClear?.();
  }, [changeValue, onChangeDate, onClear]);

  return {
    date,
    formattedValue,
    handleInputChange,
    handleKeyDown,
    handleCalendarChange,
    handleClear,
    hasValue: !!currentValue?.trim(),
    inputRef,
    minDate,
    maxDate,
  };
}
