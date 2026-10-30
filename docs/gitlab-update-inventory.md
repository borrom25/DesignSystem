# Инвентаризация обновления из GitLab

База GitHub: `a07ec23eb9bf4c5677a3f837c49179274ddcd86e`. Источник GitLab: `c277eef53c8f0b655064d3c67855f2df70ddfccd`.

## Каталоги новых компонентов

`AccordionBlock`, `ActionPopover`, `AppLoader`, `Block`, `CopyLink`, `Download`, `DragHandle`, `InputFileDrop`, `Loader`, `MobileAppLayout`, `Photo`, `Player`, `Separator`, `ThemeSwitcher`, `Uploader`

## Изменения публичного entrypoint

Добавлены: `LanguageProvider`, `useLanguage`, `Plug`, `PlugProps`, `InputFilesValidationProps`, `Uploader`, `UploaderProps`, `InputImgValidationProps`, `InputFileDrop`, `InputFileDropProps`, `InputFileDropValidationProps`, `ProgressPie`, `ConfigProps`, `ProgressPieProps`, `ProgressPieColors`, `ProgressCircleProps`, `ProgressPieSize`, `CopyLink`, `CopyLinkProps`, `DateRangeDateInput`, `DateRangeNativeValue`, `DateRangeValueInput`, `LabelColor`, `ProgressBarLabelPosition`, `TabsOverflowItemWrapper`, `StepBar`, `useStepBar`, `StepBarItem`, `StepBarProps`, `StepBarTransitionDirection`, `StepBarTransitionMeta`, `CardTextProps`, `Block`, `BlockVariant`, `BlockProps`, `BlockVariantType`, `Separator`, `SeparatorProps`, `AccordionTextProps`, `AccordionBlock`, `AccordionBlockLabelPosition`, `AccordionBlockProps`, `TextVariant`, `TextColor`, `TextShade`, `TextAlign`, `TextOverflow`, `TextDecoration`, `TEXT_VARIANTS`, `TEXT_COLOR_CATEGORIES`, `TEXT_COLOR_SHADES`, `TEXT_VARIANT_CATEGORY`, `COLOR_CATEGORY_TOKEN`, `TextCategory`, `TextColorCategory`, `TextColorShade`, `Photo`, `PhotoItem`, `PhotoProps`, `PieChartData`, `BarChartHorizontalData`, `Download`, `DownloadProps`, `Player`, `PlayerLabelPosition`, `PlayerProps`, `PopoverSearchConfig`, `PopoverSearchProps`, `AppLoader`, `AppLoaderInContainer`, `AppLoaderProps`, `AppLoaderInContainerProps`, `ActionPopover`, `ActionPopoverProps`, `DataTableRadioFilter`, `RadioFilterConfig`, `DataTableRadioFilterOptions`, `UploadValidateFile`, `UploadValidateFileContext`, `UploadValidateFileResult`, `UploadValidationError`, `UploadValidationErrorCode`, `UploadValidationErrorHandler`, `UploadValidationProps`, `ThemeSwitcher`, `ThemeSwitcherProps`.

Удалены отдельные exports: `PopoverTrigger`, `PopoverContent`, `PopoverSurface`, `PopoverScrollArea`, `PopoverTriggerProps`, `PopoverContentProps`, `PopoverScrollAreaProps`.

## Изменённые объявления Props

Это структурный список для ревью, включая внутренние props. Он дополняет [инструкцию миграции](migration-gitlab-c277eef5.md) и [актуальный публичный API](public-components.md).

