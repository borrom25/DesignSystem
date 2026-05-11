import type { InputHTMLAttributes, KeyboardEvent, ChangeEvent } from "react";
import { closeButtonSize, cn } from "@/utils";
import { Size } from "@/types";
import { CloseBtn } from "@/components/CloseBtn";
import { Tag } from "@/components/Tag";
import { inputTagStyles } from "../styles";

export interface InputTagFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "value" | "onChange"
> {
  wrapperClassName: string;
  tags: string[];
  inputValue: string;
  hasValue: boolean;
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
  size = Size.Md,
  disabled = false,
  inputClassName,
  onInputChange,
  onInputKeyDown,
  onRemoveTag,
  onClearAll,
  ...inputProps
}: InputTagFieldProps) {
  const hasTags = tags.length > 0;
  const shouldCenterInputVertically = !inputValue;

  return (
    <div
      className={cn(
        wrapperClassName,
        inputTagStyles.wrapper,
        hasTags ? inputTagStyles.wrapperWithTags : inputTagStyles.wrapperEmpty
      )}
    >
      <div
        className={cn(
          inputTagStyles.tagsContainer,
          inputTagStyles.containerSize[size],
          !hasTags && "content-center"
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
          className={cn(
            inputTagStyles.native,
            disabled && inputTagStyles.nativeDisabled,
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
