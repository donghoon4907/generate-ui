import type { FC } from "react";
import { LabelHTMLAttributes } from "react";
import styled from "styled-components";

import { CoreProps } from "../interfaces/core";

const Container = styled.label`
  position: relative;
  display: inline-block;
  user-select: none;

  &:before {
    content: "*";
    color: red;
    position: absolute;
    top: -5px;
    right: -7px;
  }
`;

interface Props extends CoreProps, LabelHTMLAttributes<HTMLLabelElement> {}

export const RequireLabel: FC<Props> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};
