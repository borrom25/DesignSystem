import { useRef, useState, useCallback, useMemo } from "react";
import { isFileAccepted } from "@/components/InputFiles/InputFiles.utils";
import type {
  InputImgValue,
  UseInputImgProps,
  UseInputImgReturn,
} from "../InputImg.types";
import { defaultMaxSize } from "@/constants";

export function useInputImg({
  value,
  defaultValue,
  onChange,
  onBeforeUpload,
  maxSize = defaultMaxSize,
  accept = "image/*",
  disabled = false,
  onSizeError,
  onAcceptError,
}: UseInputImgProps): UseInputImgReturn {
  const inputNodeRef = useRef<HTMLInputElement | null>(null);
  const dragCounter = useRef(0);

  const [internalFile, setInternalFile] = useState<InputImgValue>(
    defaultValue ?? null
  );
  const [isDragActive, setIsDragActive] = useState(false);

  const isControlled = value !== undefined;
  const file = useMemo(
    () => (isControlled ? (value ?? null) : internalFile),
    [isControlled, value, internalFile]
  );
  const isInteractive = !disabled;

  const validateFile = useCallback(
    (file: File): boolean => {
      if (file.size > maxSize) {
        onSizeError?.(file);
        return false;
      }
      if (!isFileAccepted(file, accept)) {
        onAcceptError?.(file);
        return false;
      }
      return true;
    },
    [maxSize, accept, onSizeError, onAcceptError]
  );

  const updateFile = useCallback(
    (next: File | null) => {
      if (!isControlled) {
        setInternalFile(next);
      }
      onChange?.(next);
    },
    [isControlled, onChange]
  );

  const addFile = useCallback(
    (incoming: File) => {
      if (!validateFile(incoming)) return;
      onBeforeUpload?.(incoming);
      updateFile(incoming);
    },
    [validateFile, updateFile, onBeforeUpload]
  );

  const removeFile = useCallback(() => {
    if (!isInteractive) return;
    updateFile(null);
    if (inputNodeRef.current) {
      inputNodeRef.current.value = "";
    }
  }, [isInteractive, updateFile]);

  const onDragEnter = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (!isInteractive) return;
      dragCounter.current += 1;
      setIsDragActive(true);
    },
    [isInteractive]
  );

  const onDragLeave = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (!isInteractive) return;
      dragCounter.current = Math.max(0, dragCounter.current - 1);
      if (dragCounter.current === 0) setIsDragActive(false);
    },
    [isInteractive]
  );

  const onDragOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (!isInteractive) return;
      if (!isDragActive) setIsDragActive(true);
      e.dataTransfer.dropEffect = "copy";
    },
    [isInteractive, isDragActive]
  );

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      dragCounter.current = 0;
      setIsDragActive(false);
      if (!isInteractive) return;
      const dropped = Array.from(e.dataTransfer.files);
      if (dropped.length > 0) {
        addFile(dropped[0]);
      }
    },
    [isInteractive, addFile]
  );

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isInteractive) return;
      const selected = Array.from(e.target.files ?? []);
      if (selected.length > 0) {
        addFile(selected[0]);
      }
    },
    [isInteractive, addFile]
  );

  const inputRef: React.RefCallback<HTMLInputElement> = useCallback((node) => {
    inputNodeRef.current = node;
  }, []);

  return {
    file,
    isDragActive,
    inputRef,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
    onInputChange,
    removeFile,
  };
}
