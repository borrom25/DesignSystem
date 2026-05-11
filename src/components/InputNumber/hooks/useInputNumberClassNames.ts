import { useMemo } from "react";
import {
  getInputAdornmentClassName,
  getInputWrapperClassName,
} from "@/components/Input/Input.utils";
import type { UseInputNumberClassNamesProps } from "../InputNumber.types";
import { inputNumberStyles } from "../styles";

export function useInputNumberClassNames({
  size,
  disabled,
  isError,
}: UseInputNumberClassNamesProps) {
  return useMemo(() => {
    const adornmentClassName = getInputAdornmentClassName({
      disabled,
      isError,
      baseClasses: inputNumberStyles.adornment,
      disabledClasses: inputNumberStyles.adornmentDisabled,
    });

    const wrapperClassName = getInputWrapperClassName({
      disabled,
      isError,
      baseClasses: inputNumberStyles.base,
      sizeClasses: inputNumberStyles.size[size],
      clearSizeClasses: "",
      stateClasses: inputNumberStyles.state,
      disabledClasses: inputNumberStyles.disabled,
      errorClasses: inputNumberStyles.error,
      clearStateClasses: "",
      clearDisabledClasses: "",
      clearErrorClasses: "",
      isClear: false,
    });

    return { adornmentClassName, wrapperClassName };
  }, [size, disabled, isError]);
}
