import { useCallback, useEffect, useRef, useState } from "react";
import type { PhotoItem, PhotoProps, PhotoViewCopy } from "../Photo.types";
import { photoRotateMs } from "../styles/animations";

type UsePhotoViewerOptions = Pick<
  PhotoProps,
  | "open"
  | "onOpenChange"
  | "items"
  | "index"
  | "defaultIndex"
  | "onIndexChange"
  | "closeOnEscape"
>;

function displayedItem(
  items: PhotoItem[],
  copies: Record<number, PhotoViewCopy>,
  index: number
) {
  const photo = items[index];
  const copy = copies[index];
  if (photo && copy?.baseSrc === photo.src) return copy.item;
  return photo;
}

function shiftFromIndex<T>(record: Record<number, T>, index: number) {
  const next: Record<number, T> = {};
  let dropped: T | undefined;
  for (const key of Object.keys(record)) {
    const current = Number(key);
    if (current === index) {
      dropped = record[current];
      continue;
    }
    next[current > index ? current - 1 : current] = record[current];
  }
  return { next, dropped };
}

function revokeBlob(src: string) {
  if (src.startsWith("blob:")) URL.revokeObjectURL(src);
}

export function usePhotoViewer({
  open,
  onOpenChange,
  items,
  index,
  defaultIndex = 0,
  onIndexChange,
  closeOnEscape = true,
}: UsePhotoViewerOptions) {
  const [uncontrolledIndex, setUncontrolledIndex] = useState(defaultIndex);
  const [actionsOpen, setActionsOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [copies, setCopies] = useState<Record<number, PhotoViewCopy>>({});
  const [rotations, setRotations] = useState<
    Record<number, { src: string; angle: number }>
  >({});
  const copiesRef = useRef(copies);
  const openRef = useRef(open);
  const turnEpochRef = useRef(0);
  const pendingTurnRef = useRef<{ index: number; epoch: number } | null>(null);
  copiesRef.current = copies;
  openRef.current = open;
  const isControlled = index !== undefined;
  const count = items.length;
  const activeIndex = isControlled ? index : uncontrolledIndex;
  const safeIndex =
    count === 0 ? 0 : Math.min(Math.max(activeIndex, 0), count - 1);

  const setIndex = useCallback(
    (next: number, nextDirection?: 1 | -1) => {
      if (!count) return;
      const normalized = ((next % count) + count) % count;
      const forward = (normalized - safeIndex + count) % count;
      const backward = (safeIndex - normalized + count) % count;
      const inferred: 1 | -1 =
        backward < forward
          ? -1
          : forward < backward
            ? 1
            : normalized > safeIndex
              ? 1
              : -1;

      setDirection(nextDirection ?? inferred);
      if (!isControlled) setUncontrolledIndex(normalized);
      onIndexChange?.(normalized);
    },
    [count, isControlled, onIndexChange, safeIndex]
  );

  const showPrevious = useCallback(() => {
    if (count <= 1) return;
    setIndex(safeIndex - 1, -1);
  }, [count, safeIndex, setIndex]);

  const showNext = useCallback(() => {
    if (count <= 1) return;
    setIndex(safeIndex + 1, 1);
  }, [count, safeIndex, setIndex]);

  const rotateBy = useCallback(
    (delta: 90 | -90) => {
      const src = displayedItem(items, copies, safeIndex)?.src;
      if (!src) return;
      setRotations((current) => {
        const prev = current[safeIndex];
        const angle = prev?.src === src ? prev.angle : 0;
        return {
          ...current,
          [safeIndex]: { src, angle: angle + delta },
        };
      });
    },
    [copies, items, safeIndex]
  );

  const beginTurn = useCallback((index: number) => {
    const epoch = turnEpochRef.current;
    pendingTurnRef.current = { index, epoch };
    return epoch;
  }, []);

  const saveCopy = useCallback(
    (baseSrc: string, item: PhotoItem, epoch: number) => {
      const pending = pendingTurnRef.current;
      pendingTurnRef.current = null;
      if (
        !openRef.current ||
        !pending ||
        pending.epoch !== epoch ||
        epoch !== turnEpochRef.current
      ) {
        revokeBlob(item.src);
        return;
      }
      const index = pending.index;
      const previous = copiesRef.current[index];
      if (
        previous &&
        previous.item.src.startsWith("blob:") &&
        previous.item.src !== item.src
      ) {
        const url = previous.item.src;
        window.setTimeout(() => revokeBlob(url), photoRotateMs);
      }
      setCopies((current) => ({
        ...current,
        [index]: { baseSrc, item },
      }));
    },
    []
  );

  const removeAt = useCallback((index: number) => {
    const dropped = copiesRef.current[index];
    if (dropped) revokeBlob(dropped.item.src);
    setCopies((current) => shiftFromIndex(current, index).next);
    setRotations((current) => shiftFromIndex(current, index).next);
    const pending = pendingTurnRef.current;
    if (!pending) return;
    if (pending.index === index) {
      turnEpochRef.current += 1;
      pendingTurnRef.current = null;
      return;
    }
    if (pending.index > index) pending.index -= 1;
  }, []);

  const viewItem = displayedItem(items, copies, safeIndex);
  const storedRotation = rotations[safeIndex];
  const rotation =
    storedRotation?.src === viewItem?.src ? storedRotation.angle : 0;

  const close = useCallback(() => {
    onOpenChange?.(false);
  }, [onOpenChange]);

  const actionsOpenRef = useRef(actionsOpen);
  const confirmOpenRef = useRef(confirmOpen);
  const closeOnEscapeRef = useRef(closeOnEscape);
  const closeRef = useRef(close);
  const showNextRef = useRef(showNext);
  const showPreviousRef = useRef(showPrevious);
  actionsOpenRef.current = actionsOpen;
  confirmOpenRef.current = confirmOpen;
  closeOnEscapeRef.current = closeOnEscape;
  closeRef.current = close;
  showNextRef.current = showNext;
  showPreviousRef.current = showPrevious;

  useEffect(() => {
    if (!open || count < 2) return;

    [-1, 0, 1].forEach((offset) => {
      const photo = items[(safeIndex + offset + count) % count];
      if (!photo?.src) return;
      const image = new Image();
      image.src = photo.src;
    });
  }, [count, items, open, safeIndex]);

  useEffect(() => {
    if (!open) {
      setActionsOpen(false);
      setConfirmOpen(false);
      turnEpochRef.current += 1;
      pendingTurnRef.current = null;
      for (const copy of Object.values(copiesRef.current)) {
        revokeBlob(copy.item.src);
      }
      setCopies({});
      setRotations({});
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (actionsOpenRef.current || confirmOpenRef.current) return;

      if (event.key === "Escape" && closeOnEscapeRef.current) {
        event.preventDefault();
        closeRef.current();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPreviousRef.current();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNextRef.current();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return {
    safeIndex,
    count,
    viewItem,
    rotation,
    direction,
    actionsOpen,
    setActionsOpen,
    confirmOpen,
    setConfirmOpen,
    setIndex,
    showPrevious,
    showNext,
    rotateBy,
    beginTurn,
    saveCopy,
    removeAt,
    close,
    canNavigate: count > 1,
  };
}
