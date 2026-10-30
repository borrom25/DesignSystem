import { X } from "lucide-react";
import { cn } from "@/utils";
import { ModalType, type ModalHeaderProps } from "../Modal.types";
import { modalStyles } from "../styles";
import { useScreenSize } from "@/providers";
import { Button } from "@/components/Button";
import { Color, Size, Type } from "@/types";

export function ModalHeader({
  type = ModalType.modal,
  title,
  subtitle,
  actionSlot,
  className,
  headBottomSlot,
  slotHead,
  showCloseButton = false,
  onClose,
}: ModalHeaderProps) {
  const { isMobile } = useScreenSize();
  const hasTitleBlock = Boolean(title || subtitle);
  const hasActionSlot = Boolean(actionSlot);
  const hasBottomSlot = Boolean(headBottomSlot);
  const hasSlotHead = Boolean(slotHead);
  const hasContent =
    hasTitleBlock ||
    hasActionSlot ||
    hasBottomSlot ||
    hasSlotHead ||
    showCloseButton;

  if (!hasContent) {
    return null;
  }

  const hasHeaderActions = !isMobile && hasActionSlot;
  const hasTopRow = hasTitleBlock || hasHeaderActions;
  const hasHeaderBody = hasTopRow || hasBottomSlot || showCloseButton;
  const hasHeaderBorder = type !== ModalType.dialog;

  return (
    <div className={cn(hasHeaderBorder && modalStyles.headerBorder, className)}>
      {hasHeaderBody && (
        <div
          className={cn(
            modalStyles.header,
            isMobile && modalStyles.headerMobile,
            showCloseButton &&
              (isMobile
                ? modalStyles.headerClosePaddingMobile
                : modalStyles.headerClosePadding),
            showCloseButton &&
              !hasTitleBlock &&
              (isMobile ? "min-h-[50px]" : "min-h-19")
          )}
        >
          {hasTopRow && (
            <div className={modalStyles.headerTopRow}>
              {hasTitleBlock && (
                <div className={modalStyles.headerTitleWrapper}>
                  {title && (
                    <div
                      className={
                        isMobile
                          ? modalStyles.headerTitleMobile
                          : modalStyles.headerTitle
                      }
                    >
                      {title}
                    </div>
                  )}
                  {subtitle && (
                    <div className={modalStyles.headerSubtitle}>{subtitle}</div>
                  )}
                </div>
              )}

              {hasHeaderActions && (
                <div className={modalStyles.headerActions}>
                  <div className={modalStyles.headerActionSlot}>
                    {actionSlot}
                  </div>
                </div>
              )}
            </div>
          )}

          {headBottomSlot && (
            <div className={modalStyles.headerBottomSlot}>{headBottomSlot}</div>
          )}

          {showCloseButton && (
            <Button
              iconOnly={X}
              type={Type.Flat}
              color={Color.Secondary}
              size={Size.Xs}
              onClick={onClose}
              aria-label="Закрыть"
              className={
                isMobile
                  ? modalStyles.headerCloseButtonMobile
                  : modalStyles.headerCloseButton
              }
            />
          )}
        </div>
      )}

      {slotHead && (
        <div
          className={cn(
            modalStyles.slotHead,
            isMobile && modalStyles.slotHeadMobile
          )}
        >
          {slotHead}
        </div>
      )}
    </div>
  );
}
