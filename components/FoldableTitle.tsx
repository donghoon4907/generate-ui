import type { FC } from "react";
import { useState } from "react";
import styled from "styled-components";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";

import { CoreProps } from "../interfaces/core";
import { IconWrapper } from "./IconWrapper";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 5px;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;

interface Props extends CoreProps {
  defaultFold: boolean;
  title: string;
}

export const FoldableTitle: FC<Props> = ({ children, defaultFold, title }) => {
  const [fold, setFold] = useState(defaultFold);

  const handleClick = () => {
    setFold(!fold);
  };

  return (
    <Container>
      <Header>
        <IconWrapper iconSize={15} onClick={handleClick}>
          {fold ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}
        </IconWrapper>
        <span>{title}</span>
      </Header>
      {fold && children}
    </Container>
  );
};
