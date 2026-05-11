import { useState, useEffect } from "react";
import { cn } from "@/utils";
import { Trash2, CircleAlert, ZoomIn } from "lucide-react";
import { Color, Size, Type } from "@/types";
import type { ImagePreviewProps } from "../InputImg.types";
import { inputImgStyles } from "../styles";
import { Button } from "@/components/Button";
import { ImageModal } from "@/shared/modals";

export function ImagePreview({
  file,
  size,
  error,
  disabled,
  onRemove,
  className,
}: ImagePreviewProps) {
  const styles = inputImgStyles.preview;
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove();
  };

  const handleView = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <>
      <div className={cn(styles.container, styles.size[size], className)}>
        {previewUrl && (
          <img src={previewUrl} alt={file.name} className={styles.image} />
        )}

        <div className={styles.backdrop} />

        <div className={styles.overlay}>
          <div className={cn(styles.actions, styles.sizeActions[size])}>
            {!disabled && (
              <Button
                iconOnly={Trash2}
                size={Size.Sm}
                type={Type.Fill}
                color={Color.Danger}
                onClick={handleRemove}
                aria-label="Удалить изображение"
                title="Удалить"
              />
            )}

            <Button
              iconOnly={ZoomIn}
              size={Size.Sm}
              type={Type.Fill}
              color={Color.Inverse}
              onClick={handleView}
              aria-label="Просмотреть изображение"
              title="Просмотреть"
            />
          </div>

          {error && <CircleAlert className={styles.errorIcon} size={20} />}
        </div>
      </div>

      <ImageModal
        file={file}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRemove={onRemove}
        disabled={disabled}
      />
    </>
  );
}
