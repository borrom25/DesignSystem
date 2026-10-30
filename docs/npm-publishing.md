# Публикация `borrom-ds-test` в npm

Эта инструкция описывает рабочий процесс публикации библиотеки `borrom-ds-test` через npm access token с включенным `Bypass 2FA`.

## Выпуск 0.0.72

Документация описывает API `borrom-ds-test@0.0.72`. На 30.10.2026 выпуск ещё в обработке. В проектах-потребителях при установке и обновлении всегда используем `borrom-ds-test@latest` — последнюю опубликованную версию по тегу npm `latest`. Пока выпуск обрабатывается, тег может указывать на предыдущую версию. Изменение `package.json` или отправка исходников в GitHub сами по себе не публикуют пакет в npm.

В этом выпуске есть несовместимые изменения API после обновления из GitLab. Перед обновлением приложения прочитайте [инструкцию по миграции](migration-gitlab-c277eef5.md).

Команды из корня репозитория, если версия уже поднята до `0.0.72`:

```powershell
corepack yarn lint
corepack yarn publish:check
npm whoami --registry=https://registry.npmjs.org/
# Если whoami вернул 401 — выполните вход и подтвердите его в браузере:
npm login --registry=https://registry.npmjs.org/ --auth-type=web
npm publish --access public
npm view borrom-ds-test dist-tags --registry=https://registry.npmjs.org/
```

Повторно запускать `yarn bump` для уже подготовленного выпуска не нужно: он снова увеличит версию и создаст commit. Для локального архива без публикации выполните `npm pack`; архив можно установить в другом проекте через `npm install "C:\путь\borrom-ds-test-0.0.72.tgz"`.

После публикации обновите приложение командой `npm install borrom-ds-test@latest` и подключите `import "borrom-ds-test/styles.css"` один раз в точке входа. Проверьте установленную версию через `npm ls borrom-ds-test`; перед обновлением прочитайте миграции. Для строгого использования компонентов см. [инструкцию проекта-потребителя](using-design-system.md).

