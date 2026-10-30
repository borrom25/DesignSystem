import { useState } from "react";
import { ComponentDescription } from "@docs/components/ComponentDescription";
import { ComponentDocsPage } from "@docs/components/ComponentDocsPage";
import { ComponentPlayground } from "@docs/components/ComponentPlayground";
import { ComponentPropsTable } from "@docs/components/ComponentPropsTable";
import { ComponentUsage } from "@docs/components/ComponentUsage";
import packageJson from "../../../../../package.json";
import { tableDocsConfig } from "./table-docs/config";
import {
  createTableEditableCellsUsageCode,
  createTableScrollEndUsageCode,
  createTableUsageCode,
} from "./table-docs/usage";

export default function TablePage() {
  const [state, setState] = useState(tableDocsConfig.initialState);
  const packageName = packageJson.name;

  const updateState = (patch: Partial<typeof state>) => {
    setState((prevState) => ({ ...prevState, ...patch }));
  };

  return (
    <ComponentDocsPage>
      <ComponentPlayground
        title={tableDocsConfig.title}
        developers={tableDocsConfig.developers}
        preview={tableDocsConfig.renderPreview(state, {
          setState,
          updateState,
        })}
        controls={tableDocsConfig.renderControls?.(state, {
          setState,
          updateState,
        })}
      />

      <ComponentUsage code={createTableUsageCode(packageName, state)} />

      <ComponentDescription text={tableDocsConfig.description} />

      <ComponentPropsTable items={tableDocsConfig.props} />

      <ComponentDescription
        title="Скролл до конца таблицы"
        text="Для бесконечной прокрутки Table поддерживает `onScrollEnd` и `onLoadMore`. В невиртуализированном режиме конец считается достигнутым примерно за 100px до нижней границы контейнера. В виртуализированном режиме хук срабатывает, когда пользователь подходит примерно к последним трем высотам строки. `onScrollEnd` полезен для аналитики и внешних эффектов, а `onLoadMore` — для реальной дозагрузки следующей порции данных."
      />

      <ComponentUsage
        code={createTableScrollEndUsageCode(packageName)}
        title="Infinite scroll и onScrollEnd в Table"
      />

      <ComponentDescription
        title="Ввод ячеек"
        text="Остальные ячейки остаются обычными. Для ввода добавьте отдельную колонку и ограничьте редактирование через `isCellEditable` (или `editableCellIds`). В примере ниже редактируется только колонка «Комментарий»: `editable`, `editablePlaceholder` и `onCellValueChange`."
      />

      <ComponentUsage
        code={createTableEditableCellsUsageCode(packageName)}
        title="Inline-редактирование ячеек в Table"
      />
    </ComponentDocsPage>
  );
}
