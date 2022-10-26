import { useReducer, useContext, createContext, Dispatch } from "react";

import { CoreProps } from "../interfaces/core";
import type { Action } from "./action";
import { AppState, initialState, reducer } from "./reducer";

const StateContext = createContext<AppState | null>(null);

const DispatchContext = createContext<Dispatch<Action> | null>(null);

interface ContextProps extends CoreProps {
  context?: AppState;
}

export function ContextProvider({ children }: ContextProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export function useSelector() {
  const state = useContext(StateContext);

  if (!state) {
    throw new Error("Provider is not defined");
  }

  return state;
}

export function useDispatch() {
  const dispatch = useContext(DispatchContext);

  if (!dispatch) {
    throw new Error("Provider is not defined");
  }

  return dispatch;
}
