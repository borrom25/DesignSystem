import type { ReactNode } from "react";
import { cn } from "@/utils";
import { tableStyles } from "../styles";

interface TableEmptyProps {
  children?: ReactNode;
  className?: string;
}

export function TableEmpty({ children, className }: TableEmptyProps) {
  return (
    <div className={cn(tableStyles.empty, className)}>
      {children ?? "Нет данных для отображения"}
    </div>
  );
}
