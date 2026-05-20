import type { ReactNode } from "react";
import { headerInsideStyles } from "../styles";

export interface TitleSectionProps {
  title: ReactNode;
  subtitle?: ReactNode;
}

export function TitleSection({ title, subtitle }: TitleSectionProps) {
  return (
    <div className={headerInsideStyles.titleWrapper}>
      <span className={headerInsideStyles.insideTitle}>{title}</span>
      {subtitle && (
        <span className={headerInsideStyles.subtitle}>{subtitle}</span>
      )}
    </div>
  );
}
