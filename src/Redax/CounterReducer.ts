import { loadState } from "../LocalStorage";

type AddCountACType = ReturnType<typeof addCountAC>;
type ResetCountACType = ReturnType<typeof resetCountAC>;
type addMinCountACType = ReturnType<typeof addMinCountAC>;

export type StateForCounterType = {
  counter: number;
};
const initialState: StateForCounterType = { counter: loadState()["minValue"] ? loadState()["minValue"] : 0 };

type ActionType = AddCountACType | ResetCountACType | addMinCountACType;
export const CounterReducer = (
  state: StateForCounterType = initialState,
  action: ActionType
): StateForCounterType =>   {
  switch (action.type) {
    case "ADD-COUNT": {
      if (state.counter < action.payload.maxCount) {
        return { ...state, counter: state.counter + 1 };
      } else return state;
    }
    case "ADD-MINCOUNT": {
      return { ...state, counter: (state.counter = action.payload.startValue) };
    }
    case "RESET-COUNT": {
      return { ...state, counter: (state.counter = action.payload.startValue) };
    }
    default:
      return state;
  }
};

export const addCountAC = (maxCount: number) => {
  return {
    type: "ADD-COUNT",
    payload: {
      maxCount: maxCount,
    },
  } as const;
};

export const resetCountAC = (startValue: number) => {
  return {
    type: "RESET-COUNT",
    payload: {
      startValue: startValue,
    },
  } as const;
};

export const addMinCountAC = (startValue: number) => {
  return {
    type: "ADD-MINCOUNT",
    payload: {
      startValue: startValue,
    },
  } as const;
};
