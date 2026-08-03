"use client";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

import {
  Theme,
  alpha,
  styledH1,
  styledH2,
  styledH3,
  styledH4,
  styledH5,
  styledH6,
  styledSmall,
  styledText,
  thinScrollbar,
} from "./utils";

export interface ProseProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Tightens the vertical rhythm for dense contexts such as chat bubbles. */
  $compact?: boolean;
}

// The palette has no dedicated accent token, so hover/emphasis text takes the
// end of the primary ramp that contrasts with the current surface.
const accent = (theme: Theme) =>
  theme.isDark ? theme.colors.primaryLight : theme.colors.primaryDark;

/**
 * Styles for rendered markdown: links, lists, tables, code, media and
 * headings. Exported so it can be applied to an element that is already
 * styled, rather than wrapping it in another <div>.
 */
export const proseStyles = (theme: Theme, $compact?: boolean) => {
  const block = $compact ? "10px" : "20px";

  return css<{ theme: Theme }>`
    color: ${theme.colors.dark};
    ${styledText(theme)};

    /* First and last child margins are the wrapper's problem, not the
       caller's: they would otherwise push the block away from whatever the
       prose is nested inside (a chat bubble, a card, a callout). */
    & > *:first-child {
      margin-top: 0;
    }

    & > *:last-child {
      margin-bottom: 0;

      & > *:last-child {
        margin-bottom: 0;
      }
    }

    & p {
      margin: 0 0 ${block};
      ${styledText(theme)};
    }

    & h1,
    & h2,
    & h3,
    & h4,
    & h5,
    & h6 {
      margin: ${block} 0;
      padding: 0;
      color: ${theme.colors.dark};
    }

    /* Cherry's heading scale - without this the UA's em-relative heading
       sizes apply, and against chat-sized base text an h6 renders ~9px.
       Compact mode shifts each level down two steps so markdown headings
       stay proportionate inside a chat bubble. */
    & h1 {
      ${($compact ? styledH3 : styledH1)(theme)};
    }

    & h2 {
      ${($compact ? styledH4 : styledH2)(theme)};
    }

    & h3 {
      ${($compact ? styledH5 : styledH3)(theme)};
    }

    & h4 {
      ${($compact ? styledH6 : styledH4)(theme)};
    }

    & h5 {
      ${($compact ? styledH6 : styledH5)(theme)};
    }

    & h6 {
      ${styledH6(theme)};
    }

    /* Underline drawn with box-shadow so it sits clear of descenders and can
       be animated independently of the text color. Anchors that carry their
       own class, or that wrap an image, are left alone. */
    & a:not([class]):not(:has(img)) {
      color: inherit;
      transition: all 0.3s ease;
      text-decoration: none;
      box-shadow: 0 2px 0 0 ${theme.colors.primary};

      &:hover {
        color: ${accent(theme)};
        box-shadow: 0 1px 0 0 ${theme.colors.primary};
      }

      /* The focus ring is layered onto the same property as the underline so
         focusing a link does not erase it. */
      &:focus-visible {
        outline: none;
        border-radius: ${theme.spacing.radius.xs};
        box-shadow:
          0 2px 0 0 ${theme.colors.primary},
          0 0 0 2px ${theme.colors.primaryLight};
      }
    }

    & ul,
    & ol {
      margin: 0 0 ${block};
      padding: 0;

      & li {
        & > .code-wrapper {
          margin: 10px 0;
        }

        & p {
          display: inline;
        }
      }
    }

    & ul {
      list-style: none;

      & li {
        text-indent: 0;
        display: block;
        position: relative;
        padding: 0 0 0 24px;
        margin: 0;
        ${styledText(theme)};

        &::before {
          content: "";
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${theme.colors.primary};
          position: absolute;
          top: 0.65em;
          left: 9px;
        }
      }
    }

    & ol {
      counter-reset: item;

      & > li {
        counter-increment: item;
        padding: 0 0 0 24px;
        margin: 0;
        ${styledText(theme)};

        &::before {
          content: counter(item) ".";
          display: inline-block;
          min-width: 20px;
          margin-left: -24px;
          margin-right: 4px;
          text-align: right;
          font-weight: 700;
          color: ${theme.colors.primary};
        }
      }
    }

    /* Inline code only: fenced blocks arrive with a highlighter class and
       bring their own theme. */
    & code:not([class]) {
      background: ${alpha(theme.colors.primaryLight, 20)};
      color: ${theme.colors.dark};
      padding: 2px 4px;
      border-radius: ${theme.spacing.radius.xs};
      font-family: ${theme.fonts.mono};
      white-space: pre;
    }

    & pre,
    & .hljs {
      margin: 10px 0;
      overflow-x: auto;
      ${thinScrollbar};
    }

    & .code-wrapper pre {
      margin: 0;
    }

    & blockquote {
      margin: ${block} 0;
      padding: 0 0 0 16px;
      border-left: solid 2px ${theme.colors.grayLight};
      color: ${theme.colors.grayDark};
    }

    & hr {
      margin: ${block} 0;
      border: none;
      border-bottom: solid 1px ${theme.colors.grayLight};
    }

    & .table-wrapper {
      overflow-x: auto;
      width: 100%;
      margin: 0 0 ${block};
      ${thinScrollbar};
    }

    & table {
      margin: 0;
      padding: 0;
      border-collapse: collapse;
      width: 100%;
      text-align: left;

      & tr {
        margin: 0;
        padding: 0;
      }

      & th {
        border-bottom: solid 1px ${theme.colors.grayLight};
        padding: 10px 10px 10px 0;
        ${styledSmall(theme)};
        font-weight: 600;
        color: ${theme.colors.dark};
      }

      & td {
        border-bottom: solid 1px ${theme.colors.grayLight};
        padding: 10px 10px 10px 0;
        color: ${theme.colors.grayDark};
        ${styledSmall(theme)};
      }
    }

    & img,
    & video,
    & iframe {
      max-width: 100%;
      border-radius: ${theme.spacing.radius.lg};
      margin: 10px 0;
      display: block;
    }
  `;
};

const StyledProse = styled.div<ProseProps & { theme: Theme }>`
  ${({ theme, $compact }) => proseStyles(theme, $compact)};
`;

function LocalProse(
  { children, ...props }: ProseProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <StyledProse {...props} ref={ref}>
      {children}
    </StyledProse>
  );
}

const Prose = forwardRef(LocalProse);

export { Prose };
