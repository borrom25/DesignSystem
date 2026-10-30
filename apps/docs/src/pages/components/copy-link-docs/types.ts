import { Size } from "@/types";

export type CopyLinkPlaygroundState = {
  size: (typeof Size)[keyof typeof Size];
  value: string;
  defaultText: string;
  successText: string;
  disabled: boolean;
  scaling: boolean;
  customIcon: boolean;
};

export const COPY_LINK_DEFAULT_STATE: CopyLinkPlaygroundState = {
  size: Size.Sm,
  value: "https://alabuga.example/invite/12345",
  defaultText: "Копировать ссылку",
  successText: "Скопировано",
  disabled: false,
  scaling: true,
  customIcon: false,
};
