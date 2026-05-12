# AGENTS.md

## Главные инструкции

Работай в этом репозитории как с UI kit / дизайн-системой. Перед изменениями сначала разберись в существующих компонентах, токенах, stories и локальных паттернах, затем вноси минимальные точечные правки.

Основные правила:

- отвечай пользователю на русском, если он пишет на русском;
- не меняй `node_modules`, `dist`, `.storybook-static` и другие сгенерированные артефакты без явного запроса;
- не удаляй и не переписывай чужие изменения;
- для поиска используй `rg` или `rg --files`;
- для ручных правок используй `apply_patch`;
- новые публичные компоненты добавляй в `src/components`, а не в `dist`;
- raw-значения из Figma не переносить напрямую в runtime components, если есть токен или локальный style helper;
- если точного токена нет, фиксируй `temporary mapping` или `assumption`;
- публичное имя npm-пакета библиотеки: `borrom-ds-test`;
- для публичного компонента, связанного с Figma, формируй сразу оба Figma-facing артефакта: `<Component>.docs.md` и `<Component>.figma.js`;
- после кодовых изменений запускай релевантную проверку: обычно `yarn lint`, `yarn build:types` или `yarn build`;
- для визуальной проверки используй Storybook: `yarn storybook` или `yarn dev`.

## Структура проекта

- `src/components` - основной каталог компонентов библиотеки.
- `src/components/<Component>/<Component>.tsx` - runtime React-компонент.
- `src/components/<Component>/<Component>.types.ts` - публичные props и типы компонента.
- `src/components/<Component>/<Component>.docs.md` - документация компонента для ссылки из Figma и сверки design-to-code mapping.
- `src/components/<Component>/<Component>.figma.js` - Code Connect mapping для Figma Dev Mode, если компонент связан с опубликованным Figma component.
- `src/components/<Component>/index.ts` - локальный export компонента.
- `src/components/<Component>/styles` - стили, variants, sizes, states и style helpers компонента.
- `src/components/index.ts` - общий export компонентов, если используется в текущей структуре.
- `src/index.ts` - публичный export пакета.
- `src/stories` - Storybook stories.
- `src/tokens` - CSS token files.
- `src/styles` - общие стили, shared variants и helpers.
- `src/shared` - переиспользуемые внутренние блоки.
- `Правила создания компонента.md` - подробный workflow создания/обновления компонента по Figma или вручную.
- `Правила работы с Git-ссылкой из Figma.md` - workflow для макетов, где Figma-компонент ссылается на исходники в Git.
- `Правила создания Code Connect.md` - подробный workflow создания/обновления `.figma.js`.
- `docs/templates/code-connect.template.md` - шаблон для будущего `<Component>.figma.js`.
- `docs/templates/component-docs.template.md` - шаблон документа, который можно прикреплять к Figma-компоненту вместо Code Connect.
- `docs/figma-component-connections.md` - трекер компонентов: где уже есть docs и Code Connect, а где не хватает артефактов.

## Что читать в разных задачах

### Создание или обновление компонента

Читать:

- `Правила создания компонента.md`;
- похожие компоненты в `src/components`;
- story похожего компонента в `src/stories`;
- `src/tokens`;
- `src/styles`;
- `src/index.ts` и `src/components/index.ts`, если нужно обновить exports.

Использовать этот сценарий, когда задача просит добавить компонент, обновить компонент по Figma, расширить variants/states или изменить публичный API компонента.

### Макет из Figma с Git-ссылкой на компонент

Читать:

- `Правила работы с Git-ссылкой из Figma.md`;
- путь из Figma-ссылки, обычно `src/components/<Component>`;
- `<Component>.tsx`;
- `<Component>.types.ts`;
- `styles` компонента;
- story компонента в `src/stories`;
- `src/index.ts`, чтобы понять публичный import.

