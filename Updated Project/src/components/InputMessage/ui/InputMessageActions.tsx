import { useState } from "react";
import { Paperclip, SendHorizontal } from "lucide-react";
import { Color, Size, Type } from "@/types";
import { Popover, PopoverSurface } from "@/components/Popover";
import { ListItem } from "@/components/ListItem";
import { inputMessageStyles } from "../styles";
import { Button } from "@/components/Button/Button";
import { useInputMessageActions } from "../hooks/useInputMessageActions.ts";

export interface InputMessageActionsProps {
  showAttachments: boolean;
  disabled: boolean;
  canSend: boolean;
  onSend: () => void;
  popoverContentClassName?: string;
}

export function InputMessageActions({
  showAttachments,
  disabled,
  canSend,
  onSend,
  popoverContentClassName,
}: InputMessageActionsProps) {
  const [attachOpen, setAttachOpen] = useState(false);
  const { handleAttachmentClick, attachments, fileInputRef, handleFileChange } =
    useInputMessageActions({ setAttachOpen });

  return (
    <div className={inputMessageStyles.actions}>
      {showAttachments && (
        <Popover open={attachOpen} onOpenChange={setAttachOpen}>
          <Popover.Trigger>
            <Button
              iconOnly={Paperclip}
              size={Size.Xs}
              type={Type.Flat}
              color={Color.Inverse}
              disabled={disabled}
              aria-label="Прикрепить"
            />
          </Popover.Trigger>
          <Popover.Content
            className={popoverContentClassName}
            sideOffset={4}
            align="end"
          >
            <PopoverSurface>
              <input
                name="file-input"
                type="file"
                accept="/"
                ref={fileInputRef}
                className="sr-only"
                onChange={handleFileChange}
                multiple
              />
              <div className={inputMessageStyles.actionsList}>
                {attachments.map((item) => (
                  <ListItem
                    key={item.id}
                    size={Size.Xs}
                    iconLeft={item.icon}
                    disabled={item.disabled}
                    onClick={() => handleAttachmentClick(item.onClick)}
                  >
                    {item.label}
                  </ListItem>
                ))}
              </div>
            </PopoverSurface>
          </Popover.Content>
        </Popover>
      )}

      <Button
        iconOnly={SendHorizontal}
        size={Size.Xs}
        type={Type.Flat}
        color={Color.Brand}
        disabled={!canSend}
        onClick={onSend}
        aria-label="Отправить"
      />
    </div>
  );
}
