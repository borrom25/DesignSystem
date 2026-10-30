import { getDropZoneStateClass } from "@/shared/DropZone";
import { cn, withPreventDefaults } from "@/utils";
import { CloudUpload } from "lucide-react";
import type { DragEvent } from "react";
import { useUploader } from "./hooks";
import { uploaderStyles } from "./styles";
import type { UploaderProps } from "./Uploader.types";

export function Uploader({
  disabled,
  error = false,
  isDragActive,
  textSelect,
  textDrag,
  placeholder,
  multiple,
  accept,
  maxSize,
  maxFiles,
  validateFile,
  onValidationError,
  onSizeError,
  onAcceptError,
  onFiles,
  name,
  required,
  inputRef,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  onInputChange,
  className,
  placeholderFullWidth = false,
}: UploaderProps) {
  const { handleClick, handleDrop, handleInputChange } = useUploader({
    disabled,
    multiple,
    accept,
    maxSize,
    maxFiles,
    validateFile,
    onValidationError,
    onSizeError,
    onAcceptError,
    onFiles,
    onDrop,
    onInputChange,
  });

  return (
    <div
      className={cn(
        uploaderStyles.base,
        getDropZoneStateClass(uploaderStyles, {
          disabled,
          isDragActive,
          error,
        }),
        className
      )}
      onDragEnter={withPreventDefaults<DragEvent<HTMLDivElement>>(onDragEnter)}
      onDragLeave={withPreventDefaults<DragEvent<HTMLDivElement>>(onDragLeave)}
      onDragOver={withPreventDefaults<DragEvent<HTMLDivElement>>(onDragOver)}
      onDrop={withPreventDefaults<DragEvent<HTMLDivElement>>(handleDrop)}
      onClick={handleClick}
    >
      <input
        type="file"
        name={name}
        accept={accept}
        required={required}
        onChange={handleInputChange}
        ref={inputRef}
        multiple={multiple}
        disabled={disabled}
        className="sr-only"
      />

      <div
        className={cn(
          uploaderStyles.button,
          disabled && uploaderStyles.buttonDisabled
        )}
      >
        <CloudUpload
          className={cn(
            uploaderStyles.icon,
            disabled && uploaderStyles.iconDisabled
          )}
          size={16}
        />
      </div>

      {isDragActive ? (
        <span className={uploaderStyles.textSelect}>Отпустите файл</span>
      ) : (
        <div className={uploaderStyles.textRow}>
          <span
            className={cn(
              uploaderStyles.textSelect,
              disabled && uploaderStyles.textSelectDisabled
            )}
          >
            {textSelect}
          </span>
          {textDrag && (
            <span className={uploaderStyles.textDrag}>{textDrag}</span>
          )}
        </div>
      )}

      {!isDragActive && placeholder && (
        <p
          className={cn(uploaderStyles.placeholder, {
            [uploaderStyles.placeholderFullWidth]: placeholderFullWidth,
          })}
        >
          {placeholder}
        </p>
      )}
    </div>
  );
}
