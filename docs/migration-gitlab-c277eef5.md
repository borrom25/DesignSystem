# Миграция на GitLab redesign c277eef5

Источник API — GitLab `c277eef53c8f0b655064d3c67855f2df70ddfccd` от 28.10.2026. Сравнение выполнено с GitHub `a07ec23`. Эта инструкция описывает изменения API выпуска `0.0.72`, импорт CSS — `borrom-ds-test/styles.css`. При установке и обновлении всегда используем последнюю опубликованную версию по тегу npm `latest`. Выпуск `0.0.72` ещё в обработке: до завершения публикации `latest` может указывать на предыдущую версию, в которой описанные изменения отсутствуют.

```bash
npm install borrom-ds-test@latest
```

Полный список изменённых props, exports и зависимостей: [инвентаризация](gitlab-update-inventory.md). Актуальные типы и самостоятельные примеры: [публичные компоненты](public-components.md).

## Несовместимые изменения

| Было | Стало | Действие |
| --- | --- | --- |
| `Text size="sm" color="brand"` | `Text variant="b2" color="brand" shade="medium"` | Подбирать typography через `TextVariant`, категории цвета и shade; механического соответствия size недостаточно |
| `Header accountMenu={<AccountMenu ... />}` | `Header accountMenuProps={{ ... }}` | Передать настройки без JSX-обёртки; это относится и к HeaderInside |
| `DateRange label="Период" subtitle="..."` | DateRange не принимает label/subtitle | Вынести видимую подпись в `FieldLabel`/layout; `aria-label` поддерживает доступное имя контейнера, но не создаёт видимую подпись |
| `DateRangeValue.start/end: Date` | `Date \| Dayjs` | В обработчиках учитывать union; для кода, которому нужен Date, нормализовать `value instanceof Date ? value : value.toDate()` |
| `BarMenu onMoreClick={...}` | Нет отдельного onMoreClick | Передать действие нужного пункта через `items[].onClick` |
| Отдельные `PopoverTrigger`, `PopoverContent`, `PopoverSurface`, `PopoverScrollArea` | `Popover.Trigger`, `Popover.Content`, `Popover.Surface`, `Popover.ScrollArea` | Заменить импорты и JSX на compound API |
| Типы `PopoverTriggerProps`, `PopoverContentProps`, `PopoverScrollAreaProps` из пакета | `React.ComponentProps<typeof Popover.Trigger/Content/ScrollArea>` | Эти отдельные type exports удалены в GitLab; выводить типы из соответствующих compound-компонентов |

Примеры замены:

```tsx
import { Header, Text, Popover } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return (
    <>
      <Header title="Платформа" accountMenuProps={{ fullName: "Анна Петрова" }} />
      <Text variant="b2" color="brand" shade="medium">Текст</Text>
      <Popover>
        <Popover.Trigger><button type="button">Открыть</button></Popover.Trigger>
        <Popover.Content><Popover.Surface>Содержимое</Popover.Surface></Popover.Content>
      </Popover>
    </>
  );
}
```

## Дополнения и изменение поведения

- `UIKitProvider` включает `LanguageProvider` по умолчанию; используйте `withLanguageProvider={false}`, если управляете им отдельно.
- `AppLayout` получил числовой `size`; старые `container="640"`, `container="720"` и `container="fill"` остаются допустимыми.
- `Color.Secondary` имеет значение `inverse`; `Color.Inverse` сохранён. `Button` поддерживает `generic`, старый временный mapping Generic → brand больше не нужен.
- Загрузка файлов использует общие validation types: ограничения размера/количества/формата и обработчики ошибок. Новые `Uploader`, `InputFileDrop`, `Download`, `Player`, `Photo` решают разные задачи; одноимённые Figma-блоки не всегда являются прямыми аналогами.
- `Table` остаётся публичным именем таблицы. Старые Code Connect snippets с import `DataTable` исправлены на `Table`; это исправление примеров, а не новое переименование публичного export.
- Для фильтров используйте `createDataTableColumnHelper<T>().list/columnFilter/numberRange/dateRange`: helper задаёт соответствующий filterFn и сохраняет тип значения. Примеры доступны в TableColumnsModal Code Connect.
- Поиск Figma `18:2407` теперь использует `SearchAutocomplete`; старый путь `Input/InputSearch.figma.js` сохранён. Размер, prefix/suffix и счётчик не добавляются в его API по догадке.

## Инструменты и Figma

TypeScript обновлён до ветки 6 из GitLab. Добавлены зависимости медиа/PDF, масок, роутинга плейграунда и необязательный peer `dayjs`. Локальные адаптации настроек перечислены в [отчёте обновления](gitlab-redesign-update.md).

Figma используется только для чтения. `.figma.js` и `.docs.md` обновляются в GitHub. Снимок properties находится в `docs/figma-live-audit.json`; `yarn figma:check` проверяет обращения к properties, покрытие enum-значений и TypeScript сгенерированных snippets. Это не публикация Code Connect в Figma.

Версия до обновления сохранена в GitHub тегом `backup/pre-gitlab-c277eef5`. Для возврата используйте отдельную ветку от тега либо revert обновляющих коммитов, без force push в main.
