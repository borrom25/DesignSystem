import { InputSeparator } from "@/shared/Input";
import { phoneCountryCode } from "../InputPhone.utils";
import { inputPhoneStyles } from "../styles";

interface PhonePrefixProps {
  dialCode?: string;
}

export function PhonePrefix({ dialCode = phoneCountryCode }: PhonePrefixProps) {
  return (
    <span className={inputPhoneStyles.prefix}>
      <span className={inputPhoneStyles.label}>{dialCode}</span>
      <InputSeparator className={inputPhoneStyles.separator} />
    </span>
  );
}
