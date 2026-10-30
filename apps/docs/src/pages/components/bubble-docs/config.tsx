import { FileText } from "lucide-react";
import { Bubble, BubbleSide } from "@/components";
import { Size } from "@/types";
import {
  PlaygroundSelectControl,
  PlaygroundTextControl,
} from "@docs/components/ComponentPlaygroundControls";
import type { PropDefinition } from "@docs/components/ComponentPropsTable";
import type { ComponentDocsConfig } from "../createComponentDocsPage";

type BubbleVariant = "text" | "image" | "file" | "mixed";

type BubblePlaygroundState = {
  side: (typeof BubbleSide)[keyof typeof BubbleSide];
  size: (typeof Size)[keyof typeof Size];
  variant: BubbleVariant;
  message: string;
  time: string;
  userName: string;
};

const BUBBLE_SIDE_OPTIONS = [
  { value: BubbleSide.Incoming, label: "Incoming" },
  { value: BubbleSide.Outgoing, label: "Outgoing" },
] as const;

const BUBBLE_SIZE_OPTIONS = [
  { value: Size.Xs, label: "Xs" },
  { value: Size.Sm, label: "Sm" },
  { value: Size.Md, label: "Md" },
] as const;

const BUBBLE_VARIANT_OPTIONS = [
  { value: "text", label: "Text" },
  { value: "image", label: "Image" },
  { value: "file", label: "File" },
  { value: "mixed", label: "Mixed" },
] as const;

const BUBBLE_DEFAULT_STATE: BubblePlaygroundState = {
  side: BubbleSide.Outgoing,
  size: Size.Md,
  variant: "text",
  message: "Здравствуйте, не приходит письмо после регистрации.",
  time: "13:29",
  userName: "Вы",
};

const BUBBLE_PROPS: PropDefinition[] = [
  {
    name: "side",
    type: `"incoming" | "outgoing"`,
    description:
      "Определяет выравнивание пузыря и оформление скруглений для входящего или исходящего сообщения.",
    defaultValue: '"incoming"',
  },
  {
    name: "size",
    type: `"xs" | "sm" | "md"`,
    description:
      "Управляет внутренними отступами пузыря и размерами текста/мета-информации.",
    defaultValue: '"md"',
  },
  {
    name: "children",
    type: "ReactNode",
    description:
      "Bubble собирается через композицию Bubble.Text, Bubble.Meta, Bubble.Image и Bubble.File.",
  },
  {
    name: "Bubble.Text",
    type: "children",
    description:
      "Основной текст сообщения с корректным переносом длинных строк.",
  },
  {
    name: "Bubble.Meta",
    type: "time, userName",
    description:
      "Подпись с временем и именем автора, которая располагается внутри или снаружи shell.",
  },
  {
    name: "Bubble.Image",
    type: "imageUrls, alt, wrapperClassName",
    description:
      "Отображает одну или несколько картинок и автоматически подбирает сетку превью.",
  },
  {
    name: "Bubble.File",
    type: "fileName, fileSize, icon, action",
    description:
      "Показывает вложение файла с иконкой и опциональной кнопкой действия.",
  },
];

