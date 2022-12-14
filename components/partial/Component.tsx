import type { FC } from "react";
import styled from "styled-components";

import { CoreProps } from "../../interfaces/core";
import { mixinBgLv1 } from "../../theme/mixins/background";
import { mixinBgLv2 } from "../../theme/mixins/background";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;

  width: 100%;
  height: 100%;
  padding: 5px;

  ${({ theme }) => theme.breakPoint.md} {
    flex-direction: column;
    overflow-y: scroll;
  }
`;

export const Aside = styled.aside`
  width: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 5px;
  overflow: hidden;

  ${({ theme }) => theme.breakPoint.md} {
    width: 100%;
  }
`;

export const Section = styled.section`
  flex: 1;
  position: relative;

  display: flex;
  flex-direction: column;

  border: 1px solid ${({ theme }) => theme.dividerColor};

  ${mixinBgLv1}
`;

export const Scrollable = styled.div`
  height: 100%;
  overflow-y: scroll;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;

  padding: 0 10px;
  border-bottom: 1px solid ${({ theme }) => theme.dividerColor};
  font-size: 18px;
  font-weight: 500;
  height: 40px;
  user-select: none;

  ${mixinBgLv2}
`;

interface HeaderProps extends CoreProps {}

export const Header: FC<HeaderProps> = ({ children }) => (
  <HeaderWrapper>
    <span>{children}</span>
  </HeaderWrapper>
);
