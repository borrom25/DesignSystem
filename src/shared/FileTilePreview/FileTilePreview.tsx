import { cn, formatFileSize } from "@/utils";
import { File, Music, Play, Search } from "lucide-react";
import { Color, Size, Type } from "@/types";
import { Button } from "@/components/Button";
import { CloseBtn } from "@/components/CloseBtn";
import { ImageModal, PdfModal, VideoModal } from "@/shared/modals";
import { fileTilePreviewStyles } from "./styles";
import { useFileTilePreview } from "./hooks";
import { isAudioFile } from "./utils";

export interface FileTilePreviewProps {
  file: File;
  onRemove: () => void;
  disabled?: boolean;
}

export function FileTilePreview({
  file,
  onRemove,
  disabled,
}: FileTilePreviewProps) {
  const styles = fileTilePreviewStyles;
  const {
    previewUrl,
    isImage,
    isVideo,
    isPdf,
    hasMediaPreview,
    isModalOpen,
    handleView,
    closeModal,
    viewAriaLabel,
  } = useFileTilePreview({ file });

  return (
    <>
      <div className={styles.buttonContainer}>
        <div className={styles.container}>
          {hasMediaPreview && previewUrl ? (
            <>
              <img
                src={previewUrl}
                alt={file.name}
                className={cn(
                  styles.image,
                  isPdf && "object-contain bg-generic-medium"
                )}
              />

              <div className={styles.backdrop} />

              <div className={styles.overlay}>
                <div className={cn(styles.actions)}>
                  <Button
                    iconOnly={isVideo ? Play : Search}
                    size={Size.Xs}
                    type={Type.Ghost}
                    color={Color.ContrastLight}
                    onClick={handleView}
                    aria-label={viewAriaLabel}
                    title={isVideo ? "Воспроизвести" : "Просмотреть"}
                  />
                </div>
              </div>
            </>
          ) : (
            <div className={styles.file}>
              {isAudioFile(file) ? <Music size={16} /> : <File size={16} />}
              <p className={styles.fileName}>{file.name}</p>
              <p className={styles.fileSize}>{formatFileSize(file.size)}</p>
            </div>
          )}
        </div>
        {!disabled && (
          <CloseBtn onClick={onRemove} className={styles.closeButton} />
        )}
      </div>

      {isVideo && (
        <VideoModal
          file={file}
          isOpen={isModalOpen}
          onClose={closeModal}
          onRemove={onRemove}
          disabled={disabled}
        />
      )}
      {isPdf && (
        <PdfModal
          file={file}
          isOpen={isModalOpen}
          onClose={closeModal}
          onRemove={onRemove}
          disabled={disabled}
        />
      )}
      {isImage && (
        <ImageModal
          file={file}
          isOpen={isModalOpen}
          onClose={closeModal}
          onRemove={onRemove}
          disabled={disabled}
        />
      )}
    </>
  );
}
