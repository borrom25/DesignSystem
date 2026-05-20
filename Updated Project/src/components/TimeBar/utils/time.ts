import type { TimeValue } from "../TimeBar.types";

export function generateHours(use24Hour: boolean): number[] {
  const max = use24Hour ? 24 : 12;
  return Array.from({ length: max }, (_, i) => i);
}

export function generateMinutes(): number[] {
  return Array.from({ length: 60 }, (_, i) => i);
}

export function generateSeconds(): number[] {
  return Array.from({ length: 60 }, (_, i) => i);
}

export function formatTimeValue(value: number): string {
  return value.toString().padStart(2, "0");
}

export function getCurrentTime(): TimeValue {
  const now = new Date();
  return {
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
  };
}

export function getDefaultTimeValue(): TimeValue {
  return {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
}

export function isValidTimeValue(value: TimeValue | undefined): boolean {
  if (!value) return false;
  return (
    typeof value.hours === "number" &&
    typeof value.minutes === "number" &&
    typeof value.seconds === "number" &&
    value.hours >= 0 &&
    value.hours < 24 &&
    value.minutes >= 0 &&
    value.minutes < 60 &&
    value.seconds >= 0 &&
    value.seconds < 60
  );
}

export function normalizeTimeValue(value: TimeValue): TimeValue {
  return {
    hours: Math.max(0, Math.min(23, value.hours)),
    minutes: Math.max(0, Math.min(59, value.minutes)),
    seconds: Math.max(0, Math.min(59, value.seconds)),
  };
}

export function formatTimeDisplay(
  value: TimeValue | undefined,
  showSeconds: boolean
): string {
  if (!value) return "";
  const h = formatTimeValue(value.hours);
  const m = formatTimeValue(value.minutes);
  if (showSeconds) {
    const s = formatTimeValue(value.seconds);
    return `${h}:${m}:${s}`;
  }
  return `${h}:${m}`;
}
