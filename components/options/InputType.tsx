import styled from "styled-components";
import { BsPencil, BsSearch } from "react-icons/bs";
import { MdPassword } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

import type { ISelectOption } from "../../interfaces/select";
import { InputTypeOption } from "../../types/select-option";

const Continaer = styled.div`
  display: flex;
  justify-content: center;
  alingn-items: center;
  width: 100%;
  height: 100%;
`;

export const inputTypeOptions: ISelectOption[] = [
  {
    label: "텍스트",
    value: InputTypeOption.TEXT,
    preview: (
      <Continaer>
        <BsPencil />
      </Continaer>
    )
  },
  {
    label: "암호",
    value: InputTypeOption.PASSWORD,
    preview: (
      <Continaer>
        <MdPassword />
      </Continaer>
    )
  },
  {
    label: "이메일",
    value: InputTypeOption.EMAIL,
    preview: (
      <Continaer>
        <AiOutlineMail />
      </Continaer>
    )
  },
  {
    label: "검색",
    value: InputTypeOption.SEARCH,
    preview: (
      <Continaer>
        <BsSearch />
      </Continaer>
    )
  }
];

export const modalInputTypeOptions: ISelectOption[] = [
  {
    label: "기본",
    value: InputTypeOption.TEXT,
    preview: null
  },
  {
    label: "영역",
    value: InputTypeOption.TEXTAREA,
    preview: null
  },
  {
    label: "암호",
    value: InputTypeOption.PASSWORD,
    preview: null
  }
];
