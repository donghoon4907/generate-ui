import styled from "styled-components";

import { mixinTextareaDefault } from "../theme/mixins/textarea";
import { mixinInputValidation } from "../theme/mixins/input";

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
