import styled from "styled-components";

import type { SelectOption } from "../../types/select";

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

export const buttonStyleOptions: SelectOption[] = [
  {
    label: "없음",
    value: "none",
    preview: null
  },
  {
    label: "실선",
    value: "solid",
    preview: <Solid />
  },
  {
    label: "점선",
    value: "dotted",
    preview: <Dotted />
  },
  {
    label: "파선",
    value: "dashed",
    preview: <Dashed />
  }
];
