import { Size } from "@/types";

export type TagPlaygroundState = {
  size: (typeof Size)[keyof typeof Size];
  text: string;
  withLeftIcon: boolean;
  withAvatar: boolean;
  closable: boolean;
  error: boolean;
  disabled: boolean;
};

export const TAG_DEFAULT_STATE: TagPlaygroundState = {
  size: Size.Md,
  text: "Tag",
  withLeftIcon: false,
  withAvatar: false,
  closable: true,
  error: false,
  disabled: false,
};
