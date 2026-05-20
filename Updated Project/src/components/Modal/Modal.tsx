import { createPortal } from "react-dom";
import { cn } from "@/utils";
import { Size } from "@/types";
import { ModalType, type ModalProps } from "./Modal.types";
import { useModal } from "./hooks/useModal";
import { ModalOverlay, ModalContent, ModalHeader, ModalFooter } from "./ui";
import { modalStyles } from "./styles";
import { useScreenSize } from "@/providers";
import { useModalVisibility } from "./hooks/useModalVisibility";

export function Modal({
  type = ModalType.modal,
  size = Size.Md,
  fullScreen = false,
  open,
  onOpenChange,
  title,
  subtitle,
  actionSlot,
  children,
  bottomSlot,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton,
  animationClassName,
  className,
  sideMenu = false,
  withBodyPadding = true,
  ...props
}: ModalProps) {
  const { handleClose } = useModal({
    open,
    onOpenChange,
    closeOnEscape,
  });
  const { shouldRender, state } = useModalVisibility(open, 500);

  const { isMobile } = useScreenSize();

  if (!shouldRender) return null;

  const handleOverlayClick = () => closeOnOverlayClick && handleClose();

  const isIceBox = type === ModalType.iceBox;
  const isModal = type === ModalType.modal;

  const modalContent = (
    <>
      <ModalOverlay onClick={handleOverlayClick} state={state} />
      <ModalContent
        type={type}
        size={size}
        fullScreen={fullScreen}
        animationClassName={animationClassName}
        showCloseButton={showCloseButton}
        onClose={handleClose}
        handleOverlayClick={handleOverlayClick}
        className={className}
        state={state}
        sideMenu={sideMenu}
        {...props}
      >
        {isMobile && (
          <span className={modalStyles.mobileCloseLine} onClick={handleClose} />
        )}
        <ModalHeader
          type={type}
          title={title}
          subtitle={subtitle}
          actionSlot={isIceBox ? undefined : actionSlot}
          onClose={handleClose}
        />

        {(isModal || isIceBox) && children && (
          <div
            className={cn(
              modalStyles.body,
              withBodyPadding && modalStyles.bodyPadding
            )}
          >
            {children}
          </div>
        )}

        {isIceBox && actionSlot && (
          <div className={cn(modalStyles.header, modalStyles.actionSlotBorder)}>
            <div className={modalStyles.actionSlotWrapper}>{actionSlot}</div>
          </div>
        )}

        {!isIceBox && <ModalFooter>{bottomSlot}</ModalFooter>}
      </ModalContent>
    </>
  );

  return createPortal(modalContent, document.body);
}
