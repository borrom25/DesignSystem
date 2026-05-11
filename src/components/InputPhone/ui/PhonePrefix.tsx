import { InputSeparator } from "@/shared/Input";
import { phoneCountryCode } from "../InputPhone.utils";
import { inputPhoneStyles } from "../styles";

export function PhonePrefix() {
  return (
    <span className={inputPhoneStyles.prefix}>
      <span className={inputPhoneStyles.label}>{phoneCountryCode}</span>
      <InputSeparator className={inputPhoneStyles.separator} />
    </span>
  );
}
