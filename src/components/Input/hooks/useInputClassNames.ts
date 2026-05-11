import { useMemo } from "react";
import type { Size } from "@/types";
import { inputStyles } from "../styles";
import { InputVariant } from "../Input.types";
import {
  getInputAdornmentClassName,
  getInputWrapperClassName,
} from "../Input.utils";

type UseInputClassNamesProps = {
  size: Size;
  variant: (typeof InputVariant)[keyof typeof InputVariant];
  disabled: boolean;
  isError: boolean;
};

export function useInputClassNames({
  size,
  variant,
  disabled,
  isError,
}: UseInputClassNamesProps) {
  return useMemo(() => {
    const adornmentClassName = getInputAdornmentClassName({
      disabled,
      isError,
      baseClasses: inputStyles.adornment,
      disabledClasses: inputStyles.adornmentDisabled,
    });

    const prefixSuffixClassName = getInputAdornmentClassName({
      disabled,
      isError,
      baseClasses: inputStyles.prefixSuffix,
      disabledClasses: inputStyles.prefixSuffixDisabled,
    });

    const wrapperClassName = getInputWrapperClassName({
      disabled,
      isError,
      baseClasses: inputStyles.base,
      sizeClasses: inputStyles.size[size],
      clearSizeClasses: inputStyles.clearSize[size],
      stateClasses: inputStyles.state,
      disabledClasses: inputStyles.disabled,
      errorClasses: inputStyles.error,
      clearStateClasses: inputStyles.clear,
      clearDisabledClasses: inputStyles.clearDisabled,
      clearErrorClasses: inputStyles.clearError,
      isClear: variant === InputVariant.Clear,
    });

    return { adornmentClassName, prefixSuffixClassName, wrapperClassName };
  }, [size, variant, disabled, isError]);
}
