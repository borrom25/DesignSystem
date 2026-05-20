import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton, Card, UserItem, Button, Tag, Label } from "@/components";
import { Size, Color, Type } from "@/types";

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Универсальный компонент-скелетон для отображения состояния загрузки. Поддерживает wrapper- и overlay-режимы.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OverlayMode: Story = {
  render: () => {
    const [loading, setLoading] = React.useState(true);

    return (
      <div className="flex flex-col gap-6 max-w-md">
        <div className="flex items-center gap-3 mb-2">
          <Button
            size={Size.Sm}
            type={Type.Outline}
            color={Color.Brand}
            onClick={() => setLoading(!loading)}
          >
            {loading ? "Загрузить" : "Показать скелетон"}
          </Button>
          <span className="text-sm text-secondary">
            Overlay-режим: скелетон как отдельный слой
          </span>
        </div>

        <Card size={Size.Sm} className="relative">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-primary font-medium">Список пользователей</h3>
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
            </div>

            <Button size={Size.Sm} type={Type.Outline} color={Color.Brand}>
              Показать всех
            </Button>
          </div>

          {loading && (
            <Skeleton className="absolute inset-0 rounded-[inherit]" />
          )}
        </Card>

        <div className="text-xs text-secondary mt-2 p-3 bg-generic-medium rounded-lg">
          <strong>Использование:</strong>
          <pre className="mt-2 text-[11px] leading-relaxed">
            {`<Card className="relative">
  {/* Контент карточки */}
  {loading && (
    <Skeleton className="absolute inset-0 rounded-[inherit]" />
  )}
</Card>`}
          </pre>
        </div>
      </div>
    );
  },
};

export const WrapperMode: Story = {
  render: () => {
    const [loading, setLoading] = React.useState(true);

    return (
      <div className="flex flex-col gap-6 max-w-md">
        <div className="flex items-center gap-3 mb-2">
          <Button
            size={Size.Sm}
            type={Type.Outline}
            color={Color.Brand}
            onClick={() => setLoading(!loading)}
          >
            {loading ? "Загрузить" : "Показать скелетон"}
          </Button>
          <span className="text-sm text-secondary">
            Wrapper-режим: скелетон обёртывает контент
          </span>
        </div>

        <Skeleton loading={loading}>
          <Card size={Size.Sm}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-primary font-medium">
                  Профиль пользователя
                </h3>
                <Tag size={Size.Sm}>Активен</Tag>
              </div>

              <UserItem size={Size.Sm}>
                <UserItem.Avatar
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=john"
                  alt="Иван Петров"
                />
                <UserItem.Content>
                  <UserItem.Text>
                    <UserItem.Title>Иван Петров</UserItem.Title>
                    <UserItem.Subtitle>Product Manager</UserItem.Subtitle>
                  </UserItem.Text>
                  <UserItem.Labels>
                    <Label>Jira</Label>
                    <Label>Figma</Label>
                  </UserItem.Labels>
                </UserItem.Content>
              </UserItem>

              <div className="flex gap-2">
                <Button size={Size.Sm} color={Color.Brand}>
                  Редактировать
                </Button>
                <Button size={Size.Sm} type={Type.Outline} color={Color.Brand}>
                  Удалить
                </Button>
              </div>
            </div>
          </Card>
        </Skeleton>

        <div className="text-xs text-secondary mt-2 p-3 bg-generic-medium rounded-lg">
          <strong>Использование:</strong>
          <pre className="mt-2 text-[11px] leading-relaxed">
            {`<Skeleton loading={isLoading}>
  <Card>
    {/* Контент карточки */}
  </Card>
</Skeleton>`}
          </pre>
        </div>
      </div>
    );
  },
};
