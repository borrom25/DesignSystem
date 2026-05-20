import { buttonBaseClasses } from "@/styles/shared";
export { scalingClasses } from "@/styles/shared";

export const baseClasses =
  buttonBaseClasses +
  " relative transition-colors disabled:pointer-events-none [&>svg]:shrink-0 [&>svg]:block";

export const badgeClasses =
  "pointer-events-none absolute top-0 right-0 z-10 translate-x-1/3 -translate-y-1/3";

export const roundedClasses = "rounded-full";
