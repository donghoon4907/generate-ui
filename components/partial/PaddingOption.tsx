import type { Dispatch, FC, SetStateAction } from "react";

import { CountingInput } from "../CountingInput";
import { CountNumberType } from "../../types/count";
import * as Option from "./Option";
import { RequireLabel } from "../RequireLabel";
import { Switch } from "../Switch";
import { WithLabel } from "../WithLabel";

interface Props {
  paddingTop: number;
  setPaddingTop: Dispatch<SetStateAction<number>>;
  paddingRight: number;
  setPaddingRight: Dispatch<SetStateAction<number>>;
  paddingBottom: number;
  setPaddingBottom: Dispatch<SetStateAction<number>>;
  paddingLeft: number;
  setPaddingLeft: Dispatch<SetStateAction<number>>;
  isSetDetailPadding: boolean;
  setIsSetDetailPadding: Dispatch<SetStateAction<boolean>>;
  isDisabledPaddingLeft?: boolean;
}

export const PaddingOption: FC<Props> = ({
  paddingTop,
  setPaddingTop,
  paddingRight,
  setPaddingRight,
  paddingBottom,
  setPaddingBottom,
  paddingLeft,
  setPaddingLeft,
  isSetDetailPadding,
  setIsSetDetailPadding,
  isDisabledPaddingLeft
}) => {
  const setPadding = (px: number) => {
    setPaddingTop(px);
    setPaddingRight(px);
    setPaddingBottom(px);

    if (!isDisabledPaddingLeft) {
      setPaddingLeft(px);
    }
  };

  return (
    <>
      <Option.Title>여백 설정</Option.Title>
      <Option.Item>
        <RequireLabel
          htmlFor={isSetDetailPadding ? "setPaddingTop" : "setPadding"}
        >
          {isSetDetailPadding ? "Top" : "여백"}
        </RequireLabel>
        <CountingInput
          id={isSetDetailPadding ? "setPaddingTop" : "setPadding"}
          ariaLabel={isSetDetailPadding ? "padding-top" : "padding"}
          count={paddingTop}
          setCount={isSetDetailPadding ? setPaddingTop : setPadding}
          limit={30}
          showIcon={true}
          showFeedback={true}
          numberType={CountNumberType.INTEGER}
          unit="px"
        />
        <WithLabel id="setDetailPadding" label="디테일 설정">
          <Switch
            id="setDetailPadding"
            width={40}
            checked={isSetDetailPadding}
            setChecked={setIsSetDetailPadding}
          />
        </WithLabel>
      </Option.Item>
      {isSetDetailPadding && (
        <>
          <Option.Item>
            <RequireLabel htmlFor="setPaddingRight">Right</RequireLabel>
            <CountingInput
              id="setPaddingRight"
              ariaLabel="padding-right"
              count={paddingRight}
              setCount={setPaddingRight}
              limit={30}
              showIcon={true}
              showFeedback={true}
              numberType={CountNumberType.INTEGER}
              unit="px"
            />
          </Option.Item>
          <Option.Item>
            <RequireLabel htmlFor="setPaddingBottom">Bottom</RequireLabel>
            <CountingInput
              id="setPaddingBottom"
              ariaLabel="padding-bottom"
              count={paddingBottom}
              setCount={setPaddingBottom}
              limit={30}
              showIcon={true}
              showFeedback={true}
              numberType={CountNumberType.INTEGER}
              unit="px"
            />
          </Option.Item>
          <Option.Item>
            <RequireLabel htmlFor="setPaddingLeft">Left</RequireLabel>
            <CountingInput
              id="setPaddingLeft"
              ariaLabel="padding-left"
              count={paddingLeft}
              setCount={setPaddingLeft}
              limit={30}
              showIcon={!isDisabledPaddingLeft}
              showFeedback={true}
              numberType={CountNumberType.INTEGER}
              unit="px"
              disabled={isDisabledPaddingLeft}
            />
          </Option.Item>
        </>
      )}
    </>
  );
};
