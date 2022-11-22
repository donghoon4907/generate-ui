import type { FC } from "react";
import styled from "styled-components";

import { CoreProps } from "../interfaces/core";
import { mixinBgLv2 } from "../theme/mixins/background";

const Container = styled.div`
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

interface Props extends CoreProps {}

export const StylingHeader: FC<Props> = ({ children }) => {
  return (
    <Container>
      <span>{children}</span>
    </Container>
  );
};
