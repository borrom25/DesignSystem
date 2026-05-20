import type { CSSProperties } from "react";

type GetInputFadeOutStyleParams = {
  isFocused: boolean;
  hasValue: boolean;
};

export function getInputFadeOutStyle({
  isFocused,
  hasValue,
}: GetInputFadeOutStyleParams): CSSProperties | undefined {
  if (isFocused || !hasValue) return undefined;

  return {
    WebkitMaskImage:
      "linear-gradient(to right, black calc(100% - 24px), transparent)",
    maskImage:
      "linear-gradient(to right, black calc(100% - 24px), transparent)",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
  };
}

export function moveInputCaretToEnd(input: HTMLInputElement): void {
  if (document.activeElement !== input) return;

  const end = input.value.length;

  try {
    input.setSelectionRange(end, end);
  } catch {
    return;
  } finally {
    input.scrollLeft = input.scrollWidth;
  }
}
