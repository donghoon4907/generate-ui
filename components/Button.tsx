import type { FC } from "react";
import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

import { CoreProps } from "../interfaces/core";
import { mixinBtnDefault } from "../theme/mixins/button";

const Container = styled.button`
  width: 100%;
  border-radius: 100px;
  line-height: 30px;

  ${mixinBtnDefault}
`;

const PresetButtonContainer = styled.button`
  display: inline-block;
  width: 100%;
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

const DangerButtonContainer = styled(Container)`
  background: ${({ theme }) => theme.color.bootstrapRed} !important;
  color ${({ theme }) => theme.color.white};
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

const BootstrapLightInputContainer = styled(PresetButtonContainer)`
  background: ${({ theme }) => theme.color.white} !important;
  color: ${({ theme }) => theme.color.black} !important;
  border: 1px solid ${({ theme }) => theme.color.lightDividerColor} !important;
`;

const BootstrapDarkInputContainer = styled(PresetButtonContainer)`
  background: ${({ theme }) => theme.color.gray_lv0} !important;
  color: ${({ theme }) => theme.color.darkTextColor_lv0} !important;
  border: 1px solid ${({ theme }) => theme.color.darkDividerColor} !important;
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

export const DangerButton: FC<ButtonProps> = ({ children, ...props }) => {
  return <DangerButtonContainer {...props}>{children}</DangerButtonContainer>;
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

export const BootstrapLightInputButton: FC<ButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <BootstrapLightInputContainer {...props}>
      {children}
    </BootstrapLightInputContainer>
  );
};

export const BootstrapDarkInputButton: FC<ButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <BootstrapDarkInputContainer {...props}>
      {children}
    </BootstrapDarkInputContainer>
  );
};
