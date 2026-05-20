import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Card,
  UserItem,
  Button,
  Tag,
  Alert,
  Label,
  Skeleton,
} from "@/components";
import { Size, Color, Type } from "@/types";

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
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const WithContent: Story = {
  args: {
    children: null,
  },
  render: () => {
    return (
      <div className="flex flex-col gap-6 max-w-md">
        <Card size={Size.Sm}>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-primary font-medium">
                Список пользователей{" "}
              </h3>
              <Tag size={Size.Sm}>3 онлайн</Tag>
            </div>

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

              <UserItem size={Size.Sm}>
                <UserItem.Avatar
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=dmitry"
                  alt="Дмитрий Сидоров"
                />
                <UserItem.Content>
                  <UserItem.Text>
                    <UserItem.Title>Дмитрий Сидоров</UserItem.Title>
                    <UserItem.Subtitle>Backend разработчик</UserItem.Subtitle>
                  </UserItem.Text>
                  <UserItem.Labels>
                    <Label>Node.js</Label>
                    <Label>Go</Label>
                  </UserItem.Labels>
                </UserItem.Content>
              </UserItem>
            </div>

            <Button size={Size.Sm} type={Type.Outline} color={Color.Brand}>
              Показать всех
            </Button>
          </div>
        </Card>

        <Card size={Size.Sm}>
          <Alert type="info" title="Информация">
            Информационное сообщение внутри карточки
          </Alert>
        </Card>

        <Card size={Size.Xs}>
          <div className="flex items-center justify-between">
            <span className="text-xs text-secondary">Компактная карточка</span>
            <Tag size={Size.Xs}>Активно</Tag>
          </div>
        </Card>
      </div>
    );
  },
};

export const LoadingListWithSkeleton: Story = {
  args: {
    children: null,
  },
  render: () => {
    const [loading, setLoading] = React.useState(true);

    const simulateLoading = React.useCallback(() => {
      setLoading(true);
      const timer = window.setTimeout(() => {
        setLoading(false);
      }, 2200);

      return () => window.clearTimeout(timer);
    }, []);

    React.useEffect(() => {
      const cleanup = simulateLoading();
      return cleanup;
    }, [simulateLoading]);

    return (
      <div className="flex flex-col gap-4 w-[520px]">
        <div className="flex items-center justify-between">
          <h3 className="text-primary font-medium">
            Список карточек с искусственной загрузкой
          </h3>
          <Button
            size={Size.Sm}
            type={Type.Outline}
            color={Color.Brand}
            onClick={simulateLoading}
          >
            Повторить загрузку
          </Button>
        </div>

        <div className="flex flex-col gap-3">
          {loadingCards.map((item) => (
            <Card key={item.id} size={item.size} className="relative">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-primary text-sm font-medium">
                      {item.title}
                    </span>
                    <span className="text-secondary text-xs">
                      {item.subtitle}
                    </span>
                  </div>
                  <Tag size={Size.Xs}>{item.status}</Tag>
                </div>
                <p className="text-secondary text-sm">{item.description}</p>
                <Button size={Size.Sm} type={Type.Outline} color={Color.Brand}>
                  Подробнее
                </Button>
              </div>

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
