import { SearchAutocomplete } from "@/components/SearchAutocomplete";
import { useControllableState } from "@/shared/hooks";
import { cn } from "@/utils";
import type { PopoverSearchConfig } from "../Popover.types";
import { searchClasses } from "../styles";

export function PopoverSearch({
  value,
  defaultValue = "",
  onValueChange,
  onClear,
  placeholder = "Поиск",
  slot,
  wrapperClassName,
  className,
  clearable = true,
  ...restProps
}: PopoverSearchConfig) {
  const [searchValue, setSearchValue] = useControllableState<string>({
    value,
    defaultValue,
    onChange: onValueChange,
  });

  return (
    <div className={cn(searchClasses, wrapperClassName)}>
      {slot ?? (
        <SearchAutocomplete
          {...restProps}
          value={searchValue}
          placeholder={placeholder}
          clearable={clearable}
          className={className}
          onClear={onClear}
          onValueChange={setSearchValue}
        />
      )}
    </div>
  );
}
