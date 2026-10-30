import { useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/utils";
import { useScreenSize } from "@/providers";
import { usePhotoSwipe, usePhotoViewer } from "./hooks";
import { photoStyles } from "./styles";
import {
  PhotoActions,
  PhotoHeader,
  PhotoNav,
  PhotoRotateBar,
  PhotoStage,
  PhotoThumbs,
} from "./ui";
import type { PhotoItem, PhotoProps } from "./Photo.types";

export function Photo({
  open,
  onOpenChange,
  items,
  index,
  defaultIndex = 0,
  onIndexChange,
  onDownload,
  onEdit,
  onDelete,
  onRotate,
  closeOnOverlayClick = true,
  closeOnEscape = true,
}: PhotoProps) {
  const { isDesktop, isMobile } = useScreenSize();
  const rotatingRef = useRef(false);
  const viewer = usePhotoViewer({
    open,
    onOpenChange,
    items,
    index,
    defaultIndex,
    onIndexChange,
    closeOnEscape,
  });
  const {
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
    canNavigate,
  } = viewer;
  const item = items[safeIndex];

  const rotate = useCallback(
    (delta: 90 | -90) => {
      if (!item || !viewItem || !onRotate || rotatingRef.current) return;
      rotatingRef.current = true;
      const started = performance.now();
      const epoch = beginTurn(safeIndex);
      rotateBy(delta);
      const sourceSrc = item.src;
      void Promise.resolve(onRotate(viewItem, safeIndex, delta))
        .then(async (next) => {
          if (!next?.src) return;
          const wait = photoStyles.rotateMs - (performance.now() - started);
          if (wait > 0) {
            await new Promise((resolve) => window.setTimeout(resolve, wait));
          }
          saveCopy(sourceSrc, next, epoch);
        })
        .catch(() => undefined)
        .finally(() => {
          rotatingRef.current = false;
        });
    },
    [beginTurn, item, onRotate, rotateBy, safeIndex, saveCopy, viewItem]
  );

  const swipe = usePhotoSwipe({
    enabled: !isDesktop && canNavigate && !actionsOpen && !confirmOpen,
    onSwipe: (swipeDirection) => {
      if (swipeDirection === 1) showNext();
      else showPrevious();
    },
  });

  const requestDelete = useCallback(() => {
    if (!onDelete) return;

    setActionsOpen(false);
    setConfirmOpen(true);
  }, [onDelete, setActionsOpen, setConfirmOpen]);

  const confirmDelete = useCallback(() => {
    if (!item || !onDelete) return;
    onDelete(item, safeIndex);
    removeAt(safeIndex);
    setConfirmOpen(false);
  }, [item, onDelete, removeAt, safeIndex, setConfirmOpen]);

  const runAction = useCallback(
    (
      handler?: (photo: PhotoItem, photoIndex: number) => void,
      photo: PhotoItem | undefined = item
    ) => {
      if (!photo || !handler) return;
      handler(photo, safeIndex);
      setActionsOpen(false);
    },
    [item, safeIndex, setActionsOpen]
  );
  const downloadPhoto = onDownload
    ? () => runAction(onDownload, viewItem)
    : undefined;
  const editPhoto = onEdit ? () => runAction(onEdit) : undefined;
  const deletePhoto = onDelete ? requestDelete : undefined;

  if (!open) return null;

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) close();
  };

  return createPortal(
    <>
      <div
        className={photoStyles.root}
        role="dialog"
        aria-modal="true"
        aria-label="Просмотр фото"
        onClick={handleOverlayClick}
      >
        <div
          className={cn(
            photoStyles.overlay,
            isMobile ? photoStyles.overlayCompact : photoStyles.overlayDesktop
          )}
        />
        <PhotoHeader
          isMobile={isMobile}
          count={count}
          index={safeIndex}
          onDelete={deletePhoto}
          onDownload={downloadPhoto}
          onEdit={editPhoto}
          onRotate={onRotate ? rotate : undefined}
          onOpenActions={() => setActionsOpen(true)}
          onClose={close}
        />
        <div
          className={cn(
            photoStyles.stage,
            isMobile ? photoStyles.stageCompact : photoStyles.stageDesktop,
            !isDesktop && photoStyles.stageTouch
          )}
          onPointerDown={swipe.onPointerDown}
          onPointerUp={swipe.onPointerUp}
          onPointerCancel={swipe.onPointerCancel}
          onClick={swipe.onClick}
        >
          <PhotoStage
            item={viewItem}
            index={safeIndex}
            rotation={rotation}
            direction={direction}
          />
        </div>
        {!isMobile && canNavigate && (
          <PhotoNav onPrevious={showPrevious} onNext={showNext} />
        )}
        {isDesktop && count > 1 && (
          <PhotoThumbs items={items} index={safeIndex} onSelect={setIndex} />
        )}
        {isMobile && onRotate && <PhotoRotateBar onRotate={rotate} />}
      </div>
      <PhotoActions
        isMobile={isMobile}
        actionsOpen={actionsOpen}
        onActionsOpenChange={setActionsOpen}
        confirmOpen={confirmOpen}
        onConfirmOpenChange={setConfirmOpen}
        onDownload={downloadPhoto}
        onEdit={editPhoto}
        onDelete={deletePhoto}
        onConfirm={confirmDelete}
      />
    </>,
    document.body
  );
}
