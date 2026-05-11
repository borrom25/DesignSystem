import type { Size } from "@/types";
import { chipsStyles } from "./styles";

export const getSizingClasses = (size: Size, isIconOnly: boolean): string =>
  isIconOnly ? chipsStyles.iconOnlySize[size] : chipsStyles.size[size];
