import { useRouter } from "next/router";
import type { FC, MouseEvent } from "react";
import styled from "styled-components";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { Gnb } from "../types/gnb";
import { IconWrapper } from "./IconWrapper";
import { useDispatch } from "../context";
import { SET_ACTIVE_MDMENU } from "../context/action";
import { css } from "styled-components";

const mixinToggleNavDrawerItemContainer = (
  isActive: boolean,
  hasIcon: boolean,
  isGnb: boolean
) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 5px 5px 5px 10px;
  border-radius: 24px;
  user-select: none;

  ${!hasIcon ? "margin-left: 34px; padding-left:15px !important;" : ""}

  ${({ theme }) =>
    isActive ? `background: ${theme.activeBgColor} !important;` : ""}

  ${({ theme }) =>
    isGnb
      ? `
    cursor: pointer;

  &:hover {
    background: ${theme.hoverBgColor};
  }
    `
      : ""}
`;

const NextContainer = styled.div<{
  isActive: boolean;
  hasIcon: boolean;
}>`
  ${({ isActive, hasIcon }) =>
    mixinToggleNavDrawerItemContainer(isActive, hasIcon, true)}
`;

const LinkContainer = styled.a<{
  isActive: boolean;
  hasIcon: boolean;
}>`
  ${({ isActive, hasIcon }) =>
    mixinToggleNavDrawerItemContainer(isActive, hasIcon, true)}
`;

const PreviousContainer = styled.div`
  ${mixinToggleNavDrawerItemContainer(false, true, false)}
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

const Label = styled.div<{ isActive?: boolean }>`
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

  const handleClick = (evt: MouseEvent) => {
    evt.preventDefault();

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
    <NextContainer
      isActive={isActive}
      hasIcon={!!icon}
      onClick={handleClick}
      tabIndex={isActive ? 0 : -1}
    >
      {icon && <Icon isActive={isActive}>{icon}</Icon>}
      <Label isActive={isActive}>{label}</Label>
      <Icon isActive={isActive}>{hasLnb && <BsArrowRight />}</Icon>
    </NextContainer>
  ) : (
    <LinkContainer
      isActive={isActive}
      hasIcon={!!icon}
      onClick={handleClick}
      tabIndex={isActive ? 0 : -1}
      href={href}
    >
      {icon && <Icon isActive={isActive}>{icon}</Icon>}
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
    <PreviousContainer>
      <IconWrapper onClick={onClick} iconSize={30} ariaLabel="close menu">
        <BsArrowLeft />
      </IconWrapper>
    </PreviousContainer>
  );
};
