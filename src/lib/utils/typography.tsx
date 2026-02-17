"use client";
import { css } from "styled-components";
import { FontSizes, Theme, mq } from "./theme";

const createTypographyStyle = (key: keyof FontSizes) => (theme: Theme) => css`
  font-size: ${theme.fontSizes[key].xs};
  line-height: ${theme.lineHeights[key].xs};

  ${mq("lg")} {
    font-size: ${theme.fontSizes[key].lg};
    line-height: ${theme.lineHeights[key].lg};
  }
`;

const styledHero1 = createTypographyStyle("hero1");
const styledHero2 = createTypographyStyle("hero2");
const styledHero3 = createTypographyStyle("hero3");
const styledH1 = createTypographyStyle("h1");
const styledH2 = createTypographyStyle("h2");
const styledH3 = createTypographyStyle("h3");
const styledH4 = createTypographyStyle("h4");
const styledH5 = createTypographyStyle("h5");
const styledH6 = createTypographyStyle("h6");
const styledText = createTypographyStyle("text");
const styledStrong = createTypographyStyle("strong");
const styledSmall = createTypographyStyle("small");
const styledBlockquote = createTypographyStyle("blockquote");
const styledCode = createTypographyStyle("code");
const styledButton = createTypographyStyle("button");
const styledButtonBig = createTypographyStyle("buttonBig");
const styledInput = createTypographyStyle("input");
const styledInputBig = createTypographyStyle("inputBig");

export {
  createTypographyStyle,
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
