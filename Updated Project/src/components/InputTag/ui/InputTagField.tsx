import { useState } from "react";
import type {
  InputHTMLAttributes,
  KeyboardEvent,
  ChangeEvent,
  FocusEvent,
} from "react";
import { closeButtonSize, cn } from "@/utils";
import { Size } from "@/types";
import { CloseBtn } from "@/components/CloseBtn";
import { Tag } from "@/components/Tag";
import { FloatingLabel, FloatingLabelRequiredMark } from "@/shared/Input";
import { inputTagStyles } from "../styles";

export interface InputTagFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "value" | "onChange"
> {
  wrapperClassName: string;
  tags: string[];
  inputValue: string;
  hasValue: boolean;
  label?: string;
  required?: boolean;
  size?: Size;
  disabled?: boolean;
  inputClassName?: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onInputKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  onRemoveTag: (index: number) => void;
  onClearAll: () => void;
}

export function InputTagField({
  wrapperClassName,
  tags,
  inputValue,
  hasValue,
  label,
  required,
  size = Size.Md,
  disabled = false,
  inputClassName,
  onInputChange,
  onInputKeyDown,
  onRemoveTag,
  onClearAll,
  onFocus,
  onBlur,
  ...inputProps
}: InputTagFieldProps) {
  const [focused, setFocused] = useState(false);
  const hasTags = tags.length > 0;
  const hasFloatingLabel = !!label;
  const isLabelActive = hasFloatingLabel && (focused || hasValue);
  const shouldCenterInputVertically = !inputValue && !isLabelActive;

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    onFocus?.(event);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    onBlur?.(event);
  };

  return (
    <div
      className={cn(
        wrapperClassName,
        inputTagStyles.wrapper,
        hasTags ? inputTagStyles.wrapperWithTags : inputTagStyles.wrapperEmpty
      )}
    >
      {hasFloatingLabel && required && <FloatingLabelRequiredMark />}

      {hasFloatingLabel && (
        <FloatingLabel
          htmlFor={inputProps.id}
          label={label}
          size={size}
          active={isLabelActive}
          disabled={disabled}
        />
      )}

      <div
        className={cn(
          inputTagStyles.tagsContainer,
          inputTagStyles.containerSize[size],
          hasFloatingLabel &&
            isLabelActive &&
            inputTagStyles.tagsContainerWithFloatingLabel,
          !hasTags && !isLabelActive && "content-center"
        )}
      >
        {tags.map((tag, index) => (
          <Tag
            key={index}
            size={size}
            onClose={disabled ? undefined : () => onRemoveTag(index)}
          >
            {tag}
          </Tag>
        ))}

        <input
          type="text"
          disabled={disabled}
          value={inputValue}
          onChange={onInputChange}
          onKeyDown={onInputKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={cn(
            inputTagStyles.native,
            disabled && inputTagStyles.nativeDisabled,
            hasFloatingLabel &&
              !isLabelActive &&
              inputTagStyles.nativePlaceholderHidden,
            hasFloatingLabel &&
              isLabelActive &&
              inputTagStyles.nativePlaceholderVisible,
            shouldCenterInputVertically && "self-center",
            "flex-1 min-w-[80px]",
            inputClassName
          )}
          {...inputProps}
          autoComplete="off"
        />
      </div>

      {hasValue && !disabled && (
        <div
          className={cn(
            inputTagStyles.clearButtonWrapper,
            inputTagStyles.clearButtonWrapperSize[size]
          )}
        >
          <CloseBtn
            size={closeButtonSize(size)}
            onClick={onClearAll}
            aria-label="Очистить"
          />
        </div>
      )}
    </div>
  );
}
