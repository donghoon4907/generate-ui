import styled from "styled-components";
import { BsPencil, BsSearch } from "react-icons/bs";
import { MdPassword } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

import type { SelectOption } from "../../types/select";
import { InputType } from "../../types/input";

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
    value: InputType.TEXT,
    preview: (
      <Continaer>
        <BsPencil />
      </Continaer>
    )
  },
  {
    label: "암호",
    value: InputType.PASSWORD,
    preview: (
      <Continaer>
        <MdPassword />
      </Continaer>
    )
  },
  {
    label: "이메일",
    value: InputType.EMAIL,
    preview: (
      <Continaer>
        <AiOutlineMail />
      </Continaer>
    )
  },
  {
    label: "검색",
    value: InputType.SEARCH,
    preview: (
      <Continaer>
        <BsSearch />
      </Continaer>
    )
  }
];
