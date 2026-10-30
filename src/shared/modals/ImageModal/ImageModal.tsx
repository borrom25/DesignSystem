import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, Download, Trash2, X } from "lucide-react";
import { cn } from "@/utils";
import { useGalleryKeyboard, useMediaModal } from "../hooks";
import { inputImgStyles } from "./styles";
import type { ImageModalProps } from "./ImageModal.types.ts";

export function ImageModal({
  file,
  isOpen,
  onClose,
  onRemove,
  disabled,
  src,
  onPrev,
  onNext,
  children,
}: ImageModalProps) {
  const { previewUrl, mediaName, handleDownload, handleRemove } = useMediaModal(
    {
      file,
      src,
      isOpen,
      onClose,
      onRemove,
      fallbackName: "Фото",
    }
  );

  useGalleryKeyboard(isOpen, onPrev, onNext);

  const isGallery = Boolean(onPrev || onNext);

  if (!isOpen) return null;

  return createPortal(
    <div className={inputImgStyles.overlay} onClick={onClose}>
      <div
        className={cn(
          inputImgStyles.content,
          isGallery && inputImgStyles.contentGallery
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={inputImgStyles.actions}>
          {!disabled && (
            <button
              type="button"
              onClick={handleRemove}
              className={inputImgStyles.actionButton}
              aria-label="Удалить изображение"
              title="Удалить"
            >
              <Trash2 size={20} className={inputImgStyles.icon} />
            </button>
          )}
          {previewUrl && (
            <button
              type="button"
              onClick={handleDownload}
              className={inputImgStyles.actionButton}
              aria-label="Скачать изображение"
              title="Скачать"
            >
              <Download size={20} className={inputImgStyles.icon} />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className={inputImgStyles.actionButton}
            aria-label="Закрыть"
            title="Закрыть"
          >
            <X size={20} className={inputImgStyles.icon} />
          </button>
        </div>
        <div className={inputImgStyles.viewer}>
          {onPrev && (
            <button
              type="button"
              onClick={onPrev}
              className={inputImgStyles.actionButton}
              aria-label="Предыдущее изображение"
              title="Назад"
            >
              <ChevronLeft size={20} className={inputImgStyles.icon} />
            </button>
          )}
          <div className={inputImgStyles.stage}>
            {previewUrl ? (
              <img
                src={previewUrl}
                alt={mediaName}
                className={inputImgStyles.image}
              />
            ) : (
              children && (
                <div className={inputImgStyles.fallback}>{children}</div>
              )
            )}
          </div>
          {onNext && (
            <button
              type="button"
              onClick={onNext}
              className={inputImgStyles.actionButton}
              aria-label="Следующее изображение"
              title="Вперёд"
            >
              <ChevronRight size={20} className={inputImgStyles.icon} />
            </button>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
