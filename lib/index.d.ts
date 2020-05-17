declare type State = any;
declare type FunctionMap = {
    [key: string]: (state: State, payload: any) => void;
};
declare type Action = {
    type: string;
    payload: any;
};
declare type CreateReducer<S = State, F = FunctionMap> = (initialState: S, fnMap: F) => (state: S, action: Action) => S;
export declare const createReducer: CreateReducer;
export {};
