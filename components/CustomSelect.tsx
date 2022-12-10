import { Dispatch, FC, SetStateAction, useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import { RiArrowUpSLine } from "react-icons/ri";

import { mixinBgLv0 } from "../theme/mixins/background";
import type { SelectOption } from "../interfaces/select";

const Container = styled.div<{ open: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 5px;
  width: 100%;
  height: 38px;

  cursor: pointer;
  user-select: none;
  border: 1px solid ${({ theme }) => theme.dividerColor};
  border-radius: 5px;
  padding-left: 0.75rem;

  ${({ open, theme }) =>
    open
      ? `
  box-shadow: ${theme.boxShadow.inputFocus};
  border-color: ${theme.color.bootstrapBlue};
  `
      : ""}

  ${mixinBgLv0};
`;

const Title = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
`;

const Preview = styled.div`
  display: inline-block;
  width: 30px;
  height: 20px;
`;

const Icon = styled.div<{ open: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  transform: rotate(${({ open }) => (open ? "0" : "180")}deg);

  & > svg {
    width: 20px;
    height: 20px;
  }
`;

const OptionContainer = styled.ul<{ open: boolean; pos: string }>`
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;
  z-index: 6;

  ${({ open }) => (open ? "" : "max-height: 0;")}

  ${({ pos }) => (pos === "bottom" ? "top: 40px;" : "bottom: 40px;")}

  border: ${({ theme, open }) =>
    open ? `1px solid ${theme.dividerColor}` : "none"};
`;

const OptionBody = styled.ul`
  position: relative;

  ${mixinBgLv0};
`;

const OptionItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0.75rem;
  height: 38px;
  gap: 5px;

  &:hover {
    background: ${({ theme }) => theme.hoverBgColor};
  }
`;

interface Props {
  activeOption: SelectOption;
  setOption: Dispatch<SetStateAction<SelectOption>>;
  options: SelectOption[];
}

export const CustomSelect: FC<Props> = ({
  activeOption,
  setOption,
  options
}) => {
  const ulRef = useRef<HTMLUListElement>(null);

  const [open, setOpen] = useState(false);

  const [pos, setPos] = useState("bottom");

  const handleClickSelect = () => {
    setOpen(!open);

    if (ulRef.current) {
      const $node = ulRef.current;

      if (
        window.innerHeight - $node.getBoundingClientRect().bottom <
        $node.scrollHeight
      ) {
        setPos("top");
      } else {
        setPos("bottom");
      }
    }
  };

  const handleClickOption = (option: SelectOption) => {
    setOption(option);
  };

  return (
    <Container role="select" onClick={handleClickSelect} open={open}>
      <Title>
        {activeOption.preview && <Preview>{activeOption.preview}</Preview>}

        <span>{activeOption.label}</span>
      </Title>
      <Icon open={open}>
        <RiArrowUpSLine />
      </Icon>
      <OptionContainer open={open} pos={pos}>
        <OptionBody ref={ulRef}>
          {options.map((option, index) => (
            <OptionItem
              key={`Option${index}`}
              onClick={() => handleClickOption(option)}
            >
              {option.preview && <Preview>{option.preview}</Preview>}
              <span>{option.label}</span>
            </OptionItem>
          ))}
        </OptionBody>
      </OptionContainer>
    </Container>
  );
};
