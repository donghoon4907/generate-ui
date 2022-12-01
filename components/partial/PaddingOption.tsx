import type { Dispatch, FC, SetStateAction } from "react";

import { CountingInput } from "../CountingInput";
import { CountNumberType } from "../../types/count";
import * as Option from "./Option";
import { RequireLabel } from "../RequireLabel";
import { Switch } from "../Switch";
import { WithLabel } from "../WithLabel";

interface Props {
  id: string | number;
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
  id,
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
      <Option.Item>
        <RequireLabel
          htmlFor={
            isSetDetailPadding ? `setPaddingTop${id}` : `setPadding${id}`
          }
        >
          {`여백 ${isSetDetailPadding ? "Top" : ""}`}
        </RequireLabel>
        <CountingInput
          id={isSetDetailPadding ? `setPaddingTop${id}` : `setPadding${id}`}
          ariaLabel={isSetDetailPadding ? "padding-top" : "padding"}
          count={paddingTop}
          setCount={isSetDetailPadding ? setPaddingTop : setPadding}
          limit={30}
          showIcon={true}
          showFeedback={true}
          numberType={CountNumberType.INTEGER}
          unit="px"
        />
        <WithLabel id={`setDetailPadding${id}`} label="디테일 설정">
          <Switch
            id={`setDetailPadding${id}`}
            width={40}
            checked={isSetDetailPadding}
            setChecked={setIsSetDetailPadding}
          />
        </WithLabel>
      </Option.Item>
      {isSetDetailPadding && (
        <>
          <Option.Item>
            <RequireLabel htmlFor="setPaddingRight">여백 Right</RequireLabel>
            <CountingInput
              id={`setPaddingRight${id}`}
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
            <RequireLabel htmlFor={`setPaddingBottom${id}`}>
              여백 Bottom
            </RequireLabel>
            <CountingInput
              id={`setPaddingBottom${id}`}
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
            <RequireLabel htmlFor={`setPaddingLeft${id}`}>
              여백 Left
            </RequireLabel>
            <CountingInput
              id={`setPaddingLeft${id}`}
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
