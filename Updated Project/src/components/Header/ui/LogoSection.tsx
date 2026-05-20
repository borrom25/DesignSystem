import type { ReactNode } from "react";
import logoMin from "@/assets/icons/logo-min.svg";
import { headerStyles } from "../styles";
import { useScreenSize } from "@/providers";

export interface LogoSectionProps {
  logo?: ReactNode;
  title?: ReactNode;
}

export function LogoSection({ logo, title }: LogoSectionProps) {
  const { isMobile } = useScreenSize();
  return (
    <div className={headerStyles.logoWrapper}>
      {logo || (
        <img src={logoMin} alt="Логотип" className={headerStyles.logoImage} />
      )}
      {title && (
        <span data-mobile={isMobile} className={headerStyles.title}>
          {title}
        </span>
      )}
    </div>
  );
}
