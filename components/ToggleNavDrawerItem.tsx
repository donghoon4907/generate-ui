import { useRouter } from "next/router";
import type { FC, MouseEvent } from "react";
import styled from "styled-components";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { Gnb } from "../types/gnb";
import { IconWrapper } from "./IconWrapper";
import { useDispatch } from "../context";
import { SET_ACTIVE_MDMENU } from "../context/action";
import {
  mixinNavDrawerItemActive,
  mixinNavDrawerItemHover,
  mixinNavDrawerItemIcon,
  mixinNavDrawerItemLabel,
  mixinNavDrawerItemShape
} from "../theme/mixins/nav";
import { mixinBtnDefault } from "../theme/mixins/button";

const NextContainer = styled.button<{
  isActive: boolean;
  hasIcon: boolean;
}>`
  ${({ hasIcon }) => mixinNavDrawerItemShape(hasIcon)}
  ${({ isActive }) => (isActive ? mixinNavDrawerItemActive : "")}
  ${mixinNavDrawerItemHover}
  ${mixinBtnDefault}
`;

const LinkContainer = styled.a<{
  isActive: boolean;
  hasIcon: boolean;
}>`
  ${({ hasIcon }) => mixinNavDrawerItemShape(hasIcon)}
  ${({ isActive }) => (isActive ? mixinNavDrawerItemActive : "")}
  ${mixinNavDrawerItemHover}
`;

const PreviousContainer = styled.div`
  ${mixinNavDrawerItemShape(true)}
`;

const Icon = styled.div<{ isActive: boolean }>`
  ${({ isActive }) => mixinNavDrawerItemIcon(isActive)}
`;

const Label = styled.span<{ isActive: boolean }>`
  ${({ isActive }) => mixinNavDrawerItemLabel(isActive)}
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

  const hasIcon = !!icon;

  const handleClickButton = () => {
    dispatch({
      type: SET_ACTIVE_MDMENU,
      payload: items
    });
  };

  const handleClickLink = (evt: MouseEvent) => {
    evt.preventDefault();

    router.push(href!);
  };

  return hasLnb ? (
    <NextContainer
      type="button"
      onClick={handleClickButton}
      isActive={isActive}
      hasIcon={hasIcon}
      tabIndex={isActive ? 0 : -1}
    >
      {icon && <Icon isActive={isActive}>{icon}</Icon>}
      <Label isActive={isActive}>{label}</Label>
      <Icon isActive={isActive}>{hasLnb && <BsArrowRight />}</Icon>
    </NextContainer>
  ) : (
    <LinkContainer
      href={href}
      onClick={handleClickLink}
      aria-label={`${label} 페이지 이동`}
      isActive={isActive}
      hasIcon={hasIcon}
      tabIndex={isActive ? 0 : -1}
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
