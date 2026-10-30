import { cn } from "@/utils";
import { Size } from "@/types";
import { FieldLabel, FieldHint } from "@/components/Field";
import { FloatingLabelRequiredMark } from "@/shared/Input";
import type { InputImgProps } from "./InputImg.types";
import { useInputImg } from "./hooks";
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
  validateFile,
  onValidationError,
  onSizeError,
  onAcceptError,
  textUpload = "Загрузить",
  textLoading = "Загрузка",
  loading = false,
  progress = 0,
  onCancelUpload,
  fill = false,
  previewHoverEnabled = true,
  previewRemoveEnabled = true,
  previewZoomEnabled = true,
  className,
  name,
  id,
  onPreviewClick,
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
    validateFile,
    disabled,
    onSizeError,
    onAcceptError,
    onValidationError,
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
          fill={fill}
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
          fill={fill}
          hoverEnabled={previewHoverEnabled}
          removeEnabled={previewRemoveEnabled}
          zoomEnabled={previewZoomEnabled}
          onRemove={removeFile}
          onPreviewClick={onPreviewClick}
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
        fill={fill}
      />
    );
  };

  const showBorderRequiredMark = required && !label && !disabled;

  return (
    <div
      className={cn(
        inputImgStyles.wrapper,
        fill && inputImgStyles.wrapperFill,
        className
      )}
    >
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

      <div
        className={cn(
          inputImgStyles.control,
          fill && inputImgStyles.controlFill
        )}
      >
        {showBorderRequiredMark && (
          <FloatingLabelRequiredMark className={inputImgStyles.requiredMark} />
        )}
        {renderContent()}
      </div>

      {(hintError || hint) && (
        <FieldHint size={size} error={isError} className="pl-0">
          {hintError || hint}
        </FieldHint>
      )}
    </div>
  );
}
