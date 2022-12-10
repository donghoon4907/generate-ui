import styled from "styled-components";

import type { SelectOption } from "../../interfaces/select";
import { BorderStyleOption } from "../../types/select-option";

const Continaer = styled.div`
  width: 100%;
  height: 100%;
`;

const Solid = styled(Continaer)`
  border: 2px solid ${({ theme }) => theme.dividerColor};
`;

const Dotted = styled(Continaer)`
  border: 2px dotted ${({ theme }) => theme.dividerColor};
`;

const Dashed = styled(Continaer)`
  border: 2px dashed ${({ theme }) => theme.dividerColor};
`;

export const borderStyleOptions: SelectOption[] = [
  {
    label: "없음",
    value: BorderStyleOption.NONE,
    preview: null
  },
  {
    label: "실선",
    value: BorderStyleOption.SOLID,
    preview: <Solid />
  },
  {
    label: "점선",
    value: BorderStyleOption.DOTTED,
    preview: <Dotted />
  },
  {
    label: "파선",
    value: BorderStyleOption.DASHED,
    preview: <Dashed />
  }
];
