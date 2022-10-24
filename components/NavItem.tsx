import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import styled from "styled-components";

import { mixinLabelMd } from "../theme/mixins/label";

const Container = styled.a`
  width: 80px;
  margin: -2px auto 14px;
  padding: 2px;
`;

const IconWrap = styled.span<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 56px;
  height: 32px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 4px;
  border-radius: 16px;

  &:before {
    position: absolute;
    content: "";
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    background: ${({ theme, isActive }) =>
      isActive ? theme.activeBgColor : "inherit"};

    transform: scaleX(1);
    transition-duration: 200ms;
    transition-property: transform, background;
    transition-timing-function: linear;
  }

  &:hover:before {
    background: ${({ theme, isActive }) =>
      isActive ? theme.activeBgColor : theme.hoverBgColor};
  }

  & > svg {
    width: 24px;
    height: 24px;
    color: ${({ theme, isActive }) =>
      isActive ? theme.activeTextColor : "inherit"};
  }
`;

const Label = styled.div<{ isActive: boolean }>`
  ${mixinLabelMd}

  margin-bottom: 4px;
  text-align: center;
  color: ${({ theme, isActive }) =>
    isActive ? theme.activeTextColor : "inherit"};
`;

interface Props {
  icon: ReactNode;
  label: string;
  href: string;
  // setOpenLnb: (open: boolean) => void;
}

export const NavItem: FC<Props> = ({
  icon,
  label,
  href
  // setOpenLnb
}) => {
  const router = useRouter();

  const isActive = router.asPath === href;

  return (
    <Container
    // onMouseEnter={() => setOpenLnb(true)}
    // onMouseLeave={() => setOpenLnb(false)}
    >
      <IconWrap isActive={isActive}>{icon}</IconWrap>
      <Label isActive={isActive}>{label}</Label>
    </Container>
  );
};
