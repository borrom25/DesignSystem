import { ChangeEvent, useCallback, useMemo, useState } from "react";
import type { TimeValue } from "@/components/TimeBar";
import type { UseTimePickerValueProps } from "../TimePicker.types";

const DEFAULT_SEPARATOR = ":";

function getFormatParts(formatPattern: string) {
  const separator = formatPattern.match(/[^a-zA-Z]/)?.[0] || DEFAULT_SEPARATOR;
  const parts = formatPattern.split(separator);

  return { separator, parts };
}

function clampByToken(token: string, rawValue: string): string {
  if (!rawValue) return rawValue;

  const parsedValue = Number.parseInt(rawValue, 10);
  const normalizedToken = token.toLowerCase();

  switch (normalizedToken) {
    case "hh":
      if (parsedValue > 23) return "23";
      if (parsedValue < 0 && rawValue.length === 2) return "00";
      return rawValue;
    case "mm":
    case "ss":
      if (parsedValue > 59) return "59";
      if (parsedValue < 0 && rawValue.length === 2) return "00";
      return rawValue;
    default:
      return rawValue;
  }
}

function formatInputValue(
  value: string | undefined,
  formatPattern: string
): string {
  if (!value) return "";

  const numbers = value.replace(/\D/g, "");
  const { separator, parts } = getFormatParts(formatPattern);

  const rawValues: string[] = [];
  let position = 0;

  for (const part of parts) {
    const length = part.length;
    rawValues.push(numbers.slice(position, position + length));
    position += length;
  }

  const validated = parts.map((part, index) =>
    clampByToken(part, rawValues[index])
  );

  while (validated.length && !validated[validated.length - 1]) {
    validated.pop();
  }

  return validated.join(separator);
}

function parseValueToTime(
  value: string | undefined,
  formatPattern: string
): TimeValue | undefined {
  if (!value) return undefined;

  const { parts } = getFormatParts(formatPattern);
  const numbers = value.replace(/\D/g, "");
  const expectedLength = parts.join("").length;
  if (numbers.length !== expectedLength) return undefined;

  let position = 0;
  const parsedByToken: Record<string, number> = {};

  for (const part of parts) {
    const length = part.length;
    const chunk = numbers.slice(position, position + length);
    parsedByToken[part.toLowerCase()] = Number.parseInt(chunk, 10);
    position += length;
  }

  const hours = parsedByToken.hh;
  const minutes = parsedByToken.mm;
  const seconds = parsedByToken.ss ?? 0;

  if (
    Number.isNaN(hours) ||
    Number.isNaN(minutes) ||
    Number.isNaN(seconds) ||
    hours < 0 ||
    hours > 23 ||
    minutes < 0 ||
    minutes > 59 ||
    seconds < 0 ||
    seconds > 59
  ) {
    return undefined;
  }

  return { hours, minutes, seconds };
}

function formatTimeByPattern(
  value: TimeValue | undefined,
  formatPattern: string
): string {
  if (!value) return "";

  const { separator, parts } = getFormatParts(formatPattern);
  const tokensMap: Record<string, string> = {
    hh: value.hours.toString().padStart(2, "0"),
    mm: value.minutes.toString().padStart(2, "0"),
    ss: value.seconds.toString().padStart(2, "0"),
  };

  return parts
    .map((part) => tokensMap[part.toLowerCase()] ?? "")
    .filter(Boolean)
    .join(separator);
}

export function useTimePickerValue({
  value,
  time,
  defaultValue,
  defaultTime,
  onChangeValue,
  onChangeTime,
  onClear,
  format,
  disabled = false,
}: UseTimePickerValueProps) {
  const isValueControlled = value !== undefined;
  const isTimeControlled = time !== undefined;

  const [valueState, setValueState] = useState<string | undefined>(
    defaultValue
  );
  const [timeState, setTimeState] = useState<TimeValue | undefined>(
    defaultTime ?? parseValueToTime(defaultValue, format)
  );

  const currentValue = useMemo(
    () => (isValueControlled ? value : valueState),
    [isValueControlled, value, valueState]
  );
  const currentTime = useMemo(
    () =>
      isTimeControlled
        ? time
        : (timeState ?? parseValueToTime(currentValue, format)),
    [isTimeControlled, time, timeState, currentValue, format]
  );

  const hasValue = !!currentValue?.trim();

  const formattedValue = useMemo(
    () => formatInputValue(currentValue, format),
    [currentValue, format]
  );

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      const nextRawValue = event.target.value.replace(/[a-zA-Z]/g, "");
      const nextFormattedValue = formatInputValue(nextRawValue, format);
      const nextTime = parseValueToTime(nextFormattedValue, format);

      if (!isValueControlled) {
        setValueState(nextFormattedValue);
      }
      onChangeValue?.(nextFormattedValue || undefined);

      if (!isTimeControlled) {
        setTimeState(nextTime);
      }
      if (nextTime) {
        onChangeTime?.(nextTime);
      }
    },
    [
      disabled,
      format,
      isValueControlled,
      isTimeControlled,
      onChangeTime,
      onChangeValue,
    ]
  );

  const handleTimeChange = useCallback(
    (nextTime: TimeValue) => {
      if (disabled) return;

      if (!isTimeControlled) setTimeState(nextTime);

      onChangeTime?.(nextTime);

      const nextFormattedValue = formatTimeByPattern(nextTime, format);
      if (!isValueControlled) setValueState(nextFormattedValue);

      onChangeValue?.(nextFormattedValue);
    },
    [
      disabled,
      format,
      isTimeControlled,
      isValueControlled,
      onChangeTime,
      onChangeValue,
    ]
  );

  const handleClear = useCallback(() => {
    if (disabled) return;

    if (!isValueControlled) {
      setValueState(undefined);
    }
    onChangeValue?.(undefined);

    if (!isTimeControlled) {
      setTimeState(undefined);
    }
    onChangeTime?.(undefined);

    onClear?.();
  }, [
    disabled,
    isTimeControlled,
    isValueControlled,
    onChangeTime,
    onChangeValue,
    onClear,
  ]);

  return {
    value: currentTime,
    formattedValue,
    hasValue,
    handleInputChange,
    handleTimeChange,
    handleClear,
  };
}
