import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  Check,
  CircleAlert,
  CircleCheckBig,
  Clock3,
  Sparkles,
} from "lucide-react";
import { StepBar } from "@/components";
import type { StepBarItem } from "@/components";

const baseItems: StepBarItem[] = [
  { id: "1", label: "Шаг 1" },
  { id: "2", label: "Шаг 2", type: "successful", leftIcon: Check },
  { id: "3", label: "Шаг 3", type: "error", leftIcon: CircleAlert },
  { id: "4", label: "Длинный шаг 4" },
  { id: "5", label: "Disabled шаг 5", disabled: true },
  { id: "6", label: "Очень длинный шестой шаг" },
  { id: "7", label: "Шаг 7" },
];

const longItems: StepBarItem[] = [
  { id: "1", label: "Создание карточки курса" },
  {
    id: "2",
    label: "Настройка расписания",
    type: "successful",
    leftIcon: Check,
  },
  {
    id: "3",
    label: "Проверка валидности данных",
    type: "error",
    leftIcon: CircleAlert,
  },
  { id: "4", label: "Настройка уведомлений для участников" },
  { id: "5", label: "Выбор преподавателей и ассистентов" },
  { id: "6", label: "Финальная публикация курса" },
  { id: "7", label: "Подтверждение и запуск" },
];

const mixedIconsItems: StepBarItem[] = [
  { id: "1", label: "Черновик", leftIcon: Clock3 },
  {
    id: "2",
    label: "Проверка",
    type: "successful",
    leftIcon: Sparkles,
    rightIcon: CircleCheckBig,
  },
  { id: "3", label: "Публикация", type: "error", leftIcon: CircleAlert },
  { id: "4", label: "Готово", leftIcon: Check },
];

const meta = {
  title: "Components/StepBar",
  component: StepBar,
  args: {
    items: baseItems,
    active: "1",
    onChangeStep: () => {},
  },
  decorators: [
    (Story) => (
      <div className="w-[640px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof StepBar>;

export default meta;
type Story = StoryObj<typeof meta>;

function InteractiveStepBar({
  items = baseItems,
  initialActive,
  onClickSuccessButton,
  successButtonText,
}: {
  items?: StepBarItem[];
  initialActive?: StepBarItem["id"];
  onClickSuccessButton?: () => void;
  successButtonText?: string;
}) {
  const [active, setActive] = useState<StepBarItem["id"]>(
    initialActive ?? items[0]?.id ?? 1
  );

  return (
    <StepBar
      items={items}
      active={active}
      onChangeStep={setActive}
      onClickSuccessButton={onClickSuccessButton}
      successButtonText={successButtonText}
    />
  );
}

export const Playground: Story = {
  args: {},
  render: () => <InteractiveStepBar />,
};

export const LongStepsWithScroll: Story = {
  args: {},
  render: () => <InteractiveStepBar items={longItems} />,
};

export const LastStepAction: Story = {
  args: {},
  render: () => (
    <InteractiveStepBar
      initialActive={baseItems[baseItems.length - 1].id}
      onClickSuccessButton={() => {}}
      successButtonText="Завершить"
    />
  ),
};

export const MixedItemIcons: Story = {
  args: {},
  render: () => <InteractiveStepBar items={mixedIconsItems} />,
};
