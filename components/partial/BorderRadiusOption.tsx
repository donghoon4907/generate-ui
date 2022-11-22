import type { Dispatch, FC, SetStateAction } from "react";

import { CountingInput } from "../CountingInput";
import { CountNumberType } from "../../types/count";
import * as Option from "./Option";
import { RequireLabel } from "../RequireLabel";
import { Switch } from "../Switch";
import { WithLabel } from "../WithLabel";

interface Props {
  borderTopLeftRadius: number;
  setBorderTopLeftRadius: Dispatch<SetStateAction<number>>;
  borderTopRightRadius: number;
  setBorderTopRightRadius: Dispatch<SetStateAction<number>>;
  borderBottomLeftRadius: number;
  setBorderBottomLeftRadius: Dispatch<SetStateAction<number>>;
  borderBottomRightRadius: number;
  setBorderBottomRightRadius: Dispatch<SetStateAction<number>>;
  isSetDetailBorderRadius: boolean;
  setIsSetDetailBorderRadius: Dispatch<SetStateAction<boolean>>;
}

export const BorderRadiusOption: FC<Props> = ({
  borderTopLeftRadius,
  setBorderTopLeftRadius,
  borderTopRightRadius,
  setBorderTopRightRadius,
  borderBottomLeftRadius,
  setBorderBottomLeftRadius,
  borderBottomRightRadius,
  setBorderBottomRightRadius,
  isSetDetailBorderRadius,
  setIsSetDetailBorderRadius
}) => {
  const setBorderRadius = (px: number) => {
    setBorderTopLeftRadius(px);
    setBorderTopRightRadius(px);
    setBorderBottomLeftRadius(px);
    setBorderBottomRightRadius(px);
  };

  return (
    <>
      <Option.Title>모서리 각 설정</Option.Title>
      <Option.Item>
        <RequireLabel
          htmlFor={
            isSetDetailBorderRadius
              ? "setBorderTopLeftRadius"
              : "setBorderRadius"
          }
        >
          {isSetDetailBorderRadius ? "Top-Left" : "모서리 각"}
        </RequireLabel>
        <CountingInput
          id={
            isSetDetailBorderRadius
              ? "setBorderTopLeftRadius"
              : "setBorderRadius"
          }
          ariaLabel={
            isSetDetailBorderRadius ? "border-top-left-radius" : "border-radius"
          }
          count={borderTopLeftRadius}
          setCount={
            isSetDetailBorderRadius ? setBorderTopLeftRadius : setBorderRadius
          }
          limit={100}
          showIcon={true}
          showFeedback={true}
          numberType={CountNumberType.INTEGER}
          unit="px"
        />
        <WithLabel id="setDetailBorderRadius" label="디테일 설정">
          <Switch
            id="setDetailBorderRadius"
            width={40}
            checked={isSetDetailBorderRadius}
            setChecked={setIsSetDetailBorderRadius}
          />
        </WithLabel>
      </Option.Item>
      {isSetDetailBorderRadius && (
        <>
          <Option.Item>
            <RequireLabel htmlFor="setBorderTopRightRadius">
              Top-Right
            </RequireLabel>
            <CountingInput
              id="setBorderTopRightRadius"
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
          <Option.Item>
            <RequireLabel htmlFor="setBorderBottomLeftRadius">
              Bottom-Left
            </RequireLabel>
            <CountingInput
              id="setBorderBottomLeftRadius"
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
          <Option.Item>
            <RequireLabel htmlFor="setBorderBottomRightRadius">
              Bottom-Right
            </RequireLabel>
            <CountingInput
              id="setBorderBottomRightRadius"
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
