import type { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { useState } from "react";
import styled from "styled-components";

import { mixinTextareaDefault } from "../theme/mixins/textarea";
import { mixinInputValidation } from "../theme/mixins/input";
import { Feedback } from "./Feedback";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DefaultTextArea = styled.textarea`
  ${mixinTextareaDefault}
`;

export const ValidTextArea = styled(DefaultTextArea)<{
  valid: boolean;
  invalid: boolean;
}>`
  ${mixinInputValidation}
`;
