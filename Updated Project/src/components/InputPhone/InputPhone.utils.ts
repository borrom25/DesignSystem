export const phoneDigitsLength = 10;
export const phoneCountryCode = "+7";
export const phonePattern = "[0-9\\- ]*";
export const phoneAutoComplete = "tel-national";
export const phoneDefaultInputMode = "numeric";

export function normalizePhoneDigits(value: string): string {
  const digits = value.replace(/\D/g, "");
  const hasExplicitCountryCode = value.trim().startsWith(phoneCountryCode);

  if (hasExplicitCountryCode && digits.startsWith("7")) {
    return digits.slice(1, phoneDigitsLength + 1);
  }

  if (digits.length === phoneDigitsLength + 1 && /^[78]/.test(digits)) {
    return digits.slice(1);
  }

  return digits.slice(0, phoneDigitsLength);
}

export function getPhoneRawValue(value: string): string {
  const digits = normalizePhoneDigits(value);

  return digits ? `${phoneCountryCode}${digits}` : "";
}

export function formatPhoneValue(value: string): string {
  const digits = normalizePhoneDigits(value);

  if (!digits) {
    return "";
  }

  const first = digits.slice(0, 3);
  const second = digits.slice(3, 6);
  const third = digits.slice(6, 8);
  const fourth = digits.slice(8, 10);

  if (digits.length <= 3) {
    return first;
  }

  if (digits.length <= 6) {
    return `${first} ${second}`;
  }

  if (digits.length <= 8) {
    return `${first} ${second}-${third}`;
  }

  return `${first} ${second}-${third}-${fourth}`;
}