Официальные команды: [npm login](https://docs.npmjs.com/cli/v11/commands/npm-login/), [npm publish](https://docs.npmjs.com/cli/v11/commands/npm-publish/).

## Что важно понимать

GitHub и npm - это разные места хранения:

- GitHub хранит исходный код библиотеки.
- npm registry хранит опубликованную сборку, которую можно установить в другом проекте.

Если обновить код и сделать только `git push`, проекты-потребители не получат новую версию библиотеки. Для импорта через:

```tsx
import { Button } from "borrom-ds-test";
import "borrom-ds-test/styles.css";
```

нужно опубликовать новую версию пакета в npm.

## Как устроена сборка

Публичный пакет называется `borrom-ds-test`.

В npm публикуется не `src`, а собранная папка `dist`. Это настроено в `package.json`:

```json
"files": ["dist"]
```

Главная публичная точка входа:

```text
src/index.ts
```

Если компонент должен импортироваться из пакета, он должен быть экспортирован из `src/index.ts`:

```tsx
import { Button, Input, Table } from "borrom-ds-test";
```

Стили собираются в общий файл:

```tsx
import "borrom-ds-test/styles.css";
```

## Подготовка npm token

Публикация выполняется через npm access token, а не через ручной 2FA-код.

На npmjs.com:

1. Откройте аккаунт npm.
2. Перейдите в `Access Tokens`.
3. Создайте новый granular access token.
4. Укажите понятное имя, например:

```text
borrom-ds-publish
```

5. Включите:

```text
Bypass two-factor authentication (2FA)
```

6. В блоке `Packages and scopes` поставьте:

```text
Permissions: Read and write
```

7. В `Select packages` лучше выбрать:

```text
Only select packages and scopes -> borrom-ds-test
```

Если пакет не выбирается или нужно быстрее, можно выбрать:

```text
All packages
```

8. `Allowed IP ranges` оставьте пустым, если нет стабильного IP.
9. `Organizations` оставьте:

```text
No access
```

10. Создайте token и сразу скопируйте его. npm показывает token только один раз.

## Подключение token на машине

В PowerShell выполните:

```powershell
npm config set //registry.npmjs.org/:_authToken=ВАШ_НОВЫЙ_TOKEN
```

Проверьте, что npm видит аккаунт:

```powershell
npm whoami
```

Ожидаемый результат:

```text
borrom
```

Если token истек или неверный, `npm whoami` вернет ошибку авторизации.

## Обычная публикация новой версии

Все команды ниже выполняются в папке библиотеки:

```powershell
cd "C:\Проекты\DesignSystem Alabuga"
```

### 1. Проверить изменения

```powershell
git status
```

Если есть изменения компонентов, сначала проверьте, что они должны попасть в релиз.

### 2. Закоммитить кодовые изменения

Пример:

```powershell
git add src/index.ts src/components/index.ts
git commit -m "fix: export all components from public api"
```

Если менялись другие файлы, добавьте именно их. Не используйте `git add .` без проверки `git status`.

### 3. Поднять версию пакета

npm не разрешает публиковать одну и ту же версию дважды. Например, после `0.0.71` следующий patch-выпуск — `0.0.72`. Для уже подготовленного выпуска `0.0.72` повторно поднимать версию не нужно.

В проекте есть скрипт:

```powershell
corepack yarn bump
```

Он делает несколько вещей:

- проверяет, что рабочая копия чистая;
- запускает lint и build;
- увеличивает patch-версию в `package.json`;
- обновляет `CHANGELOG.md`;
- создает commit версии.

Если команда `yarn` доступна напрямую, можно использовать:

```powershell
yarn bump
```

### 4. Отправить изменения в GitHub

```powershell
git push origin main
```

После этого GitHub содержит исходники и новую версию в `package.json`.

### 5. Проверить npm-пакет перед публикацией

```powershell
corepack yarn publish:check
```

Эта команда собирает библиотеку и делает:

```powershell
npm pack --dry-run
```

Она показывает, какие файлы реально попадут в npm-пакет.

Нормально, если в выводе есть:

```text
dist/index.js
dist/index.cjs
dist/index.d.ts
dist/borrom-ds-test.css
```

### 6. Опубликовать пакет

Если token с `Bypass 2FA` подключен корректно:

```powershell
corepack yarn publish:npm
```

Либо напрямую:

```powershell
npm publish --access public
```

Успешная публикация выглядит примерно так:

```text
+ borrom-ds-test@0.0.72
```

### 7. Проверить опубликованную версию

```powershell
npm view borrom-ds-test version --registry=https://registry.npmjs.org/
```

Проверить тег `latest`:

```powershell
npm view borrom-ds-test dist-tags --registry=https://registry.npmjs.org/
```

Ожидаемый результат после завершения публикации `0.0.72`:

```text
{ latest: "0.0.72" }
```

Иногда сразу после публикации `npm view borrom-ds-test version` может на короткое время показать старую версию из-за задержки registry/cache. Повторите команду через минуту или используйте `--registry=https://registry.npmjs.org/`.

## Обновление библиотеки в проекте-потребителе

После публикации проекты, которые используют библиотеку, не обновляются автоматически.

Нужно перейти в проект-потребитель, например:

```powershell
cd "C:\Проекты\Codeconnect Test"
```

И обновить зависимость:

```powershell
npm install borrom-ds-test@latest
```

Проверить установленную версию:

```powershell
npm ls borrom-ds-test
```

Пример результата после публикации `0.0.72` (в дальнейшем здесь будет номер актуального выпуска):

```text
borrom-ds-test@0.0.72
```

После этого новые экспорты доступны в проекте:

```tsx
import { Plug, StepBar, ProgressPie, Table } from "borrom-ds-test";
```

## Частые ошибки

### `EOTP`

```text
This operation requires a one-time password from your authenticator.
```

Причина: npm token не обходит 2FA.

Что проверить:

- token не истек;
- token создан с `Bypass 2FA`;
- в `Packages and scopes` стоит `Read and write`, а не `Read only`;
- token имеет доступ к пакету `borrom-ds-test`.

Решение: создать новый token и заново выполнить:

```powershell
npm config set //registry.npmjs.org/:_authToken=ВАШ_НОВЫЙ_TOKEN
```

### `E401` или `ENEEDAUTH`

npm не видит авторизацию.

Проверьте:

```powershell
npm whoami
```

Если команда падает, подключите новый token.

### `You cannot publish over the previously published versions`

Такая версия уже опубликована.

Решение: поднять версию:

```powershell
corepack yarn bump
```

### `403 Forbidden`

Возможные причины:

- token не имеет права publish;
- token только `Read only`;
- token не имеет доступа к пакету;
- email аккаунта npm не подтвержден;
- пакет принадлежит другому аккаунту.

### `No license field`

npm предупреждает, что в `package.json` нет лицензии. Это предупреждение не блокирует публикацию, но перед публичным распространением лучше осознанно выбрать лицензию или указать `UNLICENSED`, если пакет нельзя свободно переиспользовать.

## Короткий чеклист

```powershell
cd "C:\Проекты\DesignSystem Alabuga"
git status
git add <changed-files>
git commit -m "..."
corepack yarn bump
git push origin main
corepack yarn publish:check
corepack yarn publish:npm
npm view borrom-ds-test version --registry=https://registry.npmjs.org/
```

Потом в проекте-потребителе:

```powershell
cd "C:\Проекты\Codeconnect Test"
npm install borrom-ds-test@latest
npm ls borrom-ds-test
```
