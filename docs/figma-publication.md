# Документация и Code Connect в Figma

30.10.2026 опубликованы **70 исполняемых parserless React templates для 70 узлов Figma** через официальный `@figma/code-connect@2.1.0`. Все 70 узлов прочитаны обратно через MCP: подтверждены `hasTemplate: true`, непустые snippets и ссылки на runtime в GitHub. Проверено 2429 вариантов этих компонентов; вложенные компоненты из ответов MCP не включались в подсчёт повторно. [Результаты по каждому узлу](figma-publication-results.json).

Все 70 ссылок в поле **Link** подтверждены отдельным чтением: 18 добавлены, у Block исправлена ошибочная ссылка на Card, 51 корректная ссылка сохранена. Description, размеры, свойства и варианты компонентов не менялись. Runtime библиотеки и публичный API в этой итерации не менялись.

Инвентаризация охватывает 71 продуктовую страницу и 150 component sets / отдельных компонентов. Иконки, токены и обзорные страницы исключены. Для 80 узлов указаны blockers: неопубликованный компонент, внутренний элемент либо отсутствие подтверждённого публичного runtime/API. Это не 80 отсутствующих компонентов библиотеки: среди них ячейки, легенды, контроллеры и другие составные части. [Полный список](figma-publication-coverage.json).

Локально хранится 71 `.figma.js`: legacy `DataTable/DataTable.figma.js` сохранён для прежних GitHub URL, но публикацией общего узла управляет только `Table/Table.figma.js`. Для мобильного App используется публичный `AppLayout`; внутренний `MobileAppLayout` из пакета не импортируется.

Настройки до записи сохранены в [backup](figma-connection-backup.json). [Инвентаризация до публикации](figma-current-inventory.json) содержит исходные properties, Link и размеры. Исторические ответы Code Connect сгруппированы без потери node ID вариантов.

Первоначально MCP принимал полный template, но сохранял только source mapping с `hasTemplate: false`. CLI устранил это ограничение. Перед публикацией прошёл dry-run всех 70 шаблонов и отдельная публикация Block с проверкой через MCP. Для замены прежних UI source mappings использован CLI `--force` в пределах проверенных 70 узлов; это не force push в GitHub. Публикации в npm и изменений визуальной библиотеки Figma не было.

При проверке живого примера InputTag обнаружен пустой Size у опубликованного варианта Figma. Template читает исходное значение и явно выбирает `xs`, `sm` либо runtime default `md`; пустая строка не передаётся как prop. Изменение описано в Temporary mapping и опубликовано отдельно. Данные и свойства Figma не исправлялись.

Проверки: 71 template, 463 синтетических сценария, 0 ошибок TypeScript; 114 документов и 112 TSX-примеров, 0 ошибок, включая проверку против dist declarations пакета. Дополнительно 70 реальных default snippets из MCP прошли TypeScript: удалены только служебные обёртки `CodeConnectSnippet` и объединены повторяющиеся импорты. Props компонентов не изменялись. Lint библиотеки: 0 ошибок, 5 прежних предупреждений; изменённые скрипты прошли отдельную проверку. Проверка snippets не означает полного визуального сравнения библиотеки.

Повторяемая подготовка:

```bash
yarn figma:check
node scripts/component-docs.js --write
node scripts/prepare-figma-publication.js
yarn figma:status:write
yarn docs:check
```

[figma.config.json](../figma.config.json) исключает legacy-дубликат DataTable. Скрипт подготовки создаёт очередь и staging-копии в `.cache/figma-publication/`, сам в Figma не пишет. Staging-копии отличаются только `// source=`: вместо локального runtime path используется полный GitHub URL, поскольку CLI сохраняет этот комментарий буквально. Оригинальные templates рядом с runtime сохраняют локально проверяемые пути. Зависимости npm-пакета для CLI не менялись.

CLI требует токен рабочего аккаунта с правами **Code Connect: Write**, **File content: Read** — [требования Figma](https://developers.figma.com/docs/code-connect/quickstart-guide/). Токен хранится только в игнорируемом `.env.txt` / окружении как `FIGMA_ACCESS_TOKEN`. Значение не передаётся аргументом командной строки и не включается в GitHub. После загрузки переменной в окружение CLI запускается из staging-каталога:

```powershell
Push-Location .cache/figma-publication/staged
npm exec --yes --package=@figma/code-connect@2.1.0 -- figma connect publish --config figma.config.json --dry-run --exit-on-unreadable-files
# После успешной проверки:
npm exec --yes --package=@figma/code-connect@2.1.0 -- figma connect publish --config figma.config.json --exit-on-unreadable-files
Pop-Location
```

После повторной публикации результат нужно прочитать через MCP и обновить `figma-publication-results.json`. Наличие локального файла либо один только success CLI не заменяет проверку сохранённого template.
