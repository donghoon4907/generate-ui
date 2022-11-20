import type { Dispatch, FC, SetStateAction } from "react";
import { useEffect } from "react";
import styled from "styled-components";

import { mixinBgLv2 } from "../theme/mixins/background";
import { gnbOptions } from "./options/Gnb";
import { useDispatch, useSelector } from "../context";
import {
  ToggleNavDrawerCollapseItem,
  ToggleNavDrawerItem
} from "./ToggleNavDrawerItem";
import { ThemeMode } from "../types/theme";
import { ToggleThemeMode } from "./ToggleThemeMode";
import { SET_ACTIVE_MDMENU } from "../context/action";

const Container = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const Body = styled.ul`
  padding: 5px;
`;

const Footer = styled.div`
  padding: 5px;
`;

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  themeMode: ThemeMode;
  toggle: () => void;
}

export const ToggleNavDrawer: FC<Props> = ({
  open,
  setOpen,
  themeMode,
  toggle
}) => {
  const dispatch = useDispatch();

  const { activeMdMenu } = useSelector();

  const hasLnb = activeMdMenu.length > 0;

  const handleBack = () => {
    if (hasLnb) {
      dispatch({
        type: SET_ACTIVE_LNB,
        payload: []
      });
    } else {
      setOpen(false);
    }
  };

  useEffect(() => {
    dispatch({
      type: SET_ACTIVE_MDMENU,
      payload: gnbOptions
    });
  }, []);

  return (
    <Container open={open}>
      <Body>
        <ToggleNavDrawerCollapseItem onClick={handleBack} />
        {activeMdMenu.map((g, index) => (
          <ToggleNavDrawerItem key={`mdMenu${index}`} {...g} />
        ))}
      </Body>
      <Footer>
        <ToggleThemeMode
          themeMode={themeMode}
          toggle={toggle}
          showLabel={true}
        />
      </Footer>
    </Container>
  );
};
