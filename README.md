# borrom-ds-test

React UI kit / design system package.

## Install

```bash
npm install borrom-ds-test
```

## Usage

```tsx
import { Button } from "borrom-ds-test";
import "borrom-ds-test/styles.css";

export function Example() {
  return <Button>Action</Button>;
}
```

## Publish

This package is published to the public npm registry as `borrom-ds-test`.

```bash
corepack enable
yarn publish:check
npm login
yarn publish:npm
```

If npm requires 2FA during publish:

```bash
yarn publish:check
npm publish --access public --otp=123456
```

Replace `123456` with the current one-time code from your authenticator app.

See `docs/npm-publishing.md` for the full publishing workflow.
