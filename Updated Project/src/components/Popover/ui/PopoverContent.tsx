import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/utils";
import type { PopoverContentProps } from "../Popover.types";
import { contentBaseClasses, openAnimationClasses } from "../styles";
import { getContentStyles } from "../Popover.utils";
import { useScreenSize } from "@/providers";
import { Modal } from "../../Modal";
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
  ...props
}: PopoverContentProps) {
  const contentStyles = getContentStyles(matchTriggerWidth, maxHeight);
  const { isMobile } = useScreenSize();
  const { isOpen, setIsOpen } = usePopover();

  if (isMobile) {
    return (
      <Modal open={isOpen} onOpenChange={setIsOpen} sideMenu={sideMenu}>
        {children}
      </Modal>
    );
  }

  return (
    <PopoverPrimitive.Portal forceMount={forceMount}>
      <PopoverPrimitive.Content
        sideOffset={sideOffset}
        className={cn(contentBaseClasses, openAnimationClasses, className)}
        style={{ pointerEvents: "auto", ...contentStyles, ...style }}
        collisionBoundary={collisionBoundary}
        collisionPadding={collisionPadding}
        avoidCollisions={true}
        {...props}
      >
        {children}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
}
