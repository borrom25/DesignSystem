import {
  buttonBaseClasses,
  scalingClasses as sharedScalingClasses,
} from "@/styles/shared";

export const scalingClasses = `${sharedScalingClasses} !transition-all !duration-350 !ease-in-out`;

export const baseClasses =
  buttonBaseClasses +
  " relative font-roboto-flex transition-all duration-350 ease-in-out disabled:pointer-events-none";
