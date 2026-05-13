// url=https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=1352-28686
// source=src/components/UserItem/UserItem.tsx
// component=UserItem
const figma = require("figma");
const instance = figma.selectedInstance;

const size = instance.getEnum("Size", {
  Xs: "xs",
  Sm: "sm",
  Md: "md",
});

const avatarPosition = instance.getEnum("positionAvatar", {
  Left: "left",
  Top: "top",
  Center: "top",
});

const title = instance.getString("Title");
const showAvatar = instance.getBoolean("Avatar");
const showCaption = instance.getBoolean("Caption");
const showLabels = instance.getBoolean("label");

const captionSlot = instance.getPropertyValue("<slotCaptio>");
const labelSlot = instance.getPropertyValue("<slotLabel>");
void captionSlot;
void labelSlot;

export default {
  example: figma.tsx`
    <UserItem size="${size}" avatarPosition="${avatarPosition}">
      ${
        showAvatar
          ? figma.tsx`
              <UserItem.Avatar
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=user"
                alt="User"
                withBorder
              />
            `
          : ""
      }
      <UserItem.Content>
        <UserItem.Title>${title}</UserItem.Title>
        ${showCaption ? figma.tsx`<UserItem.Subtitle>caption</UserItem.Subtitle>` : ""}
        ${
          showLabels
            ? figma.tsx`
                <UserItem.Labels>
                  <Label>label 1</Label>
                  <Label>label 2</Label>
                </UserItem.Labels>
              `
            : ""
        }
      </UserItem.Content>
    </UserItem>
  `,
  imports: ['import { UserItem, Label } from "borrom-ds-test"'],
  id: "user-item",
  metadata: {
    nestable: true,
    props: {
      hasAvatar: showAvatar,
      hasCaption: showCaption,
      hasLabels: showLabels,
      hasTemporaryCenterMapping: instance.getEnum("positionAvatar", {
        Left: false,
        Top: false,
        Center: true,
      }),
    },
  },
};
