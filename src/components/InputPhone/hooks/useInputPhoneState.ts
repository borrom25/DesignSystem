import { useMemo } from "react";
import { useInputClassNames, useInputIds } from "@/components/Input/hooks";
import {
  formatCountDisplay,
  getInputCount,
} from "@/components/Input/Input.utils";
import { inputStyles } from "@/components/Input/styles";
import { getIconSize } from "@/utils";
import { useControllableState } from "@/shared/hooks";
import type { InputPhoneProps } from "../InputPhone.types";
import { usePhoneInputValue } from "./usePhoneInputValue";
import {
  defaultPhoneCountry,
  getPhoneCountryOption,
  getPhoneCountryOptions,
  isPhoneCountry,
} from "../InputPhone.countries";

type UseInputPhoneStateProps = Pick<
  InputPhoneProps,
  | "size"
  | "variant"
  | "disabled"
  | "error"
  | "hint"
  | "hintError"
  | "id"
  | "count"
  | "maxCount"
  | "value"
  | "defaultValue"
  | "onChange"
  | "onClear"
  | "country"
  | "defaultCountry"
  | "countries"
  | "valueFormat"
  | "onCountryChange"
  | "onValueChange"
> & {
  size: NonNullable<InputPhoneProps["size"]>;
  variant: NonNullable<InputPhoneProps["variant"]>;
};

export function useInputPhoneState({
  size,
  variant,
  disabled = false,
  error = false,
  hint,
  hintError,
  id,
  count,
  maxCount,
  value,
  defaultValue,
  onChange,
  onClear,
  country,
  defaultCountry = defaultPhoneCountry,
  countries,
  valueFormat,
  onCountryChange,
  onValueChange,
}: UseInputPhoneStateProps) {
  const countryOptions = useMemo(
    () => getPhoneCountryOptions(countries),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [countries?.join(",")]
  );
  const firstCountry = countryOptions[0]?.iso ?? defaultPhoneCountry;
  const [selectedCountry, setSelectedCountry] = useControllableState({
    value: country,
    defaultValue: isPhoneCountry(defaultCountry)
      ? defaultCountry
      : defaultPhoneCountry,
    onChange: onCountryChange,
  });
  const resolvedCountry = useMemo(() => {
    const isAllowed = countryOptions.some(
      (option) => option.iso === selectedCountry
    );
    return isPhoneCountry(selectedCountry) && isAllowed
      ? selectedCountry
      : firstCountry;
  }, [countryOptions, firstCountry, selectedCountry]);
  const countryOption = useMemo(
    () => getPhoneCountryOption(resolvedCountry),
    [resolvedCountry]
  );

  const {
    value: inputValue,
    hasValue,
    handleChange,
    handleClear,
  } = usePhoneInputValue({
    value,
    defaultValue,
    onChange,
    onClear,
    country: resolvedCountry,
    valueFormat,
    onValueChange,
  });

  const { inputId, hintId } = useInputIds({ id, hint, hintError });
  const isError = error || !!hintError;

  const { adornmentClassName, prefixSuffixClassName, wrapperClassName } =
    useInputClassNames({
      size,
      variant,
      disabled,
      isError,
    });

  const iconSize = getIconSize(size, inputStyles.iconSizeMap);
  const hasCountDisplay = count !== undefined || maxCount !== undefined;
  const resolvedCount = hasCountDisplay
    ? (count ?? getInputCount(inputValue))
    : undefined;
  const countDisplay = formatCountDisplay(resolvedCount, maxCount);

  return {
    adornmentClassName,
    countDisplay,
    handleChange,
    handleClear,
    hasValue,
    hintId,
    iconSize,
    inputId,
    inputValue,
    isError,
    prefixSuffixClassName,
    countryOptions,
    countryOption,
    selectedCountry: resolvedCountry,
    setSelectedCountry,
    wrapperClassName,
  };
}
