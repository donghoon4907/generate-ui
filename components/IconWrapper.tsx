import type { FC } from "react";
import { DOMAttributes } from "react";
import styled from "styled-components";

import { mixinBtnDefault } from "../theme/mixins/button";
import { CoreProps } from "../interfaces/core";

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  border-radius: 16px;

  &:before {
    position: absolute;
    content: "";
    width: 24px;
    height: 24px;
    border-radius: 50%;

    transform: scaleX(1);
    transition-duration: 200ms;
    transition-property: transform, background;
    transition-timing-function: linear;
  }

  &:hover:before {
    background: ${({ theme }) => theme.hoverBgColor};
  }

  & > svg {
    width: 20px;
    height: 20px;
  }

  ${mixinBtnDefault}
`;

interface Props extends CoreProps, DOMAttributes<HTMLButtonElement> {
  ariaLabel: string;
}

export const IconWrapper: FC<Props> = ({ ariaLabel, children, ...props }) => {
  return (
    <Container type="button" aria-label={ariaLabel} {...props}>
      {children}
    </Container>
  );
};
