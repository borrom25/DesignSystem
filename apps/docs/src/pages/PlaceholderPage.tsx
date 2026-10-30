import { useLocation } from "react-router-dom";
import { DocsPage } from "@docs/components/DocsPage";
import { Skeleton } from "@/components";

const titles: Record<string, string> = {
  "/icons": "Иконки",
  "/patterns": "Паттерны",
  "/theming": "Темизатор",
  "/news": "Новости",
};

const placeholderCards = Array.from({ length: 6 }, (_, index) => index);

export default function PlaceholderPage() {
  const { pathname } = useLocation();

  return (
    <DocsPage
      title={titles[pathname] ?? "В разработке"}
      description="Раздел в разработке."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {placeholderCards.map((card) => (
          <div
            key={card}
            className="border-line bg-generic flex min-h-[156px] flex-col gap-4 rounded-md border p-5"
          >
            <Skeleton className="h-8 w-8 rounded-sm" aria-hidden />
            <div className="flex flex-col gap-3">
              <Skeleton className="h-4 w-8/12 rounded-sm" aria-hidden />
              <Skeleton className="h-4 w-full rounded-sm" aria-hidden />
              <Skeleton className="h-4 w-7/12 rounded-sm" aria-hidden />
            </div>
          </div>
        ))}
      </div>
    </DocsPage>
  );
}
