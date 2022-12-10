import type { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

import { CountingInput } from "../CountingInput";
import { CountNumberType } from "../../types/count";
import * as Option from "./Option";
import { RequireLabel } from "../RequireLabel";
import { CustomSelect } from "../CustomSelect";
import { borderStyleOptions } from "../options/BorderStyle";
import { DefaultInput } from "../Input";
import type { SelectOption } from "../../interfaces/select";

interface Props {
  id: string | number;
  borderStyle: SelectOption;
  setBorderStyle: Dispatch<SetStateAction<SelectOption>>;
  borderWidth: number;
  setBorderWidth: Dispatch<SetStateAction<number>>;
  borderColor: string;
  setBorderColor: Dispatch<SetStateAction<string>>;
}

export const BorderOption: FC<Props> = ({
  id,
  borderStyle,
  setBorderStyle,
  borderWidth,
  setBorderWidth,
  borderColor,
  setBorderColor
}) => {
  const handleChangeBorderColor = (evt: ChangeEvent<HTMLInputElement>) => {
    setBorderColor(evt.target.value);
  };

  return (
    <>
      <Option.Item>
        <RequireLabel>스타일</RequireLabel>
        <CustomSelect
          activeOption={borderStyle}
          setOption={setBorderStyle}
          options={borderStyleOptions}
        />
      </Option.Item>
      <Option.Item>
        <RequireLabel htmlFor={`setBorderWidth${id}`}>너비</RequireLabel>
        <CountingInput
          id={`setBorderWidth${id}`}
          ariaLabel="테두리 굵기"
          count={borderWidth}
          setCount={setBorderWidth}
          limit={10}
          showIcon={true}
          showFeedback={true}
          numberType={CountNumberType.INTEGER}
          unit="px"
        />
      </Option.Item>
      <Option.Item>
        <RequireLabel htmlFor={`setBorderColor${id}`}>색</RequireLabel>
        <DefaultInput
          type="color"
          id={`setBorderColor${id}`}
          value={borderColor}
          onChange={handleChangeBorderColor}
        />
      </Option.Item>
    </>
  );
};
