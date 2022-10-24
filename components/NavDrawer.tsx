import { FC } from "react";
import styled from "styled-components";

import { mixinBgLv2 } from "../theme/mixins/background";
import { DrawerItem } from "./DrawerItem";
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
  border-left: 1px solid #444746;
  border-radius: 0 16px 16px 0;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
    0px 2px 6px 2px rgba(0, 0, 0, 0.15);

  transition-property: transform;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.2, 0, 0, 1);
  transform: translateX(${props => (props.open ? "344px" : "0")});

  ${mixinBgLv2}
`;

const Body = styled.ul`
  padding: 5px;
`;

interface Props {
  open: boolean;
  collapseFunc: () => void;
}

export const NavDrawer: FC<Props> = ({ open, collapseFunc }) => {
  const { activeLnb } = useSelector();

  return (
    <Container open={open} onMouseLeave={collapseFunc}>
      <Body>
        {activeLnb.map((lnb, index) => (
          <DrawerItem key={`lnb${index}`} {...lnb} />
        ))}
      </Body>
    </Container>
  );
};
