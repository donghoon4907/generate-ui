import type { FC } from "react";
import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

import { CoreProps } from "../interfaces/core";
import { mixinBtnDefault } from "../theme/mixins/button";

const PrimaryButtonContainer = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 100px;
  background: ${({ theme }) => theme.activeBgColor} !important;
  line-height: 30px;

  ${mixinBtnDefault}
`;

interface PrimaryButtonProps
  extends CoreProps,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export const PrimaryButton: FC<PrimaryButtonProps> = ({
  children,
  ...props
}) => {
  return <PrimaryButtonContainer {...props}>{children}</PrimaryButtonContainer>;
};
