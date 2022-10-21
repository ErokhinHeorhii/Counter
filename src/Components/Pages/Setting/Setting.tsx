import React, { ChangeEvent } from 'react';
import SuperButton from '../../c2-SuperButton/SuperButton';
import s from "./Setting.module.css"
import { NavLink } from 'react-router-dom';
import { EnumForRoutes } from '../Pages';

type SettingType = {
  onClickHandler: () => void
  onChangeHandlerForMin: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeHandlerForMax: (e: ChangeEvent<HTMLInputElement>) => void
  maxValue: number
  minValue: number
}

const Setting = (props: SettingType) => {
  const { onChangeHandlerForMin,
    onChangeHandlerForMax,
    onClickHandler,
    maxValue,
    minValue } = props

  let finalyClass;

  if (maxValue < minValue || minValue < 0 || maxValue === minValue) {
    finalyClass = s.input + "  " + s.error
  } else {
    finalyClass = s.input
  }

  return (<>
    <div className={s.Wrapper}>
      <div>
        <label> Max Value:
          <input value={maxValue.toString()} onChange={onChangeHandlerForMax}
            className={finalyClass} type="number" ></input>
        </label>
      </div>
      <div>
        <label> Min Value:
          <input value={minValue.toString()} onChange={onChangeHandlerForMin}
            className={finalyClass} type="number" ></input>
        </label>
      </div>
    </div>
    <div className={s.WrapperButton}>
      <NavLink className="navLink" to={EnumForRoutes.COUNTER} >
        <SuperButton onClick={onClickHandler} title={"set"}
          disabled={maxValue < minValue || minValue < 0 || maxValue === minValue} />
      </NavLink>
    </div>
  </>
  )
}
export default Setting