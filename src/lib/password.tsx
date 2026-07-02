"use client";
import React, { forwardRef, useState } from "react";
import styled, { css } from "styled-components";

import { Icon } from "./icon";
import { IconButton } from "./icon-button";
import { Input, InputProps } from "./input";
import { fullWidthStyles } from "./utils";

export type PasswordProps = Omit<
  InputProps,
  "type" | "$icon" | "$iconPosition"
>;

const passwordSizes = {
  small: { height: 40, inset: 8, button: 24 },
  default: { height: 50, inset: 11, button: 28 },
  big: { height: 60, inset: 16, button: 28 },
};

const StyledPassword = styled.span<Pick<PasswordProps, "$size" | "$fullWidth">>`
  position: relative;
  display: inline-flex;

  & input {
    padding-right: ${({ $size }) => {
      const { inset, button } = passwordSizes[$size ?? "default"];
      return `${inset + button + 10}px`;
    }};
  }

  ${({ $fullWidth }) => fullWidthStyles($fullWidth)}
`;

const StyledPasswordReveal = styled.span<Pick<PasswordProps, "$size">>`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;

  ${({ $size }) => {
    const { height, inset } = passwordSizes[$size ?? "default"];
    return css`
      right: ${inset}px;
      height: ${height}px;
    `;
  }}
`;

function LocalPassword(
  { ...props }: PasswordProps,
  ref: React.Ref<HTMLInputElement>,
) {
  const [show, setShow] = useState(false);

  return (
    <StyledPassword $size={props.$size} $fullWidth={props.$fullWidth}>
      <Input {...props} type={show ? "text" : "password"} ref={ref} />
      <StyledPasswordReveal $size={props.$size}>
        <IconButton
          $size={props.$size === "small" ? "small" : "default"}
          $error={props.$error}
          aria-label={show ? "Hide password" : "Show password"}
          aria-pressed={show}
          title={show ? "Hide password" : "Show password"}
          onClick={() => setShow((prev) => !prev)}
        >
          <Icon name={show ? "EyeOff" : "Eye"} />
        </IconButton>
      </StyledPasswordReveal>
    </StyledPassword>
  );
}

const Password = forwardRef(LocalPassword);

export { Password };
