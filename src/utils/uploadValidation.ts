import type {
  UploadValidateFile,
  UploadValidateFileContext,
  UploadValidateFileResult,
  UploadValidationError,
  UploadValidationErrorHandler,
} from "@/types/upload";

export type ValidateUploadFileOptions = {
  maxSize: number;
  accept?: string;
  validateFile?: UploadValidateFile;
  onSizeError?: (file: File) => void;
  onAcceptError?: (file: File) => void;
  onValidationError?: UploadValidationErrorHandler;
  context?: Partial<UploadValidateFileContext>;
};

export type ProcessUploadFilesOptions = {
  maxSize: number;
  accept?: string;
  multiple?: boolean;
  maxFiles?: number;
  currentFileCount?: number;
  existingFiles?: File[];
  validateFile?: UploadValidateFile;
  onSizeError?: (file: File) => void;
  onAcceptError?: (file: File) => void;
  onValidationError?: UploadValidationErrorHandler;
};

export function isFileAccepted(file: File, accept?: string): boolean {
  if (!accept || accept === "*") return true;

  const acceptedTypes = accept.split(",").map((t) => t.trim());
  return acceptedTypes.some((type) => {
    if (type.endsWith("/*")) {
      return file.type.startsWith(type.slice(0, -1));
    }
    if (type.startsWith(".")) {
      return file.name.toLowerCase().endsWith(type.toLowerCase());
    }
    return file.type === type;
  });
}

function normalizeCustomResult(
  result: boolean | string | UploadValidateFileResult
): UploadValidateFileResult {
  if (typeof result === "boolean") {
    return result ? { valid: true } : { valid: false };
  }
  if (typeof result === "string") {
    return { valid: false, message: result };
  }
  return result;
}

function emitError(
  error: UploadValidationError,
  onValidationError?: UploadValidationErrorHandler
): void {
  onValidationError?.(error);
}

export function validateUploadFile(
  file: File,
  {
    maxSize,
    accept,
    validateFile,
    onSizeError,
    onAcceptError,
    onValidationError,
    context,
  }: ValidateUploadFileOptions
): boolean {
  if (file.size > maxSize) {
    onSizeError?.(file);
    emitError(
      {
        code: "max-size",
        file,
        maxSize,
        message: `Файл превышает допустимый размер ${maxSize} байт`,
      },
      onValidationError
    );
    return false;
  }

  if (!isFileAccepted(file, accept)) {
    onAcceptError?.(file);
    emitError(
      {
        code: "accept",
        file,
        accept,
        message: accept
          ? `Файл не соответствует допустимым типам: ${accept}`
          : "Файл имеет недопустимый тип",
      },
      onValidationError
    );
    return false;
  }

  if (validateFile) {
    const customResult = normalizeCustomResult(
      validateFile(file, {
        maxSize,
        accept,
        maxFiles: context?.maxFiles,
        multiple: context?.multiple,
        currentFileCount: context?.currentFileCount,
      })
    );

    if (!customResult.valid) {
      emitError(
        {
          code: "custom",
          file,
          message: customResult.message,
          maxSize,
          accept,
          maxFiles: context?.maxFiles,
        },
        onValidationError
      );
      return false;
    }
  }

  return true;
}

export function emitMaxFilesError(
  file: File,
  maxFiles: number,
  onValidationError?: UploadValidationErrorHandler
): void {
  emitError(
    {
      code: "max-files",
      file,
      maxFiles,
      message: `Нельзя загрузить более ${maxFiles} файлов`,
    },
    onValidationError
  );
}

export function shouldProcessUploadFiles(options: {
  onFiles?: unknown;
  onValidationError?: unknown;
  validateFile?: unknown;
  onSizeError?: unknown;
  onAcceptError?: unknown;
}): boolean {
  return Boolean(
    options.onFiles ||
    options.onValidationError ||
    options.validateFile ||
    options.onSizeError ||
    options.onAcceptError
  );
}

export function filterValidFiles(
  files: File[],
  {
    maxSize,
    accept,
    multiple,
    maxFiles,
    currentFileCount = 0,
    validateFile,
    onSizeError,
    onAcceptError,
    onValidationError,
  }: Omit<ProcessUploadFilesOptions, "existingFiles">
): File[] {
  const valid: File[] = [];

  for (const file of files) {
    const isValid = validateUploadFile(file, {
      maxSize,
      accept,
      validateFile,
      onSizeError,
      onAcceptError,
      onValidationError,
      context: {
        maxFiles,
        multiple,
        currentFileCount: currentFileCount + valid.length,
      },
    });

    if (isValid) {
      valid.push(file);
    }
  }

  return valid;
}

export function applyMaxFilesLimit(
  files: File[],
  maxFiles: number | undefined,
  onValidationError?: UploadValidationErrorHandler
): File[] {
  if (maxFiles === undefined || files.length <= maxFiles) {
    return files;
  }

  files.slice(maxFiles).forEach((file) => {
    emitMaxFilesError(file, maxFiles, onValidationError);
  });

  return files.slice(0, maxFiles);
}

export function processUploadFiles(
  incoming: File[],
  {
    maxSize,
    accept,
    multiple = false,
    maxFiles,
    currentFileCount = 0,
    existingFiles = [],
    validateFile,
    onSizeError,
    onAcceptError,
    onValidationError,
  }: ProcessUploadFilesOptions
): File[] {
  const valid = filterValidFiles(incoming, {
    maxSize,
    accept,
    multiple,
    maxFiles,
    currentFileCount,
    validateFile,
    onSizeError,
    onAcceptError,
    onValidationError,
  });

  if (!valid.length) {
    return [];
  }

  const merged = multiple ? [...existingFiles, ...valid] : valid.slice(0, 1);
  const limit = maxFiles ?? (multiple ? undefined : 1);

  return applyMaxFilesLimit(merged, limit, onValidationError);
}
