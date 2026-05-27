import type { ButtonHTMLAttributes, MouseEventHandler, Ref } from "react";
import { Size } from "@/types";
import { cn } from "@/utils";
import type { PhoneCountryOption } from "../InputPhone.countries";
import { inputPhoneStyles } from "../styles";
import { PhoneCountryFlag } from "./PhoneCountryFlag";

interface PhoneCountryTriggerProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type"
> {
  option: PhoneCountryOption;
  size: Size;
  ref?: Ref<HTMLButtonElement>;
}

export function PhoneCountryTrigger({
  option,
  size,
  disabled = false,
  className,
  onMouseDown,
  ref,
  ...buttonProps
}: PhoneCountryTriggerProps) {
  const handleMouseDown: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    onMouseDown?.(event);
  };

  return (
    <button
      {...buttonProps}
      ref={ref}
      type="button"
      onMouseDown={handleMouseDown}
      data-input-phone-country-trigger
      className={cn(
        inputPhoneStyles.island,
        inputPhoneStyles.islandSize[size],
        inputPhoneStyles.countryTriggerState,
        disabled && inputPhoneStyles.disabled,
        className
      )}
      disabled={disabled}
      aria-label={`Выбрать страну: ${option.name}`}
    >
      <PhoneCountryFlag option={option} size={size} />
      <span>{option.dialCode}</span>
    </button>
  );
}
