import { cn } from "@/utils";
import type { InputMessageProps } from "./InputMessage.types";
import { inputMessageStyles } from "./styles";
import { useInputMessageState } from "./hooks/useInputMessageState";
import { useTextareaAutoGrow } from "./hooks/useTextareaAutoGrow";
import { handleTextareaKeyDown, canSendMessage } from "./InputMessage.utils";
import {
  InputMessageActions,
  InputMessageTextarea,
  MessageFilePreview,
} from "./ui";
import { useMessageFileStore } from "./store";
import { defaultMaxSize } from "@/constants";

const DEFAULT_MAX_ROWS = 6;

export function InputMessage({
  value,
  defaultValue = "",
  onChange,
  placeholder = "Написать сообщение...",
  disabled = false,
  showAttachments = false,
  sendDisabled = false,
  onSend,
  onKeyDown,
  className,
  textareaClassName,
  popoverContentClassName,
  maxRows = DEFAULT_MAX_ROWS,
  fileAccept = "/",
  maxFileCount,
  maxFileSize = defaultMaxSize,
  ...restProps
}: InputMessageProps) {
  const {
    value: currentValue,
    handleChange,
    handleSend,
  } = useInputMessageState({
    value,
    defaultValue,
    onChange,
    onSend,
  });
  const { files, removeFile } = useMessageFileStore();

  const { textareaRef } = useTextareaAutoGrow({
    value: currentValue,
    maxRows,
  });

  const canSend = canSendMessage(currentValue, disabled, sendDisabled, files);

  return (
    <div className={cn(inputMessageStyles.container, className)}>
      <div className={inputMessageStyles.wrapper}>
        <InputMessageTextarea
          textareaRef={textareaRef}
          value={currentValue}
          onChange={handleChange}
          onKeyDown={(event) =>
            handleTextareaKeyDown({ event, onSend: handleSend, onKeyDown })
          }
          placeholder={placeholder}
          disabled={disabled}
          className={textareaClassName}
          {...restProps}
        />

        <InputMessageActions
          showAttachments={showAttachments}
          disabled={disabled}
          canSend={canSend}
          onSend={handleSend}
          onChange={({ files, errorMessage }) =>
            onChange?.({ value: currentValue, files, errorMessage })
          }
          fileAccept={fileAccept}
          maxFileCount={maxFileCount}
          maxFileSize={maxFileSize}
          popoverContentClassName={popoverContentClassName}
        />
      </div>

      {!!files.length && (
        <div className="relative">
          <div className={inputMessageStyles.filesList}>
            {files.map((file, index) => (
              <MessageFilePreview
                key={`${file.name}-${file.lastModified}-${index}`}
                file={file}
                onRemove={() => removeFile(index)}
              />
            ))}
          </div>
          <div className={inputMessageStyles.containerShadow} />
        </div>
      )}
    </div>
  );
}
