import { loadState } from "../LocalStorage";

type addMaxValueACType = ReturnType<typeof addMaxValueAC>;
type addMinValueACType = ReturnType<typeof addMinValueAC>;

export type StateForSettingType = {
  maxValue: number;
  minValue: number;
};
// console.log("LS", loadState()["maxValue"]);
let initialState: StateForSettingType = {
  maxValue: loadState()["maxValue"] ? loadState()["maxValue"] : 5,
  minValue: loadState()["minValue"] ? loadState()["minValue"] : 0,
};

type ActionType = addMaxValueACType | addMinValueACType;
export const SettingReducer = (
  state: StateForSettingType = initialState,
  action: ActionType
): StateForSettingType => {
  switch (action.type) {
    case "ADD-MAXVALUE": {
      return { ...state, maxValue: action.payload.maxValue };
    }
    case "ADD-MINVALUE": {
      return { ...state, minValue: action.payload.minValue };
    }
    default:
      return state;
  }
};

export const addMaxValueAC = (maxValue: number) => {
  return {
    type: "ADD-MAXVALUE",
    payload: {
      maxValue: maxValue,
    },
  } as const;
};

export const addMinValueAC = (minValue: number) => {
  return {
    type: "ADD-MINVALUE",
    payload: {
      minValue: minValue,
    },
  } as const;
};
