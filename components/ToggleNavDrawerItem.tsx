import { useRouter } from "next/router";
import type { Dispatch, FC, SetStateAction } from "react";
import styled from "styled-components";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { ActiveLink } from "./ActiveLink";
import { Gnb } from "../types/gnb";
import { IconWrapper } from "./IconWrapper";

const Container = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 5px 5px 5px 10px;
  border-radius: 24px;
  user-select: none;

  background: ${({ theme, isActive }) =>
    isActive ? `${theme.activeBgColor} !important` : ""};
`;

const ToggleNavDrawerContainer = styled(Container)`
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.hoverBgColor};
  }
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

  let isActive = false;
  if (href) {
    if (href.length === 1) {
      isActive = router.asPath === href;
    } else {
      isActive = router.asPath.includes(href);
    }
  }

  return (
    <>
      {items.length === 0 ? (
        <ActiveLink ariaLabel={label} href={href}>
          <ToggleNavDrawerContainer isActive={isActive}>
            <Icon isActive={isActive}>{icon && icon}</Icon>
            <Label isActive={isActive}>{label}</Label>
            <Icon isActive={isActive}>
              {items.length > 0 && <BsArrowRight />}
            </Icon>
          </ToggleNavDrawerContainer>
        </ActiveLink>
      ) : (
        <ToggleNavDrawerContainer isActive={isActive}>
          <Icon isActive={isActive}>{icon && icon}</Icon>
          <Label isActive={isActive}>{label}</Label>
          <Icon isActive={isActive}>
            {items.length > 0 && <BsArrowRight />}
          </Icon>
        </ToggleNavDrawerContainer>
      )}
    </>
  );
};

interface ToggleNavDrawerCollapseItemProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const ToggleNavDrawerCollapseItem: FC<
  ToggleNavDrawerCollapseItemProps
> = ({ setOpen }) => {
  const handleClickIcon = () => {
    setOpen(false);
  };

  return (
    <Container isActive={false}>
      <IconWrapper onClick={handleClickIcon} iconSize={30}>
        <BsArrowLeft />
      </IconWrapper>
      <Label isActive={false}></Label>
    </Container>
  );
};
