import { useCallback } from "react";
import type { ChangeEvent, DragEvent, MouseEvent } from "react";
import { defaultMaxSize } from "@/constants";
import {
  processUploadFiles,
  shouldProcessUploadFiles,
} from "@/utils/uploadValidation";
import type { UploaderProps } from "../Uploader.types";

export type UseUploaderProps = Pick<
  UploaderProps,
  | "disabled"
  | "multiple"
  | "accept"
  | "maxSize"
  | "maxFiles"
  | "validateFile"
  | "onValidationError"
  | "onSizeError"
  | "onAcceptError"
  | "onFiles"
  | "onDrop"
  | "onInputChange"
>;

export type UseUploaderReturn = {
  handleClick: (e: MouseEvent<HTMLDivElement>) => void;
  handleDrop: (e: DragEvent<HTMLDivElement>) => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function useUploader({
  disabled,
  multiple,
  accept,
  maxSize = defaultMaxSize,
  maxFiles,
  validateFile,
  onValidationError,
  onSizeError,
  onAcceptError,
  onFiles,
  onDrop,
  onInputChange,
}: UseUploaderProps): UseUploaderReturn {
  const processFiles = useCallback(
    (incoming: File[]) => {
      if (
        !shouldProcessUploadFiles({
          onFiles,
          onValidationError,
          validateFile,
          onSizeError,
          onAcceptError,
        })
      ) {
        return;
      }

      const next = processUploadFiles(incoming, {
        maxSize,
        accept,
        multiple,
        maxFiles,
        validateFile,
        onSizeError,
        onAcceptError,
        onValidationError,
      });

      onFiles?.(next);
    },
    [
      accept,
      maxFiles,
      maxSize,
      multiple,
      onAcceptError,
      onFiles,
      onSizeError,
      onValidationError,
      validateFile,
    ]
  );

  const handleClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (disabled) return;
      const input =
        e.currentTarget.querySelector<HTMLInputElement>('input[type="file"]');
      input?.click();
    },
    [disabled]
  );

  const handleDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      if (!disabled) {
        processFiles(Array.from(e.dataTransfer.files ?? []));
      }
      onDrop?.(e);
    },
    [disabled, onDrop, processFiles]
  );

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!disabled) {
        processFiles(Array.from(e.target.files ?? []));
      }
      onInputChange?.(e);
    },
    [disabled, onInputChange, processFiles]
  );

  return {
    handleClick,
    handleDrop,
    handleInputChange,
  };
}
