import { css } from "styled-components";

import { mixinBgLv0 } from "./background";

export const mixinInputDefault = css`
  display: block;
  width: 100%;
  height: 38px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.dividerColor};
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  font-weight: 400;
  font-size: 1rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadow.inputFocus};
    border-color: ${({ theme }) => theme.color.bootstrapBlue};
    outline: none;
  }

  ${mixinBgLv0}
`;

export const mixinInputValidation = css<{ valid: boolean; invalid: boolean }>`
  ${({ theme, valid }) =>
    valid
      ? `
border-color: ${theme.color.bootstrapGreen} !important;
`
      : ""}
  ${({ theme, invalid }) =>
    invalid
      ? `
border-color:  ${theme.color.bootstrapRed} !important;
`
      : ""}

&:focus {
    ${({ theme, valid }) =>
      valid
        ? `
box-shadow: ${theme.boxShadow.inputValid} !important;
`
        : ""}

    ${({ theme, invalid }) =>
      invalid
        ? `
box-shadow: ${theme.boxShadow.inputInvalid} !important;
`
        : ""}
  }
`;
