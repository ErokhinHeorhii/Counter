import { StateForSettingType } from "./Redax/SettingReducer";

export const loadState = () => {
  try {
    const valueFromLS = localStorage.getItem("value");
    if (valueFromLS === null) {
      return undefined;
    }
    return JSON.parse(valueFromLS);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (value:StateForSettingType) => {
  try {
    localStorage.setItem("value", JSON.stringify(value));
  } catch {
    console.log("error");
  }
};
