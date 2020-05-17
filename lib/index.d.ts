interface Action<T = any> {
    type: T;
}
interface AnyAction extends Action {
    [extraProps: string]: any;
}
declare type Reducer<S = any, A extends Action = AnyAction> = (state: S | undefined, action: A) => S;
declare type State = any;
declare type FunctionMap = {
    [key: string]: (state: State, payload: any) => void;
};
declare type CreateReducer<S = State, F = FunctionMap> = (initialState: S, fnMap: F) => Reducer;
export declare const createReducer: CreateReducer;
export {};
