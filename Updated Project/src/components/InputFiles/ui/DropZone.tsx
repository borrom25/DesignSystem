import { cn } from "@/utils";
import { CloudUpload } from "lucide-react";
import type { DropZoneProps } from "../InputFiles.types";
import { inputFilesStyles } from "../styles";

export function DropZone({
  disabled,
  isDragActive,
  textSelect,
  textDrag,
  placeholder,
  multiple,
  accept,
  name,
  required,
  inputRef,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  onInputChange,
  className,
}: DropZoneProps) {
  const dropZoneStyles = inputFilesStyles.dropZone;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    const input =
      e.currentTarget.querySelector<HTMLInputElement>('input[type="file"]');
    input?.click();
  };

  return (
    <div
      className={cn(
        dropZoneStyles.base,
        isDragActive && !disabled && dropZoneStyles.active,
        disabled ? dropZoneStyles.disabled : dropZoneStyles.state,
        className
      )}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onClick={handleClick}
    >
      <input
        type="file"
        name={name}
        accept={accept}
        required={required}
        onChange={onInputChange}
        ref={inputRef}
        multiple={multiple}
        disabled={disabled}
        className="sr-only"
      />

      <div
        className={cn(
          dropZoneStyles.button,
          disabled && dropZoneStyles.buttonDisabled
        )}
      >
        <CloudUpload
          className={cn(
            dropZoneStyles.icon,
            disabled && dropZoneStyles.iconDisabled
          )}
          size={16}
        />
      </div>

      {isDragActive ? (
        <span className={dropZoneStyles.textSelect}>Отпустите файл</span>
      ) : (
        <div className={dropZoneStyles.textRow}>
          <span
            className={cn(
              dropZoneStyles.textSelect,
              disabled && dropZoneStyles.textSelectDisabled
            )}
          >
            {textSelect}
          </span>
          {textDrag && (
            <span className={dropZoneStyles.textDrag}>{textDrag}</span>
          )}
        </div>
      )}

      {!isDragActive && placeholder && (
        <p className={dropZoneStyles.placeholder}>{placeholder}</p>
      )}
    </div>
  );
}
