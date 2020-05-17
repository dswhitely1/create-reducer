# Create Reducer Utility

## Install
```shell script
npm i -S create-a-reducer
```

## Usage
```sh
import { createReducer } from 'create-a-reducer';
```

## Example
```js
import { createReducer } from "create-a-reducer";

const initialState = {
    isLoading: false,
    errors: null
}

const sampleReducer = (state, payload) => ({...state, isLoading: true, errors: null})

export default createReducer(initialState, {
    ["SAMPLE_ACTION_TYPE"]: sampleReducer
})
```

