# Обновление из GitLab: c277eef5

## Версия до обновления

- Дата подготовки: 30 октября 2026 года.
- GitHub: https://github.com/borrom25/DesignSystem
- Исходный коммит GitHub и локальной main: `a07ec23eb9bf4c5677a3f837c49179274ddcd86e`.
- GitLab: https://gitlab.alabuga.space/ssr/tribes/tribe-2/design-system/ui-lib/-/tree/redesign
- Зафиксированный источник GitLab: `c277eef53c8f0b655064d3c67855f2df70ddfccd` (28 октября 2026).
- Резервный тег GitHub: `backup/pre-gitlab-c277eef5`.
- Рабочая ветка: `codex/update-gitlab-redesign-c277eef5`.

Перед переносом компонентов этот документ коммитится и отправляется в GitHub вместе с резервным тегом. Ключ GitLab из `.env.txt` и состояние локального сервера остаются только на компьютере.

## Принятый результат

Актуальные runtime API, токены, Storybook и `apps/docs` берутся из указанного коммита GitLab. Пакет и публичные примеры сохраняют имя `borrom-ds-test`. Документация и Code Connect проверяются относительно обновлённого API; изменения опубликованных связок в самой Figma и публикация в npm не входят в обновление.

## Что перенесено и адаптировано

Проверено 1614 файлов источника GitLab в `src`, `.storybook`, `apps/docs`: пропущенных файлов нет. Runtime отличается от GitLab только исправлением InputTag xs: несуществующий CSS token `--generic-spacing-0.5` заменён существующим `--generic-spacing-05` (2 px). Это устраняет предупреждение CSS optimizer без добавления нового токена.

Сохранены имя и exports пакета `borrom-ds-test`, имя CSS `borrom-ds-test.css`, команды публикации и управления сервером. Зависимости и TypeScript согласованы с GitLab. В `apps/docs` исправлены несовместимые примеры и aliases, инструкции установки и ссылки; корпоративный CLI и настройки публикации GitLab не переносились.

Документация описывает 110 публичных React-компонентов. Есть 59 parserless `.figma.js` (58 основных связок и сохранённый дополнительный template таблицы). Прежние пути Table и InputSearch сохранены. Снимок Figma properties прочитан через MCP, файл Figma и опубликованные mappings не изменялись. Сводка: [публичные компоненты](public-components.md), [трекер](figma-component-connections.md), [миграция](migration-gitlab-c277eef5.md), [инвентаризация](gitlab-update-inventory.md).

## Проверки

| Проверка | Результат |
| --- | --- |
| `yarn lint` | Проходит; 5 предупреждений, 0 ошибок |
| `yarn build` | Проходит: ESM, CJS, CSS, декларации типов |
| `yarn build-storybook` | Проходит |
| `yarn check:docs` | Проходит |
| `yarn build:docs` | Проходит |
| `tsc --noEmit -p tsconfig.json` | Проходит, включая stories |
| `yarn figma:check` | 59 templates, 421 distinct snippets, 0 ошибок; проверены property names/types и покрытие enum по read-only снимку Figma |
| `yarn docs:check` | 114 документов, 112 TSX-примеров, 0 ошибок; проверены относительные ссылки |
| `node scripts/check-component-docs.js --package` | Те же примеры проходят против `dist/index.d.ts` |
| `yarn test:uploads` | MIME/extension, граница размера, отказ по размеру/типу/custom validator, single file, суммарный лимит проходят |
| ESM/CJS импорт собранного entrypoint | 179 exports, Button/Table/Player доступны |
| `npm pack --dry-run --json` | Проходит; CSS, ESM/CJS и декларации включены; env и исходные артефакты документации не входят в пакет |
| Проверка ключа GitLab | Совпадений значения ключа среди доступных для коммита файлов нет; `.env.txt` игнорируется |

Предупреждения lint относятся к Fast Refresh в плейграунде, существующему комментарию lint в `scripts/commit.js` и зависимости эффекта InputPhone. Сборки предупреждают о крупных chunks медиа/PDF и циклических re-exports из barrel-файлов GitLab. Эти предупреждения не объявляются исправленными; требуется отдельная оптимизация bundles.

## Визуальная проверка и её пределы

В Storybook проверены Button в светлой/тёмной теме, disabled и выбор цвета; ввод Input и изменение счётчика; раскрытие Select и выбор Apple; ручной ввод DateRange с подтверждённым значением 30.10.2026; редактирование ячейки Table с событием `reason=blur`. В плейграунде подтверждены запуск, навигация на быстрый старт и инструкции `borrom-ds-test`.

Полный визуальный PASS не заявляется. При дальнейшем UI-тестировании встроенный браузер вернул viewport 0×0, а Windows Computer Use остановился, поскольку не смог достоверно определить URL браузера. Не подтверждены итоговое появление выбранного файла, полный сценарий медиа/Carousel/Photo, модальные окна и адаптивные экраны. Эти сценарии требуют ручной проверки в Storybook; успешная сборка не заменяет её.

Для Uploader не создавался Code Connect: Figma Uploader — строка загруженного файла, runtime Uploader — drop zone. Для внутреннего Loader mapping заблокирован отсутствием публичного export. Остальные неподтверждённые соответствия отмечены в документах; несуществующие props не добавлялись.

## GitHub и сохранность

Резервный коммит `6772ac5` и тег `backup/pre-gitlab-c277eef5` отправлены в GitHub до переноса runtime. Обновление кода и документации фиксируется отдельными коммитами. Force push и публикация npm не выполняются. Локальные `.env.txt` и изменённый `.dev-server.state.json` исключены из коммитов.
