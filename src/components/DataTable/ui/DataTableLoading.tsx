import type { ReactNode } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/utils";
import { tableStyles } from "../styles";

interface TableLoadingProps {
  children?: ReactNode;
  className?: string;
}

export function TableLoading({ children, className }: TableLoadingProps) {
  return (
    <div className={cn(tableStyles.loading, className)}>
      {children ?? (
        <div className="flex items-center gap-2">
          <Loader2 className={tableStyles.loadingSpinner} />
          <span className="text-secondary">Загрузка...</span>
        </div>
      )}
    </div>
  );
}

interface TableLoadingMoreProps {
  className?: string;
}

export function TableLoadingMore({ className }: TableLoadingMoreProps) {
  return (
    <div className={cn(tableStyles.loadingMore, className)}>
      <div className="flex items-center gap-2">
        <Loader2 className={tableStyles.loadingSpinner} />
        <span className="text-secondary text-sm">Загрузка данных...</span>
      </div>
    </div>
  );
}
