import type { FC, ChangeEvent } from "react";
import { useState, useEffect } from "react";
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

export const ValidateInput = styled.input<{
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
  condition: boolean;
  invalidComment?: string;
}

export const FeedbackInput: FC<Props> = ({
  id,
  value,
  setValue,
  condition,
  invalidComment
}) => {
  // 처음값
  const [initValue] = useState(value);

  const [valid, setValid] = useState(false);

  const [invalid, setInvalid] = useState(false);

  const validate = (_condition: boolean) => {
    if (_condition) {
      setValid(true);
      setInvalid(false);
    } else {
      setValid(false);
      setInvalid(true);
    }
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;

    setValue(value);
  };

  useEffect(() => {
    if (initValue === value) {
      setValid(false);
      setInvalid(false);
    } else {
      validate(condition);
    }
  }, [condition, initValue, value]);

  return (
    <Container>
      <ValidateInput
        type="text"
        id={id}
        onChange={handleChange}
        value={value}
        valid={valid}
        invalid={invalid}
      />
      {invalidComment && (
        <Feedback valid={valid} invalid={invalid}>
          {invalidComment}
        </Feedback>
      )}
    </Container>
  );
};
