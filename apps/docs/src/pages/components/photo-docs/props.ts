import type { PropDefinition } from "@docs/components/ComponentPropsTable";

export const PHOTO_PROPS: PropDefinition[] = [
  {
    name: "open",
    type: "boolean",
    description: "Управляет видимостью полноэкранного просмотра.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Вызывается при закрытии просмотра.",
  },
  {
    name: "items",
    type: "PhotoItem[]",
    description: "Список фото. У элемента есть src и необязательный alt.",
  },
  {
    name: "index",
    type: "number",
    description: "Индекс текущего фото. Без пропа компонент хранит индекс сам.",
  },
  {
    name: "defaultIndex",
    type: "number",
    description: "Стартовый индекс, если index не передан.",
    defaultValue: "0",
  },
  {
    name: "onIndexChange",
    type: "(index: number) => void",
    description: "Вызывается при смене текущего фото.",
  },
  {
    name: "onDownload",
    type: "(item: PhotoItem, index: number) => void",
    description:
      "Скачивание текущего фото. Без колбэка кнопка и пункт меню скрыты.",
  },
  {
    name: "onEdit",
    type: "(item: PhotoItem, index: number) => void",
    description: "Редактирование текущего фото. Без колбэка действие скрыто.",
  },
  {
    name: "onDelete",
    type: "(item: PhotoItem, index: number) => void",
    description:
      "Удаление текущего фото. Список обновляет родитель. Без колбэка действие скрыто.",
  },
  {
    name: "onRotate",
    type: "(item: PhotoItem, index: number, delta: 90 | -90) => void | PhotoItem | Promise<void | PhotoItem>",
    description:
      "Поворот на 90°. Верните новую картинку, не меняя items: большой кадр и скачивание возьмут её, нижние превью останутся прежними.",
  },
  {
    name: "closeOnOverlayClick",
    type: "boolean",
    description: "Закрывает просмотр по клику на тёмный фон.",
    defaultValue: "true",
  },
  {
    name: "closeOnEscape",
    type: "boolean",
    description: "Закрывает просмотр по клавише Escape.",
    defaultValue: "true",
  },
];
