import type { InputMessageAttachment } from "@/components";
import { Paperclip } from "lucide-react";
import { useRef } from "react";
import { useMessageFileStore } from "../store";
import { ActionFileChangeProps } from "../InputMessage.types.ts";

type UseInputMessageActionsArgs = ActionFileChangeProps & {
  setAttachOpen?: (value: boolean) => void;
};

export const useInputMessageActions = ({
  setAttachOpen,
  onChange,
  maxFileCount,
  maxFileSize,
}: UseInputMessageActionsArgs) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { setFiles, files } = useMessageFileStore();

  const handleAttachmentClick = (itemOnClick?: () => void) => {
    itemOnClick?.();
  };

  const handleButtonClick = () => {
    if (!fileInputRef?.current) return;
    fileInputRef.current.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []);
    if (newFiles.length === 0) return;

    if (maxFileCount && files.length + newFiles.length > maxFileCount) {
      onChange?.({
        errorMessage: `Нельзя загрузить более ${maxFileCount} файлов`,
      });
      return;
    }

    if (maxFileSize) {
      const oversizedFile = newFiles.find((file) => file.size > maxFileSize);
      if (oversizedFile) {
        const limitMb = (maxFileSize / 1024 / 1024).toFixed(1);
        onChange?.({
          errorMessage: `Файл "${oversizedFile.name}" превышает допустимый размер ${limitMb} МБ`,
        });
        return;
      }
    }

    setFiles(newFiles);
    onChange?.({ files: newFiles, errorMessage: undefined });
    setAttachOpen?.(false);
  };

  const attachments: InputMessageAttachment[] = [
    {
      id: "file",
      label: "Файл",
      icon: Paperclip,
      onClick: handleButtonClick,
    },
  ];

  return {
    handleFileChange,
    handleAttachmentClick,
    fileInputRef,
    attachments,
  };
};
