import styled from "styled-components";
import { BsPencil } from "react-icons/bs";
import { MdPassword } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

import type { SelectOption } from "../../types/select";

const Continaer = styled.div`
  display: flex;
  justify-content: center;
  alingn-items: center;
  width: 100%;
  height: 100%;
`;

export const inputTypeOptions: SelectOption[] = [
  {
    label: "텍스트",
    value: "text",
    preview: (
      <Continaer>
        <BsPencil />
      </Continaer>
    )
  },
  {
    label: "암호",
    value: "password",
    preview: (
      <Continaer>
        <MdPassword />
      </Continaer>
    )
  },
  {
    label: "이메일",
    value: "email",
    preview: (
      <Continaer>
        <AiOutlineMail />
      </Continaer>
    )
  }
];
