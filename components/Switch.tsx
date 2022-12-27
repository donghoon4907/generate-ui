import type { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";

import type { CoreSetState } from "../types/core";
import { mixinBootstrapInputFocus } from "../theme/mixins/input";

const Container = styled.input<{ width: number }>`
  position: relative;
  width: ${({ width }) => width}px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.dividerColor};
  background: ${({ theme }) => theme.bgColor_lv0};
  user-select: none;
  cursor: pointer;
  appearance: none;
  display: block;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    transform: translate3d(2px, -50%, 0);
    transition: transform 200ms linear;
    background: ${({ theme }) => theme.dividerColor};
    margin: 0;
  }

  &:checked {
    background: ${({ theme }) => theme.color.bootstrapBlue};
  }

  &:checked::before {
    transform: translate3d(
      ${({ width }) => `calc(${width}px - 1rem)`},
      -50%,
      0
    );
    background: ${({ theme }) => theme.color.white};
  }

  ${mixinBootstrapInputFocus}
`;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  width: number;
  checked: boolean;
  setChecked: CoreSetState<boolean>;
}

export const Switch: FC<Props> = ({ width, checked, setChecked, ...props }) => {
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <Container
      type="checkbox"
      checked={checked}
      onChange={handleChange}
      width={width}
      {...props}
    />
  );
};
