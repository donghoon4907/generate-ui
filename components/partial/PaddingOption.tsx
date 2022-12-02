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
  isShowAllOption: boolean;
  setIsShowAllOption: Dispatch<SetStateAction<boolean>>;
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
  isShowAllOption,
  setIsShowAllOption
}) => {
  const setPadding = (px: number) => {
    setPaddingTop(px);
    setPaddingRight(px);
    setPaddingBottom(px);
    setPaddingLeft(px);
  };

  return (
    <>
      <Option.Item>
        <RequireLabel
          htmlFor={isShowAllOption ? `setPaddingTop${id}` : `setPadding${id}`}
        >
          {`여백 ${isShowAllOption ? "Top" : ""}`}
        </RequireLabel>
        <CountingInput
          id={isShowAllOption ? `setPaddingTop${id}` : `setPadding${id}`}
          ariaLabel={isShowAllOption ? "padding-top" : "padding"}
          count={paddingTop}
          setCount={isShowAllOption ? setPaddingTop : setPadding}
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
            checked={isShowAllOption}
            setChecked={setIsShowAllOption}
          />
        </WithLabel>
      </Option.Item>
      {isShowAllOption && (
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
              showIcon={true}
              showFeedback={true}
              numberType={CountNumberType.INTEGER}
              unit="px"
            />
          </Option.Item>
        </>
      )}
    </>
  );
};
