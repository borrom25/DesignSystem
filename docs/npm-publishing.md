# Публикация `borrom-ds-test` в npm

## Простыми словами

GitHub-репозиторий и npm-пакет - это разные вещи.

GitHub хранит исходники библиотеки. npm registry хранит опубликованную сборку, которую другие проекты могут установить командой:

```bash
npm install borrom-ds-test
```

Если пакет не опубликован в npm, проект не сможет поставить его как обычную зависимость, даже если GitHub-репозиторий публичный.

## Как пакет используется в проектах

В проекте-макете или любом приложении зависимость ставится так:

```bash
npm install borrom-ds-test
```

Импорт компонентов остается без версии:

```tsx
import { Button, Input } from "borrom-ds-test";
import "borrom-ds-test/styles.css";
```

Версия указывается только в `package.json` приложения, а не в import path.

## Что уже настроено в этой библиотеке

В `package.json` библиотеки:

- имя пакета: `borrom-ds-test`;
- публикация идет в публичный npm registry;
- в npm попадает только `dist`;
- перед публикацией можно выполнить проверку упаковки.

Команды:

```bash
yarn publish:check
yarn publish:npm
```

`yarn publish:check` собирает библиотеку и показывает, какие файлы попадут в npm-пакет.

`yarn publish:npm` делает ту же проверку и затем запускает `npm publish --access public`.

## Первый раз: что нужно сделать

1. Создать аккаунт на npmjs.com, если его еще нет.
2. Включить Corepack, чтобы команда `yarn` бралась из `packageManager` проекта:

```bash
corepack enable
```

Если после этого `yarn` все равно недоступен, команды можно запускать через:

```bash
corepack yarn publish:check
corepack yarn publish:npm
```

3. Войти в npm на этой машине:

```bash
npm login
```

4. Проверить, что логин работает:

```bash
npm whoami
```

5. Проверить, что имя пакета доступно:

```bash
npm view borrom-ds-test version
```

Если команда возвращает `404`, пакет с таким именем еще не опубликован в текущем npm registry. Для первой публикации это нормально.

6. Запустить проверку:

```bash
yarn publish:check
```

7. Опубликовать:

```bash
yarn publish:npm
```

Если npm вернул `E403` с текстом `Two-factor authentication ... is required to publish packages`, значит для публикации нужен одноразовый 2FA-код. Возьми свежий код из приложения-аутентификатора и запусти публикацию так:

```bash
yarn publish:check
npm publish --access public --otp=123456
```

где `123456` нужно заменить на актуальный 2FA-код.

После успешной публикации пакет станет доступен как:

```bash
npm install borrom-ds-test
```

## Следующие публикации

Перед каждой новой публикацией нужно поднять версию в `package.json`.

Например, если сейчас:

```json
"version": "0.0.70"
```

то следующая публикация должна быть:

```json
"version": "0.0.71"
```

npm не разрешает публиковать одну и ту же версию дважды.

Обычный порядок:

```bash
yarn build
yarn publish:check
yarn publish:npm
git add package.json CHANGELOG.md
git commit -m "chore: publish borrom-ds-test 0.0.71"
git push origin main
```

Если версия уже опубликована, сначала обнови `version`, потом повтори публикацию.

## Если публикация не проходит

`ENEEDAUTH`: npm не видит авторизацию. Нужно выполнить `npm login`.

`403 Forbidden`: аккаунт не имеет права публиковать этот пакет, имя уже занято или npm требует подтверждение email / 2FA.

`403 Forbidden - Two-factor authentication ... is required to publish packages`: публикация требует 2FA-код. Повтори publish с `--otp=<код из приложения>`.

`You cannot publish over the previously published versions`: такая версия уже опубликована. Нужно поднять `version`.

`404` на `npm view borrom-ds-test version`: пакет еще не опубликован в текущий registry. Для первой публикации это ожидаемо.

`No license field`: npm предупреждает, что в `package.json` не указана лицензия. Это не блокирует публикацию, но перед публичным распространением лучше осознанно выбрать лицензию или указать `UNLICENSED`, если пакет нельзя свободно переиспользовать.

## Почему не GitHub Packages

GitHub Packages для npm обычно удобнее использовать со scoped-пакетами, например `@owner/borrom-ds-test`. Тогда в проектах пришлось бы либо менять импорт, либо использовать alias в `package.json`.

Чтобы сохранить простой импорт:

```tsx
import { Button } from "borrom-ds-test";
```

выбран публичный npm registry.
