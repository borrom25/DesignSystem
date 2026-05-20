import { cn } from "@/utils";

export const isValidPinDigit = (value: string): boolean => {
  return /^[0-9]$/.test(value);
};

export const sanitizePinValue = (value: string): string => {
  if (!value) return "";
  const lastChar = value.slice(-1);
  return isValidPinDigit(lastChar) ? lastChar : "";
};

export const getPinInputClassName = ({
  baseClasses,
  sizeClasses,
  stateClasses,
  disabledClasses,
  errorClasses,
  focusedClasses,
  disabled,
  isError,
  isFocused,
}: {
  baseClasses: string;
  sizeClasses: string;
  stateClasses: string;
  disabledClasses: string;
  errorClasses: string;
  focusedClasses: string;
  disabled: boolean;
  isError: boolean;
  isFocused: boolean;
}): string => {
  if (disabled) return cn(baseClasses, sizeClasses, disabledClasses);
  if (isError) return cn(baseClasses, sizeClasses, errorClasses);
  if (isFocused) return cn(baseClasses, sizeClasses, focusedClasses);

  return cn(baseClasses, sizeClasses, stateClasses);
};
