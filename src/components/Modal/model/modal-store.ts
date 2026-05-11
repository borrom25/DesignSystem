import type { FC } from "react";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { useShallow } from "zustand/react/shallow";

export interface ModalEntry<T = object> {
  Component: FC<T>;
  isOpen: boolean;
  modalUid: string;
  props?: T;
}

interface ModalState {
  modalsEntries: Record<string, ModalEntry>;
}

interface ModalActions {
  openModal: {
    <T extends object>(modalItem: FC<T>, props: T): void;
    (modalItem: FC<Record<string, never>>): void;
    (modalItem: FC): void;
  };
  closeModalById: (uid: string) => void;
  closeModal: (modalItem: FC<never>) => void;
  closeModals: (...modalItems: FC<never>[]) => void;
  removeModal: (uid: string) => void;
}

type ModalStore = ModalState & ModalActions;

const useModalStoreBase = create<ModalStore>()(
  immer((set) => ({
    modalsEntries: {},

    openModal: <T extends object>(Component: FC<T>, props?: T) => {
      set((state) => {
        const id = crypto.randomUUID();

        state.modalsEntries[id] = {
          Component: Component as FC<unknown>,
          isOpen: true,
          modalUid: id,
          props,
        };
      });
    },

    closeModals: (...Components) => {
      set((state) => {
        const modals = Object.values(state.modalsEntries);

        Components.forEach((Component) => {
          const modal = modals.find(
            (modalItem) => modalItem.Component === Component
          );
          if (modal) modal.isOpen = false;
        });
      });
    },

    closeModal: (Component) => {
      set((state) => {
        const modal = Object.values(state.modalsEntries).find(
          (modalItem) => modalItem.Component === Component
        );
        if (modal) modal.isOpen = false;
      });
    },

    closeModalById: (uid: string) =>
      set((state) => {
        if (state.modalsEntries[uid]) {
          state.modalsEntries[uid].isOpen = false;
        }
      }),

    removeModal: (uid: string) =>
      set((state) => {
        const copy = { ...state.modalsEntries };
        delete copy[uid];
        return {
          ...state,
          modalsEntries: copy,
        };
      }),
  }))
);

const selectActions = (state: ModalStore): ModalActions => ({
  openModal: state.openModal,
  closeModalById: state.closeModalById,
  closeModal: state.closeModal,
  closeModals: state.closeModals,
  removeModal: state.removeModal,
});

const selectModalsEntries = (state: ModalStore) => state.modalsEntries;

export function useModalStore() {
  return useModalStoreBase(useShallow(selectActions));
}

export function useModalsEntries() {
  return useModalStoreBase(useShallow(selectModalsEntries));
}
