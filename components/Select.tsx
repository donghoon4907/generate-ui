import type { FC } from "react";
import { ChangeEvent } from "react";
import styled from "styled-components";
import { RiArrowUpSLine } from "react-icons/ri";

import { mixinSelectDefault } from "../theme/mixins/select";

const Container = styled.div`
  position: relative;
`;

const StyledSelect = styled.select`
  ${mixinSelectDefault}
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate3d(0, -50%, 0) rotate(180deg);
  width: 24px;
  height: 24px;
  pointer-events: none;

  & > svg {
    width: 24px;
    height: 24px;
  }
`;

interface SelectOption {
  id: string;
  label: string;
  value: string;
}

interface Props {
  id: string;
  defaultValue: string;
  onChange: (evt: ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
}

export const Select: FC<Props> = ({ id, defaultValue, onChange, options }) => {
  return (
    <Container>
      <StyledSelect id={id} onChange={onChange} defaultValue={defaultValue}>
        {options.map(({ id, value, label }) => (
          <option key={id} value={value}>
            {label}
          </option>
        ))}
      </StyledSelect>
      <IconWrapper>
        <RiArrowUpSLine />
      </IconWrapper>
    </Container>
  );
};
