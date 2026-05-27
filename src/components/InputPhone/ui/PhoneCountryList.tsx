import { memo, useCallback, useEffect, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { ListItem } from "@/components/ListItem";
import { Size } from "@/types";
import type { Country } from "react-phone-number-input";
import type { PhoneCountryOption } from "../InputPhone.countries";
import { inputPhoneStyles } from "../styles";
import { PhoneCountryFlag } from "./PhoneCountryFlag";

const ITEM_HEIGHT = 36;
const OVERSCAN = 5;

interface PhoneCountryListItemProps {
  option: PhoneCountryOption;
  selected: boolean;
  onSelect: (country: Country) => void;
}

const PhoneCountryListItem = memo(function PhoneCountryListItem({
  option,
  selected,
  onSelect,
}: PhoneCountryListItemProps) {
  const handleClick = useCallback(
    () => onSelect(option.iso),
    [onSelect, option.iso]
  );

  return (
    <ListItem
      size={Size.Xs}
      selected={selected}
      className={inputPhoneStyles.countryListItem}
      suffix={
        <span className={inputPhoneStyles.countryListItemSuffix}>
          {option.dialCode}
        </span>
      }
      onClick={handleClick}
    >
      <span className={inputPhoneStyles.countryListItemContent}>
        <PhoneCountryFlag option={option} />
        <span className={inputPhoneStyles.countryListItemName}>
          {option.name}
        </span>
      </span>
    </ListItem>
  );
});

interface PhoneCountryListProps {
  options: PhoneCountryOption[];
  selectedCountry: Country;
  onSelect: (country: Country) => void;
  maxHeight?: number;
}

export const PhoneCountryList = memo(function PhoneCountryList({
  options,
  selectedCountry,
  onSelect,
  maxHeight = 300,
}: PhoneCountryListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const totalSize = options.length * ITEM_HEIGHT;
  const viewportHeight = Math.min(totalSize, maxHeight);

  const virtualizer = useVirtualizer({
    count: options.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => ITEM_HEIGHT,
    initialRect: {
      width: 320,
      height: viewportHeight,
    },
    overscan: OVERSCAN,
  });

  useEffect(() => {
    virtualizer.scrollToOffset(0);
  }, [options, virtualizer]);

  if (options.length === 0) {
    return (
      <div className={inputPhoneStyles.countryEmpty}>Ничего не найдено</div>
    );
  }

  const virtualItems = virtualizer.getVirtualItems();

  return (
    <div
      ref={scrollRef}
      className={inputPhoneStyles.countryScrollContainer}
      style={{ height: viewportHeight }}
    >
      <div
        className={inputPhoneStyles.countryList}
        style={{ height: virtualizer.getTotalSize(), position: "relative" }}
      >
        {virtualItems.map((virtualItem) => {
          const option = options[virtualItem.index];

          return (
            <div
              key={option.iso}
              style={{
                position: "absolute",
                top: virtualItem.start,
                left: 0,
                right: 0,
                height: virtualItem.size,
              }}
            >
              <PhoneCountryListItem
                option={option}
                selected={option.iso === selectedCountry}
                onSelect={onSelect}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
});
