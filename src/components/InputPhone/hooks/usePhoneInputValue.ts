import { useCallback, useMemo, useState } from "react";
import type { ChangeEvent } from "react";
import type { InputPhoneProps } from "../InputPhone.types";
import { InputPhoneValueFormat } from "../InputPhone.types";
import {
  formatPhoneValue,
  getPhoneValueMeta,
  normalizePhoneDigits,
} from "../InputPhone.utils";
import { defaultPhoneCountry } from "../InputPhone.countries";

interface UsePhoneInputValueProps {
  value?: InputPhoneProps["value"];
  defaultValue?: InputPhoneProps["defaultValue"];
  onChange?: InputPhoneProps["onChange"];
  onClear?: InputPhoneProps["onClear"];
  country?: InputPhoneProps["country"];
  valueFormat?: InputPhoneProps["valueFormat"];
  onValueChange?: InputPhoneProps["onValueChange"];
}

export function usePhoneInputValue({
  value: valueProp,
  defaultValue,
  onChange,
  onClear,
  country = defaultPhoneCountry,
  valueFormat = InputPhoneValueFormat.International,
  onValueChange,
}: UsePhoneInputValueProps) {
  const isControlled = valueProp !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState(() =>
    normalizePhoneDigits(defaultValue ?? "", country)
  );

  const value = useMemo(
    () =>
      formatPhoneValue(
        isControlled ? (valueProp ?? "") : uncontrolledValue,
        country
      ),
    [country, isControlled, uncontrolledValue, valueProp]
  );
  const hasValue = value !== "";

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const nextFormattedValue = formatPhoneValue(event.target.value, country);
      const nextMeta = getPhoneValueMeta(
        event.target.value,
        country,
        valueFormat
      );

      if (event.target.value !== nextFormattedValue) {
        event.target.value = nextFormattedValue;
      }

      if (event.currentTarget.value !== nextFormattedValue) {
        event.currentTarget.value = nextFormattedValue;
      }

      if (!isControlled) {
        setUncontrolledValue(nextMeta.nationalValue);
      }

      event.target.value = nextMeta.value;
      event.currentTarget.value = nextMeta.value;
      onChange?.(event);
      onValueChange?.(nextMeta.value, nextMeta);

      event.target.value = nextFormattedValue;
      event.currentTarget.value = nextFormattedValue;
    },
    [country, isControlled, onChange, onValueChange, valueFormat]
  );

  const handleClear = useCallback(() => {
    if (!isControlled) {
      setUncontrolledValue("");
    }

    onValueChange?.("", getPhoneValueMeta("", country, valueFormat));
    onClear?.();
  }, [country, isControlled, onClear, onValueChange, valueFormat]);

  return {
    value,
    hasValue,
    handleChange,
    handleClear,
  };
}
