import { useRef, type MouseEvent, type PointerEvent } from "react";

const SWIPE_THRESHOLD = 48;

export function usePhotoSwipe({
  enabled,
  onSwipe,
}: {
  enabled: boolean;
  onSwipe: (direction: 1 | -1) => void;
}) {
  const startRef = useRef<{ x: number; y: number; id: number } | null>(null);
  const swipedRef = useRef(false);
  const enabledRef = useRef(enabled);
  const onSwipeRef = useRef(onSwipe);
  enabledRef.current = enabled;
  onSwipeRef.current = onSwipe;

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (
      !enabledRef.current ||
      event.pointerType === "mouse" ||
      event.button !== 0
    )
      return;

    startRef.current = {
      x: event.clientX,
      y: event.clientY,
      id: event.pointerId,
    };
    swipedRef.current = false;

    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      return;
    }
  };

  const finish = (event: PointerEvent<HTMLDivElement>) => {
    const start = startRef.current;
    startRef.current = null;
    if (!start || start.id !== event.pointerId || !enabledRef.current) return;

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    if (
      Math.abs(deltaX) < SWIPE_THRESHOLD ||
      Math.abs(deltaX) <= Math.abs(deltaY)
    )
      return;

    swipedRef.current = true;
    onSwipeRef.current(deltaX < 0 ? 1 : -1);
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    finish(event);
  };

  const onPointerCancel = (event: PointerEvent<HTMLDivElement>) => {
    startRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const onClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!swipedRef.current) return;
    swipedRef.current = false;
    event.stopPropagation();
    event.preventDefault();
  };

  return { onPointerDown, onPointerUp, onPointerCancel, onClick };
}
