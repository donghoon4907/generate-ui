import type { Dispatch, FC, SetStateAction } from "react";
import { ChangeEvent, useState, useRef } from "react";
import styled from "styled-components";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { mixinInputDefault, mixinInputValidation } from "../theme/mixins/input";
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
  position: relative;
  flex: 1;
`;

const StyledInput = styled.input<{ valid: boolean; invalid: boolean }>`
  text-align: right;
  padding-right: 2rem !important;

  ${mixinInputDefault}
  ${mixinInputValidation}
`;

const Unit = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate3d(0, -50%, 0);

  user-select: none;
`;

const Tool = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const FeedBack = styled.span<{ valid: boolean; invalid: boolean }>`
  font-size: 12px;
  color: ${({ theme, valid }) => (valid ? theme.color.bootstrapGreen : "")};
  color: ${({ theme, invalid }) => (invalid ? theme.color.bootstrapRed : "")};
  user-select: none;
`;

interface Props {
  id: string;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  ariaLabel: string;
  limit: number;
  showIcon: boolean;
  showFeedback: boolean;
}

export const CountingInput: FC<Props> = ({
  id,
  ariaLabel,
  count,
  setCount,
  limit,
  showIcon,
  showFeedback
}) => {
  const intervalRef = useRef<number | null>(null);

  const [valid, setValid] = useState(false);

  const [invalid, setInvalid] = useState(false);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;

    let num = Number(value);
    // 0을 설정할 수 없도록 1을 최소 값으로
    if (num === 0) {
      num = 1;
    }
    // 글자 입력 방지
    if (!num) {
      return;
    }

    changeCount(Math.abs(num));
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
    // 음수 혹은 limit + 2의 수는 허용하지 않음.
    if (count > 0 && count < limit + 2) {
      setCount(count);
    } else {
      stopHolding();
    }
  };

  return (
    <Container>
      <Body>
        <InputWrapper>
          <StyledInput
            type="text"
            id={id}
            onChange={handleChange}
            value={count}
            valid={valid}
            invalid={invalid}
          />
          <Unit>px</Unit>
        </InputWrapper>
        {showIcon && (
          <Tool>
            <IconWrapper
              ariaLabel={`${ariaLabel} 감소`}
              onMouseDown={() => Startholding("-")}
              onMouseUp={() => stopHolding()}
            >
              <AiOutlineMinus />
            </IconWrapper>
            <IconWrapper
              ariaLabel={`${ariaLabel} 증가`}
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
