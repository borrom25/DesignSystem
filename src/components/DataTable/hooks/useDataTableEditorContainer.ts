import { useCallback } from "react";

export function useDataTableEditorContainer() {
  const handleEditorContainerMouseDown = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();

      const target = event.target;
      if (target instanceof HTMLTextAreaElement) return;

      const textarea = event.currentTarget.querySelector("textarea");
      if (!textarea) return;

      event.preventDefault();
      textarea.focus({ preventScroll: true });
      const cursorPosition = textarea.value.length;
      textarea.setSelectionRange(cursorPosition, cursorPosition);
    },
    []
  );

  const stopEditorContainerEvent = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
    },
    []
  );

  return {
    handleEditorContainerMouseDown,
    handleEditorContainerClick: stopEditorContainerEvent,
    handleEditorContainerDoubleClick: stopEditorContainerEvent,
  };
}
