import type { FC } from "react";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Input = styled.input<{ valid: boolean; invalid: boolean }>`
  display: block;
  width: 100%;
  height: 30px;
  text-align: right;
  border-radius: 5px;
  border: 1px solid #ced4da;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  font-weight: 400;
  font-size: 1rem;

  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadow.inputFocus};
    border-color: ${({ theme }) => theme.color.blue};
    outline: none;
  }

  ${({ theme, valid }) =>
    valid
      ? `
  border-color: ${theme.color.green} !important;
  box-shadow: ${theme.boxShadow.inputValid} !important;
  `
      : ""}

  ${({ theme, invalid }) =>
    invalid
      ? `
  border-color:  ${theme.color.red} !important;
  box-shadow: ${theme.boxShadow.inputInvalid} !important;
  `
      : ""}
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

const InputWrapper = styled.div`
  flex: 1;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > svg {
    width: 24px;
    height: 24px;
  }
`;

const FeedBackLabel = styled.span<{ valid: boolean; invalid: boolean }>`
  font-size: 12px;
  color: ${({ theme, valid }) => (valid ? theme.color.green : "")};
  color: ${({ theme, invalid }) => (invalid ? theme.color.red : "")};
`;

interface Props {
  defaultValue: number;
  limit: number;
  showIcon: boolean;
  showFeedback: boolean;
}

export const ValidCountingInput: FC<Props> = ({
  defaultValue,
  limit,
  showIcon,
  showFeedback
}) => {
  const [width, setWidth] = useState(defaultValue);

  const [valid, setValid] = useState(false);

  const [invalid, setInvalid] = useState(false);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;

    const num = Number(value);

    if (!num) {
      return;
    }

    if (num > limit) {
      setInvalid(true);
      setValid(false);
    } else {
      setInvalid(false);
      setValid(true);
    }

    setWidth(num);
  };

  return (
    <>
      <InputContainer>
        <InputWrapper>
          <Input
            type="text"
            onChange={handleChange}
            value={width}
            valid={valid}
            invalid={invalid}
          />
        </InputWrapper>
        {showIcon && (
          <IconWrapper>
            <AiOutlineMinus />
            <AiOutlinePlus />
          </IconWrapper>
        )}
      </InputContainer>
      {showFeedback && (
        <FeedBackLabel valid={valid} invalid={invalid}>
          {valid && "적용되었습니다."}
          {invalid && `${limit} 미만으로 설정해주세요.`}
        </FeedBackLabel>
      )}
    </>
  );
};
