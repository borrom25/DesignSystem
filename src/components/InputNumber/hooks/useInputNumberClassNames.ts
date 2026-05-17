import { useMemo } from "react";
import { getInputAdornmentClassName } from "@/components/Input/Input.utils";
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

    return { adornmentClassName };
  }, [size, disabled, isError]);
}
