/**
 * Takes 2x screenshots of every component preview (/preview/<name>) in light
 * and dark mode, then frames each image with rounded corners (radius.lg,
 * transparent outside) and a 1px grayLight border in the matching theme color.
 *
 * Usage: start the dev server (`pnpm run dev`), then `pnpm run screenshots`.
 *
 * Env overrides:
 *   PREVIEW_URL  Base URL of the preview route (default http://localhost:5173/preview)
 *   OUT_DIR      Output directory (default ../cherry-documentation/public/components)
 *   CHROME_PATH  Chrome/Chromium executable (default macOS Google Chrome)
 *   THEME_JSON   Path to a theme JSON file with { default, dark } color maps;
 *                colors are passed to the preview via ?colors= and override
 *                the built-in theme colors
 */
const path = require("path");
const fs = require("fs");
const { chromium } = require("playwright-core");
const sharp = require("sharp");

const BASE = process.env.PREVIEW_URL || "http://localhost:5173/preview";
const OUT =
  process.env.OUT_DIR ||
  path.resolve(__dirname, "../../cherry-documentation/public/components");
const CHROME =
  process.env.CHROME_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

// Optional custom theme colors ({ default, dark } maps, e.g. a docs theme.json)
const customColors = process.env.THEME_JSON
  ? JSON.parse(fs.readFileSync(process.env.THEME_JSON, "utf8"))
  : null;

// theme.colors.grayLight per theme (src/lib/utils/theme.ts), or the override
const BORDER = {
  light: customColors?.default?.grayLight || "#e5e7eb",
  dark: customColors?.dark?.grayLight || "#1a1a1a",
};
// theme.spacing.radius.lg (12px) and a 1px border, at deviceScaleFactor 2
const RADIUS = 24;
const STROKE = 2;

const components = [
  "button",
  "button-secondary",
  "button-tertiary",
  "button-outline",
  "icon-button",
  "input",
  "select",
  "textarea",
  "password",
  "checkbox",
  "radio",
  "toggle",
  "range",
  "dropzone",
  "dropzone-inline",
  "avatar-dropzone",
  "accordion",
  "accordion-inline",
  "tabs",
  "modal",
  "toast",
  "theme-toggle",
  "box",
  "flex",
  "grid",
];

// Round the corners (transparent outside) and draw a 1px grayLight border.
async function frame(file, color) {
  const { width, height } = await sharp(file).metadata();
  const mask = Buffer.from(
    `<svg width="${width}" height="${height}"><rect width="${width}" height="${height}" rx="${RADIUS}" fill="#fff"/></svg>`,
  );
  const stroke = Buffer.from(
    `<svg width="${width}" height="${height}"><rect x="${STROKE / 2}" y="${STROKE / 2}" width="${width - STROKE}" height="${height - STROKE}" rx="${RADIUS - STROKE / 2}" fill="none" stroke="${color}" stroke-width="${STROKE}"/></svg>`,
  );
  const buf = await sharp(file)
    .ensureAlpha()
    .composite([
      { input: mask, blend: "dest-in" },
      { input: stroke, blend: "over" },
    ])
    .png()
    .toBuffer();
  fs.writeFileSync(file, buf);
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({
    executablePath: CHROME,
    headless: true,
  });

  for (const theme of ["light", "dark"]) {
    const context = await browser.newContext({
      viewport: { width: 800, height: 600 },
      deviceScaleFactor: 2,
      colorScheme: theme,
    });
    const page = await context.newPage();

    for (const name of components) {
      // The modal caps at max-width 500px only from the lg breakpoint (992px),
      // so capture it on a desktop-size viewport to keep it narrow.
      await page.setViewportSize(
        name === "modal"
          ? { width: 1100, height: 700 }
          : { width: 800, height: 600 },
      );
      const params = new URLSearchParams({ theme });
      if (customColors) {
        params.set(
          "colors",
          JSON.stringify({
            default: customColors.default,
            dark: customColors.dark,
          }),
        );
      }
      await page.goto(`${BASE}/${name}?${params}`, {
        waitUntil: "networkidle",
      });
      if (name === "toast") {
        // breathing room around the stack; capture-time only
        await page.addStyleTag({
          content:
            'ul[class*="toast__StyledNotifications"] { padding: 40px !important; }',
        });
      }
      // let open/enter animations (accordion, toast, modal) settle
      await page.waitForTimeout(1000);

      const file = `${OUT}/${name}-${theme}.png`;
      if (name === "modal") {
        await page.screenshot({ path: file });
      } else if (name === "toast") {
        await page
          .locator('ul[class*="toast__StyledNotifications"]')
          .screenshot({ path: file });
      } else {
        await page.locator("#preview-box").screenshot({ path: file });
      }
      await frame(file, BORDER[theme]);
      console.log(`saved ${name}-${theme}.png`);
    }
    await context.close();
  }

  await browser.close();
})();
