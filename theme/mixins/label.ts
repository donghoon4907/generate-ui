import { css } from "styled-components";

export const mixinLabelMd = css`
  font-family: ${({ theme }) => theme.fontFamily.default};
  font-size: ${({ theme }) => theme.fontSize.label_md};
  font-weight: ${({ theme }) => theme.fontWeight.label_md};
  line-height: ${({ theme }) => theme.lineHeight.label_md};
  letter-spacing: ${({ theme }) => theme.letterSpacing.label_md};
`;
