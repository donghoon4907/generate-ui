import type { Dispatch, FC, SetStateAction } from "react";
import styled from "styled-components";

import { mixinBgLv2 } from "../theme/mixins/background";
import { gnbOptions } from "./options/Gnb";
import {
  ToggleNavDrawerCollapseItem,
  ToggleNavDrawerItem
} from "./ToggleNavDrawerItem";

const Container = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  position: absolute;
  top: 0;
  bottom: 0;
  left: -256px;
  z-index: 9;
  width: 256px;
  height: 100vh;
  overflow: hidden;
  border-left: 1px solid ${({ theme }) => theme.dividerColor};
  border-radius: 0 16px 16px 0;
  box-shadow: ${({ theme }) => theme.boxShadow.nav};

  transition: transform 500ms ease-in-out;
  transform: translate3d(${({ open }) => (open ? "256px" : "0")}, 0, 0);

  ${mixinBgLv2}
`;

const Body = styled.div`
  padding: 5px;
`;

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const ToggleNavDrawer: FC<Props> = ({ open, setOpen }) => {
  return (
    <Container open={open}>
      <Body>
        <ToggleNavDrawerCollapseItem setOpen={setOpen} />
        {gnbOptions.map((g, index) => (
          <ToggleNavDrawerItem key={`gnb${index}`} {...g} />
        ))}
      </Body>
    </Container>
  );
};
