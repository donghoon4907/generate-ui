import type { Dispatch, FC, SetStateAction } from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import styled from "styled-components";

import type { CoreProps } from "../../interfaces/core";
import { mixinBgLv1 } from "../../theme/mixins/background";
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

export const Grid = styled.div`
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

const TitleWrapper = styled.div`
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

  & > span {
    cursor: pointer;
  }
`;

export const UnSelectedTitle = styled.span`
  font-weight: 400;
  opacity: 0.8;
`;

interface TitleProps {
  fold: boolean;
  setFold: Dispatch<SetStateAction<boolean>>;
  label: string;
}

export const FoldableTitle: FC<TitleProps> = ({ fold, setFold, label }) => {
  const handleToggleFold = () => {
    setFold(!fold);
  };

  return (
    <TitleWrapper>
      {typeof fold === "boolean" && (
        <IconWrapper iconSize={15} onClick={handleToggleFold}>
          {fold ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}
        </IconWrapper>
      )}
      {label && <span>{label}</span>}
    </TitleWrapper>
  );
};

interface TabProps extends CoreProps {
  active: boolean;
  onClick: () => void;
}

export const Tab: FC<TabProps> = ({ children, active, onClick }) => {
  return active ? (
    <span onClick={onClick}>{children}</span>
  ) : (
    <UnSelectedTitle onClick={onClick}>{children}</UnSelectedTitle>
  );
};

export const Item = styled.div<{ span: number }>`
  display: ${({ span }) => (span === 0 ? `none` : "block")};
  grid-column: span ${({ span }) => span};
  padding: 5px 10px;

  & > * {
    margin-bottom: 5px;
  }
`;
