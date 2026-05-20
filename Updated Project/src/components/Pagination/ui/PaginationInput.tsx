import type { KeyboardEvent } from "react";
import type { Size } from "@/types";
import { Input, InputVariant } from "@/components/Input";
import { paginationStyles } from "../styles";

interface PaginationInputProps {
  size: Size;
  value: string;
  placeholder: string;
  disabled: boolean;
  onChange: (value: string) => void;
  onBlur: () => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export function PaginationInput({
  size,
  value,
  placeholder,
  disabled,
  onChange,
  onBlur,
  onKeyDown,
}: PaginationInputProps) {
  return (
    <div className={paginationStyles.inputWrapper}>
      <Input
        size={size}
        variant={InputVariant.Default}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        clearable={false}
        inputClassName="w-24"
      />
    </div>
  );
}
