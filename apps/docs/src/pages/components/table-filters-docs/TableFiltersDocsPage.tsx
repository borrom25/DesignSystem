import { ComponentDescription } from "@docs/components/ComponentDescription";
import { ComponentDocsPage } from "@docs/components/ComponentDocsPage";
import { ComponentPlayground } from "@docs/components/ComponentPlayground";
import { ComponentPropsTable } from "@docs/components/ComponentPropsTable";
import { ComponentUsage } from "@docs/components/ComponentUsage";
import packageJson from "../../../../../../package.json";
import { GuideCard } from "./GuideCard";
import { TABLE_FILTER_RULES_PROPS, TABLE_FILTERS_STATE_PROPS } from "./props";
import { TableFiltersPreview } from "./shared";
import {
  createFilterStateUsageCode,
  createScopedFilterStateUsageCode,
  createTableFiltersUsageCode,
} from "./usage";

export default function TableFiltersDocsPage() {
  const packageName = packageJson.name;

  return (
    <ComponentDocsPage>
      <ComponentPlayground
        title="Table Filters"
        preview={<TableFiltersPreview />}
      />

      <ComponentDescription text="Фильтры Table строятся вокруг колонок и хука `useDataTableFilters`. Вы описываете filter-конфиг прямо рядом с колонкой, а затем передаете результат хука в проп `filters` таблицы. Такой подход дает единый источник истины для UI фильтров, значений и синхронизации с TanStack Table." />

      <GuideCard
        title="Как подключать фильтры"
        items={[
          "Определите filter-конфиг в нужных колонках через `columnHelper.columnFilter`, `list`, `radio`, `date`, `dateRange` или `numberRange`.",
          "Создайте состояние через `useDataTableFilters({ columns })` рядом с таблицей. Если одинаковые таблицы живут в разных вкладках, добавьте `scopeKey`.",
          "Передайте `filters={filters}` в `Table`, а глобальный поиск при необходимости подключите отдельно через `globalFilter` и `onGlobalFilterChange`.",
          "Используйте `values`, `setValue`, `clearValue` и `clearAll`, если фильтры должны управляться из внешнего UI.",
          "Если нужна дозагрузка строк по скроллу, подключайте ее на уровне `Table` через `onScrollEnd` и `onLoadMore`, а не через `useDataTableFilters`.",
        ]}
      />

      <ComponentUsage
        code={createTableFiltersUsageCode(packageName)}
        title="Базовое подключение фильтров к Table"
      />

      <ComponentPropsTable
        items={TABLE_FILTERS_STATE_PROPS}
        title="Что возвращает useDataTableFilters"
      />

      <ComponentUsage
        code={createFilterStateUsageCode(packageName)}
        title="Управление фильтрами из внешнего интерфейса"
      />

      <ComponentUsage
        code={createScopedFilterStateUsageCode(packageName)}
        title="Изоляция фильтров и search по вкладкам"
      />

      <ComponentDescription
        title="Скролл до конца таблицы"
        text="`useDataTableFilters` не отвечает за дозагрузку строк. Если нужно подгружать новые записи при достижении конца списка, используйте table-level API: `hasMore`, `isFetchingMore`, `onLoadMore` и `onScrollEnd`. Эти пропсы относятся к контейнеру таблицы, а не к popover'ам фильтров."
      />

      <ComponentPropsTable
        items={TABLE_FILTER_RULES_PROPS}
        title="Практические правила работы фильтров"
      />
    </ComponentDocsPage>
  );
}
