import type { ChangeEvent, FC } from "react";
import { useState, useEffect, useCallback } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type { IRgbOption } from "../../../interfaces/option";
import * as Grid from "../../partial/Grid";
import { hexToRgb } from "../../../lib/calc/rgb";
import { RequireLabel } from "../../RequireLabel";
import { DefaultInput } from "../../Input";
import { FeedbackInput } from "../../Input";

interface Props extends IGridOption, IRgbOption {
  id: string;
}

export const ColorOption: FC<Props> = ({ id, span, hex, setHex }) => {
  // 유효한 색상 여부
  const [isColor, setIsColor] = useState(true);
  // 직접 입력 hex
  const [directInputHex, setDirectInputHex] = useState(hex);

  const validate = useCallback(
    (_hex: string) => {
      const rgb = hexToRgb(_hex);
      if (rgb === null) {
        setIsColor(false);
      } else {
        setIsColor(true);
        setHex(_hex);
        setDirectInputHex(_hex);
      }
    },
    [setHex]
  );

  const handleChangeColor = (evt: ChangeEvent<HTMLInputElement>) => {
    const nextHex = evt.target.value;

    validate(nextHex);
  };

  useEffect(() => {
    validate(directInputHex);
  }, [directInputHex, validate]);

  return (
    <>
      <Grid.Column span={span}>
        <RequireLabel htmlFor={`setHex${id}`}>색상 선택</RequireLabel>
        <DefaultInput
          type="color"
          id={`setHex${id}`}
          value={hex}
          onChange={handleChangeColor}
        />
      </Grid.Column>
      <Grid.Column span={span}>
        <RequireLabel htmlFor={`setInputHex${id}`}>색상 입력</RequireLabel>
        <FeedbackInput
          id={`setInputHex${id}`}
          value={directInputHex}
          setValue={setDirectInputHex}
          condition={isColor}
          invalidComment={"존재하지 않는 색상입니다."}
        />
      </Grid.Column>
    </>
  );
};
