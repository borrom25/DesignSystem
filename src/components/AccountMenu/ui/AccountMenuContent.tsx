import { Avatar, ListItem, Segmented } from "@/components";
import { useScreenSize, useTheme } from "@/providers";
import { accountMenuClasses } from "../styles";
import { AccountMenuContentProps } from "../AccountMenu.types.ts";
import { ChevronRight, LogOut, Moon, SunMedium } from "lucide-react";
import { cn } from "@/utils";

export function AccountMenuContent({
  actionSlot,
  switchersSlot,
  language,
  languages = [],
  onChangeLanguage,
  showTheme,
  src,
  fullName,
  role,
  actions = [],
  logoutFn,
}: AccountMenuContentProps) {
  const { isMobile } = useScreenSize();
  const { setTheme, theme } = useTheme();
  const isShowLanguageSlot =
    language && onChangeLanguage && !!languages?.length;

  return (
    <div className={cn(accountMenuClasses.wrapper, !isMobile && "w-[249px]")}>
      <div className={accountMenuClasses.header}>
        <Avatar size={80} src={src} />
        <div className={accountMenuClasses.text}>
          <div className={accountMenuClasses.fullName}>{fullName}</div>
          {role && <div className={accountMenuClasses.role}>{role}</div>}
        </div>
      </div>

      {(!!switchersSlot || isShowLanguageSlot || showTheme) && (
        <div className={accountMenuClasses.switchers}>
          {switchersSlot ?? (
            <>
              {language && onChangeLanguage && !!languages.length && (
                <Segmented
                  shape="round"
                  value={language}
                  options={languages}
                  onChange={onChangeLanguage}
                />
              )}
              {!!showTheme && (
                <Segmented
                  shape="round"
                  options={[
                    { label: <SunMedium size={16} />, value: "light" },
                    { label: <Moon size={16} />, value: "dark" },
                  ]}
                  value={theme}
                  onChange={setTheme}
                />
              )}
            </>
          )}
        </div>
      )}

      {actionSlot ||
        (actions.length && (
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
          <ListItem
            iconLeft={LogOut}
            onClick={logoutFn}
            variant="danger"
            iconRight={ChevronRight}
          >
            Выйти
          </ListItem>
        </div>
      )}
    </div>
  );
}
