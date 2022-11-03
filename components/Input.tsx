import type { Dispatch, FC, SetStateAction } from "react";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

import { mixinInputDefault, mixinInputValidation } from "../theme/mixins/input";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input<{ valid: boolean; invalid: boolean }>`
  ${mixinInputDefault}
  ${mixinInputValidation}
`;

const FeedBack = styled.span<{ valid: boolean; invalid: boolean }>`
  font-size: 12px;
  color: ${({ theme, valid }) => (valid ? theme.color.bootstrapGreen : "")};
  color: ${({ theme, invalid }) => (invalid ? theme.color.bootstrapRed : "")};
  user-select: none;
`;

interface Props {
  id: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  limit: number;
  showFeedback: boolean;
}

export const Input: FC<Props> = ({
  id,
  value,
  setValue,
  limit,
  showFeedback
}) => {
  const [valid, setValid] = useState(false);

  const [invalid, setInvalid] = useState(false);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;

    if (value.length < 10) {
      setValid(true);
      setInvalid(false);
      setValue(value);
    } else {
      setValid(false);
      setInvalid(true);
    }
  };

  return (
    <Container>
      <StyledInput
        type="text"
        id={id}
        onChange={handleChange}
        value={value}
        valid={valid}
        invalid={invalid}
      />
      {showFeedback && (
        <FeedBack valid={valid} invalid={invalid}>
          {valid && "적용되었습니다."}
          {invalid && `${limit}글자 미만으로 설정해주세요.`}
        </FeedBack>
      )}
    </Container>
  );
};
