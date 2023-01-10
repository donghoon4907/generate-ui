import type { FC } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type { IPadding } from "../../../model/padding";
import type { ISetStatePadding } from "../../../hooks/usePadding";
import type { CoreSetState } from "../../../types/core";
import type { ISelectOption } from "../../../interfaces/select";
import * as Grid from "../../partial/Grid";
import { RequireLabel } from "../../RequireLabel";
import { FeedbackInput } from "../../Input";
import { FontOption } from "../options/Font";
import { PaddingOption } from "../options/Padding";
import { IconOption } from "../options/Icon";

interface Props extends IGridOption, IPadding, ISetStatePadding {
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
  closeIconColor: string;
  setCloseIconColor: CoreSetState<string>;
}

export const ModalHeaderForm: FC<Props> = ({
  span,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  setPaddingTop,
  setPaddingRight,
  setPaddingBottom,
  setPaddingLeft,
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
  closeIconSize,
  setCloseIconSize,
  closeIconColor,
  setCloseIconColor
}) => {
  // 제목 글자 수 제한
  const LABEL_LIMIT = 10;

  return (
    <>
      <Grid.FoldableTitle span={span} title="기본 설정">
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
      </Grid.FoldableTitle>

      <Grid.FoldableTitle span={span} title="텍스트 설정" defaultFold={false}>
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
          paddingRight={paddingRight}
          paddingBottom={paddingBottom}
          paddingLeft={paddingLeft}
          setPaddingTop={setPaddingTop}
          setPaddingRight={setPaddingRight}
          setPaddingBottom={setPaddingBottom}
          setPaddingLeft={setPaddingLeft}
        />
      </Grid.FoldableTitle>

      <Grid.FoldableTitle
        span={span}
        title="닫기 아이콘 설정"
        defaultFold={false}
      >
        <IconOption
          span={span}
          id="ModalHeader"
          iconSize={closeIconSize}
          setIconSize={setCloseIconSize}
          iconColor={closeIconColor}
          setIconColor={setCloseIconColor}
        />
      </Grid.FoldableTitle>
    </>
  );
};
