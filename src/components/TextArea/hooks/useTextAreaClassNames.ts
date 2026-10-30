import { useMemo } from "react";
import { cn } from "@/utils";
import { textAreaStyles } from "../styles";
import type { Size } from "@/types";

interface UseTextAreaClassNamesProps {
  size: Size;
  isError: boolean;
  disabled: boolean;
  inputClassName?: string;
  hasLabel?: boolean;
  isLabelActive?: boolean;
  isPlaceholderVisible?: boolean;
}

export function useTextAreaClassNames({
  size,
  isError,
  disabled,
  inputClassName,
  hasLabel = false,
  isLabelActive = false,
  isPlaceholderVisible = false,
}: UseTextAreaClassNamesProps) {
  const fieldShellClassName = useMemo(
    () =>
      hasLabel
        ? cn(
            textAreaStyles.fieldShell,
            textAreaStyles.fieldShellSize[size],
            isError && textAreaStyles.error,
            disabled && textAreaStyles.disabled,
            !isError && !disabled && textAreaStyles.state
          )
        : undefined,
    [hasLabel, size, isError, disabled]
  );

  const nativeClassName = useMemo(
    () =>
      cn(
        hasLabel ? textAreaStyles.nativeWithLabel : textAreaStyles.base,
        textAreaStyles.native,
        textAreaStyles.nativeTextBase,
        textAreaStyles.nativeTextSize[size],
        textAreaStyles.nativePlaceholderBase,
        textAreaStyles.nativePlaceholderSize[size],
        hasLabel
          ? textAreaStyles.sizeWithLabel[size]
          : cn(textAreaStyles.size[size], textAreaStyles.nativeBottomPadding),
        hasLabel && isLabelActive && textAreaStyles.nativeClipTop,
        !hasLabel && isError && textAreaStyles.error,
        !hasLabel && disabled && textAreaStyles.disabled,
        !hasLabel && !isError && !disabled && textAreaStyles.state,
        disabled && textAreaStyles.nativeDisabledText,
        disabled && textAreaStyles.nativeDisabled,
        hasLabel &&
          (isPlaceholderVisible
            ? textAreaStyles.nativePlaceholderVisible
            : textAreaStyles.nativePlaceholderHidden),
        inputClassName
      ),
    [
      size,
      isError,
      disabled,
      hasLabel,
      isLabelActive,
      isPlaceholderVisible,
      inputClassName,
    ]
  );

  return { fieldShellClassName, nativeClassName };
}
