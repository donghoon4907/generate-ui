import type { FC } from "react";

import type { IBorderOption, IPaddingOption } from "../../../interfaces/option";
import type { IGridOption } from "../../../interfaces/grid";
import type { CoreSetState } from "../../../types/core";
import type { ISelectOption } from "../../../interfaces/select";
import * as Grid from "../../partial/Grid";
import { RequireLabel } from "../../RequireLabel";
import { CountingInput } from "../../CountingInput";
import { CountNumberType } from "../../../types/count";
import { FeedbackInput } from "../../Input";
import { FontOption } from "../options/Font";
import { PaddingOption } from "../options/Padding";
import { BorderOption } from "../options/Border";

interface Props extends IGridOption, IPaddingOption, IBorderOption {
  title: string;
  setTitle: CoreSetState<string>;
  titleColor: string;
  setTitleColor: CoreSetState<string>;
  titleFontSize: number;
  setTitleFontSize: CoreSetState<number>;
  titleLineHeight: number;
  setTitleLineHeight: CoreSetState<number>;
  titleLetterSpacing: number;
  setTitleLetterSpacing: CoreSetState<number>;
  titleFontWeight: ISelectOption;
  setTitleFontWeight: CoreSetState<ISelectOption>;
  closeIconSize: number;
  setCloseIconSize: CoreSetState<number>;
}

export const ModalHeaderForm: FC<Props> = ({
  span,
  title,
  setTitle,
  titleColor,
  setTitleColor,
  titleFontSize,
  setTitleFontSize,
  titleLineHeight,
  setTitleLineHeight,
  titleLetterSpacing,
  setTitleLetterSpacing,
  titleFontWeight,
  setTitleFontWeight,
  paddingTop,
  setPaddingTop,
  paddingRight,
  setPaddingRight,
  paddingBottom,
  setPaddingBottom,
  paddingLeft,
  setPaddingLeft,
  checkAllPaddingOption,
  setCheckAllPaddingOption,
  borderStyle,
  setBorderStyle,
  borderWidth,
  setBorderWidth,
  borderColor,
  setBorderColor,
  closeIconSize,
  setCloseIconSize
}) => {
  // 제목 글자 수 제한
  const LABEL_LIMIT = 10;

  return (
    <>
      <Grid.FoldableTitle span={span} title="텍스트 설정">
        <Grid.Column span={span}>
          <RequireLabel htmlFor="setHeaderTitle">제목</RequireLabel>
          <FeedbackInput
            id="setHeaderTitle"
            value={title}
            setValue={setTitle}
            condition={title.length < LABEL_LIMIT}
            invalidComment={`제목은 ${LABEL_LIMIT}자 미만으로 입력하세요.`}
          />
        </Grid.Column>
        <FontOption
          id="HeaderTitle"
          span={span}
          color={titleColor}
          setColor={setTitleColor}
          fontSize={titleFontSize}
          setFontSize={setTitleFontSize}
          lineHeight={titleLineHeight}
          setLineHeight={setTitleLineHeight}
          letterSpacing={titleLetterSpacing}
          setLetterSpacing={setTitleLetterSpacing}
          fontWeight={titleFontWeight}
          setFontWeight={setTitleFontWeight}
        />
      </Grid.FoldableTitle>

      <Grid.FoldableTitle span={span} title="여백 설정" defaultFold={false}>
        <PaddingOption
          id="ModalHeader"
          span={span}
          paddingTop={paddingTop}
          setPaddingTop={setPaddingTop}
          paddingRight={paddingRight}
          setPaddingRight={setPaddingRight}
          paddingBottom={paddingBottom}
          setPaddingBottom={setPaddingBottom}
          paddingLeft={paddingLeft}
          setPaddingLeft={setPaddingLeft}
          checkAllPaddingOption={checkAllPaddingOption}
          setCheckAllPaddingOption={setCheckAllPaddingOption}
        />
      </Grid.FoldableTitle>

      <Grid.FoldableTitle span={span} title="테두리 설정" defaultFold={false}>
        <BorderOption
          id="ModalHeader"
          span={span}
          borderStyle={borderStyle}
          setBorderStyle={setBorderStyle}
          borderWidth={borderWidth}
          setBorderWidth={setBorderWidth}
          borderColor={borderColor}
          setBorderColor={setBorderColor}
        />
      </Grid.FoldableTitle>

      <Grid.FoldableTitle
        span={span}
        title="닫기 아이콘 설정"
        defaultFold={false}
      >
        <Grid.Column span={span}>
          <RequireLabel htmlFor="setCloseIconSize">크기</RequireLabel>
          <CountingInput
            id="setCloseIconSize"
            ariaLabel="닫기 아이콘 크기"
            count={closeIconSize}
            setCount={setCloseIconSize}
            limit={50}
            showIcon={true}
            showFeedback={true}
            numberType={CountNumberType.INTEGER}
            unit="px"
          />
        </Grid.Column>
      </Grid.FoldableTitle>
    </>
  );
};
