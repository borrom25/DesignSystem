import { Download } from "lucide-react";
import {
  AccordionBlock,
  Button,
  Card,
  CardVariant,
  Label,
  Space,
  Text,
  TextColor,
  TextShade,
  TextVariant,
} from "@/components";
import { Color, Size, Type } from "@/types";
import type { AccordionBlockPlaygroundState } from "./types";

const PYTHON_DESCRIPTION =
  "Python — это популярный высокоуровневый язык программирования общего назначения. Он создан в 1991 году Гвидо ван Россумом. Главные черты языка — простой синтаксис, читаемый код и использование отступов вместо скобок, что делает его лучшим выбором для новичков";

function SkillCard({ status }: { status?: "failed" | "passed" }) {
  return (
    <Card
      size={Size.Xs}
      variant={CardVariant.Secondary}
      title="Названия навыка"
      subtitle="Описание навыка"
      titleProps={{ variant: TextVariant.B1 }}
      subtitleProps={{ variant: TextVariant.B2 }}
      actionSlot={
        status === "failed" ? (
          <Label color={Color.Danger} type="flat" size={Size.Xs} rounded>
            Не зачет
          </Label>
        ) : status === "passed" ? (
          <Label color={Color.Positive} type="flat" size={Size.Xs} rounded>
            Зачёт
          </Label>
        ) : null
      }
    />
  );
}

function HomeworkCard() {
  return (
    <Card size={Size.Sm} variant={CardVariant.Secondary}>
      <Space direction="col" gapSize={Size.Sm} fullWidth>
        <Space justify="between" align="start" fullWidth>
          <Text
            variant={TextVariant.C1}
            color={TextColor.Basic}
            shade={TextShade.Secondary}
          >
            Срок: 31.05.2026, 14:29 · Попыток осталось: 3
          </Text>
          <Text variant={TextVariant.C1} color={TextColor.Positive}>
            Выполнено
          </Text>
        </Space>
        <Space direction="col" customGap="4px" fullWidth>
          <Text variant={TextVariant.B1} color={TextColor.Basic}>
            Изменяемые не изменяемые типы данных
          </Text>
          <Text
            variant={TextVariant.C1}
            color={TextColor.Basic}
            shade={TextShade.Secondary}
          >
            test skill 3
          </Text>
        </Space>
        <Space direction="row" gapSize={Size.Sm} flexWrap="wrap">
          <Button
            size={Size.Sm}
            type={Type.Flat}
            color={Color.Secondary}
            iconLeft={Download}
          >
            Скачать задание
          </Button>
          <Button
            size={Size.Sm}
            type={Type.Flat}
            color={Color.Secondary}
            iconLeft={Download}
          >
            Скачать ответ
          </Button>
        </Space>
      </Space>
    </Card>
  );
}

function PythonHeadSlot() {
  return (
    <>
      <Label color={Color.Warning} type="flat" size={Size.Xs} rounded>
        Hard skills
      </Label>
      <Label color={Color.Secondary} type="flat" size={Size.Xs} rounded>
        Вес: 15%
      </Label>
    </>
  );
}

function NestedHeadSlot() {
  return (
    <>
      <Label color={Color.Secondary} type="flat" size={Size.Xs} rounded>
        Сложность: 5/10
      </Label>
      <Label color={Color.Secondary} type="flat" size={Size.Xs} rounded>
        Вес: 5%
      </Label>
    </>
  );
}

export function AccordionBlockPreview(state: AccordionBlockPlaygroundState) {
  return (
    <AccordionBlock
      key={String(state.defaultOpen)}
      title={state.title}
      size={state.size}
      variant={state.variant}
      defaultOpen={state.defaultOpen}
      disabled={state.disabled}
      description={PYTHON_DESCRIPTION}
      progress={Number(state.progress)}
      labelPosition={state.labelPosition}
      headSlot={<PythonHeadSlot />}
    >
      <AccordionBlock
        title="Базовый Пайтон"
        size={state.size}
        defaultOpen
        description="Вводный курс по языку программирования Python: синтаксис, типы данных, функции и базовые конструкции."
        progress={5}
        labelPosition={state.labelPosition}
        headSlot={<NestedHeadSlot />}
      >
        <Text variant={TextVariant.B1} color={TextColor.Basic}>
          Навыки
        </Text>
        <SkillCard status="failed" />
        <SkillCard status="passed" />
        <SkillCard />
        <Text variant={TextVariant.B1} color={TextColor.Basic}>
          Домашние задания
        </Text>
        <HomeworkCard />
      </AccordionBlock>
    </AccordionBlock>
  );
}
