import type { Dispatch, FC, SetStateAction } from "react";
import styled from "styled-components";
import { mixinBootstrapInputFocus } from "../theme/mixins/input";

const Container = styled.input<{ width: number; checked: boolean }>`
  position: relative;
  width: ${({ width }) => width}px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.dividerColor};
  background: ${({ theme, checked }) =>
    checked ? theme.color.bootstrapBlue : theme.bgColor_lv0};
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
    transform: translate3d(
      ${({ width, checked }) => (checked ? `${width - 16}px` : "2px")},
      -50%,
      0
    );
    transition: transform 200ms linear;
    background: ${({ theme, checked }) =>
      checked ? theme.color.white : theme.dividerColor};
    margin: 0;
  }

  ${mixinBootstrapInputFocus}
`;

interface Props {
  width: number;
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
}

export const Switch: FC<Props> = ({ width, checked, setChecked }) => {
  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <Container
      type="checkbox"
      checked={checked}
      onChange={handleClick}
      width={width}
    />
  );
};
