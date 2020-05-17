type State = any
type FunctionMap = {
    [key: string]: (state: State, payload: any) => void
}
type Action = {
    type: string
    payload: any
}

type CreateReducer<S = State, F = FunctionMap> = (initialState: S, fnMap: F) => (state: S, action: Action) => S

export const createReducer:CreateReducer = (initialState, fnMap) => (state = initialState, {type, payload}) => {
    const handler = fnMap[type]
    return handler ? handler(state, payload) : state;
}