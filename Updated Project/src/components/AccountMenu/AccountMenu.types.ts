import type { Dispatch, ReactNode, SetStateAction } from "react";
import { SegmentedOption } from "../Segmented/Segmented.types";
import { ListItemProps } from "../ListItem";
import type { ReactElement } from "react";
import { AccountMenu } from "./AccountMenu";

export type AccountMenuContentProps = {
  actionSlot?: ReactNode;
  switchersSlot?: ReactNode;
  languages?: SegmentedOption[];
  language?: string;
  onChangeLanguage?: (value: string) => void;
  themes?: SegmentedOption[];
  showTheme?: boolean;
  src: string;
  fullName: string;
  role?: string;
  actions?: ListItemProps[];
  logoutFn?: () => void;
};

export type AccountMenuProps = AccountMenuContentProps & {
  trigger?: ReactNode;
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
};

export type AccountMenuElement = ReactElement<
  AccountMenuProps,
  typeof AccountMenu
>;
