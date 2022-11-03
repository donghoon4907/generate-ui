import type { FC } from "react";
import styled from "styled-components";

import { CoreProps } from "../interfaces/core";

const Container = styled.span<{ valid: boolean; invalid: boolean }>`
  font-size: 12px;
  color: ${({ theme, valid }) => (valid ? theme.color.bootstrapGreen : "")};
  color: ${({ theme, invalid }) => (invalid ? theme.color.bootstrapRed : "")};
  user-select: none;
  display: inline-block;
`;

interface Props extends CoreProps {
  valid: boolean;
  invalid: boolean;
}

export const Feedback: FC<Props> = ({ valid, invalid, children }) => {
  return (
    <Container valid={valid} invalid={invalid}>
      {valid && "적용되었습니다."}
      {invalid && children}
    </Container>
  );
};
