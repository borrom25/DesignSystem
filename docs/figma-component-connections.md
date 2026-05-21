# Статус связки компонентов с Figma

Этот файл показывает, у каких компонентов уже есть оба Figma-facing артефакта:

- `<Component>.docs.md` для документации и design-to-code mapping;
- `<Component>.figma.js` для Code Connect в Figma Dev Mode.

Обновить файл можно командой:

```bash
yarn figma:status:write
```

Итого: 43/72 готово, 0 только docs, 0 только figma.js, 29 не начато.

| Компонент | Публичный export | Runtime | Story | Docs | figma.js | Статус | Что не хватает |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Accordion | да | да | да | да | да | готово | ok |
| AccountMenu | да | да | да | да | да | готово | ok |
| Alert | да | да | да | да | да | готово | ok |
| AppLayout | да | да | да | да | да | готово | ok |
| Avatar | да | да | да | да | да | готово | ok |
| Banner | да | да | да | нет | нет | не начато | нет docs, нет figma.js |
| BarChartVertical | да | да | нет | нет | нет | не начато | нет docs, нет figma.js |
| BarMenu | да | да | нет | да | да | готово | ok |
| Bubble | да | да | да | нет | нет | не начато | нет docs, нет figma.js |
| Button | да | да | да | да | да | готово | ok |
| ButtonDrop | да | да | нет | нет | нет | не начато | нет docs, нет figma.js |
| Calendar | да | да | да | да | да | готово | ok |
| CalendarFilter | да | нет | нет | нет | нет | не начато | нет docs, нет figma.js, нет root runtime |
| Card | да | да | да | да | да | готово | ok |
| Cascader | да | да | да | нет | нет | не начато | нет docs, нет figma.js |
| CheckBox | да | да | да | да | да | готово | ok |
| Chips | да | да | да | да | да | готово | ok |
| CloseBtn | да | да | да | нет | нет | не начато | нет docs, нет figma.js |
| Counter | да | да | да | да | да | готово | ok |
| DataTable | да | да | да | нет | нет | не начато | нет docs, нет figma.js |
| DatePicker | да | да | да | нет | нет | не начато | нет docs, нет figma.js |
| DateRange | да | да | да | да | да | готово | ok |
| Field | да | нет | нет | нет | нет | не начато | нет docs, нет figma.js, нет root runtime |
| Filter | да | нет | нет | нет | нет | не начато | нет docs, нет figma.js, нет root runtime |
| FilterList | да | да | нет | нет | нет | не начато | нет docs, нет figma.js |
| Header | да | да | да | нет | нет | не начато | нет docs, нет figma.js |
| HeaderInside | да | да | да | да | да | готово | ok |
| IconAvatar | да | да | да | нет | нет | не начато | нет docs, нет figma.js |
| IconButton | да | да | да | да | да | готово | ok |
| Input | да | да | да | да | да | готово | ok |
| InputFiles | да | да | да | да | да | готово | ok |
| InputImg | да | да | да | да | да | готово | ok |
| InputMessage | да | да | да | нет | нет | не начато | нет docs, нет figma.js |
| InputNumber | да | да | да | да | да | готово | ok |
| InputPassword | да | да | да | да | да | готово | ok |
| InputPhone | да | да | да | да | да | готово | ok |
| InputTag | да | да | да | да | да | готово | ok |
| InsideSidebar | да | да | да | нет | нет | не начато | нет docs, нет figma.js |
| Label | да | да | да | да | да | готово | ok |
| Line | да | да | да | нет | нет | не начато | нет docs, нет figma.js |
| ListItem | да | да | да | да | да | готово | ok |
| MinusCheckBox | да | да | нет | нет | нет | не начато | нет docs, нет figma.js |
| Modal | да | да | да | нет | нет | не начато | нет docs, нет figma.js |
| MultiSelect | да | да | да | да | да | готово | ok |
| MultiTag | да | да | да | да | да | готово | ok |
| Pagination | да | да | да | да | да | готово | ok |
| PinInput | да | да | да | да | да | готово | ok |
| Plug | да | да | да | нет | нет | не начато | нет docs, нет figma.js |
| Popover | да | да | да | да | да | готово | ok |
| ProgressBar | да | да | да | нет | нет | не начато | нет docs, нет figma.js |
| ProgressPie | да | да | да | нет | нет | не начато | нет docs, нет figma.js |
| Radio | да | да | да | да | да | готово | ok |
| SearchAutocomplete | да | да | нет | нет | нет | не начато | нет docs, нет figma.js |
| Segmented | да | да | да | да | да | готово | ok |
| Select | да | да | да | да | да | готово | ok |
| Sidebar | да | да | да | да | да | готово | ok |
| Skeleton | да | да | да | нет | нет | не начато | нет docs, нет figma.js |
| Slider | да | да | да | нет | нет | не начато | нет docs, нет figma.js |
| Space | да | да | да | нет | нет | не начато | нет docs, нет figma.js |
| StepBar | да | да | да | да | да | готово | ok |
| Switcher | да | да | да | да | да | готово | ok |
| Tab | да | да | да | да | да | готово | ok |
| Table | да | да | нет | да | да | готово | ok |
| TableColumnsModal | да | да | нет | да | да | готово | ok |
| TabsOverflow | да | да | да | да | да | готово | ok |
| Tag | да | да | да | да | да | готово | ok |
| Text | да | да | да | нет | нет | не начато | нет docs, нет figma.js |
| TextArea | да | да | да | нет | нет | не начато | нет docs, нет figma.js |
| TimeBar | да | да | да | да | да | готово | ok |
| TimePicker | да | да | да | нет | нет | не начато | нет docs, нет figma.js |
| Tooltip | да | да | да | да | да | готово | ok |
| UserItem | да | да | да | да | да | готово | ok |
