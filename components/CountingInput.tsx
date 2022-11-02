import { FC, useRef } from "react";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { mixinInputDefault } from "../theme/mixins/input";
import { IconWrapper } from "./IconWrapper";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

const InputWrapper = styled.div`
  flex: 1;
`;

const Input = styled.input<{ valid: boolean; invalid: boolean }>`
  text-align: right;

  ${({ theme, valid }) =>
    valid
      ? `
  border-color: ${theme.color.green} !important;
  `
      : ""}
  ${({ theme, invalid }) =>
    invalid
      ? `
  border-color:  ${theme.color.red} !important;
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

  ${mixinInputDefault}
`;

const Tool = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > svg {
    width: 24px;
    height: 24px;
  }
`;

const FeedBack = styled.span<{ valid: boolean; invalid: boolean }>`
  font-size: 12px;
  color: ${({ theme, valid }) => (valid ? theme.color.green : "")};
  color: ${({ theme, invalid }) => (invalid ? theme.color.red : "")};
  user-select: none;
`;

interface Props {
  defaultValue: number;
  limit: number;
  showIcon: boolean;
  showFeedback: boolean;
}

export const CountingInput: FC<Props> = ({
  defaultValue,
  limit,
  showIcon,
  showFeedback
}) => {
  const intervalRef = useRef<number | null>(null);

  const [count, setCount] = useState(defaultValue);

  const [valid, setValid] = useState(false);

  const [invalid, setInvalid] = useState(false);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;

    const num = Number(value);

    if (!num) {
      return;
    }

    changeCount(num);
  };

  const Startholding = (operator: string) => {
    if (intervalRef.current !== null) {
      return;
    }

    let nextVal = count;
    intervalRef.current = window.setInterval(() => {
      if (operator === "+") {
        nextVal++;
      } else if (operator === "-") {
        nextVal--;
      }

      changeCount(nextVal);
    }, 50);
  };

  const stopHolding = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);

      intervalRef.current = null;
    }
  };

  const changeCount = (count: number) => {
    if (count > limit) {
      setInvalid(true);
      setValid(false);
    } else {
      setInvalid(false);
      setValid(true);
    }

    setCount(count);
  };

  return (
    <Container>
      <Body>
        <InputWrapper>
          <Input
            type="text"
            onChange={handleChange}
            value={count}
            valid={valid}
            invalid={invalid}
          />
        </InputWrapper>
        {showIcon && (
          <Tool>
            <IconWrapper
              ariaLabel="너비 감소"
              onMouseDown={() => Startholding("-")}
              onMouseUp={() => stopHolding()}
            >
              <AiOutlineMinus />
            </IconWrapper>
            <IconWrapper
              ariaLabel="너비 증가"
              onMouseDown={() => Startholding("+")}
              onMouseUp={() => stopHolding()}
            >
              <AiOutlinePlus />
            </IconWrapper>
          </Tool>
        )}
      </Body>
      {showFeedback && (
        <FeedBack valid={valid} invalid={invalid}>
          {valid && "적용되었습니다."}
          {invalid && `${limit} 미만으로 설정해주세요.`}
        </FeedBack>
      )}
    </Container>
  );
};
