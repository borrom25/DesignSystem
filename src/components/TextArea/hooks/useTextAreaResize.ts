import { useCallback, type RefObject } from "react";

interface UseTextAreaResizeProps {
  targetRef: RefObject<HTMLElement | null>;
  resizeMode: "vertical" | "both";
  minHeight?: number;
  minWidth?: number;
}

export function useTextAreaResize({
  targetRef,
  resizeMode,
  minHeight = 48,
  minWidth = 120,
}: UseTextAreaResizeProps) {
  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();

      const target = targetRef.current;
      if (!target) return;

      const startX = event.clientX;
      const startY = event.clientY;
      const startWidth = target.offsetWidth;
      const startHeight = target.offsetHeight;

      const onMouseMove = (moveEvent: MouseEvent) => {
        const deltaY = moveEvent.clientY - startY;
        const nextHeight = Math.max(minHeight, startHeight + deltaY);
        target.style.height = `${nextHeight}px`;
        target.style.minHeight = `${nextHeight}px`;

        if (resizeMode === "both") {
          const deltaX = moveEvent.clientX - startX;
          const nextWidth = Math.max(minWidth, startWidth + deltaX);
          target.style.width = `${nextWidth}px`;
          target.style.minWidth = `${nextWidth}px`;
        }
      };

      const onMouseUp = () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    },
    [targetRef, resizeMode, minHeight, minWidth]
  );

  return { handleMouseDown };
}
