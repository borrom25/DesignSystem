# Документация и Code Connect в Figma

Сверка 30.10.2026: 71 продуктовая страница, 150 component sets / отдельных компонентов. Иконки, токены и обзорные страницы исключены из списка runtime-компонентов.

Подготовлены 70 основных шаблонов для 70 узлов Figma. Локально хранится 71 `.figma.js`: старый `DataTable/DataTable.figma.js` сохранён для прежних GitHub URL, но публикацией общего узла управляет только `Table/Table.figma.js`.

Для 80 узлов записаны blockers: неопубликованный компонент, внутренний элемент или отсутствие подтверждённого публичного runtime/API. Это не 80 отсутствующих компонентов библиотеки: в число входят ячейки, легенды, контроллеры и другие составные части. [Полный список и причины](figma-publication-coverage.json).

Поле **Link** у component set должно вести на документацию в GitHub. Корректные существующие ссылки сохраняются. Description, варианты, свойства и визуальные параметры изменению не подлежат. Code Connect — отдельный полный parserless React template с публичными импортами `borrom-ds-test`.

Рабочий аккаунт `design-5@ssr-business-games.com` с Full seat восстановлен. **Все 70 Link прочитаны обратно и подтверждены:** 18 добавлены, у Block исправлена ошибочная ссылка на Card, 51 корректная ссылка сохранена. Размеры, описания и component properties сохранены; runtime и API не менялись. [Фактические результаты по каждому узлу](figma-publication-results.json).

**Полная публикация Code Connect не подтверждена.** `add_code_connect_map` получил полный исполняемый template Block и вернул success, но `get_code_connect_map` затем показал только source mapping с `hasTemplate: false`. Альтернативный `send_code_connect_mappings` для Skeleton дал такой же readback. Повторный bulk-вызов для Block вернул `Component is already mapped to code`. Дальнейшие 68 записи templates не выполнялись, чтобы не заменять действующие связи неподтверждённой публикацией. Source mappings Block и Skeleton сохранены; это не исполняемые React-примеры с props.

Это ограничение текущего поведения MCP, а не ошибка авторизации. Для завершения нужен работающий путь публикации parserless templates (исправленный MCP либо CLI с доступом Figma Code Connect). Все 70 шаблонов уже доступны в GitHub начиная с `ea3f04e`.

Официальный CLI `@figma/code-connect@2.1.0` успешно разобрал все 70 шаблонов: результат содержит полный template и `templateData.isParserless: true`. Конфигурация [figma.config.json](../figma.config.json) исключает legacy-дубликат DataTable. CLI запускался через npm exec, зависимости библиотеки не менялись. Проверка parse локальная и не означает публикацию.

Для публикации CLI требуется личный токен рабочего аккаунта: **Code Connect: Write**, **File content: Read** — [требования Figma](https://developers.figma.com/docs/code-connect/quickstart-guide/). Сохранить его локально как `FIGMA_ACCESS_TOKEN` в игнорируемом `.env.txt` или окружении; не добавлять значение токена в командную строку, документы или GitHub. Публикация будет выполнена после появления токена, сначала с проверкой dry-run и одного компонента, затем с чтением результата через MCP. Для конфликтов с существующими source mappings потребуется точечная замена только проверенных связок.

Данные до записи сохранены в [backup](figma-connection-backup.json); [инвентаризация](figma-current-inventory.json) содержит properties, Link и размеры. Ответы Code Connect сгруппированы без потери node ID вариантов. Ранее сохранённые связи указывали на исходники; ответы MCP не подтвердили наличие исполняемых templates.

Проверки: 71 template, 463 синтетических сценария, 0 ошибок TypeScript; 114 документов и 112 TSX-примеров, 0 ошибок, в том числе против dist declarations пакета. Lint: 0 ошибок, 5 прежних предупреждений. Runtime, API и зависимости в этой итерации не менялись. Это проверка локального содержимого, а не доказательство публикации или визуального совпадения.

Повторяемая подготовка:

```bash
yarn figma:check
node scripts/component-docs.js --write
node scripts/prepare-figma-publication.js
yarn figma:status:write
yarn docs:check
```

Очередь с полным кодом создаётся в `.cache/figma-publication/queue.json` и не попадает в пакет или GitHub. Скрипт только готовит данные и не пишет в Figma. После публикации результат должен быть прочитан обратно и сохранён отдельно, без вывода статуса по одному лишь наличию локального файла.
