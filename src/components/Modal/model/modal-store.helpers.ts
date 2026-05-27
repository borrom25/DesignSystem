import type { FC, ReactNode } from "react";
import { Size } from "@/types";
import type {
  ModalEntry,
  ProgrammaticModalEntry,
  ProgrammaticModalOptions,
  ProgrammaticModalSize,
} from "./modal-store.types";

export const MODAL_CLOSE_TIMEOUT = 500;
export const LARGE_MODAL_CLASSNAME = "w-[960px] max-w-[calc(100vw-56px)]";

export function createModalUid() {
  return crypto.randomUUID();
}

export function getActiveElement() {
  if (typeof document === "undefined") return null;
  return document.activeElement instanceof HTMLElement
    ? document.activeElement
    : null;
}

export function getTopOpenProgrammaticModal(
  modals: ProgrammaticModalEntry[]
): ProgrammaticModalEntry | undefined {
  return [...modals]
    .reverse()
    .find((modal) => modal.isOpen && !modal.isClosing);
}

export function closeProgrammaticModalEntry(
  modalEntry: ProgrammaticModalEntry | undefined,
  result?: unknown
) {
  if (!modalEntry || !modalEntry.isOpen || modalEntry.isClosing) return;
  modalEntry.isOpen = false;
  modalEntry.isClosing = true;
  modalEntry.onClose?.(result);
}

export function normalizeProgrammaticModal(
  options: ProgrammaticModalOptions<unknown>
): ProgrammaticModalEntry {
  const preventClose = options.preventClose ?? false;

  return {
    modalUid: createModalUid(),
    isOpen: true,
    isClosing: false,
    size: options.size ?? "medium",
    showCloseButton: preventClose ? false : (options.showCloseButton ?? true),
    closeOnOverlayClick: options.closeOnOverlayClick ?? true,
    closeOnEscape: options.closeOnEscape ?? true,
    preventClose,
    ...options,
  };
}

export function isModalOptions<TResult = unknown>(
  value: ReactNode | ProgrammaticModalOptions<TResult>
): value is ProgrammaticModalOptions<TResult> {
  return value !== null && typeof value === "object" && "content" in value;
}

export function findLegacyModalByComponent(
  modalsEntries: Record<string, ModalEntry>,
  component: FC<never>
) {
  return Object.values(modalsEntries).find(
    (entry) => entry.Component === component
  );
}

export function closeLegacyModalByComponent(
  modalsEntries: Record<string, ModalEntry>,
  component: FC<never>
) {
  const modal = findLegacyModalByComponent(modalsEntries, component);
  if (modal) modal.isOpen = false;
}

export function mapProgrammaticModalSize(size: ProgrammaticModalSize): {
  size: ProgrammaticModalSize;
  modalSize: (typeof Size)[keyof typeof Size];
  fullScreen: boolean;
  className?: string;
} {
  switch (size) {
    case "small":
      return { size, modalSize: Size.Sm, fullScreen: false };
    case "large":
      return {
        size,
        modalSize: Size.Md,
        fullScreen: false,
        className: LARGE_MODAL_CLASSNAME,
      };
    case "fullscreen":
      return { size, modalSize: Size.Md, fullScreen: true };
    case "medium":
    default:
      return { size: "medium", modalSize: Size.Md, fullScreen: false };
  }
}
