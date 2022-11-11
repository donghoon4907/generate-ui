import type { FC } from "react";
import { InputHTMLAttributes } from "react";
import styled from "styled-components";

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

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox: FC<Props> = ({ id, label, ...props }) => {
  return (
    <Container>
      <input type="checkbox" id={id} {...props} />
      {label && <Label htmlFor={id}>{label}</Label>}
    </Container>
  );
};
