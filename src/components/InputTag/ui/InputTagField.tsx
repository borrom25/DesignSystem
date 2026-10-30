import { CloseBtn } from "@/components/CloseBtn";
import { Tag } from "@/components/Tag";
import { FloatingLabel, FloatingLabelRequiredMark } from "@/shared/Input";
import { Size } from "@/types";
import { cn } from "@/utils";
import type {
  ChangeEvent,
  FocusEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  MouseEventHandler,
} from "react";
import { useLayoutEffect, useRef, useState } from "react";
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
  const inputRef = useRef<HTMLInputElement | null>(null);
  const tagsContainerRef = useRef<HTMLDivElement | null>(null);
  const prevTagsLengthRef = useRef(tags.length);

  useLayoutEffect(() => {
    if (tags.length < prevTagsLengthRef.current) {
      prevTagsLengthRef.current = tags.length;
      return;
    }

    const container = tagsContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }

    prevTagsLengthRef.current = tags.length;
  }, [tags.length]);
  const hasTags = tags.length > 0;
  const hasFloatingLabel = !!label;
  const isLabelActive = hasFloatingLabel && (focused || hasValue);
  const isPlaceholderVisible = !hasFloatingLabel || focused;
  const isActiveWithoutTags = isLabelActive && !hasTags;
  const shouldCenterInputVertically = !inputValue && !isLabelActive;

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    onFocus?.(event);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    onBlur?.(event);
  };

  const handleWrapperMouseDown: MouseEventHandler<HTMLDivElement> = (event) => {
    if (disabled || !(event.target instanceof Element)) return;
    if (event.target.closest("button,input,[role='button']")) return;

    event.preventDefault();
    inputRef.current?.focus();
  };

  return (
    <div
      className={cn(
        wrapperClassName,
        inputTagStyles.wrapper,
        hasTags ? inputTagStyles.wrapperWithTags : inputTagStyles.wrapperEmpty
      )}
      onMouseDown={handleWrapperMouseDown}
    >
      {required && !disabled && <FloatingLabelRequiredMark />}

      {hasFloatingLabel && (
        <FloatingLabel
          htmlFor={inputProps.id}
          label={label}
          size={size}
          active={isLabelActive}
          disabled={disabled}
          className={cn(
            inputTagStyles.floatingLabelOffsetSize[size],
            isLabelActive && inputTagStyles.floatingLabelActive,
            isLabelActive &&
              inputTagStyles.floatingLabelActiveTypographySize[size]
          )}
        />
      )}

      <div
        ref={tagsContainerRef}
        className={cn(
          inputTagStyles.tagsContainer,
          inputTagStyles.containerSize[size],
          hasTags && inputTagStyles.tagsContainerWithTags,
          hasTags &&
            hasFloatingLabel &&
            isLabelActive &&
            inputTagStyles.tagsContainerClipTopFloatingLabel,
          hasFloatingLabel &&
            isLabelActive &&
            hasTags &&
            inputTagStyles.tagsContainerWithFloatingLabel,
          !hasTags && !isLabelActive && "content-center"
        )}
      >
        {tags.map((tag, index) => (
          <Tag
            key={index}
            size={size}
            onClose={() => onRemoveTag(index)}
            disabled={disabled}
          >
            {tag}
          </Tag>
        ))}

        <input
          ref={inputRef}
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
              !isPlaceholderVisible &&
              inputTagStyles.nativePlaceholderHidden,
            hasFloatingLabel &&
              isPlaceholderVisible &&
              inputTagStyles.nativePlaceholderVisible,
            isActiveWithoutTags && inputTagStyles.nativeWithFloatingLabel,
            isActiveWithoutTags && inputTagStyles.nativeActiveWithoutTags,
            isActiveWithoutTags &&
              inputTagStyles.nativeActiveWithoutTagsShiftSize[size],
            shouldCenterInputVertically && "self-center",
            inputTagStyles.nativeText,
            inputTagStyles.nativePlaceholderTypographySize[size],
            inputClassName
          )}
          {...inputProps}
          placeholder={
            hasTags || !isPlaceholderVisible
              ? undefined
              : inputProps.placeholder
          }
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
          <CloseBtn size={Size.Md} onClick={onClearAll} aria-label="Очистить" />
        </div>
      )}
    </div>
  );
}
