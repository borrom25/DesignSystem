import { CloseBtn } from "@/components/CloseBtn";
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
        closable && alertStyles.rootClosable,
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
          className={cn(alertStyles.body, isCompact && alertStyles.bodyCompact)}
        >
          <div
            className={cn(
              alertStyles.title,
              isCompact && alertStyles.titleCompact
            )}
          >
            {title}
          </div>
          {hasDescription && (
            <p className={alertStyles.description}>{description}</p>
          )}
          {hasActions && <div className={alertStyles.actions}>{actions}</div>}
        </div>
      </div>
    </div>
  );
}