const BUBBLE_IMAGE_SRC = `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#8ec5ff"/>
        <stop offset="100%" stop-color="#183a71"/>
      </linearGradient>
    </defs>
    <rect width="640" height="640" fill="url(#sky)"/>
    <circle cx="500" cy="140" r="60" fill="#ffd27a"/>
    <path d="M0 430 L140 280 L250 380 L390 220 L530 400 L640 300 L640 640 L0 640 Z" fill="#1f2f4d"/>
    <path d="M0 520 C120 470, 220 520, 320 470 S520 430, 640 500 L640 640 L0 640 Z" fill="#355e3b"/>
  </svg>
`)}`;

function renderBubbleContent(state: BubblePlaygroundState) {
  if (state.variant === "image") {
    return (
      <Bubble.Image imageUrls={[BUBBLE_IMAGE_SRC]} alt="Изображение в bubble" />
    );
  }

  if (state.variant === "file") {
    return (
      <Bubble.File fileName="brief.pdf" fileSize="2.4 MB" icon={FileText} />
    );
  }

  if (state.variant === "mixed") {
    return (
      <>
        <Bubble.Text>{state.message}</Bubble.Text>
        <Bubble.Image
          imageUrls={[BUBBLE_IMAGE_SRC, BUBBLE_IMAGE_SRC, BUBBLE_IMAGE_SRC]}
          alt="Набор изображений в bubble"
        />
      </>
    );
  }

  return <Bubble.Text>{state.message}</Bubble.Text>;
}

function createBubbleUsageCode(
  packageName: string,
  state: BubblePlaygroundState
) {
  const needsFileIcon = state.variant === "file";

  let content = `<Bubble.Text>${state.message}</Bubble.Text>`;

  if (state.variant === "image") {
    content = `<Bubble.Image imageUrls={["https://picsum.photos/640/640?grayscale"]} alt="Изображение в bubble" />`;
  }

  if (state.variant === "file") {
    content = `<Bubble.File fileName="brief.pdf" fileSize="2.4 MB" icon={FileText} />`;
  }

  if (state.variant === "mixed") {
    content = `<>
        <Bubble.Text>${state.message}</Bubble.Text>
        <Bubble.Image
          imageUrls={[
            "https://picsum.photos/640/640?1",
            "https://picsum.photos/640/640?2",
            "https://picsum.photos/640/640?3",
          ]}
          alt="Изображения в bubble"
        />
      </>`;
  }

  return `import { Bubble } from "${packageName}";
import "${packageName}/styles.css";${needsFileIcon ? '\nimport { FileText } from "lucide-react";' : ""}

export function Example() {
  return (
    <Bubble side="${state.side}" size="${state.size}"${
      state.variant === "image" ||
      state.variant === "file" ||
      state.variant === "mixed"
        ? '\n      className="w-[320px]"'
        : ""
    }>
      ${content}
      <Bubble.Meta time="${state.time}" userName="${state.userName}" />
    </Bubble>
  );
}`;
}

function BubblePreview(state: BubblePlaygroundState) {
  const needsNarrowWidth =
    state.variant === "image" ||
    state.variant === "file" ||
    state.variant === "mixed";

  return (
    <div className="w-[560px] rounded-scale-3xl bg-page p-(--spacing-6)">
      <div className="flex flex-col gap-(--spacing-4)">
        <Bubble
          side={state.side}
          size={state.size}
          className={needsNarrowWidth ? "w-[320px]" : undefined}
        >
          {renderBubbleContent(state)}
          <Bubble.Meta time={state.time} userName={state.userName} />
        </Bubble>
      </div>
    </div>
  );
}

function renderBubbleControls(
  state: BubblePlaygroundState,
  {
    updateState,
  }: {
    updateState: (patch: Partial<BubblePlaygroundState>) => void;
  }
) {
  return (
    <>
      <PlaygroundSelectControl
        label="Side"
        options={BUBBLE_SIDE_OPTIONS}
        value={state.side}
        onChange={(value) =>
          updateState({ side: value as BubblePlaygroundState["side"] })
        }
      />
      <PlaygroundSelectControl
        label="Size"
        options={BUBBLE_SIZE_OPTIONS}
        value={state.size}
        onChange={(value) =>
          updateState({ size: value as BubblePlaygroundState["size"] })
        }
      />
      <PlaygroundSelectControl
        label="Variant"
        options={BUBBLE_VARIANT_OPTIONS}
        value={state.variant}
        onChange={(value) =>
          updateState({ variant: value as BubblePlaygroundState["variant"] })
        }
      />
      <PlaygroundTextControl
        label="Message"
        value={state.message}
        onChange={(value) => updateState({ message: value })}
      />
      <PlaygroundTextControl
        label="Time"
        value={state.time}
        onChange={(value) => updateState({ time: value })}
      />
      <PlaygroundTextControl
        label="User name"
        value={state.userName}
        onChange={(value) => updateState({ userName: value })}
      />
    </>
  );
}

export const bubbleDocsConfig: ComponentDocsConfig<BubblePlaygroundState> = {
  title: "Bubble",
  description:
    "Bubble оформляет сообщения мессенджера и поддерживает текст, медиа, файлы и мета-информацию через composition API.",
  props: BUBBLE_PROPS,
  initialState: BUBBLE_DEFAULT_STATE,
  createUsageCode: createBubbleUsageCode,
  renderPreview: BubblePreview,
  renderControls: renderBubbleControls,
};
