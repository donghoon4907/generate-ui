import type { ChangeEvent, FC } from "react";
import { useCallback } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type { IModalLayoutOption } from "../../../interfaces/modal";
import type { ISelectOption } from "../../../interfaces/select";
import type { CoreSetState } from "../../../types/core";
import * as Grid from "../../partial/Grid";
import { RequireLabel } from "../../RequireLabel";
import { DangerButton } from "../../Button";
import { DefaultInput, FeedbackInput } from "../../Input";
import { labelPositionOptions } from "../../options/LabelPosition";
import { CustomSelect } from "../../CustomSelect";
import { modalInputTypeOptions } from "../../options/InputType";
import { FontOption } from "./Font";
import { ModalBodyLayoutTabType } from "../../../types/tab";
import { BorderRadiusOption } from "./BorderRadius";
import { PaddingOption } from "./Padding";
import { BorderOption } from "./Border";
import { RgbaOption } from "./Rgba";
import { useTab } from "../../../hooks/useTab";
import { LoadOption } from "./Load";

interface Props extends IGridOption, IModalLayoutOption {
  order: number;
  layouts: IModalLayoutOption[];
  setLayouts: CoreSetState<IModalLayoutOption[]>;
  updateItem: (option: Record<any, any>) => void;
  isExpand: boolean;
}

