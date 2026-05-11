import { cn } from "@/utils";
import { ModalType, type ModalHeaderProps } from "../Modal.types";
import { modalStyles } from "../styles";
import { useScreenSize } from "@/providers";
import { IconButton } from "@/components/IconButton";
import { X } from "lucide-react";
import { Color, Size } from "@/types";

export function ModalHeader({
  type = ModalType.modal,
  title,
  subtitle,
  actionSlot,
  className,
  onClose,
}: ModalHeaderProps) {
  const { isMobile } = useScreenSize();
  const hasContent = title || subtitle || actionSlot;

  if (!hasContent) {
    return null;
  }

  const hasHeaderBorder = type !== ModalType.dialog;

  return (
    <div
      className={cn(
        modalStyles.header,
        hasHeaderBorder && modalStyles.headerBorder,
        className
      )}
    >
      {(title || subtitle) && (
        <div className={modalStyles.headerTitleWrapper}>
          {title && <div className={modalStyles.headerTitle}>{title}</div>}
          {subtitle && (
            <div className={modalStyles.headerSubtitle}>{subtitle}</div>
          )}
        </div>
      )}

      {!isMobile && actionSlot && (
        <div className={modalStyles.headerActionSlot}>{actionSlot}</div>
      )}
      {isMobile && (
        <IconButton
          icon={X}
          type="flat"
          color={Color.Inverse}
          rounded
          size={Size.Md}
          onClick={onClose}
          aria-label="Закрыть"
        />
      )}
    </div>
  );
}
