import styled from "styled-components";

import { mixinBgLv1 } from "../../theme/mixins/background";

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  border: 1px solid ${({ theme }) => theme.dividerColor};

  ${mixinBgLv1}
`;

export const Body = styled.div`
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;

  ${({ theme }) => theme.breakPoint.lg} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.breakPoint.md} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Title = styled.div`
  grid-column: span 3;
  padding: 5px 10px 0 10px;
  margin-bottom: 5px;
  user-select: none;
  font-weight: bold;

  ${({ theme }) => theme.breakPoint.lg} {
    grid-column: span 2;
  }

  ${({ theme }) => theme.breakPoint.md} {
    grid-column: span 1;
  }
`;

export const Item = styled.div<{ span?: number }>`
  grid-column: span ${({ span }) => span || 1};
  padding: 5px 10px;

  & > * {
    margin-bottom: 5px;
  }
`;
