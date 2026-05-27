# Публикация `borrom-ds-test` в npm

Эта инструкция описывает рабочий процесс публикации библиотеки `borrom-ds-test` через npm access token с включенным `Bypass 2FA`.

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

npm не разрешает публиковать одну и ту же версию дважды. Если текущая опубликованная версия `0.0.70`, следующая должна быть `0.0.71`.

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
+ borrom-ds-test@0.0.71
```

### 7. Проверить опубликованную версию

```powershell
npm view borrom-ds-test version --registry=https://registry.npmjs.org/
```

Проверить тег `latest`:

```powershell
npm view borrom-ds-test dist-tags --registry=https://registry.npmjs.org/
```

Ожидаемый результат:

```text
{ latest: "0.0.71" }
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

Ожидаемый результат:

```text
borrom-ds-test@0.0.71
```

После этого новые экспорты доступны в проекте:

```tsx
import { Space, Plug, StepBar, ProgressPie, DataTable } from "borrom-ds-test";
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
