import type { FC, ReactNode } from "react";
import { useCallback } from "react";

import type { CoreSetState } from "../../types/core";

interface InjectUseStateObjectArrayProps {
  children: (activeOrderMode: any) => ReactNode;
  index: number;
  setArray: CoreSetState<Array<Record<any, any>>>;
}

export const InjectUseStateObjectArray: FC<InjectUseStateObjectArrayProps> = ({
  children,
  index,
  setArray
}) => {
  const updateItem = useCallback(
    (option: Record<any, any>) => {
      setArray(prevArray =>
        prevArray.map((obj, _index) => {
          if (index === _index) {
            return {
              ...obj,
              ...option
            };
          }

          return obj;
        })
      );
    },
    [index, setArray]
  );

  return <>{children(updateItem)}</>;
};
