import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Trash2, Download, X } from "lucide-react";
import { inputImgStyles } from "./styles";
import { ImageModalProps } from "@/shared/modals/ImageModal/ImageModal.types.ts";

export function ImageModal({
  file,
  isOpen,
  onClose,
  onRemove,
  disabled,
  src,
}: ImageModalProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
    if (src) setPreviewUrl(src);
  }, [file, src]);

  const imageName = file?.name ?? "Фото";

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleDownload = () => {
    if (previewUrl) {
      const link = document.createElement("a");
      link.href = previewUrl;
      link.download = imageName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleRemove = () => {
    onRemove?.();
    onClose();
  };

  if (!isOpen) return null;

  return createPortal(
    <div className={inputImgStyles.overlay} onClick={onClose}>
      <div
        className={inputImgStyles.content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={inputImgStyles.actions}>
          {!disabled && (
            <button
              onClick={handleRemove}
              className={inputImgStyles.actionButton}
              aria-label="Удалить изображение"
              title="Удалить"
            >
              <Trash2 size={20} className={inputImgStyles.icon} />
            </button>
          )}
          <button
            onClick={handleDownload}
            className={inputImgStyles.actionButton}
            aria-label="Скачать изображение"
            title="Скачать"
          >
            <Download size={20} className={inputImgStyles.icon} />
          </button>
          <button
            onClick={onClose}
            className={inputImgStyles.actionButton}
            aria-label="Закрыть"
            title="Закрыть"
          >
            <X size={20} className={inputImgStyles.icon} />
          </button>
        </div>
        {previewUrl && (
          <img
            src={previewUrl}
            alt={imageName}
            className={inputImgStyles.image}
          />
        )}
      </div>
    </div>,
    document.body
  );
}
