import { CloseBtn } from "@/components/CloseBtn";
import {
  Text,
  TextColor,
  TextShade,
  TextVariant,
  TextWeight,
} from "@/components/Text";
import { cn } from "@/utils";
import { Color, Size } from "@/types";
import type { AlertProps } from "./Alert.types";
import { alertIconMap, getAlertLayoutState } from "./Alert.utils";
import { alertStyles } from "./styles";

export function Alert({
  type = Color.Positive,
  title,
  description,
  actions,
  closable = true,
  onClose,
  className,
  ...props
}: AlertProps) {
  const Icon = alertIconMap[type];
  const variantStyles = alertStyles.variant[type];
  const { hasDescription, hasActions, isCompact } = getAlertLayoutState(
    description,
    actions
  );

  return (
    <div
      className={cn(
        alertStyles.root,
        alertStyles.animation,
        variantStyles.container,
        className
      )}
      role="alert"
      {...props}
    >
      {closable && (
        <CloseBtn
          size={Size.Md}
          onClick={onClose}
          aria-label="Закрыть уведомление"
          className={alertStyles.closeButton}
        />
      )}
      <div
        className={cn(
          alertStyles.content,
          isCompact && alertStyles.contentCompact
        )}
      >
        <div
          className={cn(alertStyles.iconWrapper, variantStyles.iconWrapper)}
          aria-hidden="true"
        >
          <Icon size={16} className={variantStyles.icon} />
        </div>
        <div
          className={cn(
            alertStyles.body,
            closable && alertStyles.bodyClosable,
            isCompact && alertStyles.bodyCompact
          )}
        >
          <Text
            as="div"
            variant={TextVariant.B1}
            weight={TextWeight.Semibold}
            color={TextColor.Basic}
            shade={TextShade.Primary}
            className={cn(
              alertStyles.title,
              isCompact && alertStyles.titleCompact
            )}
          >
            {title}
          </Text>
          {hasDescription && (
            <Text
              as="p"
              variant={TextVariant.B2}
              weight={TextWeight.Medium}
              color={TextColor.Basic}
              shade={TextShade.Secondary}
              className={alertStyles.description}
            >
              {description}
            </Text>
          )}
        </div>
      </div>
      {hasActions && <div className={alertStyles.actions}>{actions}</div>}
    </div>
  );
}
