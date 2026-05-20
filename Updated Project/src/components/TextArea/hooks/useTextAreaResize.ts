import { useCallback, type RefObject } from "react";

interface UseTextAreaResizeProps {
  textareaRef: RefObject<HTMLTextAreaElement>;
  resizeMode: "vertical" | "both";
  minHeight?: number;
  minWidth?: number;
}

export function useTextAreaResize({
  textareaRef,
  resizeMode,
  minHeight = 48,
  minWidth = 120,
}: UseTextAreaResizeProps) {
  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      const textarea = textareaRef.current;
      if (!textarea) return;

      const startX = event.clientX;
      const startY = event.clientY;
      const startWidth = textarea.offsetWidth;
      const startHeight = textarea.offsetHeight;

      const onMouseMove = (moveEvent: MouseEvent) => {
        const deltaY = moveEvent.clientY - startY;
        const nextHeight = Math.max(minHeight, startHeight + deltaY);
        textarea.style.height = `${nextHeight}px`;

        if (resizeMode === "both") {
          const deltaX = moveEvent.clientX - startX;
          const nextWidth = Math.max(minWidth, startWidth + deltaX);
          textarea.style.width = `${nextWidth}px`;
        }
      };

      const onMouseUp = () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    },
    [textareaRef, resizeMode, minHeight, minWidth]
  );

  return {
    handleMouseDown,
  };
}
