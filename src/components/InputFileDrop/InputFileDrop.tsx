import { cn } from "@/utils";
import { Size } from "@/types";
import { FieldLabel, FieldSubtitle, FieldHint } from "@/components/Field";
import { FileTilePreview } from "@/shared/FileTilePreview";
import type { InputFileDropProps } from "./InputFileDrop.types";
import { useInputFileDrop } from "./hooks";
import { DropZone } from "./ui/DropZone";
import { inputFileDropStyles } from "./styles";

const DEFAULT_MAX_FILES = 10;

export function InputFileDrop({
  size = Size.Md,
  disabled = false,
  error = false,
  label,
  required,
  hint,
  hintError,
  value,
  defaultValue,
  onChange,
  maxSize,
  maxFiles = DEFAULT_MAX_FILES,
  accept = "*",
  validateFile,
  onValidationError,
  onSizeError,
  onAcceptError,
  textUpload = "Загрузить",
  textLoading = "Загрузка",
  textMode = false,
  textDrop = "Выберите файл или перетащите его сюда",
  placeholder,
  subtitle,
  loading = false,
  progress = 0,
  onCancelUpload,
  className,
  name,
  id,
}: InputFileDropProps) {
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
  } = useInputFileDrop({
    value,
    defaultValue,
    onChange,
    maxSize,
    maxFiles,
    accept,
    validateFile,
    disabled,
    onSizeError,
    onAcceptError,
    onValidationError,
  });

  const showDropZone = files.length < maxFiles;
  const dropZoneDisabled = disabled || loading || !showDropZone;

  return (
    <div className={cn(inputFileDropStyles.wrapper, className)}>
      {(label || required) && (
        <FieldLabel
          size={size}
          required={required}
          disabled={disabled}
          htmlFor={id}
          className="pl-0"
        >
          {label}
        </FieldLabel>
      )}

      {subtitle && (
        <FieldSubtitle size={size} disabled={disabled} className="pl-0">
          {subtitle}
        </FieldSubtitle>
      )}

      <div className={inputFileDropStyles.content}>
        {showDropZone && (
          <DropZone
            size={size}
            disabled={dropZoneDisabled}
            isDragActive={isDragActive}
            error={isError}
            textUpload={textUpload}
            textMode={textMode}
            textDrop={textDrop}
            placeholder={placeholder}
            accept={accept}
            name={name}
            required={required}
            inputRef={inputRef}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onInputChange={onInputChange}
            loading={loading}
            progress={progress}
            textLoading={textLoading}
            onCancelUpload={onCancelUpload}
          />
        )}

        {!!files.length && (
          <div className="relative">
            <div className={inputFileDropStyles.filesList}>
              {files.map((file, index) => (
                <FileTilePreview
                  key={`${file.name}-${file.lastModified}-${index}`}
                  file={file}
                  disabled={disabled}
                  onRemove={() => removeFile(index)}
                />
              ))}
            </div>
            <div className={inputFileDropStyles.filesListShadow} />
          </div>
        )}
      </div>

      {(hintError || hint) && (
        <FieldHint size={size} error={isError} className="pl-0">
          {hintError || hint}
        </FieldHint>
      )}
    </div>
  );
}
