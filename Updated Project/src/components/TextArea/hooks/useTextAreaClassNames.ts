import { useMemo } from "react";
import { cn } from "@/utils";
import { textAreaStyles } from "../styles";
import type { Size } from "@/types";

interface UseTextAreaClassNamesProps {
  size: Size;
  isError: boolean;
  disabled: boolean;
  inputClassName?: string;
}

export function useTextAreaClassNames({
  size,
  isError,
  disabled,
  inputClassName,
}: UseTextAreaClassNamesProps) {
  const textareaClassName = useMemo(
    () =>
      cn(
        textAreaStyles.base,
        textAreaStyles.size[size],
        isError && textAreaStyles.error,
        disabled && textAreaStyles.disabled,
        !isError && !disabled && textAreaStyles.state
      ),
    [size, isError, disabled]
  );

  const nativeClassName = useMemo(
    () =>
      cn(
        textareaClassName,
        textAreaStyles.native,
        disabled && textAreaStyles.nativeDisabled,
        inputClassName
      ),
    [textareaClassName, disabled, inputClassName]
  );

  return {
    textareaClassName,
    nativeClassName,
  };
}
