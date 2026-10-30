import { useState } from "react";
import type { InputProps } from "../Input.types";

type UseInputValueProps = {
  value?: InputProps["value"];
  defaultValue?: InputProps["defaultValue"];
  onChange?: InputProps["onChange"];
};

type UseInputValueReturn = {
  value: string | number | readonly string[] | undefined;
  hasValue: boolean;
  handleChange: NonNullable<InputProps["onChange"]>;
};

export function useInputValue({
  value: valueProp,
  defaultValue,
  onChange,
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

  return { value, hasValue, handleChange };
}
