import { css } from "styled-components";

import { mixinBgLv0 } from "./background";

export const mixinSelectDefault = css`
  display: block;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.dividerColor};
  padding: 0.375rem 4.125rem 0.375rem 0.75rem;
  line-height: 1.5;
  font-weight: 400;
  font-size: 1rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
  user-select: none;

  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadow.inputFocus};
    border-color: ${({ theme }) => theme.color.blue};
    outline: none;
  }

  ${mixinBgLv0};
`;
