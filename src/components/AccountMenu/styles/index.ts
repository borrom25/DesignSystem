import {
  dangerClasses,
  fullNameCLasses,
  headerClasses,
  itemsClasses,
  modalClasses,
  popoverClasses,
  roleClasses,
  switchersClasses,
  textCLasses,
  wrapperClasses,
} from "./base";

export const accountMenuClasses = {
  wrapper: wrapperClasses,
  header: headerClasses,
  switchers: switchersClasses,
  text: textCLasses,
  fullName: fullNameCLasses,
  role: roleClasses,
  items: itemsClasses,
  popover: popoverClasses,
  modal: modalClasses,
  danger: dangerClasses,
} as const;
