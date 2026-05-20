import { cn } from "@/utils";
import { Size } from "@/types";
import { FieldLabel, FieldSubtitle, FieldHint } from "@/components/Field";
import type { InputFilesProps } from "./InputFiles.types";
import { useInputFiles } from "./hooks/useInputFiles";
import { DropZone } from "./ui/DropZone";
import { inputFilesStyles } from "./styles";
import { FilePreview } from "./ui/FilePreview";

export function InputFiles({
  size = Size.Md,
  disabled = false,
  error = false,
  label,
  subtitle,
  required,
  hint,
  hintError,
  value,
  defaultValue,
  onChange,
  multiple = false,
  maxFiles = 1,
  maxSize,
  accept = "*",
  onSizeError,
  onAcceptError,
  downloadUrl,
  onDownload,
  showDownload = false,
  viewMode = false,
  isLoading = false,
  uploaderPercent,
  textSelect = "Выберите файл",
  textDrag = "или перетащите сюда",
  placeholder,
  className,
  name,
  id,
}: InputFilesProps) {
  const isError = error || !!hintError;

  const {
    files,
    isDragActive,
    inputRef,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
    onInputChange,
    removeFile,
  } = useInputFiles({
    value,
    defaultValue,
    onChange,
    maxSize,
    maxFiles,
    multiple,
    accept,
    disabled,
    viewMode,
    onSizeError,
    onAcceptError,
  });

  const showDropZone = multiple || files.length === 0;
  const dropZoneDisabled =
    disabled || viewMode || isLoading || files.length >= maxFiles;

  return (
    <div className={cn(inputFilesStyles.wrapper, className)}>
      {label && (
        <FieldLabel
          size={size}
          required={required}
          disabled={disabled}
          htmlFor={id}
        >
          {label}
        </FieldLabel>
      )}

      {subtitle && (
        <FieldSubtitle size={size} disabled={disabled}>
          {subtitle}
        </FieldSubtitle>
      )}

      {showDropZone && (
        <DropZone
          disabled={dropZoneDisabled}
          isDragActive={isDragActive}
          textSelect={textSelect}
          textDrag={textDrag}
          placeholder={placeholder}
          multiple={multiple}
          accept={accept}
          name={name}
          required={required}
          inputRef={inputRef}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDragOver={onDragOver}
          onDrop={onDrop}
          onInputChange={onInputChange}
        />
      )}

      <div className={inputFilesStyles.preview.list}>
        {files.map((file, idx) => (
          <FilePreview
            key={`${file.name}-${file.lastModified}-${idx}`}
            file={file}
            size={size}
            error={isError}
            downloadUrl={downloadUrl}
            onDownload={onDownload}
            showDownload={showDownload}
            viewMode={viewMode}
            onRemove={() => removeFile(idx)}
            isLoading={isLoading}
            uploaderPercent={uploaderPercent}
          />
        ))}
      </div>

      {(hintError || hint) && (
        <FieldHint
          size={size}
          error={isError}
          id={id ? `${id}-hint` : undefined}
        >
          {hintError || hint}
        </FieldHint>
      )}
    </div>
  );
}
