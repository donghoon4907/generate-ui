import type { FC } from "react";
import styled from "styled-components";
import { FiSun, FiMoon } from "react-icons/fi";

import { ThemeMode } from "../types/theme";

const Container = styled.div`
  position: relative;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  width: 48px;
  height: 48px;

  border: 1px solid ${({ theme }) => theme.utilityBorderColor};
  border-radius: 32px;

  &:hover {
    background: ${({ theme }) => theme.hoverBgColor};
  }
`;

const Switch = styled.div<{ themeMode: ThemeMode }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 96px;

  transition: transform 300ms cubic-bezier(0.2, 0, 0, 1);

  transform: translate3d(
    0,
    ${({ themeMode }) => (themeMode === ThemeMode.DARK ? "-48px" : "0")},
    0
  );
`;

const IconWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;
  margin-top: -1px;
  margin-left: -1px;

  & > svg {
    width: 20px;
    height: 20px;
  }
`;

interface Props {
  themeMode: ThemeMode;
  toggle: () => void;
}

export const ToggleThemeMode: FC<Props> = ({ themeMode, toggle }) => (
  <Container>
    <Switch themeMode={themeMode}>
      <IconWrapper onClick={toggle}>
        <FiMoon />
      </IconWrapper>
      <IconWrapper onClick={toggle}>
        <FiSun />
      </IconWrapper>
    </Switch>
  </Container>
);
