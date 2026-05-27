import flags from "react-phone-number-input/flags";
import ruLabels from "react-phone-number-input/locale/ru";
import {
  getCountries,
  getCountryCallingCode,
  isSupportedCountry,
} from "react-phone-number-input";
import type { Country, Flags } from "react-phone-number-input";

export const defaultPhoneCountry: Country = "RU";

export interface PhoneCountryOption {
  iso: Country;
  name: string;
  callingCode: string;
  dialCode: string;
  searchText: string;
  Flag?: Flags[Country];
}

const countryNameCollator = new Intl.Collator("ru");

function createCountryOption(iso: Country): PhoneCountryOption {
  const name = ruLabels[iso] ?? iso;
  const callingCode = getCountryCallingCode(iso);

  return {
    iso,
    name,
    callingCode,
    dialCode: `+${callingCode}`,
    searchText: `${name} ${iso} +${callingCode} ${callingCode}`.toLowerCase(),
    Flag: flags[iso],
  };
}

const phoneCountryOptions = getCountries()
  .map(createCountryOption)
  .sort((first, second) =>
    countryNameCollator.compare(first.name, second.name)
  );

const phoneCountryOptionsMap = new Map(
  phoneCountryOptions.map((option) => [option.iso, option])
);

export function isPhoneCountry(country?: string): country is Country {
  return !!country && isSupportedCountry(country);
}

export function getPhoneCountryOption(country: Country): PhoneCountryOption {
  return (
    phoneCountryOptionsMap.get(country) ??
    phoneCountryOptionsMap.get(defaultPhoneCountry) ??
    createCountryOption(defaultPhoneCountry)
  );
}

export function getPhoneCountryOptions(countries?: readonly Country[]) {
  if (!countries?.length) {
    return phoneCountryOptions;
  }

  const seen = new Set<Country>();

  return countries.reduce<PhoneCountryOption[]>((options, country) => {
    if (!isPhoneCountry(country) || seen.has(country)) {
      return options;
    }

    seen.add(country);
    options.push(getPhoneCountryOption(country));

    return options;
  }, []);
}
