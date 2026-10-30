import { Download, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/Button";
import { ListItem, ListItemVariant } from "@/components/ListItem";
import { Modal, ModalType } from "@/components/Modal";
import { Separator } from "@/components/Separator";
import { Color, Size, Type } from "@/types";
import { photoStyles } from "../styles";

export function PhotoActions({
  isMobile,
  actionsOpen,
  onActionsOpenChange,
  confirmOpen,
  onConfirmOpenChange,
  onDownload,
  onEdit,
  onDelete,
  onConfirm,
}: {
  isMobile: boolean;
  actionsOpen: boolean;
  onActionsOpenChange: (open: boolean) => void;
  confirmOpen: boolean;
  onConfirmOpenChange: (open: boolean) => void;
  onDownload?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onConfirm: () => void;
}) {
  return (
    <>
      {isMobile && (
        <Modal
          open={actionsOpen}
          onOpenChange={onActionsOpenChange}
          title="Действие"
          withBodyPadding={false}
          animationClassName={photoStyles.mobileSheet}
        >
          <div className={photoStyles.actions}>
            {onDownload && (
              <ListItem
                title="Скачать"
                iconLeft={Download}
                size={Size.Md}
                onClick={onDownload}
              />
            )}
            {onEdit && (
              <ListItem
                title="Изменить"
                iconLeft={Pencil}
                size={Size.Md}
                onClick={onEdit}
              />
            )}
            {(onDownload || onEdit) && onDelete && <Separator />}
            {onDelete && (
              <ListItem
                title="Удалить"
                iconLeft={Trash2}
                size={Size.Md}
                variant={ListItemVariant.Danger}
                onClick={onDelete}
              />
            )}
          </div>
        </Modal>
      )}
      {onDelete && (
        <Modal
          open={confirmOpen}
          onOpenChange={onConfirmOpenChange}
          type={ModalType.dialog}
          size={Size.Sm}
          title="Вы уверены, что хотите удалить фото?"
          animationClassName={isMobile ? photoStyles.mobileSheet : undefined}
          bottomSlot={
            <div className={photoStyles.confirmActions}>
              <Button
                type={Type.Flat}
                color={Color.Secondary}
                size={Size.Sm}
                onClick={() => onConfirmOpenChange(false)}
              >
                Нет
              </Button>
              <Button
                type={Type.Fill}
                color={Color.Danger}
                size={Size.Sm}
                onClick={onConfirm}
              >
                Да
              </Button>
            </div>
          }
        />
      )}
    </>
  );
}
