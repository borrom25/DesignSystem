import { cn } from "@/utils";
import type { ModalFooterProps } from "../Modal.types";
import { modalStyles } from "../styles";

export function ModalFooter({ children, className }: ModalFooterProps) {
  if (!children) {
    return null;
  }

  return <div className={cn(modalStyles.footer, className)}>{children}</div>;
}
