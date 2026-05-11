import { cn } from "@/utils";
import type { ModalOverlayProps } from "../Modal.types";
import { modalStyles } from "../styles";

export function ModalOverlay({ onClick, className, state }: ModalOverlayProps) {
  return (
    <div
      className={cn(
        modalStyles.overlay,
        modalStyles.overlayAnimation,
        className
      )}
      onClick={onClick}
      data-state={state}
      aria-hidden="true"
    />
  );
}
