# Figma Token Export

Exported at: 2026-05-19T19:12:50.381Z

Source: https://www.figma.com/design/gPjMJwL1jc8V4G6x4lZJDa/branch/vhZty8bcWDP1aOmKjx4ZBu/0.-%D0%94%D0%B0-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BC%D0%BD%D0%B5-%D0%A2%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2?node-id=11749-927&p=f&t=0Jh6fmGSFyxNhCAy-11

## Safety

- Existing repo token files were not modified.
- Figma file was not modified.
- No create/update/delete/set/publish/import operations were used.
- Export was saved separately in `figma-token-export`.

## What MCP Returned Reliably

- Local variable collections: 10
- Local variables counted: 884
- Local paint styles: 0
- Local text styles: 30
- Local effect styles: 3
- Local grid styles: 0
- Available library variable collections: 19

## Counts By Type

- color: 549
- typography: 80
- radius: 18
- semantic-color: 138
- spacing: 68
- float: 16
- sizing: 13
- boolean: 2

## Collections

- Primitive Colors: 551 variables; modes: Value
- Border Radius: 14 variables; modes: br_size
- Typography: 80 variables; modes: typography, Политех
- Spacings: 58 variables; modes: spacings
- Theme: 138 variables; modes: themes_light, themes_dark
- TypoComponent: 35 variables; modes: TypoComponent
- Border Radius Component: 4 variables; modes: br-xs, br-sm, br-md, br-lg
- Modal: 1 variables; modes: width_xs, width_sm, width_md
- Viewport: 2 variables; modes: min-width: 320px, min-width: 360px, min-width: 375px, min-width: 390px, min-width: 412px, min-width: 430px, min-width: 640px, min-width: 1240px, min-width: 1512px
- Layout: 1 variables; modes: container_xs, container_sm, container_md

## Blocker

The MCP runtime returned the token inventory, but full raw per-variable JSON could not be safely persisted in this session because large `use_figma` responses are truncated around 20kb, and the plugin runtime has no working outbound transport to the local filesystem/server: `fetch`, `XMLHttpRequest`, `WebSocket`, and `figma.ui.onmessage` are unavailable/unsupported; one-way `showUI` fetch/image beacon did not reach localhost.

Because the user explicitly prohibited modifying Figma or existing token files, I did not use import/create/set-style workarounds. The raw files here are therefore safe discovery packets and counts, not a complete per-variable value dump.

## Files

- metadata.json
- collections.json
- variables.raw.json
- styles.raw.json
- modes.json
- tokens.normalized.json
- tokens.by-type.json
- libraries.raw.json
- tokens.report.md
