import { formatIncompletePhoneNumber } from "libphonenumber-js/min";
import type { Country } from "react-phone-number-input";
import {
  InputPhoneValueFormat,
  type InputPhoneChangeMeta,
} from "./InputPhone.types";
import {
  defaultPhoneCountry,
  getPhoneCountryOption,
} from "./InputPhone.countries";

export const phoneDigitsLength = 15;
export const phoneCountryCode = "+7";
export const phonePattern = "[0-9\\- ()+]*";
export const phoneAutoComplete = "tel-national";
export const phoneDefaultInputMode = "numeric";

export function normalizePhoneDigits(
  value: string,
  country: Country = defaultPhoneCountry
): string {
  const { callingCode } = getPhoneCountryOption(country);
  const trimmedValue = value.trim();
  const digits = value.replace(/\D/g, "");

  if (!digits) {
    return "";
  }

  if (trimmedValue.startsWith("+") && digits.startsWith(callingCode)) {
    return digits.slice(
      callingCode.length,
      callingCode.length + phoneDigitsLength
    );
  }

  if (
    (country === "RU" || country === "KZ") &&
    digits.length === 11 &&
    /^[78]/.test(digits)
  ) {
    return digits.slice(1);
  }

  return digits.slice(0, phoneDigitsLength);
}

export function getPhoneInternationalValue(
  value: string,
  country: Country = defaultPhoneCountry
): string {
  const digits = normalizePhoneDigits(value, country);

  return digits ? `${getPhoneCountryOption(country).dialCode}${digits}` : "";
}

export function getPhoneRawValue(
  value: string,
  country: Country = defaultPhoneCountry,
  valueFormat: InputPhoneValueFormat = InputPhoneValueFormat.International
): string {
  const digits = normalizePhoneDigits(value, country);

  if (!digits) {
    return "";
  }

  if (valueFormat === InputPhoneValueFormat.National) {
    return digits;
  }

  return getPhoneInternationalValue(digits, country);
}

export function getPhoneValueMeta(
  value: string,
  country: Country = defaultPhoneCountry,
  valueFormat: InputPhoneValueFormat = InputPhoneValueFormat.International
): InputPhoneChangeMeta {
  const nationalValue = normalizePhoneDigits(value, country);
  const internationalValue = getPhoneInternationalValue(nationalValue, country);
  const { callingCode } = getPhoneCountryOption(country);

  return {
    value:
      valueFormat === InputPhoneValueFormat.National
        ? nationalValue
        : internationalValue,
    nationalValue,
    internationalValue,
    country,
    callingCode,
  };
}

export function formatPhoneValue(
  value: string,
  country: Country = defaultPhoneCountry
): string {
  const digits = normalizePhoneDigits(value, country);

  if (!digits) {
    return "";
  }

  return formatIncompletePhoneNumber(digits, country);
}
