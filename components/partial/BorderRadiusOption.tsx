import type { Dispatch, FC, SetStateAction } from "react";

import { CountingInput } from "../CountingInput";
import { CountNumberType } from "../../types/count";
import * as Option from "./Option";
import { RequireLabel } from "../RequireLabel";
import { Switch } from "../Switch";
import { WithLabel } from "../WithLabel";
import type { GridItemOption } from "../../interfaces/grid";

interface Props extends GridItemOption {
  id: string | number;
  borderTopLeftRadius: number;
  setBorderTopLeftRadius: Dispatch<SetStateAction<number>>;
  borderTopRightRadius: number;
  setBorderTopRightRadius: Dispatch<SetStateAction<number>>;
  borderBottomLeftRadius: number;
  setBorderBottomLeftRadius: Dispatch<SetStateAction<number>>;
  borderBottomRightRadius: number;
  setBorderBottomRightRadius: Dispatch<SetStateAction<number>>;
  isShowAllOption: boolean;
  setIsShowAllOption: Dispatch<SetStateAction<boolean>>;
}

export const BorderRadiusOption: FC<Props> = ({
  id,
  borderTopLeftRadius,
  setBorderTopLeftRadius,
  borderTopRightRadius,
  setBorderTopRightRadius,
  borderBottomLeftRadius,
  setBorderBottomLeftRadius,
  borderBottomRightRadius,
  setBorderBottomRightRadius,
  isShowAllOption,
  setIsShowAllOption,
  span
}) => {
  const setBorderRadius = (px: number) => {
    setBorderTopLeftRadius(px);
    setBorderTopRightRadius(px);
    setBorderBottomLeftRadius(px);
    setBorderBottomRightRadius(px);
  };

  return (
    <>
      <Option.Item span={span}>
        <RequireLabel
          htmlFor={
            isShowAllOption
              ? `setBorderTopLeftRadius${id}`
              : `setBorderRadius${id}`
          }
        >
          {`모서리 각 ${isShowAllOption ? "Top-Left" : ""}`}
        </RequireLabel>
        <CountingInput
          id={
            isShowAllOption
              ? `setBorderTopLeftRadius${id}`
              : `setBorderRadius${id}`
          }
          ariaLabel={
            isShowAllOption ? "border-top-left-radius" : "border-radius"
          }
          count={borderTopLeftRadius}
          setCount={isShowAllOption ? setBorderTopLeftRadius : setBorderRadius}
          limit={100}
          showIcon={true}
          showFeedback={true}
          numberType={CountNumberType.INTEGER}
          unit="px"
        />
        <WithLabel id={`setDetailBorderRadius${id}`} label="디테일 설정">
          <Switch
            id={`setDetailBorderRadius${id}`}
            width={40}
            checked={isShowAllOption}
            setChecked={setIsShowAllOption}
          />
        </WithLabel>
      </Option.Item>
      {isShowAllOption && (
        <>
          <Option.Item span={span}>
            <RequireLabel htmlFor={`setBorderTopRightRadius${id}`}>
              모서리 각 Top-Right
            </RequireLabel>
            <CountingInput
              id={`setBorderTopRightRadius${id}`}
              ariaLabel="border-top-right-radius"
              count={borderTopRightRadius}
              setCount={setBorderTopRightRadius}
              limit={100}
              showIcon={true}
              showFeedback={true}
              numberType={CountNumberType.INTEGER}
              unit="px"
            />
          </Option.Item>
          <Option.Item span={span}>
            <RequireLabel htmlFor={`setBorderBottomRightRadius${id}`}>
              모서리 각 Bottom-Left
            </RequireLabel>
            <CountingInput
              id={`setBorderBottompRightRadius${id}`}
              ariaLabel="border-bottom-left-radius"
              count={borderBottomLeftRadius}
              setCount={setBorderBottomLeftRadius}
              limit={100}
              showIcon={true}
              showFeedback={true}
              numberType={CountNumberType.INTEGER}
              unit="px"
            />
          </Option.Item>
          <Option.Item span={span}>
            <RequireLabel htmlFor={`setBorderBottomRightRadius${id}`}>
              모서리 각 Bottom-Right
            </RequireLabel>
            <CountingInput
              id={`setBorderBottomRightRadius${id}`}
              ariaLabel="border-bottom-right-radius"
              count={borderBottomRightRadius}
              setCount={setBorderBottomRightRadius}
              limit={100}
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
