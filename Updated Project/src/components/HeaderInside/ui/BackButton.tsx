import { ArrowLeft } from "lucide-react";
import { Color, HtmlType, Size, Type } from "@/types";
import { Button } from "@/components/Button";

export interface BackButtonProps {
  onClick?: () => void;
  testId?: string;
}

export function BackButton({ onClick, testId }: BackButtonProps) {
  return (
    <Button
      htmlType={HtmlType.Button}
      onClick={onClick}
      data-testid={testId}
      type={Type.Ghost}
      color={Color.Inverse}
      size={Size.Sm}
      aria-label="Назад"
      iconOnly={ArrowLeft}
    />
  );
}
