import type { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

import * as Grid from "./Grid";
import { RequireLabel } from "../RequireLabel";
import { CustomSelect } from "../CustomSelect";
import type { SelectOption } from "../../interfaces/select";
import { langOptions } from "../options/Template";
import { WithLabel } from "../WithLabel";
import { Checkbox } from "../Checkbox";
import type { GridCoreProps } from "../../interfaces/grid";

interface Props extends GridCoreProps {
  lang?: SelectOption;
  setLang?: Dispatch<SetStateAction<SelectOption>>;
  html?: boolean;
  setHtml?: Dispatch<SetStateAction<boolean>>;
}

export const PreferenceOption: FC<Props> = ({
  lang,
  setLang,
  html,
  setHtml,
  span
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
