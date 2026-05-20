import { LineTypes } from "../Line.types";

export const typeClasses: Record<LineTypes, string> = {
  default: "",
  background: "bg-generic py-[14px] px-[16px] rounded-2xl",
  border:
    "border border-line py-[14px] px-[16px] rounded-2xl hover:border-brand-line-heavy aria-[disabled]:hover:border-line duration-200",
};
