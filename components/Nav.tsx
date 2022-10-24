import { FC } from "react";
import styled from "styled-components";
import { BiHome, BiCode } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";

import { NavItem } from "./NavItem";
import { mixinBgLv2 } from "../theme/mixins/background";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  position: fixed;
  z-index: 8;
  height: 100%;
  overflow-y: auto;

  ${mixinBgLv2}
`;

const Body = styled.nav`
  display: flex;
  flex-direction: column;

  width: 88px;
  margin-top: 20px;
`;

export const Nav: FC = () => {
  return (
    <Container>
      <Body>
        <NavItem icon={<BiHome />} label="Home" href="/" />
        <NavItem
          icon={<CgMenuGridO />}
          label="Get started"
          href="/get-started"
        />
        <NavItem icon={<BiCode />} label="Develop" href="/develop" />
      </Body>
    </Container>
  );
};
