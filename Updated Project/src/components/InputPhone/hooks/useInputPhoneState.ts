import { useInputClassNames, useInputIds } from "@/components/Input/hooks";
import {
  formatCountDisplay,
  getInputCount,
} from "@/components/Input/Input.utils";
import { inputStyles } from "@/components/Input/styles";
import { getIconSize } from "@/utils";
import type { InputPhoneProps } from "../InputPhone.types";
import { usePhoneInputValue } from "./usePhoneInputValue";

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
}: UseInputPhoneStateProps) {
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
    wrapperClassName,
  };
}
