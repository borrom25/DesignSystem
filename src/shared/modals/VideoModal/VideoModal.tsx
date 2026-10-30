import { createPortal } from "react-dom";
import { Trash2, Download, X } from "lucide-react";
import { Player } from "@/components/Player";
import { useMediaModal } from "../hooks";
import { videoModalStyles } from "./styles";
import type { VideoModalProps } from "./VideoModal.types";

export function VideoModal({
  file,
  isOpen,
  onClose,
  onRemove,
  disabled,
  src,
  videoType,
}: VideoModalProps) {
  const { previewUrl, mediaName, handleDownload, handleRemove } = useMediaModal(
    {
      file,
      src,
      isOpen,
      onClose,
      onRemove,
      fallbackName: "Видео",
    }
  );

  const resolvedVideoType = videoType || file?.type || "video/mp4";

  if (!isOpen) return null;

  return createPortal(
    <div className={videoModalStyles.overlay} onClick={onClose}>
      <div
        className={videoModalStyles.content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={videoModalStyles.actions}>
          {!disabled && (
            <button
              onClick={handleRemove}
              className={videoModalStyles.actionButton}
              aria-label="Удалить видео"
              title="Удалить"
            >
              <Trash2 size={20} className={videoModalStyles.icon} />
            </button>
          )}
          <button
            onClick={handleDownload}
            className={videoModalStyles.actionButton}
            aria-label="Скачать видео"
            title="Скачать"
          >
            <Download size={20} className={videoModalStyles.icon} />
          </button>
          <button
            onClick={onClose}
            className={videoModalStyles.actionButton}
            aria-label="Закрыть"
            title="Закрыть"
          >
            <X size={20} className={videoModalStyles.icon} />
          </button>
        </div>
        {previewUrl && (
          <Player
            src={previewUrl}
            videoType={resolvedVideoType}
            title={mediaName}
            className={videoModalStyles.video}
          />
        )}
      </div>
    </div>,
    document.body
  );
}
