import { createPortal } from "react-dom";
import { Trash2, Download, X } from "lucide-react";
import { useMediaModal } from "../hooks";
import { pdfModalStyles } from "./styles";
import { usePdfModalPages } from "./hooks/usePdfModalPages";
import type { PdfModalProps } from "./PdfModal.types";

export function PdfModal({
  file,
  isOpen,
  onClose,
  onRemove,
  disabled,
  src,
}: PdfModalProps) {
  const { previewUrl, mediaName, handleDownload, handleRemove } = useMediaModal(
    {
      file,
      src,
      isOpen,
      onClose,
      onRemove,
      fallbackName: "Документ",
    }
  );
  const { pages, failed } = usePdfModalPages({ file, src, isOpen });

  if (!isOpen) return null;

  return createPortal(
    <div className={pdfModalStyles.overlay} onClick={onClose}>
      <div
        className={pdfModalStyles.content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={pdfModalStyles.actions}>
          {!disabled && (
            <button
              onClick={handleRemove}
              className={pdfModalStyles.actionButton}
              aria-label="Удалить документ"
              title="Удалить"
            >
              <Trash2 size={20} className={pdfModalStyles.icon} />
            </button>
          )}
          <button
            onClick={handleDownload}
            className={pdfModalStyles.actionButton}
            aria-label="Скачать документ"
            title="Скачать"
          >
            <Download size={20} className={pdfModalStyles.icon} />
          </button>
          <button
            onClick={onClose}
            className={pdfModalStyles.actionButton}
            aria-label="Закрыть"
            title="Закрыть"
          >
            <X size={20} className={pdfModalStyles.icon} />
          </button>
        </div>
        {pages.length > 0 ? (
          <div className={pdfModalStyles.pages}>
            {pages.map((page, index) => (
              <img
                key={`${mediaName}-${index}`}
                src={page}
                alt={`${mediaName}, страница ${index + 1}`}
                className={pdfModalStyles.page}
              />
            ))}
          </div>
        ) : (
          failed &&
          previewUrl && (
            <iframe
              src={previewUrl}
              title={mediaName}
              className={pdfModalStyles.frame}
            />
          )
        )}
      </div>
    </div>,
    document.body
  );
}
