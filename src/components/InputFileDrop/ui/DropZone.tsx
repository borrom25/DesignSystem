import { cn } from "@/utils";
import { Plus } from "lucide-react";
import { IconButton } from "@/components/IconButton";
import { Color, Type } from "@/types";
import { CloseBtn } from "@/components/CloseBtn";
import { getDropZoneStateClass } from "@/shared/DropZone";
import type { DropZoneProps } from "../InputFileDrop.types";
import { inputFileDropStyles } from "../styles";

export function DropZone({
  size,
  disabled,
  isDragActive,
  error,
  textUpload,
  textMode = false,
  textDrop = "Выберите файл или перетащите его сюда",
  placeholder,
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
  loading = false,
  progress = 0,
  textLoading = "Загрузка",
  onCancelUpload,
}: DropZoneProps) {
  const styles = inputFileDropStyles.dropZone;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || loading) return;
    const input =
      e.currentTarget.querySelector<HTMLInputElement>('input[type="file"]');
    input?.click();
  };

  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  const handleCancelClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onCancelUpload?.();
  };

  return (
    <div
      className={cn(
        styles.base,
        styles.size[size],
        getDropZoneStateClass(styles, { disabled, isDragActive, error }),
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
        multiple
        required={required}
        onChange={onInputChange}
        ref={inputRef}
        disabled={disabled || loading}
        className="sr-only"
      />

      {loading ? (
        <>
          <span className={cn(styles.text, styles.textSize[size])}>
            {textLoading}
          </span>
          <div className={inputFileDropStyles.loading.progressWrapper}>
            <div
              className={inputFileDropStyles.loading.progressBar}
              style={{ width: `${clampedProgress}%` }}
            />
          </div>
          {onCancelUpload && (
            <CloseBtn size={size} onClick={handleCancelClick} tabIndex={-1} />
          )}
        </>
      ) : textMode ? (
        isDragActive ? (
          <span className={cn(styles.text, styles.textSize[size])}>
            Отпустите
          </span>
        ) : (
          <div className={styles.textBlock}>
            <p
              className={cn(
                styles.text,
                styles.textSize[size],
                disabled && styles.textDisabled
              )}
            >
              {textDrop}
            </p>
            {placeholder && (
              <span
                className={cn(
                  styles.placeholder,
                  styles.placeholderSize[size],
                  disabled && styles.placeholderDisabled
                )}
              >
                {placeholder}
              </span>
            )}
          </div>
        )
      ) : (
        <>
          <IconButton
            icon={Plus}
            size={size}
            type={Type.Flat}
            color={error ? Color.Danger : Color.Brand}
            disabled={disabled}
            tabIndex={-1}
          />

          <span
            className={cn(
              styles.text,
              styles.textSize[size],
              disabled && styles.textDisabled
            )}
          >
            {isDragActive ? "Отпустите" : textUpload}
          </span>
        </>
      )}
    </div>
  );
}
