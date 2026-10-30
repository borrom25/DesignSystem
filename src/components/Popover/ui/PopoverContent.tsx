import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/utils";
import type { PopoverContentProps } from "../Popover.types";
import {
  contentBaseClasses,
  contentModalZIndexClasses,
  contentPageZIndexClasses,
  openAnimationClasses,
} from "../styles";
import { getContentStyles } from "../Popover.utils";
import { useScreenSize } from "@/providers";
import { Modal } from "../../Modal";
import { useOverlayPortalContainer } from "../../Modal/Modal.utils";
import { usePopover } from "../Popover.context";

export function PopoverContent({
  matchTriggerWidth,
  maxHeight,
  collisionBoundary,
  collisionPadding = 8,
  children,
  style,
  className,
  sideOffset = 4,
  forceMount,
  sideMenu = false,
  closeOnOverlayClick = true,
  ...props
}: PopoverContentProps) {
  const contentStyles = getContentStyles(matchTriggerWidth, maxHeight);
  const { isMobile } = useScreenSize();
  const { isOpen, setIsOpen } = usePopover();
  const { container, setOverlayNode } = useOverlayPortalContainer();

  if (isMobile) {
    return (
      <Modal
        open={isOpen}
        onOpenChange={setIsOpen}
        sideMenu={sideMenu}
        closeOnOverlayClick={closeOnOverlayClick}
      >
        {children}
      </Modal>
    );
  }

  return (
    <PopoverPrimitive.Portal container={container} forceMount={forceMount}>
      <PopoverPrimitive.Content
        sideOffset={sideOffset}
        className={cn(
          contentBaseClasses,
          container ? contentModalZIndexClasses : contentPageZIndexClasses,
          openAnimationClasses,
          className
        )}
        style={{ pointerEvents: "auto", ...contentStyles, ...style }}
        collisionBoundary={collisionBoundary}
        collisionPadding={collisionPadding}
        avoidCollisions={true}
        {...props}
        ref={setOverlayNode}
      >
        {children}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
}
