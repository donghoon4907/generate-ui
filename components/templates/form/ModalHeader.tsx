import type { FC } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type { CoreSetState } from "../../../types/core";
import type { ISelectOption } from "../../../interfaces/select";
import * as Grid from "../../partial/Grid";
import { RequireLabel } from "../../RequireLabel";
import { FeedbackInput } from "../../Input";
import { FontOption } from "../options/Font";
import { PaddingOption } from "../options/Padding";
import { IconOption } from "../options/Icon";

interface Props extends IGridOption {
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
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  setPaddingTop: CoreSetState<number>;
  setPaddingRight: CoreSetState<number>;
  setPaddingBottom: CoreSetState<number>;
  setPaddingLeft: CoreSetState<number>;
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
  closeIconSize,
  setCloseIconSize,
  closeIconColor,
  setCloseIconColor,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  setPaddingTop,
  setPaddingRight,
  setPaddingBottom,
  setPaddingLeft
}) => {
  const displayName = "ModalHeader";
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
          id={displayName}
          span={span}
          color={titleColor}
          fontSize={titleFontSize}
          lineHeight={titleLineHeight}
          letterSpacing={titleLetterSpacing}
          fontWeight={titleFontWeight}
          setColor={setTitleColor}
          setFontSize={setTitleFontSize}
          setLineHeight={setTitleLineHeight}
          setLetterSpacing={setTitleLetterSpacing}
          setFontWeight={setTitleFontWeight}
        />
      </Grid.FoldableTitle>

      <Grid.FoldableTitle span={span} title="여백 설정" defaultFold={false}>
        <PaddingOption
          id={displayName}
          span={span}
          top={paddingTop}
          right={paddingRight}
          bottom={paddingBottom}
          left={paddingLeft}
          setTop={setPaddingTop}
          setRight={setPaddingRight}
          setBottom={setPaddingBottom}
          setLeft={setPaddingLeft}
        />
      </Grid.FoldableTitle>

      <Grid.FoldableTitle
        span={span}
        title="닫기 아이콘 설정"
        defaultFold={false}
      >
        <IconOption
          span={span}
          id={displayName}
          iconSize={closeIconSize}
          iconColor={closeIconColor}
          setIconSize={setCloseIconSize}
          setIconColor={setCloseIconColor}
        />
      </Grid.FoldableTitle>
    </>
  );
};
