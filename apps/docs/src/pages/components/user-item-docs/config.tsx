import { Label, UserItem, UserItemAvatarPosition } from "@/components";
import { Size } from "@/types";
import {
  PlaygroundSelectControl,
  PlaygroundSwitchControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import type { PropDefinition } from "@docs/components/ComponentPropsTable";
import type { ComponentDocsConfig } from "../createComponentDocsPage";

type UserItemPlaygroundState = {
  size: (typeof Size)[keyof typeof Size];
  avatarPosition: (typeof UserItemAvatarPosition)[keyof typeof UserItemAvatarPosition];
  title: string;
  subtitle: string;
  labels: string;
  withBorder: boolean;
  showEditBadge: boolean;
  showLabels: boolean;
};

const USER_ITEM_SIZE_OPTIONS = [
  { value: Size.Xs, label: "Xs" },
  { value: Size.Sm, label: "Sm" },
  { value: Size.Md, label: "Md" },
] as const;

const USER_ITEM_AVATAR_POSITION_OPTIONS = [
  { value: UserItemAvatarPosition.Left, label: "Left" },
  { value: UserItemAvatarPosition.Top, label: "Top" },
] as const;

const USER_ITEM_DEFAULT_STATE: UserItemPlaygroundState = {
  size: Size.Sm,
  avatarPosition: UserItemAvatarPosition.Left,
  title: "Константинов К.К.",
  subtitle: "Product designer",
  labels: "Design system, Team lead, Active",
  withBorder: true,
  showEditBadge: false,
  showLabels: true,
};

const USER_ITEM_PROPS: PropDefinition[] = [
  {
    name: "size",
    type: `"xs" | "sm" | "md"`,
    description:
      "Управляет расстоянием между блоками, размерами текста и масштабом встроенного аватара.",
    defaultValue: '"md"',
  },
  {
    name: "avatarPosition",
    type: `"left" | "top"`,
    description:
      "Переключает компоновку карточки между горизонтальной и вертикальной.",
    defaultValue: '"left"',
  },
  {
    name: "children",
    type: "ReactNode",
    description:
      "Компонент собирается композиционно через UserItem.Avatar, UserItem.Content, UserItem.Title, UserItem.Subtitle и UserItem.Labels.",
  },
  {
    name: "UserItem.Avatar",
    type: "src, alt, withBorder, showEditBadge, size",
    description:
      "Рендерит аватар пользователя и может показывать рамку или badge редактирования.",
  },
  {
    name: "UserItem.Content",
    type: "ReactNode",
    description: "Контейнер для текстовой части и дополнительных меток.",
  },
  {
    name: "UserItem.Text",
    type: "ReactNode",
    description:
      "Опциональная обёртка для title/subtitle, если нужно отделить текстовую группу от label-блоков.",
  },
  {
    name: "UserItem.Title / Subtitle",
    type: "ReactNode",
    description:
      "Основной и вторичный текст с автоматическим подбором типографики по размеру.",
  },
  {
    name: "UserItem.Labels",
    type: "ReactNode",
    description:
      "Область для тегов или статусов; автоматически передаёт подходящий размер вложенным Label.",
  },
];

function getLabelItems(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function createUserItemUsageCode(
  packageName: string,
  state: UserItemPlaygroundState
) {
  const labelsBlock = state.showLabels
    ? `
        <UserItem.Labels>
          ${getLabelItems(state.labels)
            .map((label) => `<Label>${label}</Label>`)
            .join("\n          ")}
        </UserItem.Labels>`
    : "";

  return `import { Label, UserItem } from "${packageName}";
import "${packageName}/styles.css";

export function Example() {
  return (
    <UserItem
      size="${state.size}"
      avatarPosition="${state.avatarPosition}"
    >
      <UserItem.Avatar
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=team-member"
        alt="${state.title}"${state.withBorder ? "\n        withBorder" : ""}${state.showEditBadge ? "\n        showEditBadge" : ""}
      />
      <UserItem.Content>
        <UserItem.Text>
          <UserItem.Title>${state.title}</UserItem.Title>
          <UserItem.Subtitle>${state.subtitle}</UserItem.Subtitle>
        </UserItem.Text>${labelsBlock}
      </UserItem.Content>
    </UserItem>
  );
}`;
}

function UserItemPreview(state: UserItemPlaygroundState) {
  const labels = getLabelItems(state.labels);

  return (
    <div className="w-[360px] rounded-(--br-component-md) bg-page p-(--spacing-4)">
      <UserItem
        size={state.size}
        avatarPosition={state.avatarPosition}
        className="rounded-(--br-component-md) bg-generic-medium p-(--spacing-3)"
      >
        <UserItem.Avatar
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=team-member"
          alt={state.title}
          withBorder={state.withBorder}
          showEditBadge={state.showEditBadge}
        />
        <UserItem.Content>
          <UserItem.Text>
            <UserItem.Title>{state.title}</UserItem.Title>
            <UserItem.Subtitle>{state.subtitle}</UserItem.Subtitle>
          </UserItem.Text>
          {state.showLabels && labels.length > 0 ? (
            <UserItem.Labels>
              {labels.map((label) => (
                <Label key={label}>{label}</Label>
              ))}
            </UserItem.Labels>
          ) : null}
        </UserItem.Content>
      </UserItem>
    </div>
  );
}

function renderUserItemControls(
  state: UserItemPlaygroundState,
  {
    updateState,
  }: {
    updateState: (patch: Partial<UserItemPlaygroundState>) => void;
  }
) {
  return (
    <>
      <PlaygroundSelectControl
        label="Size"
        options={USER_ITEM_SIZE_OPTIONS}
        value={state.size}
        onChange={(value) =>
          updateState({ size: value as UserItemPlaygroundState["size"] })
        }
      />
      <PlaygroundSelectControl
        label="Avatar position"
        options={USER_ITEM_AVATAR_POSITION_OPTIONS}
        value={state.avatarPosition}
        onChange={(value) =>
          updateState({
            avatarPosition: value as UserItemPlaygroundState["avatarPosition"],
          })
        }
      />
      <PlaygroundTextControl
        label="Title"
        value={state.title}
        onChange={(value) => updateState({ title: value })}
      />
      <PlaygroundTextControl
        label="Subtitle"
        value={state.subtitle}
        onChange={(value) => updateState({ subtitle: value })}
      />
      <PlaygroundTextControl
        label="Labels"
        value={state.labels}
        onChange={(value) => updateState({ labels: value })}
      />
      <PlaygroundSwitchControl
        label="With border"
        checked={state.withBorder}
        onChange={(value) => updateState({ withBorder: value })}
      />
      <PlaygroundSwitchControl
        label="Edit badge"
        checked={state.showEditBadge}
        onChange={(value) => updateState({ showEditBadge: value })}
      />
      <PlaygroundSwitchControl
        label="Show labels"
        checked={state.showLabels}
        onChange={(value) => updateState({ showLabels: value })}
      />
    </>
  );
}

export const userItemDocsConfig: ComponentDocsConfig<UserItemPlaygroundState> =
  {
    title: "UserItem",
    description:
      "UserItem собирает карточку пользователя из аватара, текстовой информации и набора label-меток, сохраняя единый адаптивный ритм.",
    props: USER_ITEM_PROPS,
    initialState: USER_ITEM_DEFAULT_STATE,
    createUsageCode: createUserItemUsageCode,
    renderPreview: UserItemPreview,
    renderControls: renderUserItemControls,
  };
