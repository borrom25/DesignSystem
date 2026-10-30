import { cn } from "@/utils";
import { Plus } from "lucide-react";
import { IconButton } from "@/components/IconButton";
import { Color, Type } from "@/types";
import { CloseBtn } from "@/components/CloseBtn";
import { getDropZoneStateClass } from "@/shared/DropZone";
import type { DropZoneProps } from "../InputImg.types";
import { inputImgStyles } from "../styles";

export function DropZone({
  size,
  disabled,
  isDragActive,
  error,
  textUpload,
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
  fill = false,
}: DropZoneProps) {
  const styles = inputImgStyles.dropZone;

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
        fill ? styles.fill : styles.size[size],
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
          <div className={inputImgStyles.loading.progressWrapper}>
            <div
              className={inputImgStyles.loading.progressBar}
              style={{ width: `${clampedProgress}%` }}
            />
          </div>
          {onCancelUpload && (
            <CloseBtn size={size} onClick={handleCancelClick} tabIndex={-1} />
          )}
        </>
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
