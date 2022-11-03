import { css } from "styled-components";

export const mixinLabelMd = css`
  font-family: ${({ theme }) => theme.fontFamily.default};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0;
`;

export const mixinTitleXlg = css`
  font-family: ${({ theme }) => theme.fontFamily.default};
  font-size: 88px;
  font-weight: 475;
  line-height: 96px;
  letter-spacing: 0;
`;

export const mixinTitlelg = css`
  font-family: ${({ theme }) => theme.fontFamily.default};
  font-size: 22px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0;
`;