| Исходник | Изменённые объявления |
| --- | --- |
| [src/components/Accordion/Accordion.types.ts](../src/components/Accordion/Accordion.types.ts) | `AccordionProps` |
| [src/components/AccountMenu/AccountMenu.types.ts](../src/components/AccountMenu/AccountMenu.types.ts) | `AccountMenuContentProps` |
| [src/components/AppLayout/AppLayout.types.ts](../src/components/AppLayout/AppLayout.types.ts) | `AppLayoutProps` |
| [src/components/Avatar/Avatar.types.ts](../src/components/Avatar/Avatar.types.ts) | `AvatarProps` |
| [src/components/BarChartHorizontal/BarChartHorizontal.types.ts](../src/components/BarChartHorizontal/BarChartHorizontal.types.ts) | `BarChartHorizontalProps` |
| [src/components/BarMenu/BarMenu.types.ts](../src/components/BarMenu/BarMenu.types.ts) | `BarMenuTriggerProps`, `BarMenuProps` |
| [src/components/Bubble/Bubble.types.ts](../src/components/Bubble/Bubble.types.ts) | `BubbleFileProps` |
| [src/components/Button/Button.types.ts](../src/components/Button/Button.types.ts) | `ButtonOnlyProps` |
| [src/components/ButtonDrop/ButtonDrop.types.ts](../src/components/ButtonDrop/ButtonDrop.types.ts) | `ButtonDropProps` |
| [src/components/Calendar/Calendar.types.ts](../src/components/Calendar/Calendar.types.ts) | `CalendarHeaderProps` |
| [src/components/CalendarFilter/CalendarFilter.types.ts](../src/components/CalendarFilter/CalendarFilter.types.ts) | `CalendarFilterPanelProps` |
| [src/components/Card/Card.types.ts](../src/components/Card/Card.types.ts) | `CardProps` |
| [src/components/Carousel/Carousel.types.ts](../src/components/Carousel/Carousel.types.ts) | `CarouselProps` |
| [src/components/Counter/Counter.types.ts](../src/components/Counter/Counter.types.ts) | `CounterProps` |
| [src/components/DataTable/types/DataTable.popoverAction.types.ts](../src/components/DataTable/types/DataTable.popoverAction.types.ts) | `DataTablePopoverActionProps` |
| [src/components/DataTable/types/DataTable.types.ts](../src/components/DataTable/types/DataTable.types.ts) | `DataTableToolbarProps`, `TableProps`, `TableHeaderCellProps` |
| [src/components/DatePicker/DatePicker.types.ts](../src/components/DatePicker/DatePicker.types.ts) | `DatePickerProps`, `UseDatePickerValueProps` |
| [src/components/DateRange/DateRange.types.ts](../src/components/DateRange/DateRange.types.ts) | `DateRangeOwnProps`, `DateRangeFieldProps` |
| [src/components/DateRange/DateRangeCompact.types.ts](../src/components/DateRange/DateRangeCompact.types.ts) | `DateRangeCompactProps` |
| [src/components/Field/Field.types.ts](../src/components/Field/Field.types.ts) | `FieldLabelProps` |
| [src/components/Filter/Filter.types.ts](../src/components/Filter/Filter.types.ts) | `FilterPanelProps` |
| [src/components/Header/Header.types.ts](../src/components/Header/Header.types.ts) | `HeaderProps` |
| [src/components/HeaderInside/HeaderInside.types.ts](../src/components/HeaderInside/HeaderInside.types.ts) | `HeaderInsideProps` |
| [src/components/Input/Input.types.ts](../src/components/Input/Input.types.ts) | `InputOwnProps` |
| [src/components/Input/ui/InputField.types.ts](../src/components/Input/ui/InputField.types.ts) | `InputFieldProps` |
| [src/components/InputFiles/InputFiles.types.ts](../src/components/InputFiles/InputFiles.types.ts) | `InputFilesValidationProps`, `InputFilesProps` |
| [src/components/InputImg/InputImg.types.ts](../src/components/InputImg/InputImg.types.ts) | `InputImgValidationProps`, `InputImgInteractionProps`, `InputImgProps`, `DropZoneProps`, `ImagePreviewProps` |
| [src/components/Label/Label.types.ts](../src/components/Label/Label.types.ts) | `BaseLabelProps` |
| [src/components/ListItem/ListItem.types.ts](../src/components/ListItem/ListItem.types.ts) | `BaseListItemProps`, `ListItemOnlyProps` |
| [src/components/Modal/Modal.types.ts](../src/components/Modal/Modal.types.ts) | `ModalProps`, `ModalHeaderProps` |
| [src/components/Pagination/Pagination.types.ts](../src/components/Pagination/Pagination.types.ts) | `PaginationProps` |
| [src/components/Popover/Popover.types.ts](../src/components/Popover/Popover.types.ts) | `PopoverContentProps`, `PopoverSurfaceProps`, `PopoverScrollAreaProps` |
| [src/components/ProgressBar/ProgressBar.types.ts](../src/components/ProgressBar/ProgressBar.types.ts) | `ProgressBarProps` |
| [src/components/SearchAutocomplete/SearchAutocomplete.types.ts](../src/components/SearchAutocomplete/SearchAutocomplete.types.ts) | `SearchAutocompleteProps` |
| [src/components/Segmented/Segmented.types.ts](../src/components/Segmented/Segmented.types.ts) | `SegmentedProps`, `SegmentedItemProps` |
| [src/components/Skeleton/Skeleton.types.ts](../src/components/Skeleton/Skeleton.types.ts) | `SkeletonProps` |
| [src/components/Slider/Slider.types.ts](../src/components/Slider/Slider.types.ts) | `SliderProps` |
| [src/components/StepBar/StepBar.types.ts](../src/components/StepBar/StepBar.types.ts) | `StepBarProps`, `UseStepBarProps` |
| [src/components/TableColumnsModal/TableColumnsModal.types.ts](../src/components/TableColumnsModal/TableColumnsModal.types.ts) | `TableColumnsModalProps` |
| [src/components/TabsOverflow/TabsOverflow.types.ts](../src/components/TabsOverflow/TabsOverflow.types.ts) | `TabsOverflowProps` |
| [src/components/Text/Text.types.ts](../src/components/Text/Text.types.ts) | `TextProps` |
| [src/components/TextArea/TextArea.types.ts](../src/components/TextArea/TextArea.types.ts) | `TextAreaOwnProps` |
| [src/components/TimeBar/TimeBar.types.ts](../src/components/TimeBar/TimeBar.types.ts) | `TimeBarProps`, `TimeColumnProps` |
| [src/components/TimePicker/TimePicker.types.ts](../src/components/TimePicker/TimePicker.types.ts) | `TimePickerProps`, `UseTimePickerValueProps` |
| [src/components/UserItem/UserItem.types.ts](../src/components/UserItem/UserItem.types.ts) | `UserItemAvatarProps` |
| [src/shared/modals/ImageModal/ImageModal.types.ts](../src/shared/modals/ImageModal/ImageModal.types.ts) | `ImageModalProps` |

## Зависимости

| Пакет | До | После | Группа |
| --- | --- | --- | --- |
| @vidstack/react | — | 1.12.13 | dependencies |
| imask | — | ^7.6.1 | dependencies |
| pdfjs-dist | — | ^6.2.108 | dependencies |
| dayjs | — | ^1.11.18 | devDependencies |
| react-router-dom | — | ^7.18.2 | devDependencies |
| typescript | ~5.6.2 | ^6.0.3 | devDependencies |
| dayjs | — | >=1.11.0 | peerDependencies |

## Токены и общая инфраструктура

- `src/providers/KitProvider.tsx`
- `src/providers/index.ts`
- `src/styles/global.css`
- `src/tokens/ColorStyles.css`
- `src/tokens/PrimitiveColors.css`
- `src/tokens/Spacings.css`
- `src/tokens/Typography.css`

Проверка соответствия GitLab выполняется по исходникам с нормализацией переводов строк. Локальная адаптация runtime: InputTag xs использует существующий токен `--generic-spacing-05` вместо несуществующего `--generic-spacing-0.5`. Документация и Code Connect являются локальными дополнениями.
