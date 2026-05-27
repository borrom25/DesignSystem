import { Size } from "@/types";
import { cn } from "@/utils";
import type { PhoneCountryOption } from "../InputPhone.countries";
import { inputPhoneStyles } from "../styles";

interface PhoneCountryFlagProps {
  option: PhoneCountryOption;
  size?: Size;
  className?: string;
}

export function PhoneCountryFlag({
  option,
  size = Size.Xs,
  className,
}: PhoneCountryFlagProps) {
  const Flag = option.Flag;

  return (
    <span
      className={cn(
        inputPhoneStyles.countryFlag,
        inputPhoneStyles.flagSize[size],
        className
      )}
    >
      {Flag ? (
        <Flag title={option.name} />
      ) : (
        <span className={inputPhoneStyles.countryFlagFallback}>
          {option.iso}
        </span>
      )}
    </span>
  );
}
