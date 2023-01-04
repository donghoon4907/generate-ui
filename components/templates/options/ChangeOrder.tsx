import type { FC, ReactNode } from "react";
import { useState } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import * as Grid from "../../partial/Grid";
import { WarningButton } from "../../Button";

interface Props extends IGridOption {
  children: (activeOrderMode: boolean) => ReactNode;
}

export const ChangeOrderOption: FC<Props> = ({ children, span }) => {
  // 순서 변경 활성화 여부
  const [activeOrderMode, setActiveOrderMode] = useState(false);

  const handleToggleOrderMode = () => {
    setActiveOrderMode(!activeOrderMode);
  };

  return (
    <>
      <Grid.BorderColumn span={span}>
        <WarningButton type="button" onClick={handleToggleOrderMode}>
          순서 변경 {activeOrderMode && "종료"}
        </WarningButton>
      </Grid.BorderColumn>
      {children(activeOrderMode)}
    </>
  );
};
