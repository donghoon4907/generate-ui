import { useRouter } from "next/router";
import type { FC, MouseEvent } from "react";
import { useState } from "react";
import styled from "styled-components";
import { RiArrowUpSFill } from "react-icons/ri";

import { mixinBtnDefault } from "../theme/mixins/button";
import type { Gnb } from "../types/gnb";
import {
  mixinNavDrawerItemActive,
  mixinNavDrawerItemHover,
  mixinNavDrawerItemLabel,
  mixinNavDrawerItemShape
} from "../theme/mixins/nav";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 8px;
`;

const ButtonTypeShape = styled.button<{
  isActive: boolean;
}>`
  ${mixinNavDrawerItemShape(true)}
  ${({ isActive }) => (isActive ? mixinNavDrawerItemActive : "")}
  ${mixinNavDrawerItemHover}
  ${mixinBtnDefault}
`;

const LinkTypeShape = styled.a<{
  isActive: boolean;
  hasIcon: boolean;
}>`
  ${({ hasIcon }) => mixinNavDrawerItemShape(hasIcon)}
  ${({ isActive }) => (isActive ? mixinNavDrawerItemActive : "")}
  ${mixinNavDrawerItemHover}
`;

const Label = styled.span<{
  isActive: boolean;
}>`
  ${({ isActive }) => mixinNavDrawerItemLabel(isActive)}
`;

const Trailing = styled.span<{ expand: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(${({ expand }) => (expand ? "0deg" : "180deg")});

  & > svg {
    width: 24px;
    height: 24px;
  }
`;

const Collapse = styled.div<{ expand: boolean }>`
  overflow: hidden;
  max-height: ${({ expand }) => (expand ? "200px" : "0")};
  transition: max-height 0.5s ease;
`;

interface Props extends Gnb {}

export const NavDrawerItem: FC<Props> = ({ label, href, items }) => {
  const router = useRouter();

  const [expand, setExpand] = useState(false);

  let isActive = router.asPath === href;

  const hasDetail = items.length > 0;

  const handleClick = () => {
    setExpand(!expand);
  };

  const handleClickLink = (evt: MouseEvent, href: string) => {
    evt.preventDefault();

    router.push(href);
  };

  return (
    <Container>
      {hasDetail ? (
        <ButtonTypeShape
          type="button"
          onClick={handleClick}
          isActive={isActive}
          tabIndex={isActive ? 0 : -1}
        >
          <Label isActive={isActive}>{label}</Label>
          <Trailing expand={expand}>
            <RiArrowUpSFill />
          </Trailing>
        </ButtonTypeShape>
      ) : (
        <LinkTypeShape
          href={href}
          onClick={evt => handleClickLink(evt, href)}
          aria-label={`${label} 페이지 이동`}
          tabIndex={isActive ? 0 : -1}
          isActive={isActive}
          hasIcon={true}
        >
          <Label isActive={isActive}>{label}</Label>
        </LinkTypeShape>
      )}

      <Collapse expand={expand}>
        {items.map(({ label, href }, index) => {
          const isActive = router.asPath === href;

          return (
            <LinkTypeShape
              key={`collapseGnb${index}`}
              href={href}
              onClick={evt => handleClickLink(evt, href)}
              aria-label={`${label} 페이지 이동`}
              tabIndex={isActive ? 0 : -1}
              isActive={isActive}
              hasIcon={false}
            >
              <Label isActive={isActive}>{label}</Label>
            </LinkTypeShape>
          );
        })}
      </Collapse>
    </Container>
  );
};
