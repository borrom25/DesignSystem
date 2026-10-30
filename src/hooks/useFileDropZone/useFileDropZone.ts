import { useCallback, useRef, useState } from "react";
import type {
  ChangeEvent,
  DragEvent,
  MutableRefObject,
  RefCallback,
} from "react";

export type UseFileDropZoneOptions = {
  disabled?: boolean;
  onFiles: (files: File[]) => void;
};

export type UseFileDropZoneReturn = {
  isDragActive: boolean;
  inputRef: RefCallback<HTMLInputElement>;
  inputNodeRef: MutableRefObject<HTMLInputElement | null>;
  onDragEnter: (e: DragEvent<HTMLDivElement>) => void;
  onDragLeave: (e: DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: DragEvent<HTMLDivElement>) => void;
  onDrop: (e: DragEvent<HTMLDivElement>) => void;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  clearInputValue: () => void;
};

export function useFileDropZone({
  disabled = false,
  onFiles,
}: UseFileDropZoneOptions): UseFileDropZoneReturn {
  const inputNodeRef = useRef<HTMLInputElement | null>(null);
  const dragCounter = useRef(0);
  const [isDragActive, setIsDragActive] = useState(false);

  const clearInputValue = useCallback(() => {
    if (inputNodeRef.current) {
      inputNodeRef.current.value = "";
    }
  }, []);

  const onDragEnter = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled) return;
      dragCounter.current += 1;
      setIsDragActive(true);
    },
    [disabled]
  );

  const onDragLeave = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled) return;
      dragCounter.current = Math.max(0, dragCounter.current - 1);
      if (dragCounter.current === 0) setIsDragActive(false);
    },
    [disabled]
  );

  const onDragOver = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled) return;
      if (!isDragActive) setIsDragActive(true);
      e.dataTransfer.dropEffect = "copy";
    },
    [disabled, isDragActive]
  );

  const onDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      dragCounter.current = 0;
      setIsDragActive(false);
      if (disabled) return;
      onFiles(Array.from(e.dataTransfer.files ?? []));
    },
    [disabled, onFiles]
  );

  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      onFiles(Array.from(e.target.files ?? []));
    },
    [disabled, onFiles]
  );

  const inputRef: RefCallback<HTMLInputElement> = useCallback((node) => {
    inputNodeRef.current = node;
  }, []);

  return {
    isDragActive,
    inputRef,
    inputNodeRef,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
    onInputChange,
    clearInputValue,
  };
}
