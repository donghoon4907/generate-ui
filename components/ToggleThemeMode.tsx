import type { FC } from "react";
import styled from "styled-components";
import { FiSun, FiMoon } from "react-icons/fi";

import { ThemeMode } from "../types/theme";
import { mixinBtnDefault } from "../theme/mixins/button";

const Container = styled.button<{ showLabel: boolean }>`
  position: relative;
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  width: ${({ showLabel }) => (showLabel ? "100%" : "48px")};
  height: 48px;

  border: 1px solid ${({ theme }) => theme.utilityBorderColor} !important;
  border-radius: 32px;

  &:hover {
    background: ${({ theme }) => theme.hoverBgColor};
  }

  ${mixinBtnDefault}
`;

const Switch = styled.div<{ themeMode: ThemeMode }>`
  width: 48px;
  height: 96px;

  transition: transform 300ms cubic-bezier(0.2, 0, 0, 1);

  transform: translate3d(
    0,
    ${({ themeMode }) => (themeMode === ThemeMode.DARK ? "-48px" : "0")},
    0
  );
`;

const IconWrapper = styled.div`
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

const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

interface Props {
  themeMode: ThemeMode;
  toggle: () => void;
  showLabel: boolean;
}

export const ToggleThemeMode: FC<Props> = ({
  themeMode,
  toggle,
  showLabel
}) => (
  <Container showLabel={showLabel} onClick={toggle}>
    <Switch themeMode={themeMode}>
      <IconWrapper>
        <FiMoon />
      </IconWrapper>
      <IconWrapper>
        <FiSun />
      </IconWrapper>
    </Switch>
    {showLabel && <Label>Switch to {themeMode} mode</Label>}
  </Container>
);
