import { useRef, type MouseEvent } from "react";
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
  const shouldCloseOnBackdropClickRef = useRef(false);
  const { isMobile } = useScreenSize();
  const wrapperClasses = modalStyles.getWrapper(type);
  const contentClasses = modalStyles.getContent(
    type,
    size,
    fullScreen,
    isMobile,
    sideMenu
  );
  const animationClasses = modalStyles.getAnimation(
    type,
    isMobile,
    animationClassName,
    sideMenu
  );

  const handleBackdropMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    shouldCloseOnBackdropClickRef.current =
      event.target === event.currentTarget;
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (
      event.target === event.currentTarget &&
      shouldCloseOnBackdropClickRef.current
    ) {
      handleOverlayClick?.();
    }
    shouldCloseOnBackdropClickRef.current = false;
  };

  return (
    <div
      className={cn(modalStyles.contentWrapper, wrapperClasses)}
      onMouseDown={handleBackdropMouseDown}
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
        >
          {children}
        </div>
        {sideMenu && showCloseButton && (
          <Button
            iconOnly={X}
            type={Type.Fill}
            color={Color.Generic}
            size={Size.Sm}
            onClick={onClose}
            aria-label="Закрыть"
            data-state={state}
            data-menu={sideMenu}
            className={modalStyles.sideMenuCloseButton}
          />
        )}
      </div>
    </div>
  );
}
