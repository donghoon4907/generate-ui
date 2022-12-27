import { css } from "styled-components";

import { mixinBgLv0 } from "./background";
import { mixinBootstrapInputFocus } from "./input";

export const mixinTextareaDefault = css`
  display: block;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.dividerColor};
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  font-weight: 400;
  font-size: 1rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  resize: none;

  ${mixinBootstrapInputFocus}
  ${mixinBgLv0}
`;
