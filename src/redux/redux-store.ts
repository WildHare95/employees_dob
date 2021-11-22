import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import thunkMiddleware from "redux-thunk"
import dataState from "./employees-reducer"

const reducers = combineReducers({
    dataState,
})

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunkMiddleware))
)

export default store
