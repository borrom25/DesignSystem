import type { Meta, StoryObj } from "@storybook/react-vite";
import { File } from "lucide-react";
import { Bubble, BubbleSide } from "@/components";
import { Size } from "@/types";

const meta = {
  title: "Components/Bubble",
  component: Bubble,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Bubble для сообщений мессенджера с поддержкой входящей и исходящей стороны, изображений, файлов и мета-информации.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Bubble>;

export default meta;
type Story = StoryObj<typeof meta>;

const storySurfaceClasses =
  "w-[560px] rounded-scale-3xl bg-page p-(--spacing-6)";

const messageImageSrc = `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420">
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#8ec5ff"/>
        <stop offset="100%" stop-color="#183a71"/>
      </linearGradient>
      <linearGradient id="meadow" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#355e3b"/>
        <stop offset="100%" stop-color="#17321d"/>
      </linearGradient>
    </defs>
    <rect width="640" height="420" fill="url(#sky)"/>
    <circle cx="456" cy="96" r="42" fill="#ffd27a"/>
    <path d="M0 270 L120 150 L220 250 L330 118 L470 260 L640 124 L640 420 L0 420 Z" fill="#1f2f4d"/>
    <path d="M0 308 L100 238 L208 296 L310 214 L418 324 L524 246 L640 318 L640 420 L0 420 Z" fill="#2e4c6d"/>
    <path d="M0 350 C82 320, 148 334, 214 310 S350 286, 430 320 S550 370, 640 340 L640 420 L0 420 Z" fill="url(#meadow)"/>
    <path d="M292 208 C348 236, 356 278, 382 302 C402 320, 438 328, 470 336" stroke="#d9f0ff" stroke-width="12" fill="none" stroke-linecap="round"/>
    <g fill="#d86fb6">
      <circle cx="92" cy="356" r="8"/>
      <circle cx="116" cy="370" r="7"/>
      <circle cx="536" cy="362" r="8"/>
      <circle cx="560" cy="374" r="7"/>
    </g>
  </svg>
`)}`;

export const IncomingText: Story = {
  render: () => (
    <div className={storySurfaceClasses}>
      <Bubble side={BubbleSide.Incoming} size={Size.Md}>
        <Bubble.Text>
          Здравствуйте, не приходит письмо после регистрации.
        </Bubble.Text>
        <Bubble.Meta time="13:29" userName="Вы" />
      </Bubble>
    </div>
  ),
};

export const OutgoingText: Story = {
  render: () => (
    <div className={storySurfaceClasses}>
      <Bubble side={BubbleSide.Outgoing} size={Size.Md}>
        <Bubble.Text>
          Проверил. Письмо отправлено, но могло попасть в спам. Если хотите,
          можем сразу отправить повторно.
        </Bubble.Text>
        <Bubble.Meta time="13:31" userName="ИИ-бот" />
      </Bubble>
    </div>
  ),
};

export const ImageBubble: Story = {
  render: () => (
    <div className={storySurfaceClasses}>
      <Bubble side={BubbleSide.Outgoing} size={Size.Sm} className="w-[320px]">
        <Bubble.Image src={messageImageSrc} alt="Пример изображения в bubble" />
        <Bubble.Meta time="13:29" userName="Вы" />
      </Bubble>
    </div>
  ),
};

export const FileBubble: Story = {
  render: () => (
    <div className={storySurfaceClasses}>
      <Bubble side={BubbleSide.Outgoing} size={Size.Sm} className="w-[320px]">
        <Bubble.File fileName="fileName.pdf" fileSize="720 MB" icon={File} />
        <Bubble.Meta time="13:29" userName="Вы" />
      </Bubble>
    </div>
  ),
};

export const MixedThread: Story = {
  render: () => (
    <div className={storySurfaceClasses}>
      <div className="flex flex-col gap-(--spacing-4)">
        <Bubble side={BubbleSide.Outgoing} size={Size.Md}>
          <Bubble.Text>
            Здравствуйте, не приходит письмо после регистрации.
          </Bubble.Text>
          <Bubble.Meta time="13:29" userName="Вы" />
        </Bubble>

        <Bubble side={BubbleSide.Outgoing} size={Size.Sm}>
          <Bubble.Image src={messageImageSrc} alt="Изображение в переписке" />
          <Bubble.Meta time="13:29" userName="Вы" />
        </Bubble>

        <Bubble side={BubbleSide.Incoming} size={Size.Sm} className="w-[320px]">
          <Bubble.Text>
            Здравствуйте, не приходит письмо после регистрации.
          </Bubble.Text>
          <Bubble.Meta time="13:29" userName="ИИ-бот" />
        </Bubble>

        <Bubble side={BubbleSide.Outgoing} size={Size.Sm} className="w-[320px]">
          <Bubble.File fileName="fileName.pdf" fileSize="720 MB" icon={File} />
          <Bubble.Meta time="13:29" userName="Вы" />
        </Bubble>

        <Bubble side={BubbleSide.Incoming} size={Size.Sm} className="w-[320px]">
          <Bubble.Image
            src={messageImageSrc}
            alt="Отдельное сообщение с изображением"
          />
          <Bubble.Meta time="13:30" userName="ИИ-бот" />
        </Bubble>
      </div>
    </div>
  ),
};
