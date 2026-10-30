import { cn } from "@/utils";
import type { ModalFooterProps } from "../Modal.types";
import { modalStyles } from "../styles";
import { useScreenSize } from "@/providers";

export function ModalFooter({ children, className }: ModalFooterProps) {
  const { isMobile } = useScreenSize();

  if (!children) {
    return null;
  }

  return (
    <div
      className={cn(
        modalStyles.footer,
        isMobile && modalStyles.footerMobile,
        className
      )}
    >
      {children}
    </div>
  );
}
