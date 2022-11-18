import type { FC } from "react";
import styled from "styled-components";
import { CoreProps } from "../interfaces/core";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;

const Label = styled.label`
  font-size: 14px;
  user-select: none;
`;

interface Props extends CoreProps {
  id: string;
  label: string;
}

export const WithLabel: FC<Props> = ({ id, label, children }) => {
  return (
    <Container>
      {children}
      <Label htmlFor={id}>{label}</Label>
    </Container>
  );
};
