import { ComponentDescription } from "@docs/components/ComponentDescription";
import { ComponentDocsPage } from "@docs/components/ComponentDocsPage";
import { ComponentPlayground } from "@docs/components/ComponentPlayground";
import { ComponentPropsTable } from "@docs/components/ComponentPropsTable";
import { ComponentUsage } from "@docs/components/ComponentUsage";
import packageJson from "../../../../../../package.json";
import { GuideCard } from "./GuideCard";
import { TABLE_FILTER_KIND_PROPS, TABLE_FILTER_OPTION_PROPS } from "./props";
import { TableFilterSettingsPreview } from "./shared";
import {
  createCustomFilterUsageCode,
  createFilterSettingsUsageCode,
  createRemoteOptionsSearchUsageCode,
} from "./usage";

export default function TableFilterSettingsDocsPage() {
  const packageName = packageJson.name;

  return (
    <ComponentDocsPage>
      <ComponentPlayground
        title="Table Filter Settings"
        preview={<TableFilterSettingsPreview />}
      />

      <ComponentDescription text="Настройка фильтров у Table живет прямо в описании колонок. Для стандартных сценариев хватает методов `createDataTableColumnHelper`, а для нетипового UI можно использовать `dataTableFilter.custom`. Важно, что каждый тип фильтра управляет не только UI в popover, но и формой значения, которое попадет в `values` и `columnFiltersState`." />

      <GuideCard
        title="Как выбирать тип фильтра"
        items={[
          "`columnFilter` используйте для локального поиска по тексту в одной колонке.",
          "`list` подходит для enum-полей и статусов, где можно выбрать несколько значений.",
          "`radio` подходит, когда из фиксированного набора нужно выбрать только одно значение.",
          "`date` и `dateRange` удобны для полей с датой старта, дедлайном, createdAt и similar timestamp-полями.",
          "`numberRange` подходит для сумм, счетчиков и любых числовых интервалов.",
          "`custom` выбирайте, когда нужен полностью свой UI и собственная логика `filterFn`.",
          "Для серверного поиска опций в `list`/`radio` используйте `onSearchChange` и обычно `filterOptionsLocally: false`, обновляя `options` из ответа API.",
        ]}
      />

      <ComponentUsage
        code={createFilterSettingsUsageCode(packageName)}
        title="Настройка стандартных типов фильтров"
      />

      <ComponentUsage
        code={createRemoteOptionsSearchUsageCode(packageName)}
        title="Серверный поиск опций в list/radio"
      />

      <ComponentPropsTable
        items={TABLE_FILTER_KIND_PROPS}
        title="Типы фильтров и их назначение"
      />

      <ComponentPropsTable
        items={TABLE_FILTER_OPTION_PROPS}
        title="Основные опции конфигурации"
      />

      <ComponentUsage
        code={createCustomFilterUsageCode(packageName)}
        title="Кастомный фильтр через dataTableFilter.custom"
      />

      <ComponentDescription
        title="Важно для custom-фильтра"
        text="`render` отвечает только за интерфейс редактирования значения. Если колонка должна реально фильтроваться, добавьте собственный `filterFn`, потому что для `custom` он не назначается автоматически. Это особенно важно, если значение фильтра хранится не как строка, а как объект, enum или комбинированная структура. В этом же режиме удобно включать `onScrollEnd` и `scrollEndOffset` у `Select` или `MultiSelect`, когда опции фильтра подгружаются порциями."
      />
    </ComponentDocsPage>
  );
}
