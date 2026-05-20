import type { HTMLAttributes, ReactNode } from "react";
import type { Size } from "@/types";

export enum ModalType {
  modal = "modal",
  dialog = "dialog",
  iceBox = "iceBox",
}

export interface ModalProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  type?: ModalType;
  size?: Size;
  fullScreen?: boolean;
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: ReactNode;
  subtitle?: ReactNode;
  actionSlot?: ReactNode;
  children?: ReactNode;
  bottomSlot?: ReactNode;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  animationClassName?: string;
  sideMenu?: boolean;
  withBodyPadding?: boolean;
}

export interface ModalHeaderProps {
  type?: ModalType;
  title?: ReactNode;
  subtitle?: ReactNode;
  actionSlot?: ReactNode;
  className?: string;
  onClose?: () => void;
}

export interface ModalFooterProps {
  children?: ReactNode;
  className?: string;
}

export interface ModalOverlayProps {
  onClick?: () => void;
  className?: string;
  state: "open" | "closed";
}

export interface ModalContentProps {
  type?: ModalType;
  size?: Size;
  fullScreen?: boolean;
  animationClassName?: string;
  showCloseButton?: boolean;
  sideMenu: boolean;
  onClose?: () => void;
  handleOverlayClick?: () => void;
  className?: string;
  children?: ReactNode;
  state: "open" | "closed";
}

export interface UseModalOptions {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  closeOnEscape?: boolean;
}
