import { useCallback, useMemo, useState } from "react";
import { Popover, PopoverSurface } from "@/components/Popover";
import type { PopoverContentProps } from "@/components/Popover";
import { SearchAutocomplete } from "@/components/SearchAutocomplete";
import { useOpenState } from "@/shared/hooks";
import type { Size } from "@/types";
import type { Country } from "react-phone-number-input";
import type { PhoneCountryOption } from "../InputPhone.countries";
import { inputPhoneStyles } from "../styles";
import { PhoneCountryList } from "./PhoneCountryList";
import { PhoneCountryTrigger } from "./PhoneCountryTrigger";

const COUNTRY_LIST_MAX_HEIGHT = 300;
const COUNTRY_POPOVER_SIDE_OFFSET = 6;

interface PhoneCountrySelectorProps {
  size: Size;
  country: Country;
  options: PhoneCountryOption[];
  disabled?: boolean;
  open?: boolean;
  contentWidth?: number;
  contentAlignOffset?: number;
  onOpenChange?: (open: boolean) => void;
  onContentInteractOutside?: PopoverContentProps["onInteractOutside"];
  onContentFocusOutside?: PopoverContentProps["onFocusOutside"];
  onCountryChange: (country: Country) => void;
}

export function PhoneCountrySelector({
  size,
  country,
  options,
  disabled = false,
  open: openProp,
  contentWidth,
  contentAlignOffset = 0,
  onOpenChange,
  onContentInteractOutside,
  onContentFocusOutside,
  onCountryChange,
}: PhoneCountrySelectorProps) {
  const { open, setOpen } = useOpenState({
    open: openProp,
    onOpenChange,
  });
  const [searchValue, setSearchValue] = useState("");
  const selectedOption = useMemo(
    () => options.find((option) => option.iso === country) ?? options[0],
    [options, country]
  );

  const filteredOptions = useMemo(() => {
    const normalizedSearch = searchValue.trim().toLowerCase();

    if (!normalizedSearch) {
      return options;
    }

    return options.filter((option) =>
      option.searchText.includes(normalizedSearch)
    );
  }, [options, searchValue]);

  const handleCountrySelect = useCallback(
    (nextCountry: Country) => {
      onCountryChange(nextCountry);
      setSearchValue("");
      setOpen(false);
    },
    [onCountryChange, setOpen]
  );

  if (!selectedOption) {
    return null;
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Popover.Trigger>
        <PhoneCountryTrigger
          option={selectedOption}
          size={size}
          disabled={disabled}
        />
      </Popover.Trigger>

      <Popover.Content
        align="start"
        alignOffset={contentAlignOffset}
        side="bottom"
        sideOffset={COUNTRY_POPOVER_SIDE_OFFSET}
        style={
          contentWidth
            ? { width: contentWidth, maxWidth: contentWidth }
            : undefined
        }
        onOpenAutoFocus={(event) => event.preventDefault()}
        onInteractOutside={onContentInteractOutside}
        onFocusOutside={onContentFocusOutside}
      >
        <PopoverSurface className={inputPhoneStyles.countryPopoverSurface}>
          <div className={inputPhoneStyles.countrySearchWrapper}>
            <SearchAutocomplete
              value={searchValue}
              onValueChange={setSearchValue}
              placeholder="Поиск страны"
            />
          </div>

          <PhoneCountryList
            options={filteredOptions}
            selectedCountry={country}
            onSelect={handleCountrySelect}
            maxHeight={COUNTRY_LIST_MAX_HEIGHT}
          />
        </PopoverSurface>
      </Popover.Content>
    </Popover>
  );
}
