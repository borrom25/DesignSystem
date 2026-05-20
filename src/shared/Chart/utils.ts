import { defaultBarColors } from "./consts.ts";

export const getBarColor = (index: number) => {
  return `var(--colors-light-${defaultBarColors[index]}-400-solid)`;
};
