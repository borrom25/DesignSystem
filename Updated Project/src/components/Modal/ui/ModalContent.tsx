import { type MouseEvent } from "react";
import { X } from "lucide-react";
import { cn } from "@/utils";
import { Color, Size, Type } from "@/types";
import { ModalType, type ModalContentProps } from "../Modal.types";
import { modalStyles } from "../styles";
import { useScreenSize } from "@/providers";
import { Button } from "@/components/Button";

export function ModalContent({
  type = ModalType.modal,
  size = Size.Md,
  fullScreen = false,
  animationClassName,
  showCloseButton = true,
  sideMenu,
  onClose,
  handleOverlayClick,
  state = "closed",
  className,
  children,
}: ModalContentProps) {
  const { isMobile } = useScreenSize();
  const wrapperClasses = modalStyles.getWrapper(type);
  const contentClasses = modalStyles.getContent(
    type,
    size,
    fullScreen,
    isMobile,
    sideMenu
  );
  const closeButtonClasses = modalStyles.getCloseButton(type, sideMenu);
  const animationClasses = modalStyles.getAnimation(
    type,
    isMobile,
    animationClassName,
    sideMenu
  );

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleOverlayClick?.();
    }
  };

  return (
    <div
      className={cn(modalStyles.contentWrapper, wrapperClasses)}
      onClick={handleBackdropClick}
    >
      <div className={modalStyles.contentLayout} data-menu={sideMenu}>
        <div
          className={cn(
            modalStyles.contentBase,
            contentClasses,
            animationClasses,
            className
          )}
          role="dialog"
          aria-modal="true"
          data-state={state}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
        {(!isMobile || sideMenu) && showCloseButton && (
          <Button
            iconOnly={X}
            type={Type.Fill}
            color={Color.Generic}
            size={Size.Sm}
            onClick={onClose}
            aria-label="Закрыть"
            data-state={state}
            data-menu={sideMenu}
            className={closeButtonClasses}
          />
        )}
      </div>
    </div>
  );
}
