# Статус связки компонентов с Figma

Источник списка — публичный TypeScript entrypoint пакета, а не имена папок. Compound subcomponents описаны в документах родительских компонентов; отдельно экспортируемые компоненты имеют отдельные строки.

Публичных React-компонентов: 110. Документы: 110. Основные Code Connect templates: 67.

Наличие файлов не означает успешной проверки или публикации. Проверки содержимого: `yarn docs:check` и `yarn figma:check`. [Текущий статус публикации](figma-publication.md) и [полная инвентаризация](figma-current-inventory.json) учитываются отдельно.

В таблице MCP означает наличие прочитанного контракта properties в `figma-live-audit.json`. Это не статус публикации локального template в Figma. Отсутствие отдельной story допустимо для составных и вспомогательных компонентов; их API проверяется через документацию и stories родительского компонента.

Обновление: сначала `yarn figma:check`, затем `node scripts/component-docs.js --write`, затем `yarn figma:status:write`.

| Компонент | Runtime | Story | Docs | figma.js | MCP properties | Link подтверждён (узлов) | Исполняемый template подтверждён (узлов) | Статус файлов |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Accordion | да | да | [да](../src/components/Accordion/Accordion.docs.md) | да | да | 1 | 0 | оба артефакта |
| AccordionBlock | да | нет | [да](../src/components/AccordionBlock/AccordionBlock.docs.md) | да | да | 1 | 0 | оба артефакта |
| AccountMenu | да | да | [да](../src/components/AccountMenu/AccountMenu.docs.md) | да | да | 1 | 0 | оба артефакта |
| ActionPopover | да | да | [да](../src/components/ActionPopover/ActionPopover.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| Alert | да | да | [да](../src/components/Alert/Alert.docs.md) | да | да | 1 | 0 | оба артефакта |
| AppLayout | да | да | [да](../src/components/AppLayout/AppLayout.docs.md) | да | да | 2 | 0 | оба артефакта |
| AppLoader | да | нет | [да](../src/components/AppLoader/AppLoader.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| AppLoaderInContainer | да | нет | [да](../src/components/AppLoader/AppLoaderInContainer.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| Avatar | да | да | [да](../src/components/Avatar/Avatar.docs.md) | да | да | 1 | 0 | оба артефакта |
| Banner | да | да | [да](../src/components/Banner/Banner.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| BarChartHorizontal | да | да | [да](../src/components/BarChartHorizontal/BarChartHorizontal.docs.md) | да | да | 1 | 0 | оба артефакта |
| BarChartVertical | да | да | [да](../src/components/BarChartVertical/BarChartVertical.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| BarMenu | да | нет | [да](../src/components/BarMenu/BarMenu.docs.md) | да | да | 1 | 0 | оба артефакта |
| Block | да | да | [да](../src/components/Block/Block.docs.md) | да | да | 1 | 0 | оба артефакта |
| Bubble | да | да | [да](../src/components/Bubble/Bubble.docs.md) | да | да | 1 | 0 | оба артефакта |
| Button | да | да | [да](../src/components/Button/Button.docs.md) | да | да | 1 | 0 | оба артефакта |
| ButtonDrop | да | нет | [да](../src/components/ButtonDrop/ButtonDrop.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| Calendar | да | да | [да](../src/components/Calendar/Calendar.docs.md) | да | да | 1 | 0 | оба артефакта |
| CalendarFilterPanel | да | нет | [да](../src/components/CalendarFilter/CalendarFilterPanel.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| Card | да | да | [да](../src/components/Card/Card.docs.md) | да | да | 1 | 0 | оба артефакта |
| Carousel | да | да | [да](../src/components/Carousel/Carousel.docs.md) | да | да | 1 | 0 | оба артефакта |
| Cascader | да | да | [да](../src/components/Cascader/Cascader.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| CheckBox | да | да | [да](../src/components/CheckBox/CheckBox.docs.md) | да | да | 1 | 0 | оба артефакта |
| Chips | да | да | [да](../src/components/Chips/Chips.docs.md) | да | да | 1 | 0 | оба артефакта |
| CloseBtn | да | да | [да](../src/components/CloseBtn/CloseBtn.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| CopyLink | да | нет | [да](../src/components/CopyLink/CopyLink.docs.md) | да | да | 1 | 0 | оба артефакта |
| Counter | да | да | [да](../src/components/Counter/Counter.docs.md) | да | да | 1 | 0 | оба артефакта |
| DataTableCustomFilter | да | нет | [да](../src/components/DataTable/ui/DataTableCustomFilter.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| DataTableDateFilter | да | нет | [да](../src/components/DataTable/ui/DataTableDateFilter.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| DataTableDateRangeFilter | да | нет | [да](../src/components/DataTable/ui/DataTableDateRangeFilter.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| DataTableFilterRenderer | да | нет | [да](../src/components/DataTable/ui/DataTableFilterRenderer.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| DataTableListFilter | да | нет | [да](../src/components/DataTable/ui/DataTableListFilter.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| DataTableNumberRangeFilter | да | нет | [да](../src/components/DataTable/ui/DataTableNumberRangeFilter.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| DataTableRadioFilter | да | нет | [да](../src/components/DataTable/ui/DataTableRadioFilter.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| DatePicker | да | да | [да](../src/components/DatePicker/DatePicker.docs.md) | да | да | 1 | 0 | оба артефакта |
| DateRange | да | да | [да](../src/components/DateRange/DateRange.docs.md) | да | да | 1 | 0 | оба артефакта |
| DateRangeCompact | да | нет | [да](../src/components/DateRange/DateRangeCompact.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| Download | да | да | [да](../src/components/Download/Download.docs.md) | да | да | 1 | 0 | оба артефакта |
| FieldHint | да | нет | [да](../src/components/Field/FieldHint.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| FieldLabel | да | нет | [да](../src/components/Field/FieldLabel.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| FieldWrapper | да | нет | [да](../src/components/Field/FieldWrapper.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| FilterList | да | нет | [да](../src/components/FilterList/FilterList.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| FilterListCountLabel | да | нет | [да](../src/components/FilterList/ui/FilterListCountLabel.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| FilterListPanel | да | нет | [да](../src/components/FilterList/ui/FilterListPanel.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| FilterPanel | да | нет | [да](../src/components/Filter/FilterPanel.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| Header | да | да | [да](../src/components/Header/Header.docs.md) | да | да | 1 | 0 | оба артефакта |
| HeaderInside | да | да | [да](../src/components/HeaderInside/HeaderInside.docs.md) | да | да | 1 | 0 | оба артефакта |
| IconAvatar | да | да | [да](../src/components/IconAvatar/IconAvatar.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| IconButton | да | да | [да](../src/components/IconButton/IconButton.docs.md) | да | да | 1 | 0 | оба артефакта |
| Input | да | да | [да](../src/components/Input/Input.docs.md) | да | да | 1 | 0 | оба артефакта |
| InputFileDrop | да | да | [да](../src/components/InputFileDrop/InputFileDrop.docs.md) | да | да | 1 | 0 | оба артефакта |
| InputFiles | да | да | [да](../src/components/InputFiles/InputFiles.docs.md) | да | да | 1 | 0 | оба артефакта |
| InputImg | да | да | [да](../src/components/InputImg/InputImg.docs.md) | да | да | 1 | 0 | оба артефакта |
| InputMessage | да | да | [да](../src/components/InputMessage/InputMessage.docs.md) | да | да | 1 | 0 | оба артефакта |
| InputNumber | да | да | [да](../src/components/InputNumber/InputNumber.docs.md) | да | да | 1 | 0 | оба артефакта |
| InputNumberCompact | да | нет | [да](../src/components/InputNumber/InputNumberCompact.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| InputPassword | да | да | [да](../src/components/InputPassword/InputPassword.docs.md) | да | да | 1 | 0 | оба артефакта |
| InputPhone | да | да | [да](../src/components/InputPhone/InputPhone.docs.md) | да | да | 1 | 0 | оба артефакта |
| InputTag | да | да | [да](../src/components/InputTag/InputTag.docs.md) | да | да | 1 | 0 | оба артефакта |
| InsideSidebar | да | да | [да](../src/components/InsideSidebar/InsideSidebar.docs.md) | да | да | 1 | 0 | оба артефакта |
| Label | да | да | [да](../src/components/Label/Label.docs.md) | да | да | 1 | 0 | оба артефакта |
| Line | да | да | [да](../src/components/Line/Line.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| LineChart | да | да | [да](../src/components/LineChart/LineChart.docs.md) | да | да | 2 | 0 | оба артефакта |
| ListItem | да | да | [да](../src/components/ListItem/ListItem.docs.md) | да | да | 1 | 0 | оба артефакта |
| MinusCheckBox | да | нет | [да](../src/components/MinusCheckBox/MinusCheckBox.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| Modal | да | да | [да](../src/components/Modal/Modal.docs.md) | да | да | 1 | 0 | оба артефакта |
| Modals | да | нет | [да](../src/components/Modal/Modals.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| MultiSelect | да | да | [да](../src/components/MultiSelect/MultiSelect.docs.md) | да | да | 1 | 0 | оба артефакта |
| MultiTag | да | да | [да](../src/components/MultiTag/MultiTag.docs.md) | да | да | 1 | 0 | оба артефакта |
| Pagination | да | да | [да](../src/components/Pagination/Pagination.docs.md) | да | да | 1 | 0 | оба артефакта |
| Photo | да | да | [да](../src/components/Photo/Photo.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| PieChart | да | да | [да](../src/components/PieChart/PieChart.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| PinInput | да | да | [да](../src/components/PinInput/PinInput.docs.md) | да | да | 1 | 0 | оба артефакта |
| Player | да | да | [да](../src/components/Player/Player.docs.md) | да | да | 1 | 0 | оба артефакта |
| Plug | да | да | [да](../src/components/Plug/Plug.docs.md) | да | да | 1 | 0 | оба артефакта |
| Popover | да | да | [да](../src/components/Popover/Popover.docs.md) | да | да | 1 | 0 | оба артефакта |
| ProgressBar | да | да | [да](../src/components/ProgressBar/ProgressBar.docs.md) | да | да | 1 | 0 | оба артефакта |
| ProgressPie | да | да | [да](../src/components/ProgressPie/ProgressPie.docs.md) | да | да | 1 | 0 | оба артефакта |
| Radio | да | да | [да](../src/components/Radio/Radio.docs.md) | да | да | 1 | 0 | оба артефакта |
| SearchAutocomplete | да | нет | [да](../src/components/SearchAutocomplete/SearchAutocomplete.docs.md) | да | да | 1 | 0 | оба артефакта |
| Segmented | да | да | [да](../src/components/Segmented/Segmented.docs.md) | да | да | 1 | 0 | оба артефакта |
| Select | да | да | [да](../src/components/Select/Select.docs.md) | да | да | 1 | 0 | оба артефакта |
| SelectContent | да | нет | [да](../src/components/Select/ui/SelectContent.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| SelectGroup | да | нет | [да](../src/components/Select/ui/SelectGroup.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| SelectItem | да | нет | [да](../src/components/Select/ui/SelectItem.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| SelectLabel | да | нет | [да](../src/components/Select/ui/SelectLabel.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| SelectTrigger | да | нет | [да](../src/components/Select/ui/SelectTrigger.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| SelectValue | да | нет | [да](../src/components/Select/ui/SelectValue.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| Separator | да | да | [да](../src/components/Separator/Separator.docs.md) | да | да | 1 | 0 | оба артефакта |
| Sidebar | да | да | [да](../src/components/Sidebar/Sidebar.docs.md) | да | да | 1 | 0 | оба артефакта |
| Skeleton | да | да | [да](../src/components/Skeleton/Skeleton.docs.md) | да | да | 1 | 0 | оба артефакта |
| Slider | да | да | [да](../src/components/Slider/Slider.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| StepBar | да | да | [да](../src/components/StepBar/StepBar.docs.md) | да | да | 1 | 0 | оба артефакта |
| Switcher | да | да | [да](../src/components/Switcher/Switcher.docs.md) | да | да | 1 | 0 | оба артефакта |
| Tab | да | да | [да](../src/components/Tab/Tab.docs.md) | да | да | 2 | 0 | оба артефакта |
| Table | да | да | [да](../src/components/DataTable/DataTable.docs.md) | да | да | 1 | 0 | оба артефакта |
| TableColumnsModal | да | нет | [да](../src/components/TableColumnsModal/TableColumnsModal.docs.md) | да | да | 1 | 0 | оба артефакта |
| TabsOverflow | да | да | [да](../src/components/TabsOverflow/TabsOverflow.docs.md) | да | да | 1 | 0 | оба артефакта |
| Tag | да | да | [да](../src/components/Tag/Tag.docs.md) | да | да | 1 | 0 | оба артефакта |
| Text | да | да | [да](../src/components/Text/Text.docs.md) | да | да | 1 | 0 | оба артефакта |
| TextArea | да | да | [да](../src/components/TextArea/TextArea.docs.md) | да | да | 1 | 0 | оба артефакта |
| ThemeSwitcher | да | да | [да](../src/components/ThemeSwitcher/ThemeSwitcher.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| TimeBar | да | да | [да](../src/components/TimeBar/TimeBar.docs.md) | да | да | 1 | 0 | оба артефакта |
| TimePicker | да | да | [да](../src/components/TimePicker/TimePicker.docs.md) | да | да | 1 | 0 | оба артефакта |
| Tooltip | да | да | [да](../src/components/Tooltip/Tooltip.docs.md) | да | да | 1 | 0 | оба артефакта |
| TooltipContent | да | нет | [да](../src/components/Tooltip/ui/TooltipContent.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| TooltipSurface | да | нет | [да](../src/components/Tooltip/ui/TooltipSurface.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| TooltipTrigger | да | нет | [да](../src/components/Tooltip/ui/TooltipTrigger.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| Uploader | да | да | [да](../src/components/Uploader/Uploader.docs.md) | нет | да | 0 | 0 | docs; blocker/ограничение Code Connect в документе |
| UserItem | да | да | [да](../src/components/UserItem/UserItem.docs.md) | да | да | 1 | 0 | оба артефакта |

Дополнительные сохранённые ссылки: [Table](../src/components/Table/Table.docs.md), [Search / Autocomplete](../src/components/Input/InputSearch.docs.md), [внутренний Loader](../src/components/Loader/Loader.docs.md). Для Table также сохранён `Table/Table.figma.js`; для SearchAutocomplete сохранён путь `Input/InputSearch.figma.js`.
