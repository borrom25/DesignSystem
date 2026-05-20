import { Search } from "lucide-react";
import { Input } from "@/components/Input";
import { Size } from "@/types";
import { cn } from "@/utils";
import type { SearchAutocompleteProps } from "./SearchAutocomplete.types";

export function SearchAutocomplete({
  placeholder = "Поиск",
  clearable = true,
  className,
  onChange,
  onValueChange,
  onClear,
  ref,
  ...restProps
}: SearchAutocompleteProps) {
  return (
    <Input
      {...restProps}
      ref={ref}
      size={Size.Xs}
      placeholder={placeholder}
      iconLeft={Search}
      clearable={clearable}
      className={cn("[--size-input-xs-height:36px]", className)}
      onClear={() => {
        onClear?.();
        onValueChange?.("");
      }}
      onChange={(event) => {
        onChange?.(event);
        onValueChange?.(event.target.value);
      }}
    />
  );
}