Использовать этот сценарий всегда, когда в Figma-компоненте есть ссылка на Git. Главная задача - импортировать и настроить существующий компонент, а не верстать его заново. Ручная верстка допустима только для layout вокруг готовых компонентов или когда компонента действительно нет.

### Code Connect

Читать:

- `Правила создания Code Connect.md`;
- `docs/templates/code-connect.template.md`;
- существующие `src/**/*.figma.js`, если они есть;
- компонент в `src/components/<Component>`;
- story компонента в `src/stories`;
- Figma properties / variants из задачи.

Использовать этот сценарий только когда пользователь явно просит Code Connect или `.figma.js`. Для обычной Figma-ссылки на Git читать `Правила работы с Git-ссылкой из Figma.md`.

### Обычная правка существующего компонента

Читать:

- файл компонента в `src/components/<Component>`;
- `*.types.ts` компонента, если меняются props;
- `styles` компонента, если меняется визуальное поведение;
- story компонента в `src/stories`;
- соседние компоненты с похожим API.

`Правила создания компонента.md` читать только если правка затрагивает структуру, API, variants/states или Figma-соответствие.

### Работа с токенами

Читать:

- `src/tokens`;
- `src/styles`;
- style files компонента;
- похожие token usages в соседних компонентах.

Не создавать параллельную систему токенов внутри компонента.

### Документация

Читать:

- `AGENTS.md`;
- документ, который пользователь просит обновить;
- `docs/templates/component-docs.template.md`, если нужно создать документацию для ссылки из Figma;
- связанные workflow-файлы, если документация описывает процесс.

## Workflow нового компонента

1. Проверить, нет ли уже подходящего компонента в `src/components`.
2. Найти похожие компоненты и повторить их структуру.
3. Сопоставить Figma variants, states, properties и slots с API компонента, если задача идет из Figma.
4. Сопоставить визуальные значения с `src/tokens`, `src/styles` и локальными style helpers.
5. Создать папку `src/components/<Component>`.
6. Добавить `<Component>.tsx`, `<Component>.types.ts`, `index.ts` и при необходимости `styles/`.
7. Обновить exports в `src/index.ts` и других index-файлах, если компонент публичный.
8. Добавить или обновить story в `src/stories/<Component>.stories.tsx`.
9. Для публичного компонента, связанного с Figma, обязательно добавить или обновить рядом с runtime file пару артефактов за один проход:
   - `src/components/<Component>/<Component>.docs.md` по `docs/templates/component-docs.template.md`;
   - `src/components/<Component>/<Component>.figma.js` по `docs/templates/code-connect.template.md`.
10. Если часть Figma properties шире текущего runtime API, всё равно создать `.figma.js` с безопасными ближайшими mapping и явными `Temporary mapping` комментариями. Не создавать `.figma.js` только если Figma component не опубликован, Figma properties недоступны или невозможно выдать корректный snippet без несуществующих props; blocker зафиксировать в `<Component>.docs.md` в `Temporary mappings / assumptions`.
11. Обновить трекер командой `yarn figma:status:write`.
12. Запустить релевантную проверку.
13. Проверить компонент в Storybook.

## Команды

- `yarn storybook` или `yarn dev` - запуск Storybook.
- `yarn build` - сборка библиотеки.
- `yarn build:types` - проверка и сборка типов.
- `yarn lint` - проверка lint.
- `yarn format:check` - проверка форматирования.
- `yarn figma:status` - вывести статус docs/Code Connect по компонентам.
- `yarn figma:status:write` - обновить `docs/figma-component-connections.md`.

## Запреты и осторожность

- Не менять публичный API без проверки stories и usages.
- Не добавлять зависимости без необходимости.
- Не создавать компонент в `dist`.
- Не верстать вручную компонент, если Figma дала Git-ссылку на готовый компонент.
- Не использовать Figma fallback code как финальную реализацию без адаптации к проекту.
- Не скрывать отсутствующие токены: фиксируй assumptions рядом с mapping или в комментарии.
