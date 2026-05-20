import { formatCountDisplay, getInputCount } from "../Input.utils";
import type { InputProps } from "../Input.types";
import { inputStyles } from "../styles";
import { getIconSize } from "@/utils";
import { useInputClassNames } from "./useInputClassNames";
import { useInputIds } from "./useInputIds";
import { useInputValue } from "./useInputValue";

type UseInputStateProps = Pick<
  InputProps,
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
  size: NonNullable<InputProps["size"]>;
  variant: NonNullable<InputProps["variant"]>;
};

export function useInputState({
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
}: UseInputStateProps) {
  const {
    value: inputValue,
    hasValue,
    handleChange,
    handleClear,
  } = useInputValue({
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
