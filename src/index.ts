/*
    Action, AnyAction, and Reducer are from the Redux Library
 */

interface Action<T = any> {
  type: T;
}

interface AnyAction extends Action {
  [extraProps: string]: any;
}

type Reducer<S = any, A extends Action = AnyAction> = (
  state: S | undefined,
  action: A
) => S;

type State = any;
type FunctionMap = {
  [key: string]: (state: State, payload: any) => void;
};

type CreateReducer<S = State, F = FunctionMap> = (
  initialState: S,
  fnMap: F
) => Reducer;

export const createReducer: CreateReducer = (initialState, fnMap) => (
  state = initialState,
  { type, payload }
) => {
  const handler = fnMap[type];
  return handler ? handler(state, payload) : state;
};
