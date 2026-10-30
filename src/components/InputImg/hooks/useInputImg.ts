import { useState, useCallback, useMemo } from "react";
import { useFileDropZone } from "@/hooks/useFileDropZone";
import { processUploadFiles } from "@/utils/uploadValidation";
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
  validateFile: customValidateFile,
  disabled = false,
  onSizeError,
  onAcceptError,
  onValidationError,
}: UseInputImgProps): UseInputImgReturn {
  const [internalFile, setInternalFile] = useState<InputImgValue>(
    defaultValue ?? null
  );

  const isControlled = value !== undefined;
  const file = useMemo(
    () => (isControlled ? (value ?? null) : internalFile),
    [isControlled, value, internalFile]
  );
  const isInteractive = !disabled;

  const updateFile = useCallback(
    (next: File | null) => {
      if (!isControlled) {
        setInternalFile(next);
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
        multiple: false,
        maxFiles: 1,
        currentFileCount: file ? 1 : 0,
        validateFile: customValidateFile,
        onSizeError,
        onAcceptError,
        onValidationError,
      });

      if (!next.length) return;

      const selected = next[0];
      onBeforeUpload?.(selected);
      updateFile(selected);
    },
    [
      accept,
      customValidateFile,
      file,
      maxSize,
      onAcceptError,
      onBeforeUpload,
      onSizeError,
      onValidationError,
      updateFile,
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

  const removeFile = useCallback(() => {
    if (!isInteractive) return;
    updateFile(null);
    clearInputValue();
  }, [clearInputValue, isInteractive, updateFile]);

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
