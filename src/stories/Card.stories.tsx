import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { MoreVertical } from "lucide-react";
import {
  Card,
  CardVariant,
  UserItem,
  Button,
  Tag,
  Alert,
  Label,
  Skeleton,
  IconButton,
} from "@/components";
import { Size, Color, Type } from "@/types";

const cardWidth = "w-[360px]";

const cardMenu = (
  <IconButton
    icon={MoreVertical}
    type="ghost"
    color={Color.Inverse}
    size={Size.Sm}
    aria-label="Меню"
  />
);

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Контейнерный компонент-оболочка с рамкой и фоном. Используется для группировки контента.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text", table: { type: { summary: "ReactNode" } } },
    subtitle: { control: "text", table: { type: { summary: "ReactNode" } } },
    actionSlot: {
      control: false,
      table: { type: { summary: "ReactNode" } },
    },
    children: { control: false },
    size: { control: "select", options: Object.values(Size) },
    variant: { control: "select", options: Object.values(CardVariant) },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  render: () => (
    <div className={`flex flex-col gap-4 ${cardWidth}`}>
      <Card
        size={Size.Sm}
        title="Title"
        subtitle="Subtitle"
        actionSlot={cardMenu}
      />
      <Card size={Size.Sm} title="Только заголовок" actionSlot={cardMenu} />
      <Card
        size={Size.Sm}
        title="Без actionSlot"
        subtitle="Subtitle без слота справа"
      />
    </div>
  ),
};

export const ActionSlot: Story = {
  render: () => (
    <div className={`flex flex-col gap-4 ${cardWidth}`}>
      <Card
        size={Size.Sm}
        title="Title"
        subtitle="Subtitle"
        actionSlot={cardMenu}
      />
      <Card
        size={Size.Sm}
        title="Title"
        subtitle="Subtitle"
        actionSlot={<Tag size={Size.Sm}>Статус</Tag>}
      />
      <Card
        size={Size.Sm}
        title="Title"
        subtitle="Subtitle"
        actionSlot={
          <Button size={Size.Sm} type={Type.Outline} color={Color.Brand}>
            Действие
          </Button>
        }
      />
    </div>
  ),
};

export const WithContent: Story = {
  render: () => (
    <div className={`flex flex-col gap-6 ${cardWidth}`}>
      <Card
        size={Size.Sm}
        title="Список пользователей"
        subtitle="2 онлайн"
        actionSlot={cardMenu}
      >
        <div className="flex flex-col gap-3">
          <UserItem size={Size.Sm}>
            <UserItem.Avatar
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=alex"
              alt="Александр Иванов"
            />
            <UserItem.Content>
              <UserItem.Text>
                <UserItem.Title>Александр Иванов</UserItem.Title>
                <UserItem.Subtitle>Frontend разработчик</UserItem.Subtitle>
              </UserItem.Text>
              <UserItem.Labels>
                <Label>React</Label>
                <Label>TypeScript</Label>
              </UserItem.Labels>
            </UserItem.Content>
          </UserItem>

          <UserItem size={Size.Sm}>
            <UserItem.Avatar
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=maria"
              alt="Мария Петрова"
            />
            <UserItem.Content>
              <UserItem.Text>
                <UserItem.Title>Мария Петрова</UserItem.Title>
                <UserItem.Subtitle>UI/UX дизайнер</UserItem.Subtitle>
              </UserItem.Text>
              <UserItem.Labels>
                <Label>Figma</Label>
              </UserItem.Labels>
            </UserItem.Content>
          </UserItem>
        </div>

        <Button size={Size.Sm} type={Type.Outline} color={Color.Brand}>
          Показать всех
        </Button>
      </Card>

      <Card size={Size.Sm}>
        <Alert type="info" title="Информация">
          Информационное сообщение внутри карточки
        </Alert>
      </Card>
    </div>
  ),
};

export const VariantsAndPadding: Story = {
  render: () => (
    <div className="flex w-[420px] flex-col gap-4 rounded-scale-3xl bg-page p-6">
      <Card
        size={Size.Sm}
        variant={CardVariant.Surface}
        title="Surface"
        subtitle="variant=surface"
        actionSlot={cardMenu}
      >
        <span className="text-secondary text-sm">Основной вид карточки</span>
      </Card>

      <Card
        size={Size.Sm}
        variant={CardVariant.Nested}
        title="Nested"
        subtitle="variant=nested"
        actionSlot={<Tag size={Size.Sm}>Активно</Tag>}
      >
        <span className="text-secondary text-sm">Вложенная карточка</span>
      </Card>

      <Card
        size={Size.Sm}
        variant={CardVariant.Surface}
        padding={{ top: "16px", bottom: "24px" }}
        title="Custom padding"
        subtitle="top: 16px, bottom: 24px"
        actionSlot={cardMenu}
      >
        <span className="text-secondary text-sm">
          Горизонтальные отступы остаются от size
        </span>
      </Card>
    </div>
  ),
};

const loadingCards = [
  {
    id: "team",
    size: Size.Sm,
    title: "Команда разработки",
    subtitle: "5 участников в онлайне",
    status: "Команда",
    description: "Фронтенд и бэкенд синхронизированы, стендап через 20 минут.",
  },
  {
    id: "tasks",
    size: Size.Md,
    title: "Задачи спринта",
    subtitle: "12 задач в работе",
    status: "Спринт",
    description: "Приоритет на фиксы и доработку компонентов перед релизом.",
  },
  {
    id: "qa",
    size: Size.Xs,
    title: "Проверка QA",
    subtitle: "Ожидает тестирования",
    status: "QA",
    description: "Открыт регресс по UI, нужно проверить адаптацию скелетона.",
  },
] as const;

export const LoadingListWithSkeleton: Story = {
  render: () => {
    const [loading, setLoading] = React.useState(true);

    const simulateLoading = React.useCallback(() => {
      setLoading(true);
      const timer = window.setTimeout(() => setLoading(false), 2200);
      return () => window.clearTimeout(timer);
    }, []);

    React.useEffect(() => simulateLoading(), [simulateLoading]);

    return (
      <div className="flex w-[520px] flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-primary font-medium">
            Список карточек с загрузкой
          </h3>
          <Button
            size={Size.Sm}
            type={Type.Outline}
            color={Color.Brand}
            onClick={simulateLoading}
          >
            Повторить
          </Button>
        </div>

        <div className="flex flex-col gap-3">
          {loadingCards.map((item) => (
            <Card
              key={item.id}
              size={item.size}
              title={item.title}
              subtitle={item.subtitle}
              actionSlot={<Tag size={Size.Xs}>{item.status}</Tag>}
              className="relative"
            >
              <p className="text-secondary text-sm">{item.description}</p>
              <Button size={Size.Sm} type={Type.Outline} color={Color.Brand}>
                Подробнее
              </Button>

              {loading && (
                <Skeleton className="absolute inset-0 rounded-[inherit]" />
              )}
            </Card>
          ))}
        </div>
      </div>
    );
  },
};