export const ModalLayoutOption: FC<Props> = ({
  span,
  order,
  label,
  labelPos,
  labelColor,
  labelFontSize,
  labelLineHeight,
  labelLetterSpacing,
  labelFontWeight,
  inputType,
  inputColor,
  inputFontSize,
  inputLineHeight,
  inputLetterSpacing,
  inputTextAlign,
  inputPaddingTop,
  inputPaddingRight,
  inputPaddingBottom,
  inputPaddingLeft,
  inputBorderTopLeftRadius,
  inputBorderTopRightRadius,
  inputBorderBottomLeftRadius,
  inputBorderBottomRightRadius,
  inputBorderStyle,
  inputBorderColor,
  inputBorderWidth,
  inputBgColorHex,
  inputBgColorAlpha,
  inputPlaceholder,
  layouts,
  setLayouts,
  updateItem,
  isExpand
}) => {
  const labelDisplayName = `ModalLabel${order}`;

  const inputDisplayName = `ModalInput${order}`;
  // placeholder ?????? ??? ??????
  const PLACEHOLDER_LIMIT = 10;

  const [activeTab, setActiveTab] = useTab(ModalBodyLayoutTabType.LABEL);

  const setLabelPos = (labelPos: ISelectOption) => {
    updateItem({ labelPos });
  };

  const setLabelColor = useCallback(
    (labelColor: string) => {
      updateItem({ labelColor });
    },
    [updateItem]
  );

  const setLabelFontSize = (labelFontSize: number) => {
    updateItem({ labelFontSize });
  };

  const setLabelLineHeight = (labelLineHeight: number) => {
    updateItem({ labelLineHeight });
  };

  const setLabelLetterSpacing = (labelLetterSpacing: number) => {
    updateItem({ labelLetterSpacing });
  };

  const setLabelFontWeight = (labelFontWeight: ISelectOption) => {
    updateItem({ labelFontWeight });
  };

  const setInputType = (inputType: ISelectOption) => {
    updateItem({ inputType });
  };

  const setInputColor = useCallback(
    (inputColor: string) => {
      updateItem({ inputColor });
    },
    [updateItem]
  );

  const setInputFontSize = (inputFontSize: number) => {
    updateItem({ inputFontSize });
  };

  const setInputLineHeight = (inputLineHeight: number) => {
    updateItem({ inputLineHeight });
  };

  const setInputLetterSpacing = (inputLetterSpacing: number) => {
    updateItem({ inputLetterSpacing });
  };

  const setInputTextAlign = (inputTextAlign: ISelectOption) => {
    updateItem({ inputTextAlign });
  };

  const setInputPaddingTop = (inputPaddingTop: number) => {
    updateItem({ inputPaddingTop });
  };

  const setInputPaddingRight = (inputPaddingRight: number) => {
    updateItem({ inputPaddingRight });
  };

  const setInputPaddingBottom = (inputPaddingBottom: number) => {
    updateItem({ inputPaddingBottom });
  };

  const setInputPaddingLeft = (inputPaddingLeft: number) => {
    updateItem({ inputPaddingLeft });
  };

  const setInputBorderTopLeftRadius = (inputBorderTopLeftRadius: number) => {
    updateItem({ inputBorderTopLeftRadius });
  };

  const setInputBorderTopRightRadius = (inputBorderTopRightRadius: number) => {
    updateItem({ inputBorderTopRightRadius });
  };

  const setInputBorderBottomLeftRadius = (
    inputBorderBottomLeftRadius: number
  ) => {
    updateItem({ inputBorderBottomLeftRadius });
  };

  const setInputBorderBottomRightRadius = (
    inputBorderBottomRightRadius: number
  ) => {
    updateItem({ inputBorderBottomRightRadius });
  };

  const setInputBorderStyle = (inputBorderStyle: ISelectOption) => {
    updateItem({ inputBorderStyle });
  };

  const setInputBorderColor = (inputBorderColor: string) => {
    updateItem({ inputBorderColor });
  };

  const setInputBorderWidth = (inputBorderWidth: number) => {
    updateItem({ inputBorderWidth });
  };

  const setInputBgColorHex = useCallback(
    (inputBgColorHex: string) => {
      updateItem({ inputBgColorHex });
    },
    [updateItem]
  );

  const setInputPlaceholder = (inputPlaceholder: string) => {
    updateItem({ inputPlaceholder });
  };

  const setInputBgColorAlpha = (inputBgColorAlpha: number) => {
    updateItem({ inputBgColorAlpha });
  };

  const handleChangeLabel = (evt: ChangeEvent<HTMLInputElement>) => {
    const label = evt.target.value;

    updateItem({ label });
  };

  const handleRemove = () => {
    setLayouts(prevLayouts =>
      prevLayouts.filter((_, index) => order !== index)
    );
  };

  return (
    <Grid.ResponsiveContainer span={span}>
      <Grid.ResponsiveRow span={span}>
        <div>?????? {order + 1}</div>
      </Grid.ResponsiveRow>
      {!isExpand && (
        <Grid.ResponsiveRow span={span}>
          {!isExpand && <div>{`- ????????????: ${label}`}</div>}
        </Grid.ResponsiveRow>
      )}

      {isExpand && (
        <>
          <Grid.ResponsiveRow span={span}>
            <Grid.Tab
              active={activeTab === ModalBodyLayoutTabType.LABEL}
              onClick={() => setActiveTab(ModalBodyLayoutTabType.LABEL)}
            >
              ???????????????
            </Grid.Tab>
            <Grid.Tab
              active={activeTab === ModalBodyLayoutTabType.INPUT}
              onClick={() => setActiveTab(ModalBodyLayoutTabType.INPUT)}
            >
              ???????????????
            </Grid.Tab>
            <Grid.Tab
              active={activeTab === ModalBodyLayoutTabType.LOAD}
              onClick={() => setActiveTab(ModalBodyLayoutTabType.LOAD)}
            >
              ????????????
            </Grid.Tab>
          </Grid.ResponsiveRow>
          {activeTab === ModalBodyLayoutTabType.LABEL && (
            <>
              <Grid.FoldableTitle span={span} title="?????? ??????">
                <Grid.Column span={span}>
                  <RequireLabel htmlFor={`setLabel${order}`}>
                    ?????????
                  </RequireLabel>
                  <DefaultInput
                    id={`setLabel${order}`}
                    value={label}
                    onChange={handleChangeLabel}
                    // draggable={true}
                    // onDragStart={evt => evt.preventDefault()}
                  />
                </Grid.Column>
              </Grid.FoldableTitle>
              <Grid.FoldableTitle
                span={span}
                title="???????????? ??????"
                defaultFold={false}
              >
                <Grid.Column span={span}>
                  <RequireLabel htmlFor={`setLabelPos${order}`}>
                    ????????? ??????
                  </RequireLabel>
                  <CustomSelect
                    activeOption={labelPos}
                    setOption={setLabelPos}
                    options={labelPositionOptions}
                  />
                </Grid.Column>
              </Grid.FoldableTitle>
              <Grid.FoldableTitle
                span={span}
                title="????????? ??????"
                defaultFold={false}
              >
                <FontOption
                  id={labelDisplayName}
                  span={span}
                  color={labelColor}
                  fontSize={labelFontSize}
                  lineHeight={labelLineHeight}
                  letterSpacing={labelLetterSpacing}
                  fontWeight={labelFontWeight}
                  setColor={setLabelColor}
                  setFontSize={setLabelFontSize}
                  setLineHeight={setLabelLineHeight}
                  setLetterSpacing={setLabelLetterSpacing}
                  setFontWeight={setLabelFontWeight}
                />
              </Grid.FoldableTitle>
            </>
          )}
          {activeTab === ModalBodyLayoutTabType.INPUT && (
            <>
              <Grid.FoldableTitle span={span} title="?????? ??????">
                <Grid.Column span={span}>
                  <RequireLabel htmlFor={`setInputType${order}`}>
                    ??????
                  </RequireLabel>
                  <CustomSelect
                    activeOption={inputType}
                    setOption={setInputType}
                    options={modalInputTypeOptions}
                  />
                </Grid.Column>
                <Grid.Column span={1}>
                  <RequireLabel htmlFor={`setPlaceholder${order}`}>
                    ?????? ????????? ??????
                  </RequireLabel>
                  <FeedbackInput
                    id={`setPlaceholder${order}`}
                    value={inputPlaceholder}
                    setValue={setInputPlaceholder}
                    condition={inputPlaceholder.length < PLACEHOLDER_LIMIT}
                    invalidComment={`????????? ${PLACEHOLDER_LIMIT}??? ???????????? ???????????????.`}
                  />
                </Grid.Column>
              </Grid.FoldableTitle>
              <Grid.FoldableTitle
                span={span}
                title="????????? ??????"
                defaultFold={false}
              >
                <FontOption
                  id={inputDisplayName}
                  span={span}
                  color={inputColor}
                  fontSize={inputFontSize}
                  lineHeight={inputLineHeight}
                  letterSpacing={inputLetterSpacing}
                  textAlign={inputTextAlign}
                  setColor={setInputColor}
                  setFontSize={setInputFontSize}
                  setLineHeight={setInputLineHeight}
                  setLetterSpacing={setInputLetterSpacing}
                  setTextAlign={setInputTextAlign}
                />
              </Grid.FoldableTitle>
              <Grid.FoldableTitle
                span={span}
                title="?????? ??????"
                defaultFold={false}
              >
                <PaddingOption
                  id={inputDisplayName}
                  span={span}
                  top={inputPaddingTop}
                  right={inputPaddingRight}
                  bottom={inputPaddingBottom}
                  left={inputPaddingLeft}
                  setTop={setInputPaddingTop}
                  setRight={setInputPaddingRight}
                  setBottom={setInputPaddingBottom}
                  setLeft={setInputPaddingLeft}
                />
              </Grid.FoldableTitle>
              <Grid.FoldableTitle
                span={span}
                title="???????????? ??????"
                defaultFold={false}
              >
                <BorderRadiusOption
                  id={inputDisplayName}
                  span={span}
                  topLeft={inputBorderTopLeftRadius}
                  topRight={inputBorderTopRightRadius}
                  bottomLeft={inputBorderBottomLeftRadius}
                  bottomRight={inputBorderBottomRightRadius}
                  setTopLeft={setInputBorderTopLeftRadius}
                  setTopRight={setInputBorderTopRightRadius}
                  setBottomLeft={setInputBorderBottomLeftRadius}
                  setBottomRight={setInputBorderBottomRightRadius}
                />
              </Grid.FoldableTitle>
              <Grid.FoldableTitle
                span={span}
                title="????????? ??????"
                defaultFold={false}
              >
                <BorderOption
                  id={inputDisplayName}
                  span={span}
                  style={inputBorderStyle}
                  color={inputBorderColor}
                  width={inputBorderWidth}
                  setStyle={setInputBorderStyle}
                  setColor={setInputBorderColor}
                  setWidth={setInputBorderWidth}
                />
              </Grid.FoldableTitle>
              <Grid.FoldableTitle
                span={span}
                title="????????? ??????"
                defaultFold={false}
              >
                <RgbaOption
                  id={inputDisplayName}
                  span={span}
                  hex={inputBgColorHex}
                  alpha={inputBgColorAlpha}
                  setHex={setInputBgColorHex}
                  setAlpha={setInputBgColorAlpha}
                />
              </Grid.FoldableTitle>
            </>
          )}
          {activeTab === ModalBodyLayoutTabType.LOAD && (
            <LoadOption
              span={span}
              order={order}
              list={layouts}
              updateItem={updateItem}
            />
          )}
          <Grid.Column span={span}>
            <DangerButton type="button" onClick={handleRemove}>
              ??????
            </DangerButton>
          </Grid.Column>
        </>
      )}
    </Grid.ResponsiveContainer>
  );
};
