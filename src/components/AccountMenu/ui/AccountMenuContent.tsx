import {
  Avatar,
  Button,
  ListItem,
  Segmented,
  ThemeSwitcher,
} from "@/components";
import { useScreenSize } from "@/providers";
import { accountMenuClasses } from "../styles";
import { AccountMenuContentProps } from "../AccountMenu.types.ts";
import { ChevronRight } from "lucide-react";
import { cn } from "@/utils";
import { Color, Type } from "@/types/variants.ts";

export function AccountMenuContent<T extends string = string>({
  actionSlot,
  switchersSlot,
  avatarProps,
  language,
  languages = [],
  onChangeLanguage,
  showTheme,
  src,
  fullName,
  role,
  actions = [],
  logoutFn,
}: AccountMenuContentProps<T>) {
  const { isMobile } = useScreenSize();
  const isShowLanguageSlot =
    language && onChangeLanguage && !!languages?.length;

  return (
    <div className={cn(accountMenuClasses.wrapper, !isMobile && "w-[249px]")}>
      <div className={accountMenuClasses.header}>
        <Avatar {...avatarProps} size={80} src={src} />
        <div className={accountMenuClasses.text}>
          <div className={accountMenuClasses.fullName}>{fullName}</div>
          {role && <div className={accountMenuClasses.role}>{role}</div>}
        </div>
      </div>

      {(!!switchersSlot || isShowLanguageSlot || showTheme) && (
        <div className={accountMenuClasses.switchers}>
          {switchersSlot ?? (
            <>
              {isShowLanguageSlot && (
                <Segmented
                  shape="round"
                  value={language}
                  options={languages}
                  onChange={onChangeLanguage}
                />
              )}
              {showTheme && (
                <ThemeSwitcher
                  className={cn(
                    !isShowLanguageSlot && accountMenuClasses.themeSwitcher
                  )}
                />
              )}
            </>
          )}
        </div>
      )}

      {actionSlot ||
        (!!actions.length && (
          <div className={accountMenuClasses.items}>
            {actionSlot ??
              actions.map((props, index) =>
                props.asChild ? (
                  <ListItem key={`account-menu-action-${index}`} {...props} />
                ) : (
                  <ListItem
                    key={`account-menu-action-${index}`}
                    iconRight={ChevronRight}
                    {...props}
                  />
                )
              )}
          </div>
        ))}

      {!!logoutFn && (
        <div className={accountMenuClasses.items}>
          <Button color={Color.Secondary} type={Type.Flat} onClick={logoutFn}>
            Выйти
          </Button>
        </div>
      )}
    </div>
  );
}
