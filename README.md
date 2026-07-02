# Cherry React Library

[![npm version](https://img.shields.io/npm/v/cherry-styled-components.svg?style=flat)](https://www.npmjs.com/package/cherry-styled-components)

## Introduction

Cherry Design System is a versatile foundation for projects. It offers a white label base, ready-to-use Figma designs, open-source React components, built-in support for theming and dark mode. Explore the [docs](https://cherry.al/) to create delightful user interfaces.

---

# Installation

This project requires Node.js v20+ installed.

```bash
npm install
```

To run the development environment, use the following command:

```bash
npm run dev
```

To build the library for production, use the following command:

```bash
npm run build
```

## Component Previews

The dev server ships with a preview route that renders a single component in isolation, centered on the page. It is meant for visual inspection and for taking automated screenshots (e.g. with Playwright).

With `npm run dev` running:

- `/preview` shows an index page linking to every available preview.
- `/preview/<name>` renders one component centered inside a wrapper with the stable selector `#preview-box`.

The route is handled in `src/main.tsx` and the previews live in `src/preview.tsx`. Both are part of the demo app only and are not included in the library build.

### Available previews

| Name               | Renders                                           |
| ------------------ | ------------------------------------------------- |
| `accordion`        | Card accordion, open by default                   |
| `accordion-inline` | Inline accordion variant, open by default         |
| `avatar-dropzone`  | Empty avatar dropzone, default size               |
| `box`              | Box surface with a placeholder block              |
| `button`           | Primary filled button                             |
| `button-secondary` | Secondary filled button                           |
| `button-tertiary`  | Tertiary filled button                            |
| `button-outline`   | Primary outline button                            |
| `checkbox`         | Checked checkbox                                  |
| `dropzone`         | Block dropzone with prompt, browse, and hint text |
| `dropzone-inline`  | Inline dropzone variant                           |
| `flex`             | Flex row with three placeholder blocks            |
| `grid`             | Three-column grid with a full-width row           |
| `icon`             | Cherry icon at 48px                               |
| `icon-button`      | Icon button with a settings icon                  |
| `input`            | Text input with label and placeholder             |
| `modal`            | Modal, already open on a backdrop                 |
| `password`         | Password field with label and placeholder         |
| `radio`            | Checked radio button                              |
| `range`            | Range slider                                      |
| `select`           | Select with label                                 |
| `textarea`         | Textarea with label and value                     |
| `toast`            | Success, error, and info toasts, fired on mount   |
| `toggle`           | Checked toggle                                    |

Pure layout primitives with no visual output of their own (Container, Col, MaxWidth, Space) have no preview entry.

### Forcing a theme

Append `?theme=dark` or `?theme=light` to any preview URL to force a theme:

```
/preview/button?theme=dark
```

The value is written to `localStorage.theme`, which `CherryThemeProvider` reads, so it persists for subsequent navigations in the same browser context. Always pass the parameter explicitly when comparing themes to avoid leakage from a previous visit.

### Taking screenshots

`scripts/screenshot-previews.cjs` captures every preview in both themes and writes the framed images used by the documentation site. With the dev server running in another terminal:

```bash
pnpm run dev
pnpm run screenshots
```

For each component it produces `<name>-light.png` and `<name>-dark.png` at 2x resolution (`deviceScaleFactor: 2`), then post-processes every image with sharp:

- Corners are rounded with the theme's `radius.lg` (12px, so 24px at 2x) and made transparent outside the radius.
- A 1px solid border is drawn in the theme's `grayLight` color: `#e5e7eb` for light, `#1a1a1a` for dark.

The border and radius are baked into the PNG rather than applied in CSS so that all images get the identical frame, including the two special captures:

- `modal` overlays the whole viewport, so it is captured as a full-page screenshot to include the backdrop.
- `toast` renders in a corner outside `#preview-box`, so the toast list element is captured instead, with 40px of padding injected at capture time for breathing room.

Everything else is cropped to the `#preview-box` element. Animated previews (accordion, modal, toast) get a one-second settle delay before capture.

The script drives your installed Chrome through `playwright-core` (no browser download needed) and defaults can be overridden with env vars:

| Variable      | Default                                                        |
| ------------- | -------------------------------------------------------------- |
| `PREVIEW_URL` | `http://localhost:5173/preview`                                |
| `OUT_DIR`     | `../cherry-documentation/public/components`                    |
| `CHROME_PATH` | `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome` |

For one-off manual screenshots, target the `#preview-box` selector:

```js
await page.goto("http://localhost:5173/preview/button?theme=light");
await page.locator("#preview-box").screenshot({ path: "button-light.png" });
```

## Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discuss Cherry on GitHub](https://github.com/cherry-design-system/styled-components/discussions)

For casual chit-chat with others using Cherry:

[Join the Discord Server](https://discord.gg/6JvcWU5bke)
