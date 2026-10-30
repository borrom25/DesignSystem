import dropAreaIcon from "@/assets/icons/dropArea.svg";
import { CloseBtn } from "@/components/CloseBtn";
import { FieldHint } from "@/components/Field";
import { wrapperClasses } from "@/components/Field/styles";
import {
  formatCountDisplay,
  getInputCount,
} from "@/components/Input/Input.utils";
import { useScreenSize } from "@/providers";
import { useClearField } from "@/shared/hooks";
import { Size } from "@/types";
import { cn } from "@/utils";
import { useCallback, useRef, type MutableRefObject } from "react";
import type { TextAreaProps } from "./TextArea.types";
import {
  useTextAreaClassNames,
  useTextAreaFieldState,
  useTextAreaIds,
  useTextAreaResize,
} from "./hooks/useTextAreaIds";
import { textAreaStyles } from "./styles";

export function TextArea({
  size = Size.Md,
  error = false,
  disabled = false,
  resizeMode = "vertical",
  label,
  required,
  hint,
  hintError,
  className,
  inputClassName,
  id: idProp,
  onClear,
  value,
  clearable = true,
  maxLength,
  onFocus,
  onBlur,
  onChange,
  defaultValue,
  ref,
  ...restProps
}: TextAreaProps) {
  const hasLabel = !!label;
  const { textareaId, hintId } = useTextAreaIds({
    id: idProp,
    hint,
    hintError,
  });
  const isError = error || !!hintError;
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const setTextareaRef = useCallback(
    (node: HTMLTextAreaElement | null) => {
      textareaRef.current = node;

      if (typeof ref === "function") {
        ref(node);
        return;
      }

      if (ref) {
        (ref as MutableRefObject<HTMLTextAreaElement | null>).current = node;
      }
    },
    [ref]
  );

  const { isMobile } = useScreenSize();

  const clearField = useClearField({ ref: textareaRef });

  const {
    currentValue,
    hasValue,
    isLabelActive,
    isPlaceholderVisible,
    handleFocus,
    handleBlur,
    handleChange,
    handleClear,
  } = useTextAreaFieldState({
    value,
    defaultValue,
    onFocus,
    onBlur,
    onChange,
    onClear,
    clearField,
  });

  const { fieldShellClassName, nativeClassName } = useTextAreaClassNames({
    size,
    isError,
    disabled,
    inputClassName,
    hasLabel,
    isLabelActive: hasLabel && isLabelActive,
    isPlaceholderVisible,
  });

  const { handleMouseDown } = useTextAreaResize({
    targetRef: containerRef,
    resizeMode,
    minHeight: 88,
  });

  const countDisplay =
    maxLength !== undefined
      ? formatCountDisplay(getInputCount(currentValue), maxLength)
      : null;

  return (
    <div className={cn(wrapperClasses, className)}>
      <div
        ref={containerRef}
        className={cn(textAreaStyles.wrapperInner, fieldShellClassName)}
      >
        {required && !disabled && (
          <span aria-hidden className={cn(textAreaStyles.requiredMark)}>
            *
          </span>
        )}
        {label && (
          <label
            htmlFor={textareaId}
            className={cn(
              textAreaStyles.label,
              isMobile && textAreaStyles.labelMobile,
              textAreaStyles.labelSize[size],
              isLabelActive && textAreaStyles.labelActiveSize[size],
              disabled && textAreaStyles.labelDisabled
            )}
          >
            {label}
          </label>
        )}

        <textarea
          {...restProps}
          ref={setTextareaRef}
          id={textareaId}
          value={currentValue}
          disabled={disabled}
          aria-required={required || undefined}
          aria-describedby={hintId}
          aria-invalid={isError || undefined}
          className={nativeClassName}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          maxLength={maxLength}
          autoComplete="off"
        />

        {countDisplay && (
          <span
            className={cn(
              textAreaStyles.counter,
              disabled && textAreaStyles.counterDisabled
            )}
            aria-live="polite"
          >
            {countDisplay}
          </span>
        )}

        {clearable && hasValue && !disabled && (
          <CloseBtn
            size={Size.Md}
            onClick={handleClear}
            className={textAreaStyles.clearButton}
            aria-label="Clear"
          />
        )}

        {!disabled && (
          <button
            type="button"
            aria-label="Resize textarea"
            className={cn(
              textAreaStyles.resizeHandle,
              resizeMode === "both"
                ? textAreaStyles.resizeBoth
                : textAreaStyles.resizeVertical
            )}
            onMouseDown={handleMouseDown}
          >
            <img
              src={dropAreaIcon}
              alt=""
              aria-hidden
              className={textAreaStyles.resizeIcon}
            />
          </button>
        )}
      </div>

      {(hintError || hint) && (
        <FieldHint size={size} error={isError} id={hintId}>
          {hintError || hint}
        </FieldHint>
      )}
    </div>
  );
}
