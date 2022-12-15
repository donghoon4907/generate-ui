import styled from "styled-components";

import { mixinBgLv1 } from "../../theme/mixins/background";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.dividerColor};

  ${mixinBgLv1}
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;

  padding: 5px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const ButtonPreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 50px;
`;

export const ButtonMeta = styled.div`
  flex: 1;
`;
