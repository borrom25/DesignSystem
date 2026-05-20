import type { TextareaHTMLAttributes, RefObject, KeyboardEvent } from "react";
import { cn } from "@/utils";
import { inputMessageStyles } from "../styles";

export interface InputMessageTextareaProps extends Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "onChange" | "onKeyDown"
> {
  textareaRef: RefObject<HTMLTextAreaElement>;
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

export function InputMessageTextarea({
  textareaRef,
  value,
  onChange,
  onKeyDown,
  className,
  ...restProps
}: InputMessageTextareaProps) {
  return (
    <textarea
      ref={textareaRef}
      rows={1}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={onKeyDown}
      className={cn(inputMessageStyles.textarea, className)}
      {...restProps}
      autoComplete="off"
    />
  );
}
