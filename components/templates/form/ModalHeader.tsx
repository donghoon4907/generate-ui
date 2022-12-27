import type { FC } from "react";

import type { IPaddingOption } from "../../../interfaces/option";
import type { IGridOption } from "../../../interfaces/grid";
import type { CoreSetState } from "../../../types/core";
import * as Grid from "../../partial/Grid";
import { RequireLabel } from "../../RequireLabel";
import { CountingInput } from "../../CountingInput";
import { CountNumberType } from "../../../types/count";
import { FeedbackInput } from "../../Input";
import { FontOption } from "../options/Font";
import { PaddingOption } from "../options/Padding";

interface Props extends IGridOption, IPaddingOption {
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
  closeIconSize,
  setCloseIconSize
}) => {
  return (
    <>
      <Grid.FoldableTitle span={span} title="제목 설정">
        <Grid.Column span={span}>
          <RequireLabel htmlFor="setHeaderTitle">제목</RequireLabel>
          <FeedbackInput
            id="setHeaderTitle"
            value={title}
            setValue={setTitle}
            limit={10}
            showFeedback={true}
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
        />
      </Grid.FoldableTitle>

      <Grid.FoldableTitle span={span} title="여백 설정">
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

      <Grid.FoldableTitle span={span} title="아이콘 설정">
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
