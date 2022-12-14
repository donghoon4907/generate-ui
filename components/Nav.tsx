import type { FC } from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { NavItem } from "./NavItem";
import { mixinBgLv2 } from "../theme/mixins/background";
import { NavDrawer } from "./NavDrawer";
import { ToggleThemeMode } from "./ToggleThemeMode";
import { gnbOptions } from "./options/Gnb";

const Container = styled.aside`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  position: fixed;
  z-index: 8;
  height: 100%;
  overflow-y: auto;

  ${mixinBgLv2}

  ${({ theme }) => theme.breakPoint.lg} {
    display: none;
  }
`;

const Body = styled.nav`
  display: flex;
  flex-direction: column;

  width: 88px;
  margin-top: 20px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

interface Props {}

export const Nav: FC<Props> = () => {
  const [open, setOpen] = useState(false);

  const handleMouseMove = (evt: MouseEvent) => {
    if (evt.pageX > 350) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Container>
        <Body>
          {gnbOptions.map((g, index) => (
            <NavItem
              key={`gnb${index}`}
              {...g}
              collapseFunc={() => setOpen(g.items.length > 0)}
            />
          ))}
        </Body>
        <Footer>
          <ToggleThemeMode showLabel={false} />
        </Footer>
      </Container>
      <NavDrawer open={open} />
    </>
  );
};
