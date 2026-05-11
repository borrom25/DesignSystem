import { Size } from "@/types";

export const closeButtonSize = (size: Size) =>
  size === "xs" ? Size.Sm : Size.Md;
