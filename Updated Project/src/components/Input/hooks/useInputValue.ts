import { useState } from "react";
import type { InputProps } from "../Input.types";

type UseInputValueProps = {
  value?: InputProps["value"];
  defaultValue?: InputProps["defaultValue"];
  onChange?: InputProps["onChange"];
  onClear?: InputProps["onClear"];
};

type UseInputValueReturn = {
  value: string | number | readonly string[] | undefined;
  hasValue: boolean;
  handleChange: NonNullable<InputProps["onChange"]>;
  handleClear: () => void;
};

export function useInputValue({
  value: valueProp,
  defaultValue,
  onChange,
  onClear,
}: UseInputValueProps): UseInputValueReturn {
  const isControlled = valueProp !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState<string>(() =>
    defaultValue == null ? "" : String(defaultValue)
  );

  const value = isControlled ? valueProp : uncontrolledValue;
  const hasValue = value != null && String(value) !== "";

  const handleChange: NonNullable<InputProps["onChange"]> = (event) => {
    if (!isControlled) {
      setUncontrolledValue(event.target.value);
    }
    onChange?.(event);
  };

  const handleClear = () => {
    if (!isControlled) {
      setUncontrolledValue("");
    }
    onClear?.();
  };

  return { value, hasValue, handleChange, handleClear };
}
