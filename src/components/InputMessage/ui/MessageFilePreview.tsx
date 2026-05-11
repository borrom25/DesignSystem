import { useState, useEffect } from "react";
import { cn, formatFileSize } from "@/utils";
import { File, Search } from "lucide-react";
import { Color, Size, Type } from "@/types";
import { Button } from "@/components/Button";
import { inputMessageStyles } from "../styles";
import { ImageModal } from "@/shared/modals";
import { MessageFilePreviewProps } from "../InputMessage.types.ts";
import { CloseBtn } from "@/components";

export function MessageFilePreview({
  file,
  onRemove,
}: MessageFilePreviewProps) {
  const styles = inputMessageStyles.preview;
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const handleView = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const isImage = file.type.includes("image");

  return (
    <>
      <div className={styles.buttonContainer}>
        <div className={styles.container}>
          {isImage && previewUrl ? (
            <>
              <img src={previewUrl} alt={file.name} className={styles.image} />

              <div className={styles.backdrop} />

              <div className={styles.overlay}>
                <div className={cn(styles.actions)}>
                  <Button
                    iconOnly={Search}
                    size={Size.Xs}
                    type={Type.Ghost}
                    color={Color.ContrastLight}
                    onClick={handleView}
                    aria-label="Просмотреть изображение"
                    title="Просмотреть"
                  />
                </div>
              </div>
            </>
          ) : (
            <div className={styles.file}>
              <File size={16} />
              <p className={styles.fileName}>{file.name}</p>
              <p className={styles.fileSize}>{formatFileSize(file.size)}</p>
            </div>
          )}
        </div>
        <CloseBtn onClick={onRemove} className={styles.closeButton} />
      </div>

      <ImageModal
        file={file}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRemove={onRemove}
      />
    </>
  );
}
