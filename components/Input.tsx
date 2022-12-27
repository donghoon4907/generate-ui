import type { FC } from "react";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

import type { CoreSetState } from "../types/core";
import { mixinInputDefault, mixinInputValidation } from "../theme/mixins/input";
import { Feedback } from "./Feedback";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DefaultInput = styled.input`
  ${mixinInputDefault}
`;

export const ValidInput = styled.input<{
  valid: boolean;
  invalid: boolean;
}>`
  ${mixinInputDefault}
  ${mixinInputValidation}
`;

interface Props {
  id: string;
  value: string;
  setValue: CoreSetState<string>;
  limit: number;
  showFeedback: boolean;
}

export const FeedbackInput: FC<Props> = ({
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

    if (value.length < limit) {
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
      <ValidInput
        type="text"
        id={id}
        onChange={handleChange}
        value={value}
        valid={valid}
        invalid={invalid}
      />
      {showFeedback && (
        <Feedback valid={valid} invalid={invalid}>
          {`${limit}글자 미만으로 설정해주세요.`}
        </Feedback>
      )}
    </Container>
  );
};
