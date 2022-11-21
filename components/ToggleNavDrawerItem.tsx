import { useRouter } from "next/router";
import type { FC } from "react";
import styled from "styled-components";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { Gnb } from "../types/gnb";
import { IconWrapper } from "./IconWrapper";
import { useDispatch } from "../context";
import { SET_ACTIVE_MDMENU } from "../context/action";
import { css } from "styled-components";

const mixinToggleNavDrawerItemContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 5px 5px 5px 10px;
  border-radius: 24px;
  user-select: none;
`;

const Container = styled.div<{
  isActive: boolean;
  showIcon: boolean;
  isBack: boolean;
}>`
  background: ${({ theme, isActive }) =>
    isActive ? `${theme.activeBgColor} !important` : ""};

  ${({ theme, isBack }) =>
    !isBack
      ? `
  cursor: pointer;

  &:hover {
    background: ${theme.hoverBgColor};
  }
  `
      : ""}

  ${mixinToggleNavDrawerItemContainer}
`;

const LinkContainer = styled.a<{
  isActive: boolean;
  showIcon: boolean;
  isBack: boolean;
}>`
  background: ${({ theme, isActive }) =>
    isActive ? `${theme.activeBgColor} !important` : ""};

  ${({ theme, isBack }) =>
    !isBack
      ? `
  cursor: pointer;

  &:hover {
    background: ${theme.hoverBgColor};
  }
  `
      : ""}

  ${mixinToggleNavDrawerItemContainer}
`;

const Icon = styled.div<{ isActive: boolean }>`
  width: 34px;
  height: 34px;

  & > svg {
    width: 30px;
    height: 30px;
    color: ${({ theme, isActive }) => (isActive ? theme.activeTextColor : "")};
  }
`;

const Label = styled.div<{ isActive: boolean }>`
  flex: 1;

  color: ${({ theme, isActive }) => (isActive ? theme.activeTextColor : "")};
`;

interface ToggleNavDrawerItemProps extends Gnb {}

export const ToggleNavDrawerItem: FC<ToggleNavDrawerItemProps> = ({
  label,
  icon,
  href,
  items
}) => {
  const router = useRouter();

  const dispatch = useDispatch();

  let isActive = false;
  if (href) {
    if (href.length === 1) {
      isActive = router.asPath === href;
    } else {
      isActive = router.asPath.includes(href);
    }
  }
  const hasLnb = items.length > 0;

  const handleClick = () => {
    if (hasLnb) {
      dispatch({
        type: SET_ACTIVE_MDMENU,
        payload: items
      });
    } else {
      router.push(href!);
    }
  };

  return hasLnb ? (
    <Container
      isActive={isActive}
      onClick={handleClick}
      showIcon={!!icon}
      isBack={false}
    >
      <Icon isActive={isActive}>{icon && icon}</Icon>
      <Label isActive={isActive}>{label}</Label>
      <Icon isActive={isActive}>{hasLnb && <BsArrowRight />}</Icon>
    </Container>
  ) : (
    <LinkContainer
      isActive={isActive}
      onClick={handleClick}
      showIcon={!!icon}
      isBack={false}
      tabIndex={-1}
      href={href}
    >
      <Icon isActive={isActive}>{icon && icon}</Icon>
      <Label isActive={isActive}>{label}</Label>
      <Icon isActive={isActive}>{hasLnb && <BsArrowRight />}</Icon>
    </LinkContainer>
  );
};

interface ToggleNavDrawerCollapseItemProps {
  onClick: () => void;
}

export const ToggleNavDrawerCollapseItem: FC<
  ToggleNavDrawerCollapseItemProps
> = ({ onClick }) => {
  return (
    <Container isActive={false} showIcon={true} isBack={true}>
      <IconWrapper onClick={onClick} iconSize={30}>
        <BsArrowLeft />
      </IconWrapper>
      <Label isActive={false}></Label>
    </Container>
  );
};
