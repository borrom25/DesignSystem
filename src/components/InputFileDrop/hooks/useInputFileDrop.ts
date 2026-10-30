import { useState, useCallback, useMemo } from "react";
import { useFileDropZone } from "@/hooks/useFileDropZone";
import { processUploadFiles } from "@/utils/uploadValidation";
import type {
  UseInputFileDropProps,
  UseInputFileDropReturn,
} from "../InputFileDrop.types";
import { defaultMaxSize } from "@/constants";

const emptyFiles: File[] = [];
const DEFAULT_MAX_FILES = 10;

export function useInputFileDrop({
  value,
  defaultValue,
  onChange,
  maxSize = defaultMaxSize,
  maxFiles = DEFAULT_MAX_FILES,
  accept = "*",
  validateFile: customValidateFile,
  disabled = false,
  onSizeError,
  onAcceptError,
  onValidationError,
}: UseInputFileDropProps): UseInputFileDropReturn {
  const [internalFiles, setInternalFiles] = useState<File[]>(
    defaultValue ?? []
  );

  const isControlled = value !== undefined;
  const files = useMemo(
    () => (isControlled ? (value ?? emptyFiles) : internalFiles),
    [isControlled, value, internalFiles]
  );
  const isInteractive = !disabled;

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
      const next = processUploadFiles(incoming, {
        maxSize,
        accept,
        multiple: true,
        maxFiles,
        currentFileCount: files.length,
        existingFiles: files,
        validateFile: customValidateFile,
        onSizeError,
        onAcceptError,
        onValidationError,
      });

      if (!next.length) return;
      updateFiles(next);
    },
    [
      accept,
      customValidateFile,
      files,
      maxFiles,
      maxSize,
      onAcceptError,
      onSizeError,
      onValidationError,
      updateFiles,
    ]
  );

  const {
    isDragActive,
    inputRef,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
    onInputChange,
    clearInputValue,
  } = useFileDropZone({
    disabled: !isInteractive,
    onFiles: addFiles,
  });

  const removeFile = useCallback(
    (index: number) => {
      if (!isInteractive) return;
      const next = files.filter((_, i) => i !== index);
      updateFiles(next.length ? next : null);
      clearInputValue();
    },
    [clearInputValue, files, isInteractive, updateFiles]
  );

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
