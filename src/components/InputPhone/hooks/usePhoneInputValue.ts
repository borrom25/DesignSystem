import { useCallback, useMemo, useState } from "react";
import type { ChangeEvent } from "react";
import type { InputPhoneProps } from "../InputPhone.types";
import { formatPhoneValue, getPhoneRawValue } from "../InputPhone.utils";

interface UsePhoneInputValueProps {
  value?: InputPhoneProps["value"];
  defaultValue?: InputPhoneProps["defaultValue"];
  onChange?: InputPhoneProps["onChange"];
  onClear?: InputPhoneProps["onClear"];
}

export function usePhoneInputValue({
  value: valueProp,
  defaultValue,
  onChange,
  onClear,
}: UsePhoneInputValueProps) {
  const isControlled = valueProp !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState(() =>
    getPhoneRawValue(defaultValue ?? "")
  );

  const value = useMemo(
    () =>
      formatPhoneValue(isControlled ? (valueProp ?? "") : uncontrolledValue),
    [isControlled, uncontrolledValue, valueProp]
  );
  const hasValue = value !== "";

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const nextFormattedValue = formatPhoneValue(event.target.value);
      const nextRawValue = getPhoneRawValue(event.target.value);

      if (event.target.value !== nextFormattedValue) {
        event.target.value = nextFormattedValue;
      }

      if (event.currentTarget.value !== nextFormattedValue) {
        event.currentTarget.value = nextFormattedValue;
      }

      if (!isControlled) {
        setUncontrolledValue(nextRawValue);
      }

      event.target.value = nextRawValue;
      event.currentTarget.value = nextRawValue;
      onChange?.(event);

      event.target.value = nextFormattedValue;
      event.currentTarget.value = nextFormattedValue;
    },
    [isControlled, onChange]
  );

  const handleClear = useCallback(() => {
    if (!isControlled) {
      setUncontrolledValue("");
    }

    onClear?.();
  }, [isControlled, onClear]);

  return {
    value,
    hasValue,
    handleChange,
    handleClear,
  };
}
