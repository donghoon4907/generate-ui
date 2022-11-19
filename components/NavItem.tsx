import { useRouter } from "next/router";
import type { FC } from "react";
import styled from "styled-components";

import { mixinLabelMd } from "../theme/mixins/label";
import type { Gnb } from "../types/gnb";
import { useDispatch } from "../context";
import { SET_ACTIVE_LNB } from "../context/action";

const Container = styled.a`
  width: 80px;
  margin: -2px auto 14px;
  padding: 2px;
`;

const IconWrapper = styled.span<{ isActive: boolean }>`
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
      isActive ? theme.activeBgColor : ""};

    transition: background 200ms linear;
  }

  &:hover:before {
    background: ${({ theme, isActive }) =>
      isActive ? theme.activeBgColor : theme.hoverBgColor};
  }

  & > svg {
    width: 24px;
    height: 24px;
    color: ${({ theme, isActive }) => (isActive ? theme.activeTextColor : "")};
  }
`;

const Label = styled.div<{ isActive: boolean }>`
  ${mixinLabelMd}

  margin-bottom: 4px;
  text-align: center;
  color: ${({ theme, isActive }) => (isActive ? theme.activeTextColor : "")};
`;

interface Props extends Gnb {
  collapseFunc: () => void;
}

export const NavItem: FC<Props> = ({
  icon,
  label,
  href,
  items,
  collapseFunc
}) => {
  const router = useRouter();

  const dispatch = useDispatch();

  const splitSearch = router.asPath.split("/");

  const splitHref = href?.split("/");

  const isActive = splitSearch[1] === splitHref?.[1];

  const handleMouseEnter = () => {
    dispatch({
      type: SET_ACTIVE_LNB,
      payload: items
    });

    collapseFunc();
  };

  return (
    <Container href={href} onMouseEnter={handleMouseEnter}>
      <IconWrapper isActive={isActive}>{icon}</IconWrapper>
      <Label isActive={isActive}>{label}</Label>
    </Container>
  );
};
