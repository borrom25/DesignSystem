import { ComponentDescription } from "@docs/components/ComponentDescription";
import { ComponentPropsTable } from "@docs/components/ComponentPropsTable";
import { ComponentUsage } from "@docs/components/ComponentUsage";
import { GuideCard } from "./GuideCard";
import {
  UPLOAD_VALIDATION_ERROR_PROPS,
  UPLOAD_VALIDATION_GUIDE_ITEMS,
} from "./content";

type ValidationDocsSectionsProps = {
  usageTitle: string;
  usageCode: string;
};

export function ValidationDocsSections({
  usageTitle,
  usageCode,
}: ValidationDocsSectionsProps) {
  return (
    <>
      <GuideCard
        title="Как валидировать файлы"
        items={UPLOAD_VALIDATION_GUIDE_ITEMS}
      />

      <ComponentDescription
        title="Порядок проверок"
        text="Сначала проверяются `maxSize` и `accept`, затем вызывается `validateFile`. Для `InputFiles`, `InputFileDrop` и `Uploader` после фильтрации валидных файлов применяется лимит `maxFiles` — лишние файлы отбрасываются с кодом `max-files`. Ошибка не блокирует уже выбранные валидные файлы: в `onChange`/`onFiles` попадают только прошедшие проверку."
      />

      <ComponentPropsTable
        items={UPLOAD_VALIDATION_ERROR_PROPS}
        title="Поля UploadValidationError"
      />

      <ComponentUsage code={usageCode} title={usageTitle} />
    </>
  );
}
