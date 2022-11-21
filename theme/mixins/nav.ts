import { css } from "styled-components";
import { mixinBgLv2 } from "./background";

export const mixinNavDrawerShape = css`
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;

  position: absolute;
  top: 0;
  bottom: 0;
  left: -256px;
  width: 256px;
  height: 100vh;
  overflow: hidden;
  border-left: 1px solid ${({ theme }) => theme.dividerColor};
  border-radius: 0 16px 16px 0;
  box-shadow: ${({ theme }) => theme.boxShadow.nav};

  transition: transform 500ms ease-in-out;

  ${mixinBgLv2}
`;

export const mixinNavDrawerItemShape = (hasIcon: boolean) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  padding: 10px 16px !important;
  border-radius: 24px;
  user-select: none;

  ${!hasIcon ? "margin-left: 16px !important;" : ""}
`;

export const mixinNavDrawerItemActive = css`
  background: ${({ theme }) => theme.activeBgColor} !important;
`;

export const mixinNavDrawerItemHover = css`
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.hoverBgColor};
  }
`;

export const mixinNavDrawerItemIcon = (isActive: boolean) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;

  & > svg {
    width: 24px;
    height: 24px;

    ${({ theme }) => (isActive ? `color: ${theme.activeTextColor};` : "")}
  }
`;

export const mixinNavDrawerItemLabel = (isActive: boolean) => css`
  flex: 1;
  text-align: left;

  ${({ theme }) => (isActive ? `color: ${theme.activeTextColor};` : "")}
`;
