export type LinePlaygroundState = {
  position: "horizontal" | "vertical";
  type: "default" | "background" | "border";
  title: string;
  subtitle: string;
  withLabels: boolean;
  disabled: boolean;
  withLeftSlot: boolean;
  withRightSlot: boolean;
};

export const LINE_DEFAULT_STATE: LinePlaygroundState = {
  position: "horizontal",
  type: "background",
  title: "Фамилия И. О.",
  subtitle: "Изменения успешно сохранены и уже доступны в системе.",
  withLabels: true,
  disabled: false,
  withLeftSlot: true,
  withRightSlot: true,
};
