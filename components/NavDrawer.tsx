import type { FC } from "react";
import styled from "styled-components";

import { mixinBgLv2 } from "../theme/mixins/background";
import { NavDrawerItem } from "./NavDrawerItem";
import { useSelector } from "../context";

const Container = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  position: absolute;
  top: 0;
  bottom: 0;
  left: -256px;
  z-index: 6;
  width: 256px;
  height: 100vh;
  overflow: hidden;
  border-left: 1px solid ${({ theme }) => theme.dividerColor};
  border-radius: 0 16px 16px 0;
  box-shadow: ${({ theme }) => theme.boxShadow.nav};

  transition-property: transform;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
  transform: translate3d(${({ open }) => (open ? "344px" : "0")}, 0, 0);

  ${mixinBgLv2}
`;

const Body = styled.div`
  padding: 5px;
`;

interface Props {
  open: boolean;
}

export const NavDrawer: FC<Props> = ({ open }) => {
  const { activeLnb } = useSelector();

  return (
    <Container open={open}>
      <Body>
        {activeLnb.map((lnb, index) => (
          <NavDrawerItem key={`lnb${index}`} {...lnb} />
        ))}
      </Body>
    </Container>
  );
};
