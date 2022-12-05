import type { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

import { CountingInput } from "../CountingInput";
import { CountNumberType } from "../../types/count";
import * as Option from "./Option";
import { RequireLabel } from "../RequireLabel";
import { CustomSelect } from "../CustomSelect";
import { DefaultInput } from "../Input";
import { SelectOption } from "../../types/select";
import { textAlignOptions } from "../options/TextAlign";
import { isNumber } from "../../lib/calc/number";
import { textOverflowOptions } from "../options/TextOverflow";

interface Props {
  id: string | number;
  color?: string;
  setColor?: Dispatch<SetStateAction<string>>;
  fontSize?: number;
  setFontSize?: Dispatch<SetStateAction<number>>;
  lineHeight?: number;
  setLineHeight?: Dispatch<SetStateAction<number>>;
  letterSpacing?: number;
  setLetterSpacing?: Dispatch<SetStateAction<number>>;
  textAlign?: SelectOption;
  setTextAlign?: Dispatch<SetStateAction<SelectOption>>;
  textOverflow?: SelectOption;
  setTextOverflow?: Dispatch<SetStateAction<SelectOption>>;
}

export const FontOption: FC<Props> = ({
  id,
  color,
  setColor,
  fontSize,
  setFontSize,
  lineHeight,
  setLineHeight,
  letterSpacing,
  setLetterSpacing,
  textAlign,
  setTextAlign,
  textOverflow,
  setTextOverflow
}) => {
  const isShowColor = color && setColor;

  const isShowFontSize = isNumber(fontSize) && setFontSize;

  const isShowLineHeight = isNumber(lineHeight) && setLineHeight;

  const isShowLetterSpacing = isNumber(letterSpacing) && setLetterSpacing;

  const isShowTextAlign = textAlign && setTextAlign;

  const isShowTextOverflow = textOverflow && setTextOverflow;

  const handleChangeColor = (evt: ChangeEvent<HTMLInputElement>) => {
    setColor?.(evt.target.value);
  };

  return (
    <>
      {isShowColor && (
        <Option.Item>
          <RequireLabel htmlFor={`setColor${id}`}>텍스트 색</RequireLabel>
          <DefaultInput
            type="color"
            id={`setColor${id}`}
            value={color}
            onChange={handleChangeColor}
          />
        </Option.Item>
      )}
      {isShowTextAlign && (
        <Option.Item>
          <RequireLabel htmlFor={`setTextAlign${id}`}>텍스트 정렬</RequireLabel>
          <CustomSelect
            activeOption={textAlign}
            setOption={setTextAlign}
            options={textAlignOptions}
          />
        </Option.Item>
      )}
      {isShowFontSize && (
        <Option.Item>
          <RequireLabel htmlFor={`setFontSize${id}`}>텍스트 크기</RequireLabel>
          <CountingInput
            id={`setFontSize${id}`}
            ariaLabel="글자 크기"
            count={fontSize!}
            setCount={setFontSize}
            limit={30}
            showIcon={true}
            showFeedback={true}
            numberType={CountNumberType.INTEGER}
            unit="px"
          />
        </Option.Item>
      )}
      {isShowLineHeight && (
        <Option.Item>
          <RequireLabel htmlFor={`setLineHeight${id}`}>
            텍스트 높이
          </RequireLabel>
          <CountingInput
            id={`setLineHeight${id}`}
            ariaLabel="줄 높이"
            count={lineHeight!}
            setCount={setLineHeight}
            limit={100}
            showIcon={true}
            showFeedback={true}
            numberType={CountNumberType.INTEGER}
            unit="px"
          />
        </Option.Item>
      )}
      {isShowLetterSpacing && (
        <Option.Item>
          <RequireLabel htmlFor={`setLetterSpacing${id}`}>
            텍스트 간격
          </RequireLabel>
          <CountingInput
            id={`setLetterSpacing${id}`}
            ariaLabel="자간"
            count={letterSpacing!}
            setCount={setLetterSpacing}
            limit={5}
            showIcon={true}
            showFeedback={true}
            numberType={CountNumberType.DECIMAL}
            unit="px"
          />
        </Option.Item>
      )}
      {isShowTextOverflow && (
        <Option.Item>
          <RequireLabel htmlFor={`setTextOverflow${id}`}>
            텍스트 줄바꿈
          </RequireLabel>
          <CustomSelect
            activeOption={textOverflow}
            setOption={setTextOverflow}
            options={textOverflowOptions}
          />
        </Option.Item>
      )}
    </>
  );
};
