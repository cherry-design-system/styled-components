"use client";
import { css } from "styled-components";
import { Theme, mq } from "./theme";

const styledHero1 = (theme: Theme) => css`
  font-size: ${theme.fontSizes.hero1.xs};
  line-height: ${theme.lineHeights.hero1.xs};

  ${mq("lg")} {
    font-size: ${theme.fontSizes.hero1.lg};
    line-height: ${theme.lineHeights.hero1.lg};
  }
`;

const styledHero2 = (theme: Theme) => css`
  font-size: ${theme.fontSizes.hero2.xs};
  line-height: ${theme.lineHeights.hero2.xs};

  ${mq("lg")} {
    font-size: ${theme.fontSizes.hero2.lg};
    line-height: ${theme.lineHeights.hero2.lg};
  }
`;

const styledHero3 = (theme: Theme) => css`
  font-size: ${theme.fontSizes.hero3.xs};
  line-height: ${theme.lineHeights.hero3.xs};

  ${mq("lg")} {
    font-size: ${theme.fontSizes.hero3.lg};
    line-height: ${theme.lineHeights.hero3.lg};
  }
`;

const styledH1 = (theme: Theme) => css`
  font-size: ${theme.fontSizes.h1.xs};
  line-height: ${theme.lineHeights.h1.xs};

  ${mq("lg")} {
    font-size: ${theme.fontSizes.h1.lg};
    line-height: ${theme.lineHeights.h1.lg};
  }
`;

const styledH2 = (theme: Theme) => css`
  font-size: ${theme.fontSizes.h2.xs};
  line-height: ${theme.lineHeights.h2.xs};

  ${mq("lg")} {
    font-size: ${theme.fontSizes.h2.lg};
    line-height: ${theme.lineHeights.h2.lg};
  }
`;

const styledH3 = (theme: Theme) => css`
  font-size: ${theme.fontSizes.h3.xs};
  line-height: ${theme.lineHeights.h3.xs};

  ${mq("lg")} {
    font-size: ${theme.fontSizes.h3.lg};
    line-height: ${theme.lineHeights.h3.lg};
  }
`;

const styledH4 = (theme: Theme) => css`
  font-size: ${theme.fontSizes.h4.xs};
  line-height: ${theme.lineHeights.h4.xs};

  ${mq("lg")} {
    font-size: ${theme.fontSizes.h4.lg};
    line-height: ${theme.lineHeights.h4.lg};
  }
`;

const styledH5 = (theme: Theme) => css`
  font-size: ${theme.fontSizes.h5.xs};
  line-height: ${theme.lineHeights.h5.xs};

  ${mq("lg")} {
    font-size: ${theme.fontSizes.h5.lg};
    line-height: ${theme.lineHeights.h5.lg};
  }
`;

const styledH6 = (theme: Theme) => css`
  font-size: ${theme.fontSizes.h6.xs};
  line-height: ${theme.lineHeights.h6.xs};

  ${mq("lg")} {
    font-size: ${theme.fontSizes.h6.lg};
    line-height: ${theme.lineHeights.h6.lg};
  }
`;

const styledText = (theme: Theme) => css`
  font-size: ${theme.fontSizes.text.xs};
  line-height: ${theme.lineHeights.text.xs};

  ${mq("lg")} {
    font-size: ${theme.fontSizes.text.lg};
    line-height: ${theme.lineHeights.text.lg};
  }
`;

const styledStrong = (theme: Theme) => css`
  font-size: ${theme.fontSizes.strong.xs};
  line-height: ${theme.lineHeights.strong.xs};

  ${mq("lg")} {
    font-size: ${theme.fontSizes.strong.lg};
    line-height: ${theme.lineHeights.strong.lg};
  }
`;

const styledSmall = (theme: Theme) => css`
  font-size: ${theme.fontSizes.small.xs};
  line-height: ${theme.lineHeights.small.xs};

  ${mq("lg")} {
    font-size: ${theme.fontSizes.small.lg};
    line-height: ${theme.lineHeights.small.lg};
  }
`;

const styledBlockquote = (theme: Theme) => css`
  font-size: ${theme.fontSizes.blockquote.xs};
  line-height: ${theme.lineHeights.blockquote.xs};

  ${mq("lg")} {
    font-size: ${theme.fontSizes.blockquote.lg};
    line-height: ${theme.lineHeights.blockquote.lg};
  }
`;

const styledCode = (theme: Theme) => css`
  font-size: ${theme.fontSizes.code.xs};
  line-height: ${theme.lineHeights.code.xs};

  ${mq("lg")} {
    font-size: ${theme.fontSizes.code.lg};
    line-height: ${theme.lineHeights.code.lg};
  }
`;

const styledButton = (theme: Theme) => css`
  font-size: ${theme.fontSizes.button.xs};
  line-height: ${theme.lineHeights.button.xs};

  ${mq("lg")} {
    font-size: ${theme.fontSizes.button.lg};
    line-height: ${theme.lineHeights.button.lg};
  }
`;

const styledButtonBig = (theme: Theme) => css`
  font-size: ${theme.fontSizes.buttonBig.xs};
  line-height: ${theme.lineHeights.buttonBig.xs};

  ${mq("lg")} {
    font-size: ${theme.fontSizes.buttonBig.lg};
    line-height: ${theme.lineHeights.buttonBig.lg};
  }
`;

const styledInput = (theme: Theme) => css`
  font-size: ${theme.fontSizes.input.xs};
  line-height: ${theme.lineHeights.input.xs};

  ${mq("lg")} {
    font-size: ${theme.fontSizes.input.lg};
    line-height: ${theme.lineHeights.input.lg};
  }
`;

const styledInputBig = (theme: Theme) => css`
  font-size: ${theme.fontSizes.inputBig.xs};
  line-height: ${theme.lineHeights.inputBig.xs};

  ${mq("lg")} {
    font-size: ${theme.fontSizes.inputBig.lg};
    line-height: ${theme.lineHeights.inputBig.lg};
  }
`;

export {
  styledHero1,
  styledHero2,
  styledHero3,
  styledH1,
  styledH2,
  styledH3,
  styledH4,
  styledH5,
  styledH6,
  styledText,
  styledStrong,
  styledSmall,
  styledBlockquote,
  styledCode,
  styledButton,
  styledButtonBig,
  styledInput,
  styledInputBig,
};
