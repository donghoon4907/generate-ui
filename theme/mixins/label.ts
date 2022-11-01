import { css } from "styled-components";

export const mixinLabelMd = css`
  font-family: ${({ theme }) => theme.fontFamily.default};
  font-size: ${({ theme }) => theme.fontSize.label_md};
  font-weight: ${({ theme }) => theme.fontWeight.label_md};
  line-height: ${({ theme }) => theme.lineHeight.label_md};
  letter-spacing: ${({ theme }) => theme.letterSpacing.label_md};
`;

export const mixinTitleXlg = css`
  font-family: ${({ theme }) => theme.fontFamily.default};
  font-size: ${({ theme }) => theme.fontSize.display_xlg};
  font-weight: ${({ theme }) => theme.fontWeight.display_xlg};
  line-height: ${({ theme }) => theme.lineHeight.display_xlg};
  letter-spacing: ${({ theme }) => theme.letterSpacing.display_xlg};
`;

export const mixinTitlelg = css`
  font-family: ${({ theme }) => theme.fontFamily.default};
  font-size: ${({ theme }) => theme.fontSize.title_lg};
  font-weight: ${({ theme }) => theme.fontWeight.title_lg};
  line-height: ${({ theme }) => theme.lineHeight.title_lg};
  letter-spacing: ${({ theme }) => theme.letterSpacing.title_lg};
`;
