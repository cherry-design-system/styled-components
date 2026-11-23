"use client";
import { css, type RuleSet } from "styled-components";
import type { Theme } from "./theme";
import { modeValue } from "./theme-variables";

// ---------------------------------------------------------------------------
// modes(): a style that differs by light and dark mode
// ---------------------------------------------------------------------------
//
// The theme is one object for both modes (its colors are CSS variables), so a
// style can no longer branch on the mode at render time: the stylesheet has
// to carry both outcomes. `modes()` wraps a styled interpolation written
// against `theme.isDark`, runs it once as light and once as dark, and emits:
//
//   - the value itself, when both modes agree;
//   - one value that switches with the mode (`modeValue`), when the
//     interpolation returns a value (a color, a length, a shadow);
//   - for a `css` block whose two results have the same shape (the usual
//     case: a ternary on the mode inside a value), one block with a switching
//     value in each slot that differs, at no added specificity;
//   - otherwise a `:root.dark &` rule, for a block only in dark mode or one
//     that restates the light block, and a `:root:not(.dark) &` rule for a
//     block only in light mode.
//
// Prefer a mode token on the theme for a color many styles share; `modes()` is
// for the one-off choices.

/** The theme as a `modes()` interpolation sees it: with the mode it runs for. */
export interface ModeTheme extends Theme {
  isDark: boolean;
}

type Props = { theme: Theme };
type Result = string | number | false | null | undefined | RuleSet<object>;

const isBlock = (value: unknown) =>
  Array.isArray(value) ||
  (typeof value === "string" && /[;{}]|^\s*[a-z-]+\s*:\s/.test(value));

const isEmpty = (value: unknown) =>
  value === false ||
  value === null ||
  value === undefined ||
  value === "" ||
  (Array.isArray(value) && value.length === 0);

const isValue = (value: unknown): value is string | number =>
  (typeof value === "string" || typeof value === "number") && !isBlock(value);

/**
 * Two evaluations of one `css` block merged slot by slot: the template text
 * is the same in both, so only interpolated values can differ, and each one
 * that does becomes a switching value. Null when the shapes differ.
 */
function mergeBlocks(light: unknown, dark: unknown): unknown[] | null {
  if (!Array.isArray(light) || !Array.isArray(dark)) return null;
  if (light.length !== dark.length) return null;
  const out: unknown[] = [];
  for (let i = 0; i < light.length; i++) {
    const a = light[i];
    const b = dark[i];
    if (a === b) {
      out.push(a);
    } else if (typeof a === "function" && typeof b === "function") {
      // A nested interpolation: styled-components calls it later with the
      // real props, so either copy is the same code.
      out.push(a);
    } else if (Array.isArray(a) && Array.isArray(b)) {
      const merged = mergeBlocks(a, b);
      if (!merged) return null;
      out.push(merged);
    } else if (isValue(a) && isValue(b)) {
      out.push(modeValue(String(a), String(b)));
    } else {
      return null;
    }
  }
  return out;
}

/**
 * Runs a styled interpolation for both modes and merges the two results into
 * CSS that follows the `dark` class on <html>. See the module comment.
 *
 * @example
 * const Card = styled.div`
 *   border-color: ${modes(({ theme }) =>
 *     theme.isDark ? theme.colors.gray : theme.colors.grayLight,
 *   )};
 * `;
 */
export function modes<P extends Props>(
  style: (props: Omit<P, "theme"> & { theme: ModeTheme }) => Result,
) {
  return (props: P): Result => {
    const light = style({ ...props, theme: { ...props.theme, isDark: false } });
    const dark = style({ ...props, theme: { ...props.theme, isDark: true } });

    if (!isBlock(light) && !isBlock(dark)) {
      if (light === dark) return light;
      if (isEmpty(light) && isEmpty(dark)) return light;
      return modeValue(String(light ?? ""), String(dark ?? ""));
    }

    const merged = mergeBlocks(light, dark);
    if (merged) return merged as RuleSet<object>;

    if (isEmpty(light)) {
      return css`
        :root.dark & {
          ${dark as RuleSet<object>}
        }
      `;
    }
    if (isEmpty(dark)) {
      return css`
        :root:not(.dark) & {
          ${light as RuleSet<object>}
        }
      `;
    }
    // Both modes style the block: light as the base, dark restating it.
    return css`
      ${light as RuleSet<object>}
      :root.dark & {
        ${dark as RuleSet<object>}
      }
    `;
  };
}
