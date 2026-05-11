import { buttonBaseClasses } from "@/styles/shared";
export { scalingClasses } from "@/styles/shared";

export const baseClasses =
  buttonBaseClasses +
  " relative font-roboto-flex transition-colors disabled:opacity-50 disabled:pointer-events-none";

export const selectedClasses =
  "rounded-xs bg-brand-heavy text-on-brand [&:hover]:bg-brand-heavy [&:hover]:text-on-brand";

export const contentClasses =
  "inline-grid grid-flow-col auto-cols-max items-center";
