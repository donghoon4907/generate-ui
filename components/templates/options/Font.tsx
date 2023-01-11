import type { FC } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type { ISetFont } from "../../../hooks/useFont";
import type { IFont } from "../../../model/font";
import * as Grid from "../../partial/Grid";
import { isNumber } from "../../../lib/calc/number";
import { RequireLabel } from "../../RequireLabel";
import { CustomSelect } from "../../CustomSelect";
import { textAlignOptions } from "../../options/TextAlign";
import { CountingInput } from "../../CountingInput";
import { CountNumberType } from "../../../types/count";
import { textOverflowOptions } from "../../options/TextOverflow";
import { ColorOption } from "./Color";
import { fontWeightOptions } from "../../options/FontWeight";

interface Props extends IGridOption, Partial<IFont>, Partial<ISetFont> {
  id: string;
}

export const FontOption: FC<Props> = ({
  span,
  color,
  fontSize,
  lineHeight,
  letterSpacing,
  textAlign,
  textOverflow,
  fontWeight,
  setColor,
  setFontSize,
  setLineHeight,
  setLetterSpacing,
  setTextAlign,
  setTextOverflow,
  setFontWeight,
  id
}) => {
  const isShowColor = !!color && !!setColor;

  const isShowFontSize = isNumber(fontSize) && !!setFontSize;

  const isShowLineHeight = isNumber(lineHeight) && !!setLineHeight;

  const isShowLetterSpacing = isNumber(letterSpacing) && !!setLetterSpacing;

  const isShowTextAlign = !!textAlign && !!setTextAlign;

  const isShowTextOverflow = !!textOverflow && !!setTextOverflow;

  const isShowFontWeight = !!fontWeight && !!setFontWeight;

  return (
    <>
      {isShowColor && (
        <ColorOption id={id} span={span} hex={color} setHex={setColor} />
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
      {isShowFontWeight && (
        <Grid.Column span={span}>
          <RequireLabel htmlFor={`setFontWeight${id}`}>굵기</RequireLabel>
          <CustomSelect
            activeOption={fontWeight}
            setOption={setFontWeight}
            options={fontWeightOptions}
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
