import { formControlBaseClasses } from "@/styles/shared";

export const baseClasses =
  "shrink-0 " + formControlBaseClasses + " rounded-full";

export const labelClasses =
  "relative inline-flex items-center leading-none cursor-pointer has-[:disabled]:cursor-not-allowed";

export const innerDotBaseClasses =
  "absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 transition-opacity duration-300 ease-in-out peer-checked:opacity-100 rounded-full bg-contrast-light-heavy";
