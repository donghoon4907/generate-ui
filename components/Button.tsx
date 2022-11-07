import type { FC } from "react";
import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

import { CoreProps } from "../interfaces/core";
import { mixinBtnDefault } from "../theme/mixins/button";

const Container = styled.button`
  height: 100%;
  border-radius: 100px;
  line-height: 30px;

  ${mixinBtnDefault}
`;

const PresetButtonContainer = styled.button`
  display: inline-block;
  height: 40px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  border-radius: 5px;

  ${mixinBtnDefault}
`;

const PrimaryButtonContainer = styled(Container)`
  background: ${({ theme }) => theme.activeBgColor} !important;
`;

const SecondaryButtonContainer = styled(Container)`
  background: ${({ theme }) => theme.hoverBgColor} !important;
`;

const BootstrapPrimaryContainer = styled(PresetButtonContainer)`
  background: ${({ theme }) => theme.color.bootstrapBlue} !important;
  color: ${({ theme }) => theme.color.white} !important;
  border: 1px solid ${({ theme }) => theme.color.bootstrapBlue} !important;
`;

const BootstrapOutlineContainer = styled(PresetButtonContainer)`
  background: ${({ theme }) => theme.color.white} !important;
  color: ${({ theme }) => theme.color.bootstrapBlue} !important;
  border: 1px solid ${({ theme }) => theme.color.bootstrapBlue} !important;
`;

interface ButtonProps
  extends CoreProps,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export const PrimaryButton: FC<ButtonProps> = ({ children, ...props }) => {
  return <PrimaryButtonContainer {...props}>{children}</PrimaryButtonContainer>;
};

export const SecondaryButton: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <SecondaryButtonContainer {...props}>{children}</SecondaryButtonContainer>
  );
};

export const BootstrapPrimaryButton: FC<ButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <BootstrapPrimaryContainer {...props}>{children}</BootstrapPrimaryContainer>
  );
};

export const BootstrapOutlineButton: FC<ButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <BootstrapOutlineContainer {...props}>{children}</BootstrapOutlineContainer>
  );
};