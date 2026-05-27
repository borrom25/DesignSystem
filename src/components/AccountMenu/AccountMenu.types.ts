import type { Dispatch, ReactNode, SetStateAction } from "react";
import { SegmentedOption } from "../Segmented/Segmented.types";
import { ListItemProps } from "../ListItem";
import type { ReactElement } from "react";
import { AccountMenu } from "./AccountMenu";

export type AccountMenuContentProps<T extends string = string> = {
  actionSlot?: ReactNode;
  switchersSlot?: ReactNode;
  languages?: SegmentedOption<T>[];
  language?: T;
  onChangeLanguage?: (value: T) => void;
  themes?: SegmentedOption[];
  showTheme?: boolean;
  src: string;
  fullName: string;
  role?: string;
  actions?: ListItemProps[];
  logoutFn?: () => void;
};

export type AccountMenuProps<T extends string = string> =
  AccountMenuContentProps<T> & {
    trigger?: ReactNode;
    isOpen?: boolean;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
  };

export type AccountMenuElement = ReactElement<
  AccountMenuProps,
  typeof AccountMenu
>;
