import { useRef } from "react";
import { cn } from "@/utils";
import { Size } from "@/types";
import { FieldLabel, FieldHint } from "@/components/Field";
import { CloseBtn } from "@/components/CloseBtn";
import dropAreaIcon from "@/assets/icons/dropArea.svg";
import { useClearField } from "@/shared/hooks";
import type { TextAreaProps } from "./TextArea.types";
import { textAreaStyles } from "./styles";
import {
  useTextAreaIds,
  useTextAreaResize,
  useTextAreaClassNames,
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
  ...restProps
}: TextAreaProps) {
  const { textareaId, hintId } = useTextAreaIds({
    id: idProp,
    hint,
    hintError,
  });
  const isError = error || !!hintError;
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const { nativeClassName } = useTextAreaClassNames({
    size,
    isError,
    disabled,
    inputClassName,
  });

  const { handleMouseDown } = useTextAreaResize({
    textareaRef,
    resizeMode,
  });

  const handleClearClick = useClearField({ ref: textareaRef, onClear });

  return (
    <div className={cn(wrapperClasses, className)}>
      {label && (
        <FieldLabel
          size={size}
          required={required}
          disabled={disabled}
          htmlFor={textareaId}
        >
          {label}
        </FieldLabel>
      )}

      <div className={textAreaStyles.wrapperInner}>
        <textarea
          ref={textareaRef}
          id={textareaId}
          value={value}
          disabled={disabled}
          aria-required={required || undefined}
          aria-describedby={hintId}
          aria-invalid={isError || undefined}
          className={nativeClassName}
          {...restProps}
          autoComplete="off"
        />

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
