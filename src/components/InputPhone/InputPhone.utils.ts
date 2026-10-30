import phoneMetadata from "libphonenumber-js/metadata.max";
import { createMask } from "imask";
import type { ClipboardEvent } from "react";
import { flushSync } from "react-dom";
import type { Country } from "react-phone-number-input";
import {
  defaultPhoneCountry,
  getPhoneCountryOption,
  type PhoneCountryOption,
} from "./InputPhone.countries";
import {
  HandleInputPhonePasteParams,
  InputPhoneValueFormat,
  type InputPhoneChangeMeta,
} from "./InputPhone.types";

export const phoneDigitsLength = 15;
export const phoneCountryCode = "+7";
export const phonePattern = "[0-9\\- ()+]*";
export const phoneAutoComplete = "tel-national";
export const phoneDefaultInputMode = "numeric";

const nationalPhoneMask = createMask({
  mask: "000 000-00-00",
});

function toLengthList(value: unknown): number[] {
  return Array.isArray(value)
    ? value.filter((length): length is number => typeof length === "number")
    : [];
}

export function formatNationalPhoneDigits(digits: string): string {
  nationalPhoneMask.resolve(digits.slice(0, 10));
  return nationalPhoneMask.value + digits.slice(10);
}

export function getPhoneCountryMaxNationalLength(country: Country): number {
  const metadata = phoneMetadata.countries?.[country];

  if (!Array.isArray(metadata)) {
    return phoneDigitsLength;
  }

  const typesMetadata = metadata[11];
  const fixedLineLengths = toLengthList(typesMetadata[0][1]);

  const mobileLengths = toLengthList(typesMetadata[1][1]);

  const mainTypeLengths = [...fixedLineLengths, ...mobileLengths];

  if (mainTypeLengths.length) {
    return Math.max(...mainTypeLengths);
  }

  return Math.max(...toLengthList(metadata[3]), phoneDigitsLength);
}

export function getPhoneInputMaxLength(country: Country): number {
  const maxNationalLength = getPhoneCountryMaxNationalLength(country);

  return formatNationalPhoneDigits("0".repeat(maxNationalLength)).length;
}

export function normalizePhoneDigits(
  value: string,
  country: Country = defaultPhoneCountry
): string {
  const { callingCode } = getPhoneCountryOption(country);
  const maxNationalLength = getPhoneCountryMaxNationalLength(country);
  const trimmedValue = value.trim();
  const digits = value.replace(/\D/g, "");

  if (!digits) return "";

  if (trimmedValue.startsWith("+") && digits.startsWith(callingCode)) {
    return digits.slice(
      callingCode.length,
      callingCode.length + maxNationalLength
    );
  }

  if (
    (country === "RU" || country === "KZ") &&
    digits.length === 11 &&
    /^[78]/.test(digits)
  )
    return digits.slice(1);

  return digits.slice(0, maxNationalLength);
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

  if (!digits) return "";

  if (valueFormat === InputPhoneValueFormat.National) return digits;

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

  if (!digits) return "";

  return formatNationalPhoneDigits(digits);
}

export function matchPhoneCountryByValue(
  value: string,
  countryOptions: readonly PhoneCountryOption[],
  preferredCountry?: Country
): PhoneCountryOption | undefined {
  const digits = value.trim().startsWith("+")
    ? `+${value.replace(/\D/g, "")}`
    : "";

  if (!digits) return;

  return countryOptions
    .filter((option) => digits.startsWith(option.dialCode))
    .sort((a, b) => {
      if (b.dialCode.length !== a.dialCode.length) {
        return b.dialCode.length - a.dialCode.length;
      }

      if (a.iso === preferredCountry) return -1;
      if (b.iso === preferredCountry) return 1;
      return 0;
    })[0];
}

export function handleInputPhonePaste(
  event: ClipboardEvent<HTMLInputElement>,
  {
    countryOptions,
    selectedCountry,
    setSelectedCountry,
    onPaste,
  }: HandleInputPhonePasteParams
): void {
  const pastedValue = event.clipboardData.getData("text").trim();

  if (!pastedValue.startsWith("+")) {
    onPaste?.(event);
    return;
  }

  event.preventDefault();

  const input = event.currentTarget;
  const matchedCountry = matchPhoneCountryByValue(
    pastedValue,
    countryOptions,
    selectedCountry
  );

  if (matchedCountry && matchedCountry.iso !== selectedCountry) {
    flushSync(() => {
      setSelectedCountry(matchedCountry.iso);
    });
  }

  Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value"
  )?.set?.call(input, pastedValue);
  input.dispatchEvent(new Event("input", { bubbles: true }));

  onPaste?.(event);
}
