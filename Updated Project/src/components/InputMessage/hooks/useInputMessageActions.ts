import type { InputMessageAttachment } from "@/components";
import { Paperclip } from "lucide-react";
import { useRef } from "react";
import { useMessageFileStore } from "../store";

type UseInputMessageActionsArgs = {
  setAttachOpen?: (value: boolean) => void;
};

export const useInputMessageActions = ({
  setAttachOpen,
}: UseInputMessageActionsArgs) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { setFiles } = useMessageFileStore();

  const handleAttachmentClick = (itemOnClick?: () => void) => {
    itemOnClick?.();
  };

  const handleButtonClick = () => {
    if (!fileInputRef?.current) return;
    fileInputRef.current.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
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
