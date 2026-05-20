import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { format, isValid, parse } from "date-fns";
import type { UseDatePickerValueProps } from "../DatePicker.types";

export function useDatePickerValue({
  value,
  onChangeInput,
  onChangeDate,
  onClear,
  format: formatPattern,
}: UseDatePickerValueProps) {
  const [valueState, setValueState] = useState<string | undefined>("");
  const [date, setDate] = useState<Date | undefined>();

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : valueState;
  const changeValue = onChangeInput ?? setValueState;

  const formatDate = useCallback(
    (newDate?: Date): string =>
      !newDate || !isValid(newDate) ? "" : format(newDate, formatPattern),
    [formatPattern]
  );

  const formatValue = useCallback(
    (newValue?: string) => {
      if (!newValue) return "";

      const separator = formatPattern.match(/[^a-zA-Z]/)?.[0] || ".";
      const parts = formatPattern.split(separator);
      const numbers = newValue.replace(/\D/g, "");

      const rawValues: string[] = [];
      let position = 0;

      for (const part of parts) {
        const length = part.length;
        rawValues.push(numbers.slice(position, position + length));
        position += length;
      }

      const validated = parts.map((part, index) => {
        const rawPart = rawValues[index];
        if (!rawPart) return rawPart;

        const key = part.toLowerCase();

        switch (key) {
          case "dd": {
            const day = parseInt(rawPart, 10);
            if (day > 31) return "31";
            if (day < 1 && rawPart.length === 2) return "01";
            return rawPart;
          }
          case "mm": {
            const month = parseInt(rawPart, 10);
            if (month > 12) return "12";
            if (month < 1 && rawPart.length === 2) return "01";
            return rawPart;
          }
          default:
            return rawPart;
        }
      });

      while (validated.length && !validated[validated.length - 1])
        validated.pop();

      return validated.join(separator);
    },
    [formatPattern]
  );

  const formattedValue = useMemo(
    () => formatValue(currentValue),
    [currentValue, formatValue]
  );

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const formattedNewValue = event.target.value.replace(/[a-zA-Z]/g, "");
      const inputLength = formattedNewValue.replace(/\D/g, "").trim().length;
      const formatLength = formatPattern.replace(/[^a-zA-Z]/g, "").length;

      if (inputLength === formatLength) {
        const parsedDate = parse(formattedNewValue, formatPattern, new Date());
        setDate(parsedDate);
        onChangeDate?.(parsedDate);
        changeValue(formatValue(formattedNewValue));
      } else if (inputLength < formatLength)
        changeValue(formatValue(formattedNewValue));
    },
    [changeValue, formatPattern, formatValue, onChangeDate]
  );

  const handleCalendarChange = useCallback(
    (newDate?: Date) => {
      setDate(newDate);
      onChangeDate?.(newDate);
      changeValue(formatDate(newDate));
    },
    [changeValue, formatDate, onChangeDate]
  );

  const handleClear = useCallback(() => {
    changeValue(undefined);
    setDate(undefined);
    onChangeDate?.(undefined);
    onClear?.();
  }, [changeValue, onChangeDate, onClear]);

  return {
    date,
    formattedValue,
    handleInputChange,
    handleCalendarChange,
    handleClear,
    hasValue: !!currentValue?.trim(),
  };
}
