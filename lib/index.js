"use strict";
/*
    Action, AnyAction, and Reducer are from the Redux Library
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReducer = void 0;
exports.createReducer = function (initialState, fnMap) { return function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    var handler = fnMap[type];
    return handler ? handler(state, payload) : state;
}; };
