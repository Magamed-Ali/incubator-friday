import {applyMiddleware, combineReducers, legacy_createStore } from "redux"
import thunk from "redux-thunk";
import {loginReducer} from "../reducer/loginReducer";
import { profileReducer } from "../reducer/profileReducer";
import {errorReducer} from "../reducer/errorReducer";


const rootReducer = combineReducers({
    loginReducer,
    errorReducer,
    profileReducer
        })

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type StateType = ReturnType<typeof rootReducer>