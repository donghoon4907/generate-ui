import type { Dispatch, FC, SetStateAction } from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import styled from "styled-components";

import type { CoreProps } from "../../interfaces/core";
import type { GridCoreProps } from "../../interfaces/grid";
import { mixinBgLv3 } from "../../theme/mixins/background";
import { mixinBtnDefault } from "../../theme/mixins/button";
import { IconWrapper } from "../IconWrapper";

export const Container = styled.div<{ span: number }>`
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: repeat(${({ span }) => span}, minmax(82px, 1fr));
  grid-auto-flow: row;
`;

export const ResponsiveContainer = styled(Container)`
  ${({ theme }) => theme.breakPoint.lg} {
    grid-template-columns: repeat(${({ span }) => span - 1}, 1fr);
  }

  ${({ theme }) => theme.breakPoint.md} {
    grid-template-columns: repeat(${({ span }) => span - 2}, 1fr);
  }
`;

export const Row = styled.div<{ span: number }>`
  grid-column: span ${({ span }) => span};
  padding: 5px 10px 0 10px;
  margin-bottom: 5px;
  user-select: none;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  line-height: 1;
`;

export const ResponsiveRow = styled(Row)`
  ${({ theme }) => theme.breakPoint.lg} {
    grid-column: span ${({ span }) => (span - 1 > 0 ? span - 1 : 1)};
  }

  ${({ theme }) => theme.breakPoint.md} {
    grid-column: span ${({ span }) => (span - 2 > 0 ? span - 1 : 1)};
  }
`;

const TabWrapper = styled.button<{ active: boolean }>`
  font-weight: ${({ active }) => (active ? "" : "400")};
  opacity: ${({ active }) => (active ? "1" : "0.5")};

  ${mixinBtnDefault}
`;

interface TitleProps extends CoreProps, GridCoreProps {}

export const Title: FC<TitleProps> = ({ children, span }) => {
  return <Row span={span}>{children}</Row>;
};

export const ResponsiveTitle: FC<TitleProps> = ({ children, span }) => {
  return <ResponsiveRow span={span}>{children}</ResponsiveRow>;
};

interface FoldableTitleProps extends TitleProps {
  fold: boolean;
  setFold: Dispatch<SetStateAction<boolean>>;
}

export const FoldableTitle: FC<FoldableTitleProps> = ({
  children,
  fold,
  setFold,
  span
}) => {
  const handleToggleFold = () => {
    setFold(!fold);
  };

  return (
    <ResponsiveRow span={span}>
      <IconWrapper iconSize={15} onClick={handleToggleFold}>
        {fold ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}
      </IconWrapper>
      {children}
    </ResponsiveRow>
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

export const Column = styled.div<{ span: number }>`
  max-height: ${({ span }) => (span === 0 ? 0 : "")};
  margin: 5px;
  border-radius: 5px;
  padding: ${({ span }) => (span === 0 ? 0 : "5px 10px")};
  display: ${({ span }) => (span === 0 ? "none" : "block")};
  border: 1px solid ${({ theme }) => theme.dividerColor};
  ${({ span }) => (span > 0 ? `grid-column: span ${span}` : "")};

  & > * {
    margin-bottom: 5px;
  }

  ${mixinBgLv3}
`;
