import { dateInputMaxDigits } from "../constants";

const formatDateDigits = (digits: string): string => {
  if (digits.length <= 2) {
    return digits;
  }

  if (digits.length <= 4) {
    return `${digits.slice(0, 2)}.${digits.slice(2)}`;
  }

  return `${digits.slice(0, 2)}.${digits.slice(2, 4)}.${digits.slice(4)}`;
};

const getDateInputDigits = (value: string): string =>
  value.replace(/\D/g, "").slice(0, dateInputMaxDigits);

const normalizeDateDigits = (value: string): string => {
  const result: string[] = [];

  for (const digit of getDateInputDigits(value)) {
    const index = result.length;

    if (index === 0) {
      result.push(Number(digit) > 3 ? "0" : digit);

      if (Number(digit) > 3) {
        result.push(digit);
      }

      continue;
    }

    if (index === 1) {
      const day = Number(`${result[0]}${digit}`);

      if (day >= 1 && day <= 31) {
        result.push(digit);
      }

      continue;
    }

    if (index === 2) {
      result.push(Number(digit) > 1 ? "0" : digit);

      if (Number(digit) > 1) {
        result.push(digit);
      }

      continue;
    }

    if (index === 3) {
      const month = Number(`${result[2]}${digit}`);

      if (month >= 1 && month <= 12) {
        result.push(digit);
      }

      continue;
    }

    result.push(digit);
  }

  return result.slice(0, dateInputMaxDigits).join("");
};

export const normalizeDateInputValue = (value: string): string =>
  formatDateDigits(normalizeDateDigits(value));

export const isDateInputEmpty = (value: string): boolean =>
  getDateInputDigits(value).length === 0;

export const isDateInputComplete = (value: string): boolean =>
  getDateInputDigits(value).length === dateInputMaxDigits;
