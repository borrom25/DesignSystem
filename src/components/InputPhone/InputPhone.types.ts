import type { ChangeEventHandler, ClipboardEventHandler } from "react";
import type { InputProps } from "@/components/Input";
import type { Country } from "react-phone-number-input";
import { PhoneCountryOption } from "./InputPhone.countries";

export const InputPhoneValueFormat = {
  International: "international",
  National: "national",
} as const;

export type InputPhoneValueFormat =
  (typeof InputPhoneValueFormat)[keyof typeof InputPhoneValueFormat];

export interface InputPhoneChangeMeta {
  value: string;
  nationalValue: string;
  internationalValue: string;
  country: Country;
  callingCode: string;
}

export type InputPhoneValueChangeHandler = (
  value: string,
  meta: InputPhoneChangeMeta
) => void;

export interface InputPhoneProps extends Omit<
  InputProps,
  "prefix" | "type" | "inputMode" | "value" | "defaultValue"
> {
  value?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  inputMode?: InputProps["inputMode"];
  showFlagIsland?: boolean;
  country?: Country;
  defaultCountry?: Country;
  countries?: readonly Country[];
  valueFormat?: InputPhoneValueFormat;
  onCountryChange?: (country: Country) => void;
  onValueChange?: InputPhoneValueChangeHandler;
}

export type HandleInputPhonePasteParams = {
  countryOptions: readonly PhoneCountryOption[];
  selectedCountry: Country;
  setSelectedCountry: (country: Country) => void;
  onPaste?: ClipboardEventHandler<HTMLInputElement>;
};
