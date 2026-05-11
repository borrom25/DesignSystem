import { cn } from "@/utils";
import { Size } from "@/types";
import { FieldLabel, FieldHint } from "@/components/Field";
import type { InputImgProps } from "./InputImg.types";
import { useInputImg } from "./hooks/useInputImg";
import { DropZone } from "./ui/DropZone";
import { ImagePreview } from "./ui/ImagePreview";
import { inputImgStyles } from "./styles";

export function InputImg({
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
  onBeforeUpload,
  maxSize,
  accept = "image/*",
  onSizeError,
  onAcceptError,
  textUpload = "Загрузить",
  textLoading = "Загрузка",
  loading = false,
  progress = 0,
  onCancelUpload,
  className,
  name,
  id,
}: InputImgProps) {
  const isError = error || !!hintError;

  const {
    file,
    isDragActive,
    inputRef,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
    onInputChange,
    removeFile,
  } = useInputImg({
    value,
    defaultValue,
    onChange,
    onBeforeUpload,
    maxSize,
    accept,
    disabled,
    onSizeError,
    onAcceptError,
  });

  const renderContent = () => {
    if (loading) {
      return (
        <DropZone
          size={size}
          disabled={disabled}
          isDragActive={isDragActive}
          error={isError}
          textUpload={textUpload}
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
      );
    }

    if (file) {
      return (
        <ImagePreview
          file={file}
          size={size}
          error={isError}
          disabled={disabled}
          onRemove={removeFile}
        />
      );
    }

    return (
      <DropZone
        size={size}
        disabled={disabled}
        isDragActive={isDragActive}
        error={isError}
        textUpload={textUpload}
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
    );
  };

  return (
    <div className={cn(inputImgStyles.wrapper, className)}>
      {label && (
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

      {renderContent()}

      {(hintError || hint) && (
        <FieldHint size={size} error={isError} className="pl-0">
          {hintError || hint}
        </FieldHint>
      )}
    </div>
  );
}
