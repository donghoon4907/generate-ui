import type { FC } from "react";
import styled from "styled-components";

import { NavDrawerItem } from "./NavDrawerItem";
import { useSelector } from "../context";
import { mixinNavDrawerShape } from "../theme/mixins/nav";

const Container = styled.nav<{ open: boolean }>`
  display: flex;
  transform: translate3d(${({ open }) => (open ? "344px" : "0")}, 0, 0);
  z-index: 6;

  ${mixinNavDrawerShape}

  ${({ theme }) => theme.breakPoint.lg} {
    display: none;
  }
`;

const Body = styled.div`
  padding: 5px;
`;

interface Props {
  open: boolean;
}

export const NavDrawer: FC<Props> = ({ open }) => {
  const { activeWdMenu } = useSelector();

  return (
    <Container open={open}>
      <Body>
        {activeWdMenu.map((menu, index) => (
          <NavDrawerItem key={`wdMenu${index}`} {...menu} />
        ))}
      </Body>
    </Container>
  );
};
