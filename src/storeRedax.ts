import { CounterReducer } from "./Redax/CounterReducer";
import { SettingReducer } from "./Redax/SettingReducer";
import { combineReducers, legacy_createStore } from "redux";


const rootReduser = combineReducers({
  value: SettingReducer,
  counter: CounterReducer,
});


export const store = legacy_createStore(rootReduser);
export type AppRootStateType =ReturnType<typeof rootReduser>



// @ts-ignore
window.store = store;