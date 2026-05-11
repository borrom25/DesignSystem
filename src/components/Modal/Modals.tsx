import { memo, useMemo } from "react";

import { ModalContext } from "./model/modal-provider";
import { useModalsEntries } from "./model/modal-store";

export const Modals = memo(function Modals() {
  const modalEntries = useModalsEntries();
  const modals = useMemo(() => Object.values(modalEntries), [modalEntries]);

  return modals.map(({ Component, props, isOpen, modalUid }) => (
    <ModalContext.Provider key={modalUid} value={{ modalUid, isOpen }}>
      <Component {...props} />
    </ModalContext.Provider>
  ));
});
