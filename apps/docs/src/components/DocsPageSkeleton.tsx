import { Skeleton } from "@/components";

const CONTENT_ROWS = ["w-full", "w-11/12", "w-9/12"];

export function DocsPageSkeleton() {
  return (
    <div
      className="flex h-full min-h-[420px] w-full flex-col gap-8 p-9"
      aria-label="Загрузка страницы документации"
    >
      <header className="flex max-w-3xl flex-col gap-3">
        <Skeleton className="h-8 w-64 rounded-sm" />
        <Skeleton className="h-4 w-full rounded-sm" />
        <Skeleton className="h-4 w-10/12 rounded-sm" />
      </header>

      <div className="border-line bg-generic flex min-h-[220px] w-full max-w-[980px] flex-col gap-5 rounded-md border p-6">
        <Skeleton className="h-7 w-48 rounded-sm" />
        <div className="flex flex-col gap-3">
          {CONTENT_ROWS.map((widthClassName) => (
            <Skeleton
              key={widthClassName}
              className={`h-4 rounded-sm ${widthClassName}`}
            />
          ))}
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <Skeleton className="h-24 rounded-md" />
          <Skeleton className="h-24 rounded-md" />
          <Skeleton className="h-24 rounded-md" />
        </div>
      </div>
    </div>
  );
}
