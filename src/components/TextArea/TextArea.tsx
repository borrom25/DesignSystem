import { useRef } from "react";
import { cn } from "@/utils";
import { Size } from "@/types";
import { FieldHint } from "@/components/Field";
import { CloseBtn } from "@/components/CloseBtn";
import dropAreaIcon from "@/assets/icons/dropArea.svg";
import { useClearField } from "@/shared/hooks";
import {
  formatCountDisplay,
  getInputCount,
} from "@/components/Input/Input.utils";
import type { TextAreaProps } from "./TextArea.types";
import { textAreaStyles } from "./styles";
import {
  useTextAreaIds,
  useTextAreaResize,
  useTextAreaClassNames,
  useTextAreaFieldState,
} from "./hooks/useTextAreaIds";
import { wrapperClasses } from "@/components/Field/styles";

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

  const {
    currentValue,
    isLabelActive,
    isPlaceholderVisible,
    handleFocus,
    handleBlur,
    handleChange,
  } = useTextAreaFieldState({
    value,
    defaultValue,
    onFocus,
    onBlur,
    onChange,
  });

  const { fieldShellClassName, nativeClassName } = useTextAreaClassNames({
    size,
    isError,
    disabled,
    inputClassName,
    hasLabel,
    isPlaceholderVisible,
  });

  const { handleMouseDown } = useTextAreaResize({
    targetRef: hasLabel ? containerRef : textareaRef,
    resizeMode,
  });

  const handleClearClick = useClearField({ ref: textareaRef, onClear });

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
        {required && (
          <span aria-hidden className={cn(textAreaStyles.requiredMark)}>
            *
          </span>
        )}
        {label && (
          <label
            htmlFor={textareaId}
            className={cn(
              textAreaStyles.label,
              textAreaStyles.labelSize[size],
              isLabelActive && textAreaStyles.labelActiveSize[size],
              disabled && textAreaStyles.labelDisabled
            )}
          >
            {label}
          </label>
        )}

        <textarea
          ref={textareaRef}
          id={textareaId}
          value={value}
          disabled={disabled}
          aria-required={required || undefined}
          aria-describedby={hintId}
          aria-invalid={isError || undefined}
          className={nativeClassName}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          maxLength={maxLength}
          {...restProps}
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

        {!!value && clearable && (
          <CloseBtn
            size={size}
            onClick={handleClearClick}
            disabled={disabled}
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
