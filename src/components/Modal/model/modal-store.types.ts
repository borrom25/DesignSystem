import type { FC, ReactNode } from "react";

export interface ModalEntry<T = object> {
  Component: FC<T>;
  isOpen: boolean;
  modalUid: string;
  props?: T;
}

export type ProgrammaticModalSize = "small" | "medium" | "large" | "fullscreen";

export interface ProgrammaticModalOptions<TResult = unknown> {
  title?: ReactNode;
  subtitle?: ReactNode;
  content: ReactNode;
  size?: ProgrammaticModalSize;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  preventClose?: boolean;
  onClose?: (result?: TResult) => void;
}

export interface ProgrammaticModalEntry extends ProgrammaticModalOptions<unknown> {
  modalUid: string;
  isOpen: boolean;
  size: ProgrammaticModalSize;
  showCloseButton: boolean;
  closeOnOverlayClick: boolean;
  closeOnEscape: boolean;
  preventClose: boolean;
  isClosing: boolean;
}

export interface ModalState {
  modalsEntries: Record<string, ModalEntry>;
  programmaticModals: ProgrammaticModalEntry[];
}

export interface ModalActions {
  openModal: {
    <T extends object>(modalItem: FC<T>, props: T): void;
    (modalItem: FC<Record<string, never>>): void;
    (modalItem: FC): void;
  };
  closeModalById: (uid: string) => void;
  closeModal: (modalItem: FC<never>) => void;
  closeModals: (...modalItems: FC<never>[]) => void;
  removeModal: (uid: string) => void;
  showProgrammaticModal: <TResult = unknown>(
    options: ProgrammaticModalOptions<TResult>
  ) => string;
  closeProgrammaticModal: <TResult = unknown>(result?: TResult) => void;
  closeProgrammaticModalById: <TResult = unknown>(
    modalUid: string,
    result?: TResult
  ) => void;
  removeProgrammaticModal: (modalUid: string) => void;
}

export type ModalStore = ModalState & ModalActions;
