import { Download, Ellipsis, Pencil, Trash2, X } from "lucide-react";
import { cn } from "@/utils";
import { Color, Size, Type } from "@/types";
import { Label } from "@/components/Label";
import { RotatePhotoLeft, RotatePhotoRight } from "../icons/RotatePhoto";
import { photoStyles } from "../styles";
import { PhotoIconAction } from "./PhotoIconAction";

export function PhotoHeader({
  isMobile,
  count,
  index,
  onDelete,
  onDownload,
  onEdit,
  onRotate,
  onOpenActions,
  onClose,
}: {
  isMobile: boolean;
  count: number;
  index: number;
  onDelete?: () => void;
  onDownload?: () => void;
  onEdit?: () => void;
  onRotate?: (delta: 90 | -90) => void;
  onOpenActions: () => void;
  onClose: () => void;
}) {
  const hasActions = Boolean(onDownload || onEdit || onDelete);

  return (
    <header
      className={cn(
        photoStyles.header,
        isMobile ? photoStyles.headerCompact : photoStyles.headerDesktop
      )}
      onClick={(event) => event.stopPropagation()}
    >
      <div className={photoStyles.headerActions}>
        {!isMobile ? (
          <>
            {onDelete && (
              <PhotoIconAction
                icon={Trash2}
                label="Удалить"
                color={Color.Danger}
                onClick={onDelete}
              />
            )}
            {onDownload && (
              <PhotoIconAction
                icon={Download}
                label="Скачать"
                onClick={onDownload}
              />
            )}
            {onEdit && (
              <PhotoIconAction
                icon={Pencil}
                label="Изменить"
                onClick={onEdit}
              />
            )}
            {onRotate && (
              <>
                <PhotoIconAction
                  icon={RotatePhotoLeft}
                  label="Повернуть влево"
                  onClick={() => onRotate(-90)}
                />
                <PhotoIconAction
                  icon={RotatePhotoRight}
                  label="Повернуть вправо"
                  onClick={() => onRotate(90)}
                />
              </>
            )}
          </>
        ) : (
          hasActions && (
            <PhotoIconAction
              icon={Ellipsis}
              label="Действия"
              onClick={onOpenActions}
            />
          )
        )}
      </div>

      {count > 0 && (
        <Label
          type={Type.Flat}
          color={Color.Secondary}
          size={Size.Md}
          className={photoStyles.counter}
        >
          {index + 1}/{count}
        </Label>
      )}

      <PhotoIconAction
        icon={X}
        label="Закрыть"
        type={isMobile ? Type.Ghost : Type.Flat}
        className={isMobile ? photoStyles.closeIconCompact : undefined}
        onClick={onClose}
      />
    </header>
  );
}
