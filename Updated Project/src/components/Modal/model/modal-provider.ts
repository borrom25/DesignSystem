import { createContext, useContext } from "react";

export interface ModalContextValue {
  modalUid: string;
  isOpen: boolean;
}

export const ModalContext = createContext<ModalContextValue | null>(null);

export function useModalContext(): ModalContextValue {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error(
      "useModalContext must be used within <ModalContext.Provider>"
    );
  }
  return ctx;
}
