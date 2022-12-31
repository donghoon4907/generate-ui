import type { FC } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type { ISelectOption } from "../../../interfaces/select";
import type { CoreSetState } from "../../../types/core";
import * as Grid from "../../partial/Grid";
import { isNumber } from "../../../lib/calc/number";
import { RequireLabel } from "../../RequireLabel";
import { CustomSelect } from "../../CustomSelect";
import { textAlignOptions } from "../../options/TextAlign";
import { CountingInput } from "../../CountingInput";
import { CountNumberType } from "../../../types/count";
import { textOverflowOptions } from "../../options/TextOverflow";
import { ColorOption } from "./Color";

interface Props extends IGridOption {
  id: string | number;
  color?: string;
  setColor?: CoreSetState<string>;
  fontSize?: number;
  setFontSize?: CoreSetState<number>;
  lineHeight?: number;
  setLineHeight?: CoreSetState<number>;
  letterSpacing?: number;
  setLetterSpacing?: CoreSetState<number>;
  textAlign?: ISelectOption;
  setTextAlign?: CoreSetState<ISelectOption>;
  textOverflow?: ISelectOption;
  setTextOverflow?: CoreSetState<ISelectOption>;
}

export const FontOption: FC<Props> = ({
  id,
  span,
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

  return (
    <>
      {isShowColor && (
        <ColorOption
          id={`setColor${id}`}
          span={span}
          hex={color}
          setHex={setColor}
        />
      )}
      {isShowFontSize && (
        <Grid.Column span={span}>
          <RequireLabel htmlFor={`setFontSize${id}`}>크기</RequireLabel>
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
        </Grid.Column>
      )}
      {isShowLineHeight && (
        <Grid.Column span={span}>
          <RequireLabel htmlFor={`setLineHeight${id}`}>높이</RequireLabel>
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
        </Grid.Column>
      )}
      {isShowLetterSpacing && (
        <Grid.Column span={span}>
          <RequireLabel htmlFor={`setLetterSpacing${id}`}>간격</RequireLabel>
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
        </Grid.Column>
      )}
      {isShowTextOverflow && (
        <Grid.Column span={span}>
          <RequireLabel htmlFor={`setTextOverflow${id}`}>줄바꿈</RequireLabel>
          <CustomSelect
            activeOption={textOverflow}
            setOption={setTextOverflow}
            options={textOverflowOptions}
          />
        </Grid.Column>
      )}
      {isShowTextAlign && (
        <Grid.Column span={span}>
          <RequireLabel htmlFor={`setTextAlign${id}`}>정렬</RequireLabel>
          <CustomSelect
            activeOption={textAlign}
            setOption={setTextAlign}
            options={textAlignOptions}
          />
        </Grid.Column>
      )}
    </>
  );
};
