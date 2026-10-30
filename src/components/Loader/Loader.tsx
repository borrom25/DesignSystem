import clsx from "clsx";
import { LoaderCircle } from "lucide-react";
import { FC } from "react";

import { LoaderProps } from "./Loader.types";
import { loaderStyles } from "./styles";

export const Loader: FC<LoaderProps> = ({
  variant = "default",
  size = 12,
  className,
  ariaLabel = "Loading",
  ...props
}) => {
  return (
    <span
      className={clsx(
        loaderStyles.base,
        loaderStyles.variants[variant],
        className
      )}
      role="status"
      aria-busy="true"
      aria-label={ariaLabel}
      style={{ fontSize: `${size}px` }}
      data-variant={variant}
      {...props}
    >
      <LoaderCircle
        className={loaderStyles.icon}
        style={{ width: `${size}px`, height: `${size}px` }}
      />
    </span>
  );
};
