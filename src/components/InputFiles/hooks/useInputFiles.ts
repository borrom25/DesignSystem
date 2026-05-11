import { useRef, useState, useCallback, useMemo } from "react";
import { isFileAccepted } from "../InputFiles.utils";
import type {
  UseInputFilesProps,
  UseInputFilesReturn,
} from "../InputFiles.types";
import { defaultMaxSize } from "@/constants";

const emptyFiles: File[] = [];

export function useInputFiles({
  value,
  defaultValue,
  onChange,
  maxSize = defaultMaxSize,
  maxFiles = 1,
  multiple = false,
  accept,
  disabled = false,
  viewMode = false,
  onSizeError,
  onAcceptError,
}: UseInputFilesProps): UseInputFilesReturn {
  const inputNodeRef = useRef<HTMLInputElement | null>(null);
  const dragCounter = useRef(0);

  const [internalFiles, setInternalFiles] = useState<File[]>(
    defaultValue ?? []
  );
  const [isDragActive, setIsDragActive] = useState(false);

  const isControlled = value !== undefined;
  const files = useMemo(
    () => (isControlled ? (value ?? emptyFiles) : internalFiles),
    [isControlled, value, internalFiles]
  );
  const isInteractive = !disabled && !viewMode;

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

  const updateFiles = useCallback(
    (next: File[] | null) => {
      if (!isControlled) {
        setInternalFiles(next ?? []);
      }
      onChange?.(next);
    },
    [isControlled, onChange]
  );

  const addFiles = useCallback(
    (incoming: File[]) => {
      const valid = incoming.filter(validateFile);
      if (!valid.length) return;

      let merged = multiple ? [...files, ...valid] : valid.slice(0, 1);
      if (merged.length > maxFiles) {
        merged = merged.slice(0, maxFiles);
      }
      updateFiles(merged);
    },
    [files, multiple, maxFiles, validateFile, updateFiles]
  );

  const removeFile = useCallback(
    (index: number) => {
      if (!isInteractive) return;
      const next = files.filter((_, i) => i !== index);
      updateFiles(next.length ? next : null);
      if (inputNodeRef.current) {
        inputNodeRef.current.value = "";
      }
    },
    [files, isInteractive, updateFiles]
  );

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
      addFiles(dropped);
    },
    [isInteractive, addFiles]
  );

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isInteractive) return;
      const selected = Array.from(e.target.files ?? []);
      addFiles(selected);
    },
    [isInteractive, addFiles]
  );

  const inputRef: React.RefCallback<HTMLInputElement> = useCallback((node) => {
    inputNodeRef.current = node;
  }, []);

  return {
    files,
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
