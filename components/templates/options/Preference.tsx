import type { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type { ISelectOption } from "../../../interfaces/select";
import * as Grid from "../../partial/Grid";
import { RequireLabel } from "../../RequireLabel";
import { CustomSelect } from "../../CustomSelect";
import { langOptions } from "../../options/Template";
import { WithLabel } from "../../WithLabel";
import { Checkbox } from "../../Checkbox";

interface Props extends IGridOption {
  lang?: ISelectOption;
  setLang?: Dispatch<SetStateAction<ISelectOption>>;
  html?: boolean;
  setHtml?: Dispatch<SetStateAction<boolean>>;
}

export const PreferenceOption: FC<Props> = ({
  span,
  lang,
  setLang,
  html,
  setHtml
}) => {
  const isShowLang = lang && setLang;

  const isShowHtml = typeof html === "boolean" && setHtml;

  const handleChangeHtml = (evt: ChangeEvent<HTMLInputElement>) => {
    setHtml?.(evt.target.checked);
  };

  return (
    <>
      {isShowLang && (
        <Grid.Column span={span}>
          <RequireLabel htmlFor="setLang">언어</RequireLabel>
          <CustomSelect
            activeOption={lang}
            setOption={setLang!}
            options={langOptions}
          />
          {isShowHtml && (
            <WithLabel id="setHtml" label="HTML 템플릿 추가">
              <Checkbox
                id="setHtml"
                checked={html}
                onChange={handleChangeHtml}
              />
            </WithLabel>
          )}
        </Grid.Column>
      )}
    </>
  );
};
