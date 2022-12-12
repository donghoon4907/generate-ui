import type { Dispatch, FC, SetStateAction } from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import styled from "styled-components";

import type { CoreProps } from "../../interfaces/core";
import { mixinBgLv1 } from "../../theme/mixins/background";
import { mixinBtnDefault } from "../../theme/mixins/button";
import { IconWrapper } from "../IconWrapper";

export const Container = styled.section`
  flex: 1;
  position: relative;

  display: flex;
  flex-direction: column;

  border: 1px solid ${({ theme }) => theme.dividerColor};

  ${mixinBgLv1}
`;

export const Body = styled.div`
  height: 100%;
  overflow-y: scroll;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: repeat(3, minmax(82px, 1fr));
  grid-auto-flow: row;

  ${({ theme }) => theme.breakPoint.lg} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.breakPoint.md} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const GridRow = styled.div`
  grid-column: span 3;
  padding: 5px 10px 0 10px;
  margin-bottom: 5px;
  user-select: none;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;

  ${({ theme }) => theme.breakPoint.lg} {
    grid-column: span 2;
  }

  ${({ theme }) => theme.breakPoint.md} {
    grid-column: span 1;
  }
`;

const TabWrapper = styled.button<{ active: boolean }>`
  font-weight: ${({ active }) => (active ? "" : "400")};
  opacity: ${({ active }) => (active ? "1" : "0.8")};

  ${mixinBtnDefault}
`;

interface TitleProps extends CoreProps {}

export const Title: FC<TitleProps> = ({ children }) => {
  return <GridRow>{children}</GridRow>;
};

interface FoldableTitleProps extends TitleProps {
  fold: boolean;
  setFold: Dispatch<SetStateAction<boolean>>;
}

export const FoldableTitle: FC<FoldableTitleProps> = ({
  children,
  fold,
  setFold
}) => {
  const handleToggleFold = () => {
    setFold(!fold);
  };

  return (
    <GridRow>
      <IconWrapper iconSize={15} onClick={handleToggleFold}>
        {fold ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}
      </IconWrapper>
      {children}
    </GridRow>
  );
};

interface TabProps extends CoreProps {
  active: boolean;
  onClick: () => void;
}

export const Tab: FC<TabProps> = ({ children, active, onClick }) => (
  <TabWrapper type="button" active={active} onClick={onClick}>
    {children}
  </TabWrapper>
);

export const GridColumn = styled.div<{ span: number }>`
  max-height: ${({ span }) => (span === 0 ? 0 : "")};
  padding: ${({ span }) => (span === 0 ? 0 : "5px 10px")};
  display: ${({ span }) => (span === 0 ? "none" : "block")};

  ${({ span }) => (span > 0 ? `grid-column: span ${span}` : "")};

  & > * {
    margin-bottom: 5px;
  }
`;
