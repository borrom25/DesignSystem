import type { FC, ReactNode } from "react";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { useShallow } from "zustand/react/shallow";
import type {
  ModalActions,
  ModalStore,
  ProgrammaticModalEntry,
  ProgrammaticModalOptions,
} from "./modal-store.types";
import {
  MODAL_CLOSE_TIMEOUT,
  closeLegacyModalByComponent,
  closeProgrammaticModalEntry,
  createModalUid,
  getActiveElement,
  getTopOpenProgrammaticModal,
  isModalOptions,
  mapProgrammaticModalSize,
  normalizeProgrammaticModal,
} from "./modal-store.helpers";

const modalCleanupTimers = new Map<string, ReturnType<typeof setTimeout>>();
const modalOpeners = new Map<string, HTMLElement | null>();

function clearModalCleanupTimer(modalUid: string) {
  const timer = modalCleanupTimers.get(modalUid);
  if (timer) {
    clearTimeout(timer);
    modalCleanupTimers.delete(modalUid);
  }
}

function getTopProgrammaticModalUid() {
  const state = useModalStoreBase.getState();
  return getTopOpenProgrammaticModal(state.programmaticModals)?.modalUid;
}

function scheduleProgrammaticModalRemoval(modalUid: string) {
  clearModalCleanupTimer(modalUid);
  const openerElement = modalOpeners.get(modalUid) ?? null;

  const timer = setTimeout(() => {
    useModalStoreBase.getState().removeProgrammaticModal(modalUid);
    modalCleanupTimers.delete(modalUid);

    const nextTopModalUid = getTopProgrammaticModalUid();
    if (!nextTopModalUid && openerElement?.isConnected) {
      openerElement.focus();
    }
  }, MODAL_CLOSE_TIMEOUT);

  modalCleanupTimers.set(modalUid, timer);
}

function cleanupOrphanModalTimers(
  programmaticModals: ProgrammaticModalEntry[]
) {
  const existingModalIds = new Set(
    programmaticModals.map((modal) => modal.modalUid)
  );
  [...modalCleanupTimers.keys()].forEach((modalUid) => {
    if (!existingModalIds.has(modalUid)) clearModalCleanupTimer(modalUid);
  });
}

const useModalStoreBase = create<ModalStore>()(
  immer((set) => ({
    modalsEntries: {},
    programmaticModals: [],

    openModal: <T extends object>(Component: FC<T>, props?: T) => {
      set((state) => {
        const id = createModalUid();

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
        Components.forEach((Component) => {
          closeLegacyModalByComponent(state.modalsEntries, Component);
        });
      });
    },

    closeModal: (Component) => {
      set((state) => {
        closeLegacyModalByComponent(state.modalsEntries, Component);
      });
    },

    closeModalById: (uid: string) =>
      set((state) => {
        const modal = state.modalsEntries[uid];
        if (modal) modal.isOpen = false;
      }),

    removeModal: (uid: string) =>
      set((state) => {
        delete state.modalsEntries[uid];
      }),

    showProgrammaticModal: (options) => {
      const modalEntry = normalizeProgrammaticModal(
        options as ProgrammaticModalOptions<unknown>
      );
      modalOpeners.set(modalEntry.modalUid, getActiveElement());
      set((state) => {
        state.programmaticModals.push(modalEntry);
      });
      return modalEntry.modalUid;
    },

    closeProgrammaticModal: (result) =>
      set((state) => {
        closeProgrammaticModalEntry(
          getTopOpenProgrammaticModal(state.programmaticModals),
          result
        );
      }),

    closeProgrammaticModalById: (modalUid, result) =>
      set((state) => {
        const modalToClose = state.programmaticModals.find(
          (modal) => modal.modalUid === modalUid
        );
        closeProgrammaticModalEntry(modalToClose, result);
      }),

    removeProgrammaticModal: (modalUid) =>
      set((state) => {
        clearModalCleanupTimer(modalUid);
        state.programmaticModals = state.programmaticModals.filter(
          (modal) => modal.modalUid !== modalUid
        );
        modalOpeners.delete(modalUid);
      }),
  }))
);

const selectActions = (state: ModalStore): ModalActions => ({
  openModal: state.openModal,
  closeModalById: state.closeModalById,
  closeModal: state.closeModal,
  closeModals: state.closeModals,
  removeModal: state.removeModal,
  showProgrammaticModal: state.showProgrammaticModal,
  closeProgrammaticModal: state.closeProgrammaticModal,
  closeProgrammaticModalById: state.closeProgrammaticModalById,
  removeProgrammaticModal: state.removeProgrammaticModal,
});

const selectModalsEntries = (state: ModalStore) => state.modalsEntries;
const selectProgrammaticModals = (state: ModalStore) =>
  state.programmaticModals;

export function useModalStore() {
  return useModalStoreBase(useShallow(selectActions));
}

export function useModalsEntries() {
  return useModalStoreBase(useShallow(selectModalsEntries));
}

export function useProgrammaticModals() {
  return useModalStoreBase(useShallow(selectProgrammaticModals));
}

export const modalController = {
  show<TResult = unknown>(
    contentOrOptions: ReactNode | ProgrammaticModalOptions<TResult>,
    options?: Omit<ProgrammaticModalOptions<TResult>, "content">
  ): string {
    const normalizedOptions = isModalOptions(contentOrOptions)
      ? contentOrOptions
      : ({
          content: contentOrOptions,
          ...options,
        } as ProgrammaticModalOptions<TResult>);

    return useModalStoreBase
      .getState()
      .showProgrammaticModal(normalizedOptions);
  },

  close<TResult = unknown>(result?: TResult) {
    useModalStoreBase.getState().closeProgrammaticModal(result);
  },

  closeById<TResult = unknown>(modalUid: string, result?: TResult) {
    useModalStoreBase.getState().closeProgrammaticModalById(modalUid, result);
  },

  getTopModalUid() {
    return getTopProgrammaticModalUid();
  },
};

useModalStoreBase.subscribe((state, prevState) => {
  const previousClosingIds = new Set(
    prevState.programmaticModals
      .filter((modal) => modal.isClosing)
      .map((modal) => modal.modalUid)
  );
  const currentlyClosing = state.programmaticModals.filter(
    (modal) => modal.isClosing
  );

  currentlyClosing.forEach((modal) => {
    if (previousClosingIds.has(modal.modalUid)) return;
    scheduleProgrammaticModalRemoval(modal.modalUid);
  });

  cleanupOrphanModalTimers(state.programmaticModals);
});

export { mapProgrammaticModalSize };
