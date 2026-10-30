export type LoaderVariant = "default" | "white";

export interface LoaderProps {
  variant?: LoaderVariant;
  size?: number;
  className?: string;
  ariaLabel?: string;
}

export const LoaderVariantType = ["default", "white"];
