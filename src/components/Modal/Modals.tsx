import { memo, useMemo, type ReactNode } from "react";
import { Modal } from "./Modal";
import { ModalType } from "./Modal.types";

import { ModalContext } from "./model/modal-provider";
import {
  mapProgrammaticModalSize,
  useModalStore,
  useModalsEntries,
  useProgrammaticModals,
} from "./model/modal-store";

function ProgrammaticModalContent({
  content,
  isTopModal,
}: {
  content: ReactNode;
  isTopModal: boolean;
}) {
  return (
    <div
      data-modal-content="true"
      tabIndex={isTopModal ? -1 : undefined}
      aria-hidden={!isTopModal}
      ref={(node) => {
        if (node && isTopModal) node.focus();
      }}
    >
      {content}
    </div>
  );
}

export const Modals = memo(function Modals() {
  const modalEntries = useModalsEntries();
  const programmaticModals = useProgrammaticModals();
  const { closeProgrammaticModalById } = useModalStore();
  const modals = useMemo(() => Object.values(modalEntries), [modalEntries]);
  const topProgrammaticModal = useMemo(
    () =>
      [...programmaticModals]
        .reverse()
        .find((modalEntry) => modalEntry.isOpen && !modalEntry.isClosing),
    [programmaticModals]
  );

  return (
    <div>
      {modals.map(({ Component, props, isOpen, modalUid }) => (
        <ModalContext.Provider key={modalUid} value={{ modalUid, isOpen }}>
          <Component {...props} />
        </ModalContext.Provider>
      ))}

      {programmaticModals.map((modalEntry, index) => {
        const { modalSize, fullScreen, className } = mapProgrammaticModalSize(
          modalEntry.size
        );
        const isTopModal =
          topProgrammaticModal?.modalUid === modalEntry.modalUid;

        return (
          <div
            key={modalEntry.modalUid}
            data-programmatic-modal-id={modalEntry.modalUid}
            className="relative"
            style={{ zIndex: 50 + index }}
          >
            <Modal
              type={ModalType.modal}
              size={modalSize}
              fullScreen={fullScreen}
              title={modalEntry.title}
              subtitle={modalEntry.subtitle}
              showCloseButton={modalEntry.showCloseButton}
              closeOnOverlayClick={
                !modalEntry.preventClose && modalEntry.closeOnOverlayClick
              }
              closeOnEscape={
                !modalEntry.preventClose && modalEntry.closeOnEscape
              }
              open={modalEntry.isOpen}
              className={className}
              onOpenChange={(open) => {
                if (!open) closeProgrammaticModalById(modalEntry.modalUid);
              }}
            >
              <ProgrammaticModalContent
                content={modalEntry.content}
                isTopModal={isTopModal}
              />
            </Modal>
          </div>
        );
      })}
    </div>
  );
});
