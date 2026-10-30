export type UploadValidationErrorCode =
  | "max-size"
  | "accept"
  | "max-files"
  | "custom";

export type UploadValidateFileContext = {
  maxSize: number;
  accept?: string;
  maxFiles?: number;
  multiple?: boolean;
  currentFileCount?: number;
};

export type UploadValidateFileResult =
  | { valid: true }
  | { valid: false; message?: string; code?: string };

export type UploadValidateFile = (
  file: File,
  context: UploadValidateFileContext
) => boolean | string | UploadValidateFileResult;

export type UploadValidationError = {
  code: UploadValidationErrorCode;
  file: File;
  message?: string;
  maxSize?: number;
  accept?: string;
  maxFiles?: number;
};

export type UploadValidationErrorHandler = (
  error: UploadValidationError
) => void;

export type UploadValidationProps = {
  maxSize?: number;
  accept?: string;
  validateFile?: UploadValidateFile;
  onValidationError?: UploadValidationErrorHandler;
  onSizeError?: (file: File) => void;
  onAcceptError?: (file: File) => void;
};
