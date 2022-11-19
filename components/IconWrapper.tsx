import type { ButtonHTMLAttributes, FC } from "react";
import styled from "styled-components";

import { mixinBtnDefault } from "../theme/mixins/button";
import { CoreProps } from "../interfaces/core";

const Container = styled.button<{ iconSize?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ iconSize }) => (iconSize ? iconSize + 4 : 24)}px !important;
  height: ${({ iconSize }) => (iconSize ? iconSize + 4 : 24)}px;

  position: relative;

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: background 200ms linear;
  }

  &:hover::before {
    background: ${({ theme }) => theme.hoverBgColor};
  }

  & > svg {
    width: ${({ iconSize }) => (iconSize ? iconSize : 20)}px;
    height: ${({ iconSize }) => (iconSize ? iconSize : 20)}px;
  }

  ${mixinBtnDefault}
`;

interface Props extends CoreProps, ButtonHTMLAttributes<HTMLButtonElement> {
  iconSize?: number;
}

export const IconWrapper: FC<Props> = ({ ariaLabel, children, ...props }) => {
  return (
    <Container type="button" aria-label={ariaLabel || ""} {...props}>
      {children}
    </Container>
  );
};
