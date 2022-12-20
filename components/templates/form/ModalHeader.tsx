import type { Dispatch, FC, SetStateAction } from "react";

import type { IPaddingOption } from "../../../interfaces/option";
import type { IGridOption } from "../../../interfaces/grid";
import * as Grid from "../../partial/Grid";
import { RequireLabel } from "../../RequireLabel";
import { CountingInput } from "../../CountingInput";
import { CountNumberType } from "../../../types/count";
import { FeedbackInput } from "../../Input";
import { FontOption } from "../options/Font";
import { PaddingOption } from "../options/Padding";

interface Props extends IGridOption, IPaddingOption {
  showTitle: boolean;
  setShowTitle: Dispatch<SetStateAction<boolean>>;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  titleColor: string;
  setTitleColor: Dispatch<SetStateAction<string>>;
  titleFontSize: number;
  setTitleFontSize: Dispatch<SetStateAction<number>>;
  titleLineHeight: number;
  setTitleLineHeight: Dispatch<SetStateAction<number>>;
  titleLetterSpacing: number;
  setTitleLetterSpacing: Dispatch<SetStateAction<number>>;
  showPadding: boolean;
  setShowPadding: Dispatch<SetStateAction<boolean>>;
  showCloseIcon: boolean;
  setShowCloseIcon: Dispatch<SetStateAction<boolean>>;
  closeIconSize: number;
  setCloseIconSize: Dispatch<SetStateAction<number>>;
}

export const ModalHeaderForm: FC<Props> = ({
  span,
  showTitle,
  setShowTitle,
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
  showPadding,
  setShowPadding,
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
  showCloseIcon,
  setShowCloseIcon,
  closeIconSize,
  setCloseIconSize
}) => {
  return (
    <>
      <Grid.FoldableTitle fold={showTitle} setFold={setShowTitle} span={span}>
        <span>제목 설정</span>
      </Grid.FoldableTitle>
      <Grid.Column span={showTitle ? 1 : 0}>
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
        color={titleColor}
        setColor={setTitleColor}
        fontSize={titleFontSize}
        setFontSize={setTitleFontSize}
        lineHeight={titleLineHeight}
        setLineHeight={setTitleLineHeight}
        letterSpacing={titleLetterSpacing}
        setLetterSpacing={setTitleLetterSpacing}
        span={showTitle ? 1 : 0}
      />
      <Grid.FoldableTitle
        fold={showPadding}
        setFold={setShowPadding}
        span={span}
      >
        <span>여백 설정</span>
      </Grid.FoldableTitle>
      <PaddingOption
        id="ModalHeader"
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
        span={showPadding ? 1 : 0}
      />
      <Grid.FoldableTitle
        fold={showCloseIcon}
        setFold={setShowCloseIcon}
        span={span}
      >
        <span>아이콘 설정</span>
      </Grid.FoldableTitle>
      <Grid.Column span={showCloseIcon ? 1 : 0}>
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
    </>
  );
};
