import type { ReactNode } from "react";

interface ComponentSectionHeadingProps {
  children: ReactNode;
}

export function ComponentSectionHeading({
  children,
}: ComponentSectionHeadingProps) {
  return (
    <h2 className="font-roboto-flex text-[28px] font-bold leading-8 tracking-[0.2px] text-primary">
      {children}
    </h2>
  );
}
